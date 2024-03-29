"use strict";

exports.techSupportService = async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successfully called tech support service",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
