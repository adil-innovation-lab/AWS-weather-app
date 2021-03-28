const AWS = require('aws-sdk');
import axios from "axios";

// Connects to DynamoDB Instance
const DocumentClient = new AWS.DynamoDB.DocumentClient();

async function getCurrent(zipcode: String) {
    try{
        // code to get current weather, and store in DynamoDB
            // get weather using zipcode
            let result: any;
            // axios call to weather api
            const getweather = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${"ceb639c0aa8d427b90c203617212703"}&q=${zipcode}&aqi=no`)
            .then( (response) => {
            // console.log("weather", response.data);
            result = response.data
        });
        
        // Checking if there's valid data from api call
        if(result && result.current.temp_f != undefined ){
            // Get today's date
            let today: any = new Date();
            // Get today's day only
            let dd = String(today.getDate()).padStart(2, '0');
            // Get today's month only (January is 0!)
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            // Get today's year only
            let yyyy = today.getFullYear();
            // Reassinging the formatted date to today variable
            today = mm + '/' + dd + '/' + yyyy;
            
            // params object for DynamoDB
            const params = {
                TableName: process.env.dynamoDBTable,
                // zipcode as unique id in the DynamoDB table
                Key: { id: `${zipcode}` },
                ExpressionAttributeNames: { "#date": `${today.toString()}` },
                ExpressionAttributeValues: { ":date": `${result.current.temp_f }` },
                UpdateExpression: "set #date = :date",
                // ReturnValues: "UPDATED_NEW"
            };

            // Adding the date and temp to the DynamoDB table
            const weather = await DocumentClient.update(params).promise();

            // return the weather
            return `${result.current.temp_f} °F`;
        }
        // if the data is not present
        else {
            return `The current weather information is not availabe for ${result.location.name}, ${zipcode}`
        }
    } catch (err) {
        console.error("Error, err");
        return `${err.response.data.error.message}`;
        }
}

export default getCurrent;