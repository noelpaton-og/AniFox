const axios = require("axios");

exports.handler = async (event) => {
  const { id } = event.queryStringParameters || {};

  if (!id) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Missing 'id' parameter" }),
    };
  }

  const apiUrl = `https://api.consumet.org/anime/animepahe/info/${id}`;

  try {
    const response = await axios.get(apiUrl);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: error.response?.data || error.message || "Internal Server Error",
      }),
    };
  }
};
