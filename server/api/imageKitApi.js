require("dotenv").config();
const axios = require("axios");

const imagekitApi = axios.create({
  baseURL: "https://upload.imagekit.io/api/v1",
  headers: {
    Authorization: process.env.IMAGEKIT_AUTH,
  },
});

module.exports = imagekitApi;
