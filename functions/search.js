const axios = require("axios");

exports.handler = async (event) => {
  try {
    const query = event.queryStringParameters?.query;
    const page = event.queryStringParameters?.page || 1;

    if (!query) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing 'query' parameter" }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

    const apiUrl = `https://api.consumet.org/anime/animefox/${encodeURIComponent(query)}?page=${page}`;
    const response = await axios.get(apiUrl);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Internal Server Error" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
