"use strict";
const axios = require("axios");

exports.handler = async () => {
  try {
    console.log("Entering handler function");
    const response = await axios.get("https://api.github.com/users");
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
