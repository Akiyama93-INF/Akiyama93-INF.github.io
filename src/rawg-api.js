/**
 * RAWG API Integration Module
 * Provides functions to fetch game data, screenshots, and metadata from RAWG.io
 * 
 * Free tier: 20,000 requests/month
 * Documentation: https://api.rawg.io/docs/
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const RAWG_CONFIG = {
    baseUrl: 'https://api.rawg.io/api',
    apiKey: '', // Will be set by user
    cache: new Map(),
    cacheExpiry: 1000 * 60 * 60 * 24, // 24 hours
};

/**
 * Set the RAWG API key
 * @param {string} apiKey - Your RAWG API key from https://rawg.io/login/?forward=developer
 */
function setRAWGApiKey(apiKey) {
    RAWG_CONFIG.apiKey = apiKey;
    localStorage.setItem('rawg-api-key', apiKey);
    console.log('✅ RAWG API key configured');
}

/**
 * Load API key from localStorage
 */
function loadRAWGApiKey() {
    const savedKey = localStorage.getItem('rawg-api-key');
    if (savedKey) {
        RAWG_CONFIG.apiKey = savedKey;
        console.log('✅ RAWG API key loaded from storage');
    }
}

// ============================================================================
// CACHE MANAGEMENT
// ============================================================================

/**
 * Get cached data if available and not expired
 */
function getCachedData(key) {
    const cached = RAWG_CONFIG.cache.get(key);
    if (!cached) return null;

    const now = Date.now();
    if (now - cached.timestamp > RAWG_CONFIG.cacheExpiry) {
        RAWG_CONFIG.cache.delete(key);
        return null;
    }

    return cached.data;
}

/**
 * Cache data with timestamp
 */
function setCachedData(key, data) {
    RAWG_CONFIG.cache.set(key, {
        data,
        timestamp: Date.now()
    });
}

// ============================================================================
// API REQUEST HELPERS
// ============================================================================

/**
 * Make a request to RAWG API
 * @param {string} endpoint - API endpoint (e.g., '/games')
 * @param {object} params - Query parameters
 * @returns {Promise<object>} API response data
 */
