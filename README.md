# Proxy Server for External API

This is a simple proxy server that interacts with an external API. It allows you to make requests to the external API through this proxy server, handling errors and responses.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

## Installation

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.

## Usage

1. Run the proxy server using `npm start`.
2. Make requests to the proxy server using the specified endpoints (see [Endpoints](#endpoints)).

## API Key

To use this proxy server, you need to provide your own API key for the external API you want to access. Replace the `OPENWEATHER_API_KEY` in the code with your actual API key.

## Endpoints

- `/api/weather/:city`: Retrieve weather information for a specific city.
  - Method: GET
  - Params: `city` (string, required) - The name of the city.
  - Example: `http://localhost:3000/api/weather/NewYork`

## Error Handling

- If the external API responds with an error, the server will return a JSON response with an error message and status code.
- If there's an issue with the server or network, an appropriate error response will be returned.

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests to improve the project.