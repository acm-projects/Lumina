import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, ScanCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';

const dynamoDB = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(dynamoDB, {
    marshallOptions: {
        removeUndefinedValues: true,
    }
});

const tableName = 'CelestialData';
const socialURL = new URL('https://nightsky.jpl.nasa.gov/json/events/api/');

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

function buildSocialEvent(event, date) {
    return {
        id: event.event_id,
        eventURL: event.partner_opp_url || 'N/A',
        eventTitle: event.title || 'Untitled Event',
        location: event.location_name || 'Unknown Location',
        address: event.address_street || 'Unknown Address',
        city: event.address_city || 'Unknown City',
        state: event.address_state || 'Unknown State',
        zip: event.address_zip || 'Unknown Zip',
        img: event.image_url || 'N/A',
        date,
    };
}

async function upsertSocialEvent(date, socialEvent) {
    const getParams = {
        TableName: tableName,
        Key: { date },
    };

    const result = await docClient.send(new GetCommand(getParams));

    if (result.Item) {
        const updateParams = {
            TableName: tableName,
            Key: { date },
            UpdateExpression: 'SET #eventType.social = list_append(if_not_exists(#eventType.social, :emptyList), :socialEvent)',
            ExpressionAttributeNames: { '#eventType': 'eventType' },
            ExpressionAttributeValues: {
                ':socialEvent': [socialEvent],
                ':emptyList': [],
            }
        };
        await docClient.send(new UpdateCommand(updateParams));
        console.log(`Event added to existing date: ${date}`);
        return;
    }

    const putParams = {
        TableName: tableName,
        Item: {
            date,
            eventType: {
                celestial: [],
                social: [socialEvent],
            }
        }
    };
    await docClient.send(new PutCommand(putParams));
    console.log(`New date created with event: ${date}`);
}

export const handler = async () => {
    try {
        const scanParams = {
            TableName: tableName,
        };
        const scanResult = await docClient.send(new ScanCommand(scanParams));
        const existingEvents = scanResult.Items || [];

        for (const item of existingEvents) {
            const clearParams = {
                TableName: tableName,
                Key: { date: item.date },
                UpdateExpression: 'SET #eventType.social = :emptyList',
                ExpressionAttributeNames: { '#eventType': 'eventType' },
                ExpressionAttributeValues: { ':emptyList': [] },
            };
            await docClient.send(new UpdateCommand(clearParams));
        }
        console.log('social events have been cleared');

        const response = await fetch(socialURL, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('HTTP error');
        }

        const socialEvents = await response.json();

        for (const event of socialEvents.events) {
            const startDate = event.start_dates[0].substring(0, 10);
            const endDate = event.end_dates[0].substring(0, 10);
            const firstDayEvent = buildSocialEvent(event, startDate);

            await upsertSocialEvent(startDate, firstDayEvent);

            let tempDate = startDate;
            let month = parseInt(startDate.substring(5, 7));
            let cap = monthCap[months[month]];
            let day = parseInt(tempDate.substring(8, 10));
            let year = tempDate.substring(0, 4);

            while (tempDate !== endDate) {
                if (day === cap) {
                    if (month === 12) {
                        month = 1;
                        year = '2025';
                    } else {
                        month++;
                    }
                    day = 1;
                } else {
                    day++;
                }

                tempDate = `${year}-${months[month]}-${days[day]}`;
                const tempEvent = buildSocialEvent(event, tempDate);
                await upsertSocialEvent(tempDate, tempEvent);
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Social events added successfully!' }),
        };
    } catch (error) {
        console.error('Error fetching or storing events:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching or storing events' }),
        };
    }
};