async function rawgRequest(endpoint, params = {}) {
    if (!RAWG_CONFIG.apiKey) {
        console.warn('⚠️ RAWG API key not set. Call setRAWGApiKey() first.');
        return null;
    }

    // Build URL with params
    const url = new URL(`${RAWG_CONFIG.baseUrl}${endpoint}`);
    url.searchParams.append('key', RAWG_CONFIG.apiKey);

    Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
            url.searchParams.append(key, params[key]);
        }
    });

    // Check cache
    const cacheKey = url.toString();
    const cached = getCachedData(cacheKey);
    if (cached) {
        console.log('📦 Using cached data for:', endpoint);
        return cached;
    }

    try {
        console.log('🌐 Fetching from RAWG:', endpoint);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`RAWG API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setCachedData(cacheKey, data);
        return data;

    } catch (error) {
        console.error('❌ RAWG API request failed:', error);
        return null;
    }
}

// ============================================================================
// GAME SEARCH & DETAILS
// ============================================================================

/**
 * Search for games by name
 * @param {string} query - Game name to search
 * @param {number} pageSize - Number of results (default: 10)
 * @returns {Promise<Array>} Array of game objects
 */
async function searchGames(query, pageSize = 10) {
    const data = await rawgRequest('/games', {
        search: query,
        page_size: pageSize
    });

    return data?.results || [];
}

/**
 * Get detailed game information by ID
 * @param {number} gameId - RAWG game ID
 * @returns {Promise<object>} Game details
 */
async function getGameDetails(gameId) {
    return await rawgRequest(`/games/${gameId}`);
}

/**
 * Find game by exact or close name match
 * @param {string} gameName - Name of the game
 * @returns {Promise<object|null>} Best matching game or null
 */
async function findGameByName(gameName) {
    const results = await searchGames(gameName, 5);

    if (!results || results.length === 0) {
        console.log(`❌ No results found for: ${gameName}`);
        return null;
    }

    // Try to find exact match first
    const exactMatch = results.find(game =>
        game.name.toLowerCase() === gameName.toLowerCase()
    );

    if (exactMatch) {
        console.log(`✅ Exact match found: ${exactMatch.name}`);
        return exactMatch;
    }

    // Return best match (first result)
    console.log(`✅ Best match found: ${results[0].name} (searched: ${gameName})`);
    return results[0];
}

// ============================================================================
// SCREENSHOTS & MEDIA
// ============================================================================

/**
 * Get screenshots for a game
 * @param {number} gameId - RAWG game ID
 * @param {number} count - Number of screenshots to fetch
 * @returns {Promise<Array>} Array of screenshot objects
 */
async function getGameScreenshots(gameId, count = 6) {
    const data = await rawgRequest(`/games/${gameId}/screenshots`, {
        page_size: count
    });

    return data?.results || [];
}

/**
 * Get game trailers/videos
 * @param {number} gameId - RAWG game ID
 * @returns {Promise<Array>} Array of video objects
 */
async function getGameTrailers(gameId) {
    const data = await rawgRequest(`/games/${gameId}/movies`);
    return data?.results || [];
}

// ============================================================================
// GAME SERIES & DLC
// ============================================================================

/**
 * Get games in the same series
 * @param {number} gameId - RAWG game ID
 * @returns {Promise<Array>} Array of related games
 */
async function getGameSeries(gameId) {
    const data = await rawgRequest(`/games/${gameId}/game-series`);
    return data?.results || [];
}

/**
 * Get DLC and additions for a game
 * @param {number} gameId - RAWG game ID
 * @returns {Promise<Array>} Array of DLC/additions
 */
async function getGameDLC(gameId) {
    const data = await rawgRequest(`/games/${gameId}/additions`);
    return data?.results || [];
}

// ============================================================================
// ENRICH EXISTING GAME DATA
// ============================================================================

/**
 * Enrich a game object with RAWG data
 * @param {object} game - Your existing game object
 * @returns {Promise<object>} Enriched game object
 */
async function enrichGameData(game) {
    try {
        // Find game on RAWG
        const rawgGame = await findGameByName(game.title);

        if (!rawgGame) {
            console.log(`⚠️ Could not enrich: ${game.title}`);
            return game;
        }

        // Get full details
        const details = await getGameDetails(rawgGame.id);

        // Get screenshots
        const screenshots = await getGameScreenshots(rawgGame.id, 6);

        // Create enriched game object
        const enriched = {
            ...game,
            rawg: {
                id: rawgGame.id,
                slug: rawgGame.slug,
                rating: rawgGame.rating,
                ratingsCount: rawgGame.ratings_count,
                metacritic: rawgGame.metacritic,
                playtime: rawgGame.playtime,
                esrbRating: rawgGame.esrb_rating?.name,
                screenshots: screenshots.map(s => ({
                    id: s.id,
                    image: s.image,
                    thumbnail: s.image.replace('/media/', '/media/resize/640/-/')
                })),
                platforms: details?.platforms?.map(p => ({
                    name: p.platform.name,
                    requirements: p.requirements || null
                })) || [],
                stores: rawgGame.stores?.map(s => s.store.name) || [],
                tags: rawgGame.tags?.slice(0, 10).map(t => t.name) || [],
                website: details?.website,
                reddit: details?.reddit_url,
                description: details?.description_raw,
                clip: details?.clip,
            }
        };

        console.log(`✅ Enriched: ${game.title}`);
        return enriched;

    } catch (error) {
        console.error(`❌ Error enriching ${game.title}:`, error);
        return game;
    }
}

/**
 * Enrich multiple games in batch
 * @param {Array} games - Array of game objects
 * @param {Function} onProgress - Progress callback (current, total)
 * @returns {Promise<Array>} Array of enriched games
 */
async function enrichGamesInBatch(games, onProgress = null) {
    const enriched = [];
    const total = games.length;

    console.log(`🚀 Starting batch enrichment of ${total} games...`);

    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        const enrichedGame = await enrichGameData(game);
        enriched.push(enrichedGame);

        if (onProgress) {
            onProgress(i + 1, total);
        }

        // Rate limiting: wait 100ms between requests
        if (i < games.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    console.log(`✅ Batch enrichment complete: ${enriched.length}/${total} games`);
    return enriched;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get high-quality cover image URL
 * @param {object} rawgGame - RAWG game object
 * @param {string} size - Image size: 'original', 'large', 'medium', 'small'
 * @returns {string} Image URL
 */
function getCoverImage(rawgGame, size = 'large') {
    if (!rawgGame?.background_image) return null;

    const sizeMap = {
        original: rawgGame.background_image,
        large: rawgGame.background_image.replace('/media/', '/media/resize/1280/-/'),
        medium: rawgGame.background_image.replace('/media/', '/media/resize/640/-/'),
        small: rawgGame.background_image.replace('/media/', '/media/resize/420/-/')
    };

    return sizeMap[size] || sizeMap.large;
}

/**
 * Clear all cached data
 */
function clearRAWGCache() {
    RAWG_CONFIG.cache.clear();
    console.log('🗑️ RAWG cache cleared');
}

/**
 * Get cache statistics
 */
function getRAWGCacheStats() {
    return {
        entries: RAWG_CONFIG.cache.size,
        expiryHours: RAWG_CONFIG.cacheExpiry / (1000 * 60 * 60)
    };
}

// ============================================================================
// EXPORTS
// ============================================================================

// Auto-load API key on module load
loadRAWGApiKey();
