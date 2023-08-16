require('dotenv').config();
const express = require('express');
const axios = require('axios');
const morgan = require('morgan')

const app = express();
const PORT = 3000;

// Replace 'EXTERNAL_API_URL' with the URL of the 3rd party API you want to proxy
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

// Enable JSON parsing for incoming requests
app.use(express.json());

// Use morgan for logging
app.use(morgan('combined'));

// Proxy endpoint
app.get('/api/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`;
    const response = await axios.get(url);

    // Check if the response from the external API is successful
    if (response.status === 200) {
      res.json(response.data);
    } else {
      res.status(response.status).json({ error: 'External API responded with an error' });
    }
  } catch (error) {
    console.error('Error:', error.message);
  
    // Handle different types of errors with more specific messages
    if (error.response) {
      console.error('External API Error:', error.response.data);
      res.status(error.response.status).json({ error: 'External API request failed' });
    } else if (error.request) {
      console.error('No Response Error:', error.request);
      res.status(500).json({ error: 'No response received from external API' });
    } else {
      console.error('Server Error:', error);
      res.status(500).json({ error: 'Something went wrong on the server' });
    }
  }  
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
