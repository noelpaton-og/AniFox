const axios = require("axios");

exports.handler = async (event) => {
  const id = event.queryStringParameters.id;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing id parameter" }),
    };
  }

  const url = `https://api.consumet.org/anime/animefox/info?id=${encodeURIComponent(id)}`;

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
