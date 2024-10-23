import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, DeleteCommand, PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import https from 'https';

const dynamodbClient = new DynamoDBClient();
const ddbDocClient = DynamoDBDocumentClient.from(dynamodbClient);

const ASTRONOMY_API_URL = 'https://astronomy-calendar.p.rapidapi.com/events.php?year=2024';
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const TABLE_NAME = 'testTable3';

const convertToISODate = (dateStr) => {
    const [monthStr, day] = dateStr.split(' ');
    const monthMap = {
        January: '01', 
        February: '02', 
        March: '03', 
        April: '04', 
        May: '05',
        June: '06', 
        July: '07', 
        August: '08', 
        September: '09', 
        October: '10',
        November: '11', 
        December: '12'
    };
    const month = monthMap[monthStr];
    const year = new Date().getFullYear(); 
    return `${year}-${month}-${String(day).padStart(2, '0')}`;
};

const fetchCelestialEvents = () => {
    return new Promise((resolve, reject) => {
        https.get(ASTRONOMY_API_URL, {
            headers: {
                'x-rapidapi-host': 'astronomy-calendar.p.rapidapi.com',
                'x-rapidapi-key': RAPIDAPI_KEY
            }
        }, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

export const handler = async () => {
    try {
        const scanParams = {
            TableName: TABLE_NAME
        };
        const scanResult = await ddbDocClient.send(new ScanCommand(scanParams));
        const existingEvents = scanResult.Items || []; 

        const celestialResponse = await fetchCelestialEvents();
        
        const celestialEventsMap = celestialResponse.reduce((acc, event) => {
            const isoDate = convertToISODate(event.date); 
            acc[isoDate] = {
                title: event.title,
                content: event.content,
                image: event.image
            };
            return acc;
        }, {});

        for (const item of existingEvents) {
            const eventDate = item.date;

            if (celestialEventsMap[eventDate]) {
                const deleteParams = {
                    TableName: TABLE_NAME,
                    Key: { date: eventDate }
                };
                await ddbDocClient.send(new DeleteCommand(deleteParams));

                const newEvent = celestialEventsMap[eventDate];

                const putItemParams = {
                    TableName: TABLE_NAME,
                    Item: {
                        date: eventDate,
                        eventType: {
                            celestial: [{
                                title: newEvent.title,
                                content: newEvent.content,
                                image: newEvent.image
                            }],
                            social: [],
                            weather: {}
                        }
                    }
                };
                await ddbDocClient.send(new PutCommand(putItemParams));
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Celestial events successfully updated.' })
        };

    } catch (error) {
        console.error('Error updating celestial events:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to update celestial events.' })
        };
    }
};
