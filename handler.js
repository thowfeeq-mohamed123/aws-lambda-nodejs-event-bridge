"use strict";
const AWS = require("aws-sdk");
const config = require("./config");

const EventBridge = new AWS.EventBridge(config);

module.exports.customerSupport = async (event, context, callback) => {
  console.log("New customer support request received.");
  console.log(event.body);

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
  EventBridge.putEvents(params, (err, data) => {
    let response = null;
    if (err) {
      response = {
        statusCode: 500,
        body: JSON.stringify({
          message: `Unable to send event to event bus. ${err}`,
        }),
      };
    } else {
      const msg = "New event sent to event bus.";
      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: msg,
        }),
      };
    }
    callback(null, response);
  });
};
