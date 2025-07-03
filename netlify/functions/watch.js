const axios = require("axios");

exports.handler = async (event) => {
  const episodeId = event.queryStringParameters.episodeId;

  if (!episodeId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing episodeId parameter" }),
    };
  }

  const url = `https://api.consumet.org/anime/animefox/watch?episodeId=${encodeURIComponent(episodeId)}`;

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
