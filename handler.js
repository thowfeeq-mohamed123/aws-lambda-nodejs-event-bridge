"use strict";
const AWS = require("aws-sdk");
const config = require("./config");
const EventBridge = new AWS.EventBridge();

module.exports.customerSupport = async (event) => {
  console.log("New customer support request received.");
  const params = {
    Entries: [
      {
        Detail: event.body,
        DetailType: "support",
        EventBusName: "FoodDeliveryAppEventBus",
        Source: "handler.customerSupport",
        Time: new Date(),
      },
    ],
  };
  console.log("Sending event to event bus...");
  try {
    const data = await EventBridge.putEvents(params).promise();
    console.log(`Event published: ${JSON.stringify(event.body)}`);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err }),
    };
  }
};
