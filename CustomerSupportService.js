"use strict";

exports.customerSupportService = async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successfully called customer support service",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
