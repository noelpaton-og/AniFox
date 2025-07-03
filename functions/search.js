const axios = require("axios");

exports.handler = async (event) => {
  const query = event.queryStringParameters.query;
  const page = event.queryStringParameters.page || 1;

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing query parameter" }),
    };
  }

  const url = `https://api.consumet.org/anime/animefox/${encodeURIComponent(query)}?page=${page}`;

  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err.message }),
    };
  }
};
