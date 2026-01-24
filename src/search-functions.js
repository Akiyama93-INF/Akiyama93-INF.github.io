// --- Advanced Search Functions ---
function loadSearchHistory() {
    const saved = localStorage.getItem('gamewiki-search-history');
    if (saved) {
        try {
            currentState.searchHistory = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load search history:', e);
        }
    }
}

function saveSearchHistory() {
    localStorage.setItem('gamewiki-search-history', JSON.stringify(currentState.searchHistory));
}

function addToSearchHistory(query) {
    if (!query || query.trim().length < 2) return;

    // Remove duplicates and add to beginning
    currentState.searchHistory = currentState.searchHistory.filter(q => q !== query);
    currentState.searchHistory.unshift(query);

    // Keep only last 10 searches
    currentState.searchHistory = currentState.searchHistory.slice(0, 10);
    saveSearchHistory();
}

function clearSearchHistory() {
    currentState.searchHistory = [];
    saveSearchHistory();
}

function removeFromSearchHistory(query) {
    currentState.searchHistory = currentState.searchHistory.filter(q => q !== query);
    saveSearchHistory();
}

function getUniqueYears() {
    const years = new Set();
    GAMES_DATA.forEach(game => {
        if (game.releaseDate) {
            const year = game.releaseDate.split('-')[0];
            years.add(year);
        }
    });
    return Array.from(years).sort((a, b) => b - a); // Newest first
}

function getUniqueDevelopers() {
    const developers = new Set();
    GAMES_DATA.forEach(game => {
        if (game.developer) {
            developers.add(game.developer);
        }
    });
    return Array.from(developers).sort();
}

function applySearchFilters(games) {
    let filtered = [...games];

    if (currentState.searchFilters.genre) {
        filtered = filtered.filter(g => g.genre && g.genre.includes(currentState.searchFilters.genre));
    }

    if (currentState.searchFilters.year) {
        filtered = filtered.filter(g => g.releaseDate && g.releaseDate.startsWith(currentState.searchFilters.year));
    }

    if (currentState.searchFilters.developer) {
        filtered = filtered.filter(g => g.developer === currentState.searchFilters.developer);
    }

    return filtered;
}

function clearSearchFilters() {
    currentState.searchFilters = {
        genre: null,
        year: null,
        developer: null
    };
}

function hasActiveFilters() {
    return currentState.searchFilters.genre ||
        currentState.searchFilters.year ||
        currentState.searchFilters.developer;
}
