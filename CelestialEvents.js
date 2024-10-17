import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, BatchWriteCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import https from 'https';

const dynamoDB = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoDB);
const tableName = 'testTable';

function changeDateFormat(eventDate) {
    const months = {
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

    const [month, day] = eventDate.split(' ');
    const newMonth = months[month];
    const newDay = String(day).padStart(2, '0');
    
    return '2024-' + newMonth + '-' + newDay;
}

function httpsGet(url, headers) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: headers
        };

        https.get(url, options, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                resolve(JSON.parse(data));
            });

        }).on('error', (err) => {
            reject(err);
        });
    });
}


async function checkAndAddEvent(newDate, newEvent) {
    
    const getParams = {
        TableName: tableName,
        Key: { date: newDate }
    };
    
    const result = await docClient.send(new GetCommand(getParams));
    
    if (result.Item) {
        
        const existingEvents = result.Item.events || [];
        existingEvents.push(newEvent);
        
        
        const updateParams = {
            TableName: tableName,
            Key: { date: newDate },
            UpdateExpression: 'SET events = :events',
            ExpressionAttributeValues: {
                ':events': existingEvents
            }
        };
        
        await docClient.send(new UpdateCommand(updateParams));
        console.log(`Event added to existing date: ${newDate}`);
    } else {
        
        const putParams = {
            TableName: tableName,
            Item: {
                date: newDate,
                events: [newEvent]
            }
        };
        
        await docClient.send(new BatchWriteCommand({
            RequestItems: {
                [tableName]: [
                    { PutRequest: { Item: putParams.Item } }
                ]
            }
        }));
        console.log(`New date created with event: ${newDate}`);
    }
}

export const handler = async () => {
    try {
        const apiURL = 'https://astronomy-calendar.p.rapidapi.com/events.php?year=2024';
        const headers = {
            'X-RapidAPI-Host': 'astronomy-calendar.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.CELESTIAL_CALENDAR_APIKEY,
        };

        const response = await httpsGet(apiURL, headers);
        
        console.log('API Response:', JSON.stringify(response, null, 2));

        let events;
        if (Array.isArray(response)) {
            events = response;
        }
        else {
            response = response.events;
        }

        if (!Array.isArray(events)) {
            throw new Error('API response is not an array');
        }

        for (const event of events) {
            const { date, title, content, image } = event;

            const newDate = changeDateFormat(date);

            const newEvent = {
                type: 'celestial',
                name: title,
                description: content,
                image: image
            };

            await checkAndAddEvent(newDate, newEvent);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Celestial events processed successfully!' }),
        };
    } catch (error) {
        console.error('Error fetching or storing events:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching or storing events' }),
        };
    }
};
