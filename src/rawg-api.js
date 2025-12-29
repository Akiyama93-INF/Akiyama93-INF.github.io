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
    baseUrl: '/.netlify/functions/rawg', // Points to our Netlify serverless function
    cache: new Map(),
    persistentCache: {}, // Loaded from localStorage
    cacheExpiry: 1000 * 60 * 60 * 24, // 24 hours
    persistentKey: 'gamewiki_rawg_cache'
};

// ============================================================================
// CACHE MANAGEMENT
// ============================================================================

/**
 * Load cache from localStorage
 */
function loadPersistentCache() {
    const saved = localStorage.getItem(RAWG_CONFIG.persistentKey);
    if (saved) {
        try {
            RAWG_CONFIG.persistentCache = JSON.parse(saved);
            console.log('📦 Persistent cache loaded:', Object.keys(RAWG_CONFIG.persistentCache).length, 'items');
        } catch (e) {
            console.error('Failed to load persistent cache:', e);
            RAWG_CONFIG.persistentCache = {};
        }
    }
}

/**
 * Save current persistent cache to localStorage
 */
function savePersistentCache() {
    localStorage.setItem(RAWG_CONFIG.persistentKey, JSON.stringify(RAWG_CONFIG.persistentCache));
}

/**
 * Get cached data if available and not expired
 */
function getCachedData(key) {
    // 1. Check in-memory session cache
    const cached = RAWG_CONFIG.cache.get(key);
    if (cached) {
        const now = Date.now();
        if (now - cached.timestamp < RAWG_CONFIG.cacheExpiry) {
            return cached.data;
        }
        RAWG_CONFIG.cache.delete(key);
    }

    // 2. Check persistent cache
    if (RAWG_CONFIG.persistentCache[key]) {
        return RAWG_CONFIG.persistentCache[key];
    }

    return null;
}

/**
 * Cache data with timestamp
 */
function setCachedData(key, data, persistent = false) {
    // Save to session cache
    RAWG_CONFIG.cache.set(key, {
        data,
        timestamp: Date.now()
    });

    // Save to persistent cache if requested
    if (persistent) {
        RAWG_CONFIG.persistentCache[key] = data;
        savePersistentCache();
    }
}

// ============================================================================
// API REQUEST HELPERS
// ============================================================================

/**
 * Make a request to RAWG API via the Netlify Proxy
 * @param {string} endpoint - API endpoint (e.g., '/games')
 * @param {object} params - Query parameters
 * @param {boolean} persistent - Whether to cache result in localStorage
 * @returns {Promise<object>} API response data
 */
async function rawgRequest(endpoint, params = {}, persistent = false) {
    // Build URL for our local proxy
    const url = new URL(window.location.origin + RAWG_CONFIG.baseUrl);
    url.searchParams.append('endpoint', endpoint);

    // Sort keys to ensure consistent cache keys
    const sortedKeys = Object.keys(params).sort();
    sortedKeys.forEach(key => {
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
        console.log('🌐 Fetching via Proxy:', endpoint);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Proxy error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setCachedData(cacheKey, data, persistent);
        return data;

    } catch (error) {
        console.error('❌ Request failed:', error);
        return null;
    }
}

// ============================================================================
// GAME SEARCH & DETAILS
// ============================================================================

/**
 * Get popular games (Discovery)
 * @param {number} page - Page number
 * @param {number} pageSize - Games per page
 * @returns {Promise<object>} RAWG response with games array
 */
async function fetchDiscoverGames(page = 1, pageSize = 20) {
    // Fetch popular games from the last 10 years
    const year = new Date().getFullYear();
    const data = await rawgRequest('/games', {
        page: page,
        page_size: pageSize,
        ordering: '-added',
        dates: `2010-01-01,${year}-12-31`
    }, true); // Persistent cache for lists

    return data;
}

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
 * @param {number|string} gameId - RAWG game ID or slug
 * @returns {Promise<object>} Game details
 */
async function getGameDetails(gameId) {
    return await rawgRequest(`/games/${gameId}`, {}, true); // Cache details personally
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
    }, true);

    return data?.results || [];
}

/**
 * Get game trailers/videos
 * @param {number} gameId - RAWG game ID
 * @returns {Promise<Array>} Array of video objects
 */
async function getGameTrailers(gameId) {
    const data = await rawgRequest(`/games/${gameId}/movies`, {}, true);
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
    const data = await rawgRequest(`/games/${gameId}/game-series`, {}, true);
    return data?.results || [];
}

/**
 * Get DLC and additions for a game
 * @param {number} gameId - RAWG game ID
 * @returns {Promise<Array>} Array of DLC/additions
 */
async function getGameDLC(gameId) {
    const data = await rawgRequest(`/games/${gameId}/additions`, {}, true);
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
        let rawgId = game.rawgId;
        let slug = null;

        // If we don't have a specific ID, we search by name
        if (!rawgId) {
            const rawgGame = await findGameByName(game.title);
            if (!rawgGame) {
                console.log(`⚠️ Could not enrich: ${game.title}`);
                return game;
            }
            rawgId = rawgGame.id;
            slug = rawgGame.slug;
        }

        // Get full details using the guaranteed ID
        const details = await getGameDetails(rawgId);
        if (!details) return game;

        // Get screenshots
        const screenshots = await getGameScreenshots(rawgId, 6);

        // Create enriched game object
        const enriched = {
            ...game,
            rawg: {
                id: rawgId,
                slug: slug || details?.slug,
                rating: details?.rating,
                ratingsCount: details?.ratings_count,
                metacritic: details?.metacritic,
                playtime: details?.playtime,
                esrbRating: details?.esrb_rating?.name,
                screenshots: screenshots.map(s => ({
                    id: s.id,
                    image: s.image,
                    thumbnail: s.image.replace('/media/', '/media/resize/640/-/')
                })),
                platforms: details?.platforms?.map(p => ({
                    name: p.platform.name,
                    requirements: p.requirements || null
                })) || [],
                stores: details.stores?.map(s => s.store.name) || [],
                tags: details.tags?.slice(0, 5).map(t => t.name) || [],
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
    RAWG_CONFIG.persistentCache = {};
    localStorage.removeItem(RAWG_CONFIG.persistentKey);
    console.log('🗑️ RAWG cache cleared');
}

/**
 * Get cache statistics
 */
function getRAWGCacheStats() {
    return {
        entries: RAWG_CONFIG.cache.size,
        persistentEntries: Object.keys(RAWG_CONFIG.persistentCache).length,
        expiryHours: RAWG_CONFIG.cacheExpiry / (1000 * 60 * 60)
    };
}

// Initialize cache on load
loadPersistentCache();

// ============================================================================
// EXPORTS
// ============================================================================

// No auto-load needed for proxy
