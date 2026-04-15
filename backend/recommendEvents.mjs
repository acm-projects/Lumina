import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const dynamoDB = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(dynamoDB, {
    marshallOptions: {
        removeUndefinedValues: true,
    }
});

const tableName = 'CelestialData';
const key = process.env.API_KEY;
const stateName = 'OK';
const cityName = 'Oklahoma City';
const startDate = '2024-10-02';

const monthCap = {
  '01': 31,
  '02': 28,
  '03': 31,
  '04': 30,
  '05': 31,
  '06': 30,
  '07': 31,
  '08': 31,
  '09': 30,
  '10': 31,
  '11': 30,
  '12': 31,
};

const days = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const months = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const geoLocatorURL = new URL('http://api.openweathermap.org/geo/1.0/direct');
geoLocatorURL.searchParams.append('q', cityName);
geoLocatorURL.searchParams.append('appid', key);

const weatherURL = new URL('https://api.openweathermap.org/data/3.0/onecall');
weatherURL.searchParams.append('appid', key);

export const handler = async () => {
  const locationResponse = await fetch(geoLocatorURL, {
    method: 'GET',
  });

  if (!locationResponse.ok) {
    throw new Error('HTTP error');
  }

  const locationData = await locationResponse.json();
  let lat = locationData[0].lat;
  let lon = locationData[0].lon;
  weatherURL.searchParams.append('lat', lat);
  weatherURL.searchParams.append('lon', lon);
  weatherURL.searchParams.append('units', 'imperial');

  const weatherResponse = await fetch(weatherURL, {
    method: 'GET',
  });

  if (!weatherResponse.ok) {
    throw new Error('HTTP error');
  }

  const weatherData = await weatherResponse.json();

  let tempDate = startDate;
  let month = parseInt(tempDate.substring(5, 7));
  let cap = monthCap[months[month]];
  let dateDay = parseInt(tempDate.substring(8, 10));
  let year = parseInt(tempDate.substring(0, 4));

  let recommendedEvents = [];

  for (const day of weatherData.daily) {
    console.log(tempDate);
    const getParams = {
      TableName: tableName,
      Key: { date: tempDate },
    };

    const result = await docClient.send(new GetCommand(getParams));
    console.log(result);

    if (result.Item) {
      if (day.clouds <= 30) {
        for (const event of result.Item.eventType.celestial) {
          let repeat = false;
          for (const recEvent of recommendedEvents) {
            if (recEvent.title === event.title) {
              repeat = true;
            }
          }
          if (!repeat) {
            recommendedEvents.push(event);
            console.log('celestial event rec added');
          }
        }
      }

      for (const event of result.Item.eventType.social) {
        if (event.state === stateName) {
          let repeat = false;
          for (const recEvent of recommendedEvents) {
            if (recEvent.id === event.id) {
              repeat = true;
            }
          }
          if (!repeat) {
            recommendedEvents.push(event);
            console.log('social event rec added');
          }
        }
      }
    }

    if (dateDay === cap) {
      if (month === 12) {
        month = 1;
        year++;
      } else {
        month++;
      }
      cap = monthCap[months[month]];
      dateDay = 1;
    } else {
      dateDay++;
    }

    tempDate = `${year}-${months[month]}-${days[dateDay]}`;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(recommendedEvents),
  };
};
