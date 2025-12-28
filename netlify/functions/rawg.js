const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // 1. Get parameters from query string
    const { endpoint, ...params } = event.queryStringParameters;

    if (!endpoint) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Endpoint parameter is required' })
        };
    }

    // 2. Use the secret API key from Environment Variables (set in Netlify dashboard)
    const API_KEY = process.env.RAWG_API_KEY;

    if (!API_KEY) {
        console.error('RAWG_API_KEY is not configured in Netlify');
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Server configuration error' })
        };
    }

    // 3. Build the RAWG API URL
    const searchParams = new URLSearchParams({
        key: API_KEY,
        ...params
    });

    const targetUrl = `https://api.rawg.io/api${endpoint}?${searchParams.toString()}`;

    try {
        console.log(`Proxying request to RAWG: ${endpoint}`);
        const response = await fetch(targetUrl);

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: `RAWG API error: ${response.statusText}` })
            };
        }

        const data = await response.json();

        // 4. Return the data to the frontend
        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };

    } catch (error) {
        console.error('Proxy Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
