"use strict"

const AWS = require("aws-sdk");

const fetchItems =async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    let items;

    try {
        const results = await dynamoDB.scan({
            TableName: "ItemTable"
        }).promise();

        items = results.items
    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
}

module.exports = {
    handler: fetchItems,
};