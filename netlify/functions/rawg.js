// Usamos el fetch nativo de Node.js (disponible en Netlify por defecto)
exports.handler = async function(event, context) {
    const { endpoint, ...params } = event.queryStringParameters;

    if (!endpoint) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Endpoint parameter is required' })
        };
    }

    const API_KEY = process.env.RAWG_API_KEY;

    if (!API_KEY) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Falta la API Key en Netlify' })
        };
    }

    const searchParams = new URLSearchParams({
        key: API_KEY,
        ...params
    });

    const targetUrl = `https://api.rawg.io/api${endpoint}?${searchParams.toString()}`;

    try {
        const response = await fetch(targetUrl);
        const data = await response.json();
        
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*", // Evita problemas de permisos
            },
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al conectar con RAWG' })
        };
    }
};
