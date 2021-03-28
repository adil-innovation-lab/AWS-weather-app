const AWS = require('aws-sdk');

// Connects to DynamoDB Instance
const DocumentClient = new AWS.DynamoDB.DocumentClient();

async function getAll( zipcode: any ) {
    try {
        // params object for DynamoDB
        const params = {
            TableName: process.env.dynamoDBTable,
            Key: { id: zipcode }
        };
        
        // Getting the data from the DynamoDB table using the zipcode
        const weather = await DocumentClient.get(params).promise();
        
        // Format the return type to be an object as per schema
        // checking if there's data in the db
        if(weather.Item){
            // Creating an array to hold the data for all days
            let result = [];
            // Looping through data and creating an object of data for each day and saving into an array
            for (const [key, value] of Object.entries(weather.Item)) {
                const data = {
                    "date": key,
                    "temp": value
                };
                
                result.push(data);
            }
            //  filter out the id (key, value) and get only the date and temperature
            const res = result.filter((obj) => { return obj.date != 'id'; });
        
            return res;
        } else {
            return [{
                "date": "n/a",
                "temp": "n/a"
            }]
        }
    } catch (err) {
        console.error("Error", err);
        return err;
    }
}

export default getAll;