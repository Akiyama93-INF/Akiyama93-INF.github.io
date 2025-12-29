// Vercel Serverless Function Proxy for RAWG API
module.exports = async (req, res) => {
    // 1. Get parameters from query string
    const { endpoint, ...params } = req.query;

    if (!endpoint) {
        return res.status(400).json({ error: 'Endpoint parameter is required' });
    }

    // 2. Use the secret API key from Environment Variables
    const API_KEY = process.env.RAWG_API_KEY;

    if (!API_KEY) {
        console.error('RAWG_API_KEY is not configured in Vercel');
        return res.status(500).json({ error: 'Server configuration error' });
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
            return res.status(response.status).json({ error: `RAWG API error: ${response.statusText}` });
        }

        const data = await response.json();

        // 4. Return the data to the frontend
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.setHeader('Content-Type', 'application/json');

        return res.status(200).json(data);

    } catch (error) {
        console.error('Proxy Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
