require('dotenv').config();

const express = require('express');
const app = express();

// Use your environment variables like this
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

app.get('/', (req, res) => {
  res.send(`Your API key is ${API_KEY}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
