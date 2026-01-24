// --- State Management ---
let currentState = {
    lang: 'es', // 'en' or 'es'
    view: 'home', // 'home' or 'wiki' or 'favorites'
    currentId: null,
    currentGenre: null,
    isFilterExpanded: false,
    searchQuery: '',
    theme: 'light',
    textSize: 'standard', // 'small', 'standard', 'large'
    contentWidth: 'standard', // 'standard', 'wide'
    favorites: {
        favorites: [], // Array of game IDs
        wantToPlay: [],
        playing: [],
        completed: []
    },
    enrichedData: {}, // RAWG data mapped by game ID
    searchFilters: {
        genre: null,
        year: null,
        developer: null
    },
    dynamicDetails: {}, // Cache for games fetched individually by ID
    searchHistory: [],
    selectedSearchIndex: -1, // For keyboard navigation
    // Discovery & Infinite Scroll
    discoveryGames: [], // Games fetched from RAWG discovery
    discoverPage: 1,
    isFetching: false,
    hasMore: true,
    initialLoadDone: false
};

const UI_TEXT = {
    es: {
        heroTitle: "Explora la Historia del Gaming",
        heroSubtitle: "Bienvenido a GameWiki, la enciclopedia digital definitiva. Aquí encontrarás un archivo meticuloso de más de 100 títulos legendarios, Nuestra misión es preservar y difundir el conocimiento informativo sobre las obras que han moldeado la cultura moderna.",
        statGames: "Juegos Documentados",
        searchPlaceholder: "Busca un juego o empresa...",
        home: "Inicio",
        developer: "Desarrollador",
        publisher: "Distribuidor",
        genre: "Género",
        release: "Lanzamiento",
        contents: "Contenido",
        about: "Sobre el juego",
        details: "Detalles",
        footer: "Hecho por entusiastas para entusiastas.",
        appearance: "Apariencia",
        text: "Texto",
        small: "Pequeño",
        standard: "Estándar",
        large: "Grande",
        width: "Ancho",
        wide: "Ancho Completo",
        // Favorites
        favorites: "Favoritos",
        myFavorites: "Mis Favoritos",
        addToFavorites: "Agregar a Favoritos",
        removeFromFavorites: "Quitar de Favoritos",
        wantToPlay: "Quiero Jugar",
        playing: "Jugando",
        completed: "Completados",
        noFavorites: "No tienes juegos favoritos aún",
        noFavoritesDesc: "Explora juegos y agrégalos a tus favoritos haciendo clic en el ícono de corazón",
        exportFavorites: "Exportar Favoritos",
        importFavorites: "Importar Favoritos",
        collections: "Colecciones",
        allCollections: "Todas las Colecciones",
        // Search Filters
        advancedSearch: "Búsqueda Avanzada",
        filters: "Filtros",
        filterByGenre: "Filtrar por Género",
        filterByYear: "Filtrar por Año",
        filterByDeveloper: "Filtrar por Desarrollador",
        allGenres: "Todos los Géneros",
        allYears: "Todos los Años",
        allDevelopers: "Todos los Desarrolladores",
        clearFilters: "Limpiar Filtros",
        searchHistory: "Historial de Búsqueda",
        clearHistory: "Limpiar Historial",
        noResults: "No se encontraron resultados",
        showing: "Mostrando",
        allGenres: "Todos los Géneros",
        allYears: "Todos los Años",
        allDevelopers: "Todos los Desarrolladores",
        clearFilters: "Limpiar Filtros",
        kbdShortcuts: "Atajos de Teclado (solo usuarios de PC)",
        kbdSearch: "Buscar juegos",
        kbdHome: "Ir al Inicio",
        kbdFavs: "Mis Favoritos",
        kbdEsc: "Cerrar ventanas / búsqueda",
        kbdNav: "Navegar resultados",
        kbdEnter: "Seleccionar resultado",
        achievements: "Logros de la Wiki",
        markAsCompleted: "Marcar como Completado",
        removeFromCompleted: "Quitar de Completados"
    },
    en: {
        heroTitle: "Explore Gaming History",
        heroSubtitle: "Welcome to GameWiki, the ultimate digital encyclopedia. Here you will find a meticulous archive of over 100 legendary titles, Our mission is to preserve and share informative knowledge about the works that have shaped modern culture.",
        statGames: "Documented Games",
        searchPlaceholder: "Search for a game or company...",
        home: "Home",
        developer: "Developer",
        publisher: "Publisher",
        genre: "Genre",
        release: "Release Date",
        contents: "Contents",
        about: "About the game",
        details: "Technical Details",
        footer: "Made by Akiyama for fans.",
        appearance: "Appearance",
        text: "Text",
        small: "Small",
        standard: "Standard",
        large: "Large",
        width: "Width",
        wide: "Full Width",
        // Favorites
        favorites: "Favorites",
        myFavorites: "My Favorites",
        addToFavorites: "Add to Favorites",
        removeFromFavorites: "Remove from Favorites",
        wantToPlay: "Want to Play",
        playing: "Playing",
        completed: "Completed",
        noFavorites: "You don't have any favorite games yet",
        noFavoritesDesc: "Explore games and add them to your favorites by clicking the heart icon",
        exportFavorites: "Export Favorites",
        importFavorites: "Import Favorites",
        collections: "Collections",
        allCollections: "All Collections",
        markAsCompleted: "Mark as Completed",
        removeFromCompleted: "Remove from Completed",
        // Search Filters
        advancedSearch: "Advanced Search",
        filters: "Filters",
        filterByGenre: "Filter by Genre",
        filterByYear: "Filter by Year",
        filterByDeveloper: "Filter by Developer",
        allGenres: "All Genres",
        allYears: "All Years",
        allDevelopers: "All Developers",
        clearFilters: "Clear Filters",
        searchHistory: "Search History",
        clearHistory: "Clear History",
        noResults: "No results found",
        showing: "Showing",
        allGenres: "All Genres",
        allYears: "All Years",
        allDevelopers: "All Developers",
        clearFilters: "Clear Filters",
        kbdShortcuts: "Keyboard Shortcuts (only for PC users)",
        kbdSearch: "Search games",
        kbdHome: "Go Home",
        kbdFavs: "My Favorites",
        kbdEsc: "Close modals / search",
        kbdNav: "Navigate results",
        kbdEnter: "Select result",
        achievements: "Wiki Achievements"
    }
};

// --- DOM Elements ---
const el = {
    search: document.getElementById('game-search'),
    searchResults: document.getElementById('search-results'),
    langToggle: document.getElementById('lang-toggle'),
    langText: document.getElementById('lang-text'),
    appContent: document.getElementById('app-content'),
    hero: document.getElementById('hero'),
    wikiContainer: document.getElementById('wiki-container'),
    wikiSidebar: document.getElementById('wiki-sidebar'),
    wikiArticle: document.getElementById('wiki-article'),
    wikiAppearanceSidebar: document.getElementById('wiki-appearance-sidebar'),
    gameGrid: document.getElementById('game-grid'),
    genreFilter: document.getElementById('genre-filter'),
    homeLink: document.getElementById('home-link'),
    // UI Label Elements
    heroTitle: document.getElementById('hero-title'),
    heroSubtitle: document.getElementById('hero-subtitle'),
    statGames: document.getElementById('stat-games'),
    themeToggle: document.getElementById('theme-toggle'),
    loadMoreTrigger: document.getElementById('load-more-trigger'),
    toastContainer: document.getElementById('toast-container'),
    kbdShortcutsBtn: document.getElementById('kbd-shortcuts-btn'),
    kbdModal: document.getElementById('kbd-modal'),
    achievementsBtn: document.getElementById('achievements-btn'),
    achievementsModal: document.getElementById('achievements-modal')
};

// --- Initialization (moved to end of file) ---

// --- Logic ---
// Redundant definition removed

window.filterByGenre = function (genre) {
    currentState.view = 'home';
    currentState.currentGenre = genre;
    // Si seleccionamos uno específico, podemos cerrar la lista para ahorrar espacio
    if (genre) currentState.isFilterExpanded = false;
    renderHome(genre);
};

function toggleFilter() {
    currentState.isFilterExpanded = !currentState.isFilterExpanded;
    renderHome();
}

// --- Favorites Management ---
function loadFavorites() {
    const saved = localStorage.getItem('gamewiki-favorites');
    if (saved) {
        try {
            currentState.favorites = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load favorites:', e);
        }
    }
}

function saveFavorites() {
    localStorage.setItem('gamewiki-favorites', JSON.stringify(currentState.favorites));
}

function toggleFavorite(gameId, collection = 'favorites') {
    const collectionArray = currentState.favorites[collection];
    const index = collectionArray.indexOf(gameId);

    if (index > -1) {
        collectionArray.splice(index, 1);
        showToast(currentState.lang === 'es' ? 'Eliminado de favoritos' : 'Removed from favorites', 'info');
    } else {
        collectionArray.push(gameId);
        showToast(currentState.lang === 'es' ? 'Añadido a favoritos' : 'Added to favorites', 'success');
    }

    saveFavorites();
    updateFavoritesCount();

    // Preserve scroll position if we are re-rendering the same view
    if (currentState.view === 'home') {
        currentState.homeScrollY = window.scrollY;
    }

    // Achievement Stats updates
    if (typeof updateStat === 'function') {
        updateStat('favoritesCount', currentState.favorites.favorites.length);
        updateStat('gamesCompleted', currentState.favorites.completed.length);
    }

    // Update UI if we're on the current game's wiki page
    if (currentState.view === 'wiki' && currentState.currentId === gameId) {
        renderWiki(true); // true for 'isSilentUpdate'
    }

    // Update UI if we're on favorites view
    if (currentState.view === 'favorites') {
        renderFavorites();
    }

    // Update UI if we're on home view
    if (currentState.view === 'home') {
        renderHome(currentState.currentGenre, false, true); // true for 'isSilentUpdate'
    }
}

function isFavorite(gameId, collection = 'favorites') {
    return currentState.favorites[collection].includes(gameId);
}

function exportFavorites() {
    const dataStr = JSON.stringify(currentState.favorites, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `gamewiki-favorites-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function importFavorites() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const imported = JSON.parse(event.target.result);
                    currentState.favorites = imported;
                    saveFavorites();
                    if (currentState.view === 'favorites') {
                        renderFavorites();
                    }
                    showToast(currentState.lang === 'es' ? 'Favoritos importados exitosamente' : 'Favorites imported successfully', 'success');
                } catch (error) {
                    showToast(currentState.lang === 'es' ? 'Error al importar favoritos' : 'Error importing favorites', 'error');
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

function updateFavoritesCount() {
    const totalFavorites = Object.values(currentState.favorites).reduce((sum, arr) => sum + arr.length, 0);
    const countElement = document.getElementById('favorites-count');
    if (countElement) {
        countElement.textContent = totalFavorites;
        if (totalFavorites > 0) {
            countElement.classList.add('has-favorites');
        } else {
            countElement.classList.remove('has-favorites');
        }
    }
}


function showToast(message, type = 'info') {
    if (!el.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };

    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
        <span class="toast-message">${message}</span>
    `;

    el.toastContainer.appendChild(toast);

    // Auto remove
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}


function updateUILabels() {
    const t = UI_TEXT[currentState.lang];
    el.heroTitle.innerText = t.heroTitle;
    el.heroSubtitle.innerText = t.heroSubtitle;
    el.statGames.innerText = t.statGames;
    el.search.placeholder = t.searchPlaceholder;
    el.langText.innerText = currentState.lang === 'es' ? 'EN' : 'ES'; // Muestra a qué cambiará

    // Keybinds Modal
    const kbdBtn = document.getElementById('kbd-shortcuts-btn');
    if (kbdBtn) kbdBtn.title = t.kbdShortcuts;

    const kbdTitle = document.getElementById('kbd-modal-title');
    if (kbdTitle) kbdTitle.innerText = t.kbdShortcuts;
    document.querySelectorAll('.kbd-desc').forEach(desc => {
        const key = desc.getAttribute('data-key');
        if (t[key]) desc.innerText = t[key];
    });

    // Search Filters Selects - Update first option
    const genreSelect = document.getElementById('filter-genre');
    const yearSelect = document.getElementById('filter-year');
    const devSelect = document.getElementById('filter-developer');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');

    if (genreSelect && genreSelect.options[0]) genreSelect.options[0].text = t.allGenres;
    if (yearSelect && yearSelect.options[0]) yearSelect.options[0].text = t.allYears;
    if (devSelect && devSelect.options[0]) devSelect.options[0].text = t.allDevelopers;
    if (clearFiltersBtn) clearFiltersBtn.innerText = t.clearFilters;

    // Achievements
    if (el.achievementsBtn) el.achievementsBtn.title = t.achievements;
    const achTitle = document.getElementById('ach-modal-title');
    if (achTitle) achTitle.innerText = t.achievements;
}

function renderHome(filterGenre = undefined, isFromPopState = false, isSilentUpdate = false) {
    // If it's a silent update, we don't change the view state or push history
    if (!isSilentUpdate) {
        currentState.view = 'home';
        document.title = "GameWiki - Home";

        // Handle History
        if (!isFromPopState) {
            const state = { view: 'home', genre: filterGenre || currentState.currentGenre };
            history.pushState(state, "", "");
        }

        // Restore scroll if needed
        setTimeout(() => {
            if (typeof currentState.homeScrollY === 'number' && !isFromPopState) {
                window.scrollTo(0, currentState.homeScrollY);
            }
        }, 0);
    }

    if (filterGenre !== undefined) {
        currentState.currentGenre = filterGenre;
    }
    const activeGenre = currentState.currentGenre;

    el.hero.classList.remove('hidden');
    el.gameGrid.classList.remove('hidden');
    el.genreFilter.classList.remove('hidden');
    el.wikiContainer.classList.add('hidden');

    // Show/hide loader trigger based on view and genre
    if (el.loadMoreTrigger) {
        el.loadMoreTrigger.style.display = activeGenre ? 'none' : 'flex';
    }

    // Animation
    el.appContent.style.opacity = '0';
    el.appContent.style.transform = 'translateY(10px)';
    void el.appContent.offsetWidth;
    el.appContent.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    el.appContent.style.opacity = '1';
    el.appContent.style.transform = 'translateY(0)';

    document.title = activeGenre ? `Juegos de ${activeGenre} - GameWiki` : 'GameWiki - Tu Enciclopedia de Videojuegos';
    if (!isFromPopState && !activeGenre && !isSilentUpdate) window.scrollTo(0, 0);

    // 1. Render Genre Filter Bar (Collapsible)
    renderGenreFilter(activeGenre);

    el.gameGrid.innerHTML = '';

    // Add filter indicator
    if (activeGenre) {
        const indicator = document.createElement('div');
        indicator.style.gridColumn = '1 / -1';
        indicator.style.marginBottom = '2rem';
        indicator.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; background: var(--wiki-bg); padding: 1rem 1.75rem; border-radius: var(--radius); border: 1px solid var(--primary); animation: slideDown 0.3s ease; box-shadow: 0 10px 30px var(--primary-glow);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div style="width: 8px; height: 8px; background: var(--primary); border-radius: 50%;"></div>
                    <span style="font-weight: 700;">${currentState.lang === 'es' ? 'Mostrando:' : 'Showing:'} <span style="color: var(--primary);">${activeGenre}</span></span>
                </div>
                <button onclick="filterByGenre(null)" style="background: var(--primary); color: white; border: none; padding: 0.5rem 1.25rem; border-radius: 50px; cursor: pointer; font-size: 0.85rem; font-weight: 700; transition: all 0.2s; display: flex; align-items: center; gap: 0.5rem;">
                    <span>${currentState.lang === 'es' ? 'Ver todo' : 'View all'}</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
            </div>
        `;
        el.gameGrid.appendChild(indicator);
    }

    // 2. Identify games to render
    const localGames = activeGenre
        ? GAMES_DATA.filter(g => g.genre?.includes(activeGenre))
        : GAMES_DATA;

    // Filter discovery games to avoid duplicates with local data
    const dynamicGames = (activeGenre
        ? currentState.discoveryGames.filter(g => g.genres?.some(gen => gen.name.includes(activeGenre)))
        : currentState.discoveryGames)
        .filter(dg => !localGames.some(lg => lg.rawgId === dg.id || lg.title.toLowerCase() === dg.name.toLowerCase()));

    // Special case: if we are in discovery mode and have dynamicDetails that match the genre
    const detailedGames = [];
    if (activeGenre) {
        Object.values(currentState.dynamicDetails).forEach(game => {
            if (game.genres?.some(g => g.name.includes(activeGenre))) {
                if (!dynamicGames.some(dg => dg.id === game.id) && !localGames.some(lg => lg.rawgId === game.id)) {
                    detailedGames.push(game);
                }
            }
        });
    }

    if (localGames.length === 0 && dynamicGames.length === 0 && detailedGames.length === 0) {
        const message = currentState.discoveryGames.length === 0 && !currentState.initialLoadDone
            ? (currentState.lang === 'es' ? 'Cargando biblioteca de juegos...' : 'Loading game library...')
            : (currentState.lang === 'es' ? 'No se encontraron juegos para este género.' : 'No games found for this genre.');

        el.gameGrid.innerHTML += `<div style="grid-column: 1 / -1; text-align: center; padding: 5rem 2rem; background: var(--wiki-bg); border-radius: var(--radius); border: 1px dashed var(--border);">
            <p style="font-size: 1.2rem; font-weight: 600; color: var(--text-muted);">${message}</p>
        </div>`;
    }

    // Render Local Games first
    localGames.forEach(game => renderGameCard(game, el.gameGrid));

    // Render Dynamic Games
    dynamicGames.forEach(game => renderGameCard(transformRAWGToGame(game), el.gameGrid));
    detailedGames.forEach(game => renderGameCard(transformRAWGToGame(game), el.gameGrid));

    // Setup infinite scroll if we are in main home (no active genre)
    if (!activeGenre && !currentState.initialLoadDone) {
        setupInfiniteScroll();
    }
}

/**
 * Helper to render the genre filter bar
 */
function renderGenreFilter(activeGenre) {
    const allGenres = new Set();
    GAMES_DATA.forEach(game => {
        if (game.genre) {
            game.genre.split(',').forEach(g => allGenres.add(g.trim()));
        }
    });

    // Fallback genres if GAMES_DATA is empty
    if (allGenres.size === 0) {
        ['Action', 'Adventure', 'RPG', 'Shooter', 'Indie', 'Strategy', 'Puzzle', 'Platformer', 'Sports', 'Racing', 'Fighting'].forEach(g => allGenres.add(g));
    }

    const sortedGenres = Array.from(allGenres).sort();
    const isExpanded = currentState.isFilterExpanded;

    el.genreFilter.innerHTML = `
        <div class="filter-header" onclick="toggleFilter()" style="cursor: pointer; display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--glass); border-radius: var(--radius); border: 1px solid var(--border); transition: all 0.3s;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
                <span style="font-weight: 700; font-size: 0.9rem;">${currentState.lang === 'es' ? 'Explorar por Género' : 'Browse by Genre'}</span>
                ${activeGenre ? `<span class="active-genre-chip" style="background: var(--primary); color: white; padding: 0.2rem 0.8rem; border-radius: 20px; font-size: 0.75rem;">${activeGenre}</span>` : ''}
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${isExpanded ? (currentState.lang === 'es' ? 'Cerrar' : 'Close') : (currentState.lang === 'es' ? 'Expandir' : 'Expand')}</span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" style="transition: transform 0.3s; transform: rotate(${isExpanded ? '180deg' : '0deg'});">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
        </div>
        <div class="filter-content ${isExpanded ? 'expanded' : ''}" style="max-height: ${isExpanded ? '1000px' : '0'}; overflow: hidden; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); opacity: ${isExpanded ? '1' : '0'}; margin-top: ${isExpanded ? '1.5rem' : '0'};">
            <div class="filter-tags">
                <button class="filter-tag ${!activeGenre ? 'active' : ''}" onclick="filterByGenre(null)">${currentState.lang === 'es' ? 'Todos Los Juegos' : 'All Games'}</button>
                ${sortedGenres.map(genre => `
                    <button class="filter-tag ${activeGenre === genre ? 'active' : ''}" onclick="filterByGenre('${genre}')">${genre}</button>
                `).join('')}
            </div>
        </div>
    `;
}

/**
 * Detects if a text is likely English
 */
function isEnglishText(text) {
    if (!text) return true;
    const commonEnglish = [' the ', ' is ', ' and ', ' with ', ' from ', ' game ', ' features '];
    const lower = text.toLowerCase();
    return commonEnglish.some(word => lower.includes(word));
}

/**
 * Generates a professional summary in the target language based on game metadata
 */
function generateLocalizedSummary(rawgGame, lang) {
    const isEs = lang === 'es';
    const name = rawgGame.name;
    const year = rawgGame.released ? rawgGame.released.split('-')[0] : (isEs ? 'fecha desconocida' : 'unknown date');
    const genre = rawgGame.genres?.[0]?.name || (isEs ? 'videojuegos' : 'video games');
    const dev = rawgGame.developers?.[0]?.name || (isEs ? 'un estudio destacado' : 'a prominent studio');
    const platforms = rawgGame.platforms?.slice(0, 3).map(p => p.platform.name).join(', ') || 'N/A';
    const rating = rawgGame.rating ? `${rawgGame.rating}/5✮` : '';
    const metacritic = rawgGame.metacritic ? `Metacritic: ${rawgGame.metacritic}` : '';

    if (isEs) {
        return `${name} es una experiencia imprescindible dentro del género ${genre}. Lanzado originalmente en ${year} y desarrollado por ${dev}, el título ha sido aclamado por su apartado técnico y jugabilidad en plataformas como ${platforms}. ${rating ? `Con una puntuación de ${rating},` : ''} se posiciona como una obra clave que expande los horizontes de su categoría. ${metacritic ? `La crítica especializada lo ha respaldado con un ${metacritic}.` : ''}`;
    } else {
        return `${name} is an essential experience within the ${genre} genre. Originally released in ${year} and developed by ${dev}, the title has been acclaimed for its technical prowess and gameplay on platforms such as ${platforms}. ${rating ? `With a rating of ${rating},` : ''} it stands as a key work that expands the horizons of its category. ${metacritic ? `Specialized critics have backed it with a ${metacritic}.` : ''}`;
    }
}

/**
 * Transforms RAWG API game object to GameWiki internal format
 */
function transformRAWGToGame(rawgGame) {
    if (!rawgGame) return null;
    const idStr = rawgGame.id.toString();
    const manual = MANUAL_DESCRIPTIONS[idStr];
    const rawDesc = rawgGame.description_raw || "";
    const hasValidDesc = rawDesc && rawDesc !== "undefined" && rawDesc.length > 20;

    // Detect language of the source description
    const isEnglishSource = isEnglishText(rawDesc);

    // Build descriptions
    let finalDescEs = manual?.es || "";
    let finalDescEn = manual?.en || "";

    if (!finalDescEs) {
        if (hasValidDesc && !isEnglishSource) {
            finalDescEs = rawDesc;
        } else {
            // Generate professional Spanish intro + English source if it's the only one
            const intro = generateLocalizedSummary(rawgGame, 'es');
            finalDescEs = hasValidDesc
                ? `${intro}\n\n---\n\n**[Nota: Descripción detallada disponible solo en inglés]**\n\n${rawDesc}`
                : intro;
        }
    }

    if (!finalDescEn) {
        finalDescEn = hasValidDesc ? rawDesc : generateLocalizedSummary(rawgGame, 'en');
    }

    const developersArr = rawgGame.developers || [];
    const developerNames = developersArr
        .filter(d => d && d.name)
        .map(d => d.name)
        .join(', ');

    return {
        id: `rawg-${rawgGame.id}`,
        rawgId: rawgGame.id,
        title: rawgGame.name,
        description: {
            es: finalDescEs,
            en: finalDescEn
        },
        developer: developerNames || 'RAWG Data',
        companyId: developersArr[0]?.slug || '',
        genre: rawgGame.genres?.map(g => g.name).join(', ') || '',
        releaseDate: rawgGame.released || 'N/A',
        image: rawgGame.background_image,
        rawg: {
            rating: rawgGame.rating,
            metacritic: rawgGame.metacritic,
            description_raw: rawDesc // Keep the raw one for reference
        }
    };
}

/**
 * Helper to render a single game card
 */
function renderGameCard(game, container) {
    const isFav = isFavorite(game.id);
    const enriched = currentState.enrichedData[game.id] || game.rawg;

    // Build rating and metacritic badges if available
    let badgesHtml = '';
    if (enriched) {
        if (enriched.metacritic) {
            const metaClass = enriched.metacritic >= 75 ? 'meta-high' : (enriched.metacritic >= 50 ? 'meta-mid' : 'meta-low');
            badgesHtml += `<span class="meta-badge ${metaClass}">${enriched.metacritic}</span>`;
        }
        if (enriched.rating) {
            badgesHtml += `<span class="rating-badge">★ ${enriched.rating.toFixed(1)}</span>`;
        }
    }

    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${game.id}')" title="${isFav ? UI_TEXT[currentState.lang].removeFromFavorites : UI_TEXT[currentState.lang].addToFavorites}">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
        </button>
        <div class="game-icon">
            <img src="${getGameImage(game)}" alt="${game.title}" loading="lazy">
            ${badgesHtml}
        </div>
        <h3>${game.title}</h3>
        <p>${game.description[currentState.lang] || '...'}</p>
    `;
    card.onclick = () => navigateToWiki(game.id);
    container.appendChild(card);
}

/**
 * Infinite Scroll logic using IntersectionObserver
 */
function setupInfiniteScroll() {
    if (!el.loadMoreTrigger) return;

    const observer = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && !currentState.isFetching && currentState.hasMore && currentState.view === 'home' && !currentState.currentGenre) {
            await loadMoreGames();
        }
    }, { threshold: 0.1 });

    observer.observe(el.loadMoreTrigger);
    currentState.initialLoadDone = true;
}

/**
 * Loads more games from RAWG and appends them
 */
async function loadMoreGames() {
    if (currentState.isFetching || !currentState.hasMore) return;

    currentState.isFetching = true;
    el.loadMoreTrigger.classList.add('visible');

    console.log(`🌐 Loading dynamic page ${currentState.discoverPage}...`);

    try {
        const data = await fetchDiscoverGames(currentState.discoverPage);

        if (data && data.results) {
            // Append only games not in discovery cache OR local database
            const newGames = data.results.filter(g =>
                !currentState.discoveryGames.find(dg => dg.id === g.id) &&
                !GAMES_DATA.some(lg => lg.rawgId === g.id || lg.title.toLowerCase() === g.name.toLowerCase())
            );

            if (newGames.length > 0) {
                currentState.discoveryGames.push(...newGames);
                // Render only the new batch
                newGames.forEach(rawgGame => {
                    renderGameCard(transformRAWGToGame(rawgGame), el.gameGrid);
                });
            }

            currentState.discoverPage++;
            currentState.hasMore = !!data.next;

            // Reset consecutive errors
            currentState.consecutiveErrors = 0;
        } else {
            currentState.hasMore = false;
        }
    } catch (err) {
        console.error('Failed to load more games:', err);
        currentState.consecutiveErrors = (currentState.consecutiveErrors || 0) + 1;

        // If we hit too many errors, stop trying to avoid burning usage limits
        if (currentState.consecutiveErrors > 3) {
            console.warn('⚠️ Too many errors loading more games. Stopping infinite scroll.');
            currentState.hasMore = false;
        }
    } finally {
        currentState.isFetching = false;
        el.loadMoreTrigger.classList.remove('visible');
    }
}

function renderFavorites(activeCollection = 'favorites', isFromPopState = false) {
    currentState.view = 'favorites';
    document.title = `${UI_TEXT[currentState.lang].myFavorites} - GameWiki`;

    if (!isFromPopState) {
        const state = { view: 'favorites', collection: activeCollection };
        history.pushState(state, "", "");
    }

    el.hero.classList.add('hidden');
    el.gameGrid.classList.remove('hidden');
    el.genreFilter.classList.add('hidden');
    el.wikiContainer.classList.add('hidden');

    if (!isFromPopState) window.scrollTo(0, 0);

    const t = UI_TEXT[currentState.lang];
    const collections = {
        favorites: { name: t.favorites, games: currentState.favorites.favorites },
        wantToPlay: { name: t.wantToPlay, games: currentState.favorites.wantToPlay },
        playing: { name: t.playing, games: currentState.favorites.playing },
        completed: { name: t.completed, games: currentState.favorites.completed }
    };

    // Render collection tabs
    el.genreFilter.classList.remove('hidden');
    el.genreFilter.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h2 style="font-family: 'Montserrat', sans-serif; font-size: 2rem; margin: 0;">${t.myFavorites}</h2>
            <div style="display: flex; gap: 0.5rem;">
                <button onclick="exportFavorites()" class="export-btn" style="background: var(--primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: all 0.2s;">
                    📥 ${t.exportFavorites}
                </button>
                <button onclick="importFavorites()" class="import-btn" style="background: var(--wiki-bg); color: var(--text); border: 1px solid var(--border); padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: all 0.2s;">
                    📤 ${t.importFavorites}
                </button>
            </div>
        </div>
        <div class="filter-tags" style="margin-bottom: 2rem;">
            ${Object.keys(collections).map(key => `
                <button class="filter-tag ${activeCollection === key ? 'active' : ''}" onclick="renderFavorites('${key}')">
                    ${collections[key].name} (${collections[key].games.length})
                </button>
            `).join('')}
        </div>
    `;

    // Render games in active collection
    el.gameGrid.innerHTML = '';

    const gamesInCollection = collections[activeCollection].games
        .map(id =>
            GAMES_DATA.find(g => g.id === id) ||
            transformRAWGToGame(currentState.discoveryGames.find(g => `rawg-${g.id}` === id)) ||
            transformRAWGToGame(currentState.dynamicDetails[id.replace('rawg-', '')])
        )
        .filter(g => g); // Filter out any undefined games

    if (gamesInCollection.length === 0) {
        el.gameGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 2rem;">
                <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 2rem; color: var(--text-muted); opacity: 0.5;">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text);">${t.noFavorites}</h3>
                <p style="color: var(--text-muted); margin-bottom: 2rem;">${t.noFavoritesDesc}</p>
                <button onclick="filterByGenre(null)" style="background: var(--primary); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 50px; cursor: pointer; font-weight: 700; font-size: 0.9rem; transition: all 0.2s;">
                    ${t.lang === 'es' ? 'Explorar Juegos' : 'Explore Games'}
                </button>
            </div>
        `;
        return;
    }

    gamesInCollection.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <button class="favorite-btn active" onclick="event.stopPropagation(); toggleFavorite('${game.id}', '${activeCollection}')" title="${t.removeFromFavorites}">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
            </button>
            <div class="game-icon">
                <img src="${getGameImage(game)}" alt="${game.title}" loading="lazy">
            </div>
            <h3>${game.title}</h3>
            <p>${game.description[currentState.lang]}</p>
        `;
        card.onclick = () => navigateToWiki(game.id);
        el.gameGrid.appendChild(card);
    });
}


function navigateToWiki(id, isFromPopState = false) {
    // Save scroll position before leaving home
    if (currentState.view === 'home') {
        currentState.homeScrollY = window.scrollY;
    }

    currentState.view = 'wiki';
    currentState.currentId = id;

    if (!isFromPopState) {
        const state = { view: 'wiki', id: id };
        history.pushState(state, "", "");
        window.scrollTo(0, 0);
    }

    const isRawg = id.startsWith('rawg-');
    const rawgId = isRawg ? id.replace('rawg-', '') : null;
    const hasFullDetails = isRawg ? !!currentState.dynamicDetails[rawgId] : true;

    if (isRawg && !hasFullDetails) {
        // Fetch from RAWG if we don't have full details (even if it's in discovery cache)
        renderWikiLoading();
        getGameDetails(rawgId).then(details => {
            if (details) {
                currentState.dynamicDetails[rawgId] = details;
                // Re-verify the current ID hasn't changed while fetching
                if (currentState.currentId === id) {
                    renderWiki();
                }
            } else {
                console.warn(`Could not find details for RAWG ID: ${rawgId}`);
                renderHome();
            }
        }).catch(err => {
            console.error("Navigation error:", err);
            renderHome();
        });
        return;
    }

    const item = GAMES_DATA.find(g => g.id === id) ||
        COMPANIES_DATA.find(c => c.id === id) ||
        (rawgId ? transformRAWGToGame(currentState.dynamicDetails[rawgId]) : null) ||
        transformRAWGToGame(currentState.discoveryGames.find(g => `rawg-${g.id}` === id));

    if (!item) {
        console.warn(`Item not found for ID: ${id}. Returning home.`);
        renderHome(null, false, false);
        return;
    }

    if (item) document.title = `${item.title || item.name} - GameWiki`;
    renderWiki();
}

function renderWiki(isSilentUpdate = false) {
    const id = currentState.currentId;
    const game = GAMES_DATA.find(g => g.id === id) ||
        transformRAWGToGame(currentState.dynamicDetails[id.replace('rawg-', '')]) ||
        transformRAWGToGame(currentState.discoveryGames.find(g => `rawg-${g.id}` === id));
    const item = game || COMPANIES_DATA.find(c => c.id === id);

    if (!item) {
        // Last attempt: check enriched data or fetch if missing (though navigateToWiki should have handled it)
        renderHome();
        return;
    }

    if (typeof trackWikiView === 'function') trackWikiView(item);

    el.hero.classList.add('hidden');
    el.gameGrid.classList.add('hidden');
    el.genreFilter.classList.add('hidden');
    el.wikiContainer.classList.remove('hidden');

    // Animation
    el.wikiContainer.style.opacity = '0';
    el.wikiContainer.style.transform = 'translateY(10px)';
    void el.wikiContainer.offsetWidth;
    el.wikiContainer.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    el.wikiContainer.style.opacity = '1';
    el.wikiContainer.style.transform = 'translateY(0)';

    // Reset mobile sidebar state
    el.wikiSidebar.classList.remove('mobile-active');

    if (!isSilentUpdate) {
        window.scrollTo(0, 0);
    }

    const t = UI_TEXT[currentState.lang];
    const isGame = !!game;

    const visibleSections = [
        { id: 'intro', title: currentState.lang === 'es' ? 'Introducción' : 'Introduction', show: true },
        { id: 'gallery', title: currentState.lang === 'es' ? 'Galería' : 'Gallery', show: true },
        { id: 'achievements', title: currentState.lang === 'es' ? 'Logros' : 'Achievements', show: isGame },
        { id: 'requirements', title: currentState.lang === 'es' ? 'Requerimientos' : 'Requirements', show: isGame },
        { id: 'trailers', title: currentState.lang === 'es' ? 'Tráilers' : 'Trailers', show: isGame },
        { id: 'dlcs', title: currentState.lang === 'es' ? 'Contenido Adicional' : 'Additional Content', show: isGame },
        { id: 'history', title: currentState.lang === 'es' ? 'Historia' : 'History', show: true },
        { id: 'dev', title: currentState.lang === 'es' ? 'Desarrollo' : 'Development', show: isGame },
        { id: 'related', title: currentState.lang === 'es' ? 'Relacionados' : 'Related', show: isGame }
    ].filter(s => isGame ? s.show : (s.id === 'intro' || s.id === 'history' || s.id === 'catalog'));

    // 1. Contents Sidebar (Left)
    el.wikiSidebar.innerHTML = `
        <div class="sidebar-section">
            <div class="sidebar-title">
                <h3>${t.contents}</h3>
                <span class="hide-btn" onclick="toggleSidebarMenu(this)">${currentState.lang === 'es' ? 'ocultar' : 'hide'}</span>
            </div>
            <div class="sidebar-toc-container">
                <ul class="toc-list">
                    <li class="toc-item">
                        <span class="toc-number">0.</span>
                        <a href="#top" class="toc-link" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">(Top)</a>
                    </li>
                    ${visibleSections.map((s, i) => `
                        <li class="toc-item">
                            <span class="toc-number">${i + 1}.</span>
                            <a href="#${s.id}" class="toc-link">${s.title}</a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>

        <div class="sidebar-section" style="margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
            <div class="sidebar-title">
                <h3>${t.appearance}</h3>
                <span class="hide-btn" onclick="this.parentElement.nextElementSibling.style.display = this.parentElement.nextElementSibling.style.display === 'none' ? 'block' : 'none'">${currentState.lang === 'es' ? 'ocultar' : 'hide'}</span>
            </div>
            <div class="appearance-controls" style="margin-top: 1rem;">
                <p style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; color: var(--text-muted);">${t.text}</p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <label class="radio-label">
                        <input type="radio" name="text-size" value="small" ${currentState.textSize === 'small' ? 'checked' : ''}> ${t.small}
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="text-size" value="standard" ${currentState.textSize === 'standard' ? 'checked' : ''}> ${t.standard}
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="text-size" value="large" ${currentState.textSize === 'large' ? 'checked' : ''}> ${t.large}
                    </label>
                </div>

                <p style="font-size: 0.85rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem; text-transform: uppercase; color: var(--text-muted);">${t.width}</p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <label class="radio-label">
                        <input type="radio" name="content-width" value="standard" ${currentState.contentWidth === 'standard' ? 'checked' : ''}> ${t.standard}
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="content-width" value="wide" ${currentState.contentWidth === 'wide' ? 'checked' : ''}> ${t.wide}
                    </label>
                </div>
            </div>
        </div>
    `;

    // 2. Main Article Content
    const tocHtml = isGame ? generateTableOfContents(item) : '';

    // 2. Main Article Content
    let articleHtml = `
        <div class="wiki-header" style="font-size: ${currentState.textSize === 'small' ? '0.9rem' : currentState.textSize === 'large' ? '1.3rem' : '1.1rem'};">
            <!-- Breadcrumbs -->
            <nav class="breadcrumbs" style="font-size: 0.8rem; margin-bottom: 1.5rem; display: flex; gap: 0.5rem; color: var(--text-muted); align-items: center;">
                <span class="breadcrumb-link" onclick="renderHome()" style="color: var(--primary); font-weight: 600;">${t.home}</span>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><path d="M9 18l6-6-6-6"/></svg>
                ${isGame
            ? `<span class="breadcrumb-link" onclick="filterByGenre('${item.genre.split(',')[0].trim()}')">${item.genre.split(',')[0]}</span>`
            : `<span class="breadcrumb-link" onclick="renderHome()">${currentState.lang === 'es' ? 'Empresas' : 'Companies'}</span>`
        }
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><path d="M9 18l6-6-6-6"/></svg>
                <span style="color: var(--text); font-weight: 600;">${isGame ? item.title : item.name}</span>
            </nav>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <div style="display: flex; gap: 0.75rem; align-items: center;">
                    <button class="back-btn" onclick="renderHome()" style="margin-bottom: 0;">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        ${currentState.lang === 'es' ? 'Volver' : 'Back'}
                    </button>
                    <!-- Mobile Sidebar Toggle -->
                    <button class="mobile-sidebar-toggle" onclick="toggleWikiSidebar()" title="${t.contents}">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                    </button>
                </div>
                
                <div style="display: flex; gap: 0.5rem;">
                    ${isGame ? `
                        <button class="favorite-btn ${isFavorite(item.id) ? 'active' : ''}" onclick="toggleFavorite('${item.id}')" title="${isFavorite(item.id) ? UI_TEXT[currentState.lang].removeFromFavorites : UI_TEXT[currentState.lang].addToFavorites}" style="position: static; margin: 0; width: 40px; height: 40px;">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="${isFavorite(item.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                        </button>
                        <button class="favorite-btn completion-btn ${isFavorite(item.id, 'completed') ? 'active' : ''}" 
                                onclick="toggleFavorite('${item.id}', 'completed')" 
                                title="${isFavorite(item.id, 'completed') ? UI_TEXT[currentState.lang].removeFromCompleted : UI_TEXT[currentState.lang].markAsCompleted}" 
                                style="position: static; margin: 0; width: 40px; height: 40px;">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="${isFavorite(item.id, 'completed') ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                                <path d="M6 9V2h12v7M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2M6 9a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3"/>
                                <path d="M12 12v6M9 21h6"/>
                            </svg>
                        </button>
                        <button class="btn-check-deals" onclick="openDealsModal('${item.id}')" style="margin-top: 0; padding: 0.5rem 1rem; width: auto; font-size: 0.8rem;">
                            <span style="font-size: 1rem;">🏷️</span>
                            ${currentState.lang === 'es' ? 'Consultar Ofertas' : 'Check Deals'}
                        </button>
                        <button class="share-btn" onclick="shareGame('${item.id}', '${isGame ? item.title : item.name.replace(/'/g, "\\'")}')" title="${currentState.lang === 'es' ? 'Compartir' : 'Share'}" style="margin: 0; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 50%; cursor: pointer; color: var(--text); transition: all 0.3s;">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4-4 4m4-4v13"/></svg>
                        </button>
                    ` : ''}
                </div>
            </div>
            
            <h1 style="font-family: 'Montserrat', sans-serif; font-size: 3.5rem; font-weight: 800; margin-bottom: 2rem; color: var(--text); line-height: 1.1;">${isGame ? item.title : item.name}</h1>
        </div>

        <div class="wiki-main-layout" style="font-size: ${currentState.textSize === 'small' ? '0.9rem' : currentState.textSize === 'large' ? '1.3rem' : '1.1rem'}; max-width: ${currentState.contentWidth === 'wide' ? '100%' : '1200px'};">
            
            <aside class="wiki-infobox-aside">
                <div class="infobox">
                    <div class="infobox-title">${isGame ? item.title : item.name}</div>
                    <img src="${isGame ? getGameImage(item) : (item.image || `https://api.dicebear.com/7.x/shapes/svg?seed=${item.id}`)}" 
                         alt="${isGame ? item.title : item.name}"
                         onerror="this.src='https://api.dicebear.com/7.x/shapes/svg?seed=${item.id}'">
                    <div class="infobox-caption">${isGame ? (currentState.lang === 'es' ? 'Arte de portada oficial' : 'Official cover art') : (currentState.lang === 'es' ? 'Logotipo oficial' : 'Official logo')}</div>
                    
                    <div class="infobox-content">
                        ${isGame ? `
                            <div class="infobox-row">
                                <div class="infobox-label">Metacritic</div>
                                <div class="infobox-value">
                                    ${(currentState.enrichedData[item.id] || item.rawg)?.metacritic
                ? `<span class="meta-badge ${(currentState.enrichedData[item.id] || item.rawg).metacritic >= 75 ? 'meta-high' : 'meta-mid'}">${(currentState.enrichedData[item.id] || item.rawg).metacritic}</span>`
                : 'N/A'
            }
                                </div>
                            </div>
                            <div class="infobox-row">
                                <div class="infobox-label">${t.developer}</div>
                                <div class="infobox-value">${renderInternalLink(item.companyId || item.developer)}</div>
                            </div>
                            <div class="infobox-row">
                                <div class="infobox-label">${t.genre}</div>
                                <div class="infobox-value">${item.genre.split(',').map(g => `<span class="genre-link" onclick="filterByGenre('${g.trim()}')">${g.trim()}</span>`).join(' ')}</div>
                            </div>
                            <div class="infobox-row">
                                <div class="infobox-label">${t.release}</div>
                                <div class="infobox-value">${item.releaseDate}</div>
                            </div>
                            ${(currentState.enrichedData[item.id] || item.rawg) ? `
                                <div class="infobox-row">
                                    <div class="infobox-label">ESRB</div>
                                    <div class="infobox-value">${(currentState.enrichedData[item.id] || item.rawg).esrbRating || '—'}</div>
                                </div>
                                <div class="infobox-row">
                                    <div class="infobox-label">${currentState.lang === 'es' ? 'Promedio de Juego' : 'Playtime'}</div>
                                    <div class="infobox-value">${(currentState.enrichedData[item.id] || item.rawg).playtime || 0} ${currentState.lang === 'es' ? 'horas' : 'hours'}</div>
                                </div>
                                <div class="infobox-row">
                                    <div class="infobox-label">${currentState.lang === 'es' ? 'Votos RAWG' : 'RAWG Ratings'}</div>
                                    <div class="infobox-value">${(currentState.enrichedData[item.id] || item.rawg).ratingsCount || 0}</div>
                                </div>
                            ` : ''}
                        ` : `
                            <div class="infobox-row">
                                <div class="infobox-label">${currentState.lang === 'es' ? 'Fundación' : 'Founded'}</div>
                                <div class="infobox-value">${item.founded || '—'}</div>
                            </div>
                            <div class="infobox-row">
                                <div class="infobox-label">${currentState.lang === 'es' ? 'Sede' : 'Headquarters'}</div>
                                <div class="infobox-value">${item.headquarters || '—'}</div>
                            </div>
                        `}
                    </div>
                </div>
            </aside>

            <div class="wiki-body">
                <div class="disambiguation-box">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11 9h2V7h-2v2zm1 11c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6z"/></svg>
                    <span>${isGame
            ? (currentState.lang === 'es' ? `Este artículo trata sobre el videojuego de ${item.releaseDate.split('-')[0]}.` : `This article is about the ${item.releaseDate.split('-')[0]} video game.`)
            : (currentState.lang === 'es' ? `Este artículo trata sobre la empresa desarrolladora.` : `This article is about the development company.`)
        }</span>
                </div>

                <div class="article-toc-box" style="margin-bottom: 2rem;">
                    ${isGame ? generateTableOfContents(item) : ''}
                </div>

                <div class="wiki-content">
                    <section id="intro">
                        <p class="lead" style="font-size: 1.25em; line-height: 1.6; color: var(--text); opacity: 0.9; margin-bottom: 2rem;">${item.description[currentState.lang]}</p>
                    </section>
                    
                    ${isGame && (currentState.enrichedData[item.id] || item.rawg)?.screenshots ? `
                        <section id="gallery" style="margin-top: 2rem;">
                            <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1.5rem;">
                                ${currentState.lang === 'es' ? 'Galería de Imágenes' : 'Image Gallery'}
                            </h2>
                            <div class="screenshot-grid">
                                ${(currentState.enrichedData[item.id] || item.rawg).screenshots.map(s => `
                                    <div class="screenshot-item" onclick="openLightbox('${s.image}')">
                                        <img src="${s.thumbnail || s.image}" alt="Screenshot" loading="lazy">
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}

                    <div id="achievements-container">
                        <!-- Dynamically filled Achievements from RAWG -->
                    </div>

                    ${isGame ? renderSystemRequirements(currentState.enrichedData[item.id] || item.rawg) : ''}

                    <div id="trailers-container">
                        <!-- Dynamically filled Trailers from RAWG -->
                    </div>

                    <div id="dlcs-container">
                        <!-- Dynamically filled DLCs from RAWG -->
                    </div>

                    <div id="history" style="margin-top: 3rem;">
                        <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1rem;">
                            ${isGame ? (currentState.lang === 'es' ? 'Historia y Trasfondo' : 'History and Background') : (currentState.lang === 'es' ? 'Historia de la Empresa' : 'Company History')}
                        </h2>
                        <p>
                            ${isGame
            ? (item.detailedHistory ? item.detailedHistory[currentState.lang] :
                (MANUAL_DESCRIPTIONS[item.id.replace('rawg-', '')] ? MANUAL_DESCRIPTIONS[item.id.replace('rawg-', '')][currentState.lang] :
                    (currentState.lang === 'es'
                        ? `${item.title} es una pieza fundamental del género ${item.genre}. Desde su lanzamiento el ${item.releaseDate}, ha cautivado a jugadores de todo el mundo ${item.developer ? `bajo el desarrollo de ${renderInternalLink(item.companyId || item.developer)}` : ''}, estableciendo nuevos estándares en la industria.`
                        : `${item.title} is a fundamental piece of the ${item.genre} genre. Since its release on ${item.releaseDate}, it has captivated players worldwide ${item.developer ? `under the development of ${renderInternalLink(item.companyId || item.developer)}` : ''}, setting new standards in the industry.`)))
            : (currentState.lang === 'es'
                ? `${item.name} ha moldeado la industria del videojuego a través de décadas de innovación y títulos legendarios.`
                : `${item.name} has shaped the video game industry through decades of innovation and legendary titles.`)
        }
                        </p>
                    </div>

                    ${isGame ? `
                        <div id="dev" style="margin-top: 3rem;">
                            <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1rem;">${currentState.lang === 'es' ? 'Desarrollo' : 'Development'}</h2>
                            <p>
                                ${item.development ? item.development[currentState.lang] :
                (currentState.lang === 'es'
                    ? `El proceso creativo detrás de ${item.title} se centró en expandir las fronteras de lo posible en el género ${item.genre}, buscando ofrecer una experiencia única y pulida para su audiencia.`
                    : `The creative process behind ${item.title} focused on pushing the boundaries of what's possible in the ${item.genre} genre, seeking to deliver a unique and polished experience for its audience.`)}
                            </p>
                        </div>
                        ${item.relatedGames ? `
                            <div id="related" style="margin-top: 3rem;">
                                <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1rem;">${currentState.lang === 'es' ? 'Juegos Relacionados' : 'Related Games'}</h2>
                                <ul class="game-list-horizontal" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem; list-style: none; padding: 0;">
                                    ${item.relatedGames.map(relatedId => {
                        const relatedGame = GAMES_DATA.find(g => g.id === relatedId);
                        if (!relatedGame) return '';
                        return `
                                            <li>
                                                <div class="mini-card" onclick="event.stopPropagation(); window.dispatchEvent(new CustomEvent('nav', {detail: '${relatedGame.id}'}))" style="cursor: pointer; transition: transform 0.2s;">
                                                    <img src="${getGameImage(relatedGame)}" alt="${relatedGame.title}" loading="lazy" style="width: 100%; height: 80px; object-fit: cover; border-radius: 4px; margin-bottom: 0.5rem;">
                                                    <div style="font-size: 0.8rem; font-weight: 600; line-height: 1.2;">${relatedGame.title}</div>
                                                </div>
                                            </li>
                                        `;
                    }).join('')}
                                </ul>
                            </div>
                        ` : ''}

                        <div id="rawg-related" style="margin-top: 3rem;">
                            <!-- Dynamically filled Similar Games from RAWG -->
                        </div>
                    ` : `
                        <div id="catalog" style="margin-top: 3rem;">
                            <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1rem;">${currentState.lang === 'es' ? 'Catálogo de Obras' : 'Catalog of Works'}</h2>
                            <ul class="game-list-horizontal" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem; list-style: none;">
                                ${[
            ...GAMES_DATA.filter(g => g.companyId === item.id),
            ...currentState.discoveryGames.filter(dg => dg.developers?.some(d => d.slug === item.id || d.name.toLowerCase() === item.name.toLowerCase())).map(transformRAWGToGame)
        ].map(g => `
                                    <li>
                                        <div class="mini-card" onclick="event.stopPropagation(); window.dispatchEvent(new CustomEvent('nav', {detail: '${g.id}'}))">
                                            <img src="${getGameImage(g)}" alt="${g.title}" loading="lazy" style="width: 100%; height: 80px; object-fit: cover; border-radius: 4px; margin-bottom: 0.5rem;">
                                            <span style="font-size: 0.8rem; font-weight: 600;">${g.title}</span>
                                        </div>
                                    </li>
                                `).join('')}
                                ${GAMES_DATA.filter(g => g.companyId === item.id).length === 0 && currentState.discoveryGames.filter(dg => dg.developers?.some(d => d.slug === item.id || d.name.toLowerCase() === item.name.toLowerCase())).length === 0 ? `<p style="color: var(--text-muted); font-size: 0.9rem;">${currentState.lang === 'es' ? 'No hay juegos vinculados en este momento.' : 'No games linked at this time.'}</p>` : ''}
                            </ul>
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;

    el.wikiArticle.innerHTML = articleHtml;

    // 3. Right Sidebar (Now optional or for extra info)
    el.wikiAppearanceSidebar.classList.add('hidden'); // Hide the right sidebar as requested to use left

    setupWikiListeners();

    // Trigger RAWG Similar Games load
    if (isGame) {
        loadRAWGSimilarGames(item);
        loadRAWGTrailers(item);
        loadRAWGAchievements(item);
        loadRAWGDLCs(item);

        // Automatic enrichment if not already done OR if requirements are missing
        const enriched = currentState.enrichedData[item.id];
        const needsEnrichment = !enriched ||
            (isGame && (!enriched.platforms || enriched.platforms.length === 0) && !enriched.steamRequirements) ||
            (item.rawgId && enriched.id && String(enriched.id) !== String(item.rawgId));

        if (needsEnrichment) {
            console.log(`✨ Automáticamente enriqueciendo datos para: ${item.title} `);
            enrichSingleGame(item.id);
        }
    }
}

function generateTableOfContents(item) {
    const isGame = !!item.releaseDate;
    const enriched = currentState.enrichedData[item.id] || item.rawg;

    const sections = [
        { id: 'intro', title: currentState.lang === 'es' ? 'Introducción' : 'Introduction', show: true },
        { id: 'gallery', title: currentState.lang === 'es' ? 'Galería' : 'Gallery', show: !!enriched?.screenshots },
        { id: 'achievements', title: currentState.lang === 'es' ? 'Logros' : 'Achievements', show: true },
        { id: 'requirements', title: currentState.lang === 'es' ? 'Requerimientos' : 'Requirements', show: !!enriched?.platforms || !!enriched?.steamRequirements },
        { id: 'trailers', title: currentState.lang === 'es' ? 'Tráilers' : 'Trailers', show: true },
        { id: 'dlcs', title: currentState.lang === 'es' ? 'Contenido Adicional' : 'Additional Content', show: true },
        { id: 'history', title: currentState.lang === 'es' ? 'Historia' : 'History', show: true },
        { id: 'dev', title: currentState.lang === 'es' ? 'Desarrollo' : 'Development', show: !!item.development || isGame },
        { id: 'related', title: currentState.lang === 'es' ? 'Relacionados' : 'Related', show: !!item.relatedGames || isGame }
    ];

    // Ensure IDs exist in the DOM or fallback
    const visibleSections = sections.filter(s => s.show);

    return `
        <div class="toc-container">
            <div class="toc-title">
                ${currentState.lang === 'es' ? 'Mapa de Contenidos' : 'Article Contents'}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </div>
            <ul class="toc-list">
                ${visibleSections.map((s, i) => `
                    <li class="toc-item">
                        <span class="toc-number">${i + 1}.</span>
                        <a href="#${s.id}" class="toc-link">${s.title}</a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

window.scrollToSection = function (e, id) {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const offset = 100; // Account for fixed header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

window.toggleSidebarMenu = function (btn) {
    const target = btn.parentElement.nextElementSibling;
    if (!target) return;

    if (target.style.display === 'none') {
        target.style.display = 'block';
        btn.innerText = currentState.lang === 'es' ? 'ocultar' : 'hide';
    } else {
        target.style.display = 'none';
        btn.innerText = currentState.lang === 'es' ? 'mostrar' : 'show';
    }
};

async function loadRAWGTrailers(item) {
    const rawgData = currentState.enrichedData[item.id] || item.rawg;

    // Helper to hide TOC section
    const hideTOCSection = () => {
        const tocLink = document.querySelector('.toc-link[href="#trailers"]');
        if (tocLink) {
            tocLink.closest('.toc-item')?.remove();
        }
    };

    if (!rawgData || !rawgData.id) {
        hideTOCSection();
        return;
    }

    const container = document.getElementById('trailers-container');
    if (!container) return;

    try {
        let trailers = await getGameTrailers(rawgData.id);

        // Fallback: Check for clip in enriched data
        if ((!trailers || trailers.length === 0) && rawgData.clip) {
            trailers = [{
                name: currentState.lang === 'es' ? 'Video del Juego' : 'Gameplay Video',
                preview: rawgData.clip.preview,
                data: { max: rawgData.clip.clip }
            }];
        }

        if (!trailers || trailers.length === 0) {
            hideTOCSection();
            return;
        }

        container.innerHTML = `
            <section id="trailers" style="margin-top: 3rem;">
                <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1.5rem;">
                    ${currentState.lang === 'es' ? 'Tráilers y Videos' : 'Trailers & Videos'}
                </h2>
                <div class="trailers-grid">
                    ${trailers.map(t => `
                        <div class="trailer-card" onclick="showTrailerVideo('${t.data.max}')">
                            <div class="trailer-thumb-container">
                                <img src="${t.preview}" class="trailer-thumb" alt="${t.name}">
                                <div class="play-button-overlay">
                                    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                            </div>
                            <div class="trailer-info">
                                <span class="trailer-name">${t.name}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
    `;
    } catch (e) {
        console.error('Failed to load trailers:', e);
        hideTOCSection();
    }
}

async function loadRAWGAchievements(item) {
    const rawgData = currentState.enrichedData[item.id] || item.rawg;
    if (!rawgData || !rawgData.id) return;

    const container = document.getElementById('achievements-container');
    if (!container) return;

    try {
        const achievements = await getGameAchievements(rawgData.id);
        if (!achievements || achievements.length === 0) {
            document.querySelector('.toc-link[href="#achievements"]')?.closest('.toc-item')?.remove();
            return;
        }

        container.innerHTML = `
            <section id="achievements" style="margin-top: 3rem;">
                <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1.5rem;">
                    ${currentState.lang === 'es' ? 'Logros y Trofeos' : 'Achievements & Trophies'}
                </h2>
                <div class="achievements-grid">
                    ${achievements.map(a => `
                        <div class="achievement-card">
                            <img src="${a.image || 'https://api.dicebear.com/7.x/shapes/svg?seed=' + a.id}" class="achievement-image" alt="${a.name}">
                            <div class="achievement-info">
                                <span class="achievement-name">${a.name}</span>
                                <span class="achievement-description">${a.description || ''}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    } catch (e) {
        console.error('Failed to load achievements:', e);
    }
}

async function loadRAWGDLCs(item) {
    const rawgData = currentState.enrichedData[item.id] || item.rawg;
    if (!rawgData || !rawgData.id) return;

    const container = document.getElementById('dlcs-container');
    if (!container) return;

    try {
        const dlcs = await getGameDLC(rawgData.id);
        if (!dlcs || dlcs.length === 0) {
            document.querySelector('.toc-link[href="#dlcs"]')?.closest('.toc-item')?.remove();
            return;
        }

        container.innerHTML = `
            <section id="dlcs" style="margin-top: 3rem;">
                <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1.5rem;">
                    ${currentState.lang === 'es' ? 'Expansiones y DLC' : 'DLC & Expansions'}
                </h2>
                <div class="dlc-grid">
                    ${dlcs.map(d => `
                        <div class="dlc-card" onclick="navigateToWiki('rawg-${d.id}')">
                            <img src="${d.background_image || 'https://api.dicebear.com/7.x/shapes/svg?seed=' + d.id}" class="dlc-image" alt="${d.name}">
                            <div class="dlc-info">
                                <span class="dlc-name">${d.name}</span>
                                <span class="dlc-meta">${d.released ? d.released.split('-')[0] : ''}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    } catch (e) {
        console.error('Failed to load DLCs:', e);
    }
}

function showTrailerVideo(videoUrl) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('video-player-container');
    if (!modal || !container) return;

    // We can use a simple video tag if it's a direct file or an iframe if we can embed it
    // Most RAWG video URLs are direct .mp4 files (from rawgRequest movies)
    container.innerHTML = `
        <video controls autoplay class="premium-video" style="width: 100%; height: 100%; border-radius: 8px;">
            <source src="${videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;

    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;
    modal.classList.add('visible');
}

function setupWikiListeners() {
    const sections = document.querySelectorAll('.wiki-article div[id], .wiki-article section[id]');
    const navLinks = document.querySelectorAll('.wiki-sidebar a');

    // Attach smooth scroll to ALL internal links in wiki
    const allLinks = document.querySelectorAll('.wiki-container a[href^="#"]');
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href').substring(1);
            if (id) {
                scrollToSection(e, id);
            } else {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    window.onscroll = () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    };

    // Appearance listeners
    const textRadios = document.querySelectorAll('input[name="text-size"]');
    textRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const size = e.target.value;
            currentState.textSize = size;
            localStorage.setItem('gamewiki-text-size', size);

            const article = document.querySelector('.wiki-article');
            if (size === 'small') article.style.fontSize = '0.9rem';
            if (size === 'standard') article.style.fontSize = '1.1rem';
            if (size === 'large') article.style.fontSize = '1.3rem';
        });
    });

    const widthRadios = document.querySelectorAll('input[name="content-width"]');
    widthRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const width = e.target.value;
            currentState.contentWidth = width;
            localStorage.setItem('gamewiki-content-width', width);

            const article = document.querySelector('.wiki-article');
            if (width === 'standard') {
                article.style.maxWidth = '900px';
                article.style.margin = '0';
            }
            if (width === 'wide') {
                article.style.maxWidth = '1000px'; // Un poco más ancho que standard pero no infinito para legibilidad
                article.style.margin = '0';
            }
        });
    });
}

// --- Store & Pricing Logic (CheapShark Integration) ---
async function fetchGameDeals(gameTitle) {
    try {
        // 1. Search for game to get ID
        // Note: 'exact=1' helps avoid unrelated titles
        const searchRes = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(gameTitle)}&limit=1&exact=0`);
        const searchData = await searchRes.json();

        if (!searchData || searchData.length === 0) return null;

        const bestMatch = searchData[0]; // Take the first result
        const gameId = bestMatch.gameID;

        // 2. Get deals for this specific game
        const dealsRes = await fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameId}`);
        const dealsData = await dealsRes.json();

        if (!dealsData || !dealsData.deals || dealsData.deals.length === 0) return null;

        // 3. Map useful stores (we only want major ones usually)
        // Store IDs: 1=Steam, 7=GOG, 25=Epic, 11=Humble, 8=Origin(EA), 13=Uplay
        const validStoreIds = ['1', '7', '25', '8', '11', '13'];
        const deals = dealsData.deals.filter(d => validStoreIds.includes(d.storeID));

        // Get Store metadata (cached or constant map would be better but let's map manually for speed)
        const storeMeta = {
            '1': { name: 'Steam', logo: 'https://www.cheapshark.com/img/stores/logos/0.png' },
            '7': { name: 'GOG', logo: 'https://www.cheapshark.com/img/stores/logos/6.png' },
            '25': { name: 'Epic Games', logo: 'https://www.cheapshark.com/img/stores/logos/24.png' },
            '8': { name: 'EA / Origin', logo: 'https://www.cheapshark.com/img/stores/logos/7.png' },
            '11': { name: 'Humble Store', logo: 'https://www.cheapshark.com/img/stores/logos/10.png' },
            '13': { name: 'Ubisoft Connect', logo: 'https://www.cheapshark.com/img/stores/logos/12.png' }
        };

        return deals.map(d => ({
            name: storeMeta[d.storeID]?.name || 'Store',
            logo: storeMeta[d.storeID]?.logo || '',
            price: d.price,
            retailPrice: d.retailPrice,
            savings: parseFloat(d.savings).toFixed(0),
            dealID: d.dealID
        })).sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); // Cheapest first

    } catch (e) {
        console.error("Failed to fetch deals", e);
        return null; // Fallback to whatever was there before
    }
}

// --- Steam API Integration (via Proxy) ---
function getUserCountryCode() {
    const lang = navigator.language || 'en-US';
    const parts = lang.split('-');
    if (parts.length > 1) {
        const region = parts[1].toUpperCase();
        // '419' is frequent for "Latin America" in browsers, map to 'MX' as a reasonable regional proxy for pricing
        if (region === '419') return 'MX';
        if (region.length === 2) return region;
    }
    return 'US';
}

async function fetchSteamPrice(appId) {
    if (!appId) return null;
    const country = getUserCountryCode();

    // Using AllOrigins as a transparent CORS proxy
    const targetUrl = `https://store.steampowered.com/api/appdetails?appids=${appId}&cc=${country}&filters=price_overview`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;

    try {
        const res = await fetch(proxyUrl);
        const data = await res.json();

        if (data && data[appId] && data[appId].success && data[appId].data.price_overview) {
            return data[appId].data.price_overview; // { currency: "EUR", initial: 5999, final: 2999, discount_percent: 50, final_formatted: "29,99€" }
        }
    } catch (e) {
        console.warn('Steam API fetch failed:', e);
    }
    return null;
}

async function fetchSteamRequirements(appId) {
    if (!appId) return null;
    const targetUrl = `https://store.steampowered.com/api/appdetails?appids=${appId}&filters=pc_requirements`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;

    try {
        const res = await fetch(proxyUrl);
        const data = await res.json();
        if (data && data[appId] && data[appId].success && data[appId].data.pc_requirements) {
            return data[appId].data.pc_requirements;
        }
    } catch (e) {
        console.warn('Steam Requirements fetch failed:', e);
    }
    return null;
}


async function renderStores_DEPRECATED(game, lang) {
    const container = document.getElementById('store-container');
    if (!container) return;

    // 1. Fetch from Steam (if App ID exists)
    const appId = STEAM_APP_IDS[game.id];
    const steamData = await fetchSteamPrice(appId);

    // 2. Fetch Aggregated Deals (CheapShark)
    const deals = await fetchGameDeals(game.title);

    let html = '<div class="store-grid">';

    // Render Steam Card (Local Price)
    if (steamData) {
        const isDiscounted = steamData.discount_percent > 0;
        const discount = isDiscounted ? `-${steamData.discount_percent}%` : '';

        html += `
            <a href="https://store.steampowered.com/app/${appId}" target="_blank" rel="noopener noreferrer" class="store-card best-deal" style="border-color: #66c0f4; background: linear-gradient(135deg, rgba(102, 192, 244, 0.1) 0%, rgba(0,0,0,0) 100%);">
                ${discount ? `<div class="store-discount-badge" style="background: #66c0f4;">${discount}</div>` : ''}
                <div class="store-card-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" class="store-logo" alt="Steam">
                    <span class="store-name">Steam (Local)</span>
                </div>
                <div class="store-price-container">
                    <span class="store-current-price" style="color: #66c0f4;">${steamData.final_formatted}</span>
                    ${isDiscounted ? `<span class="store-original-price">${steamData.initial_formatted}</span>` : ''}
                </div>
            </a>
        `;
    }

    // Render Other Deals (CheapShark)
    if (deals && deals.length > 0) {
        deals.forEach((deal) => {
            // Skip Steam if we have better local data
            if (deal.name === 'Steam' && steamData) return;

            // Highlight best deal ONLY if it's better than Steam or Steam failed
            const isBetterThanSteam = steamData ? (parseFloat(deal.price) < steamData.final / 100) : false;
            const isBest = !steamData && deal === deals[0]; // If no Steam data, first is best

            const discount = parseFloat(deal.savings) > 0 ? `-${deal.savings}%` : '';

            html += `
                <a href="https://www.cheapshark.com/redirect?dealID=${deal.dealID}" target="_blank" rel="noopener noreferrer" class="store-card ${(isBest || isBetterThanSteam) ? 'best-deal' : ''}">
                    ${discount ? `<div class="store-discount-badge">${discount}</div>` : ''}
                    <div class="store-card-header">
                        <img src="${deal.logo}" class="store-logo" alt="${deal.name}">
                        <span class="store-name">${deal.name}</span>
                    </div>
                    <div class="store-price-container">
                        <span class="store-current-price">$${deal.price} <span style="font-size: 0.6em; color: var(--text-muted); font-weight: 400;">USD</span></span>
                        ${deal.retailPrice > deal.price ? `<span class="store-original-price">$${deal.retailPrice}</span>` : ''}
                    </div>
                </a>
            `;
        });
    } else if (!steamData && game.stores) {
        // Fallback to manual links if no API data at all
        game.stores.forEach(store => {
            html += `
                <a href="${store.url}" target="_blank" rel="noopener noreferrer" class="store-card">
                    <div class="store-card-header">
                        <span class="store-name">${store.name}</span>
                    </div>
                    <div class="store-price-container">
                        <span class="store-current-price" style="font-size: 0.8rem; opacity: 0.7;">Ir a tienda</span>
                    </div>
                </a>
            `;
        });
    } else if (!steamData && (!deals || deals.length === 0)) {
        html = `<span style="color: var(--text-muted); font-size: 0.9rem;">${lang === 'es' ? 'No hay ofertas disponibles.' : 'No deals currently available.'}</span>`;
        container.innerHTML = html;
        return;
    }

    html += '</div>';

    // Footer
    if (steamData || (deals && deals.length > 0)) {
        html += `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px; padding: 0 5px;">
                <span style="font-size: 0.7rem; color: var(--text-muted); font-style: italic;">
                    ${steamData ? (lang === 'es' ? 'Precios locales detectados (Steam)' : 'Local pricing detected (Steam)') : ''}
                </span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">CheapShark & Steam API</span>
            </div>
        `;
    }

    container.innerHTML = html;
}

function renderInternalLink(companyId) {
    if (!companyId || companyId === 'undefined' || companyId === 'null') return 'N/A';

    // Check if it's an ID or name in our COMPANIES_DATA
    const comp = COMPANIES_DATA.find(c =>
        c.id === companyId ||
        c.name.toLowerCase() === companyId.toLowerCase()
    );

    if (comp) {
        return `<span class="internal-link" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${comp.id}'}))">${comp.name}</span>`;
    }

    // If not in our database, just return the name itself as text
    return companyId;
}

function renderSystemRequirements(enriched) {
    const hasSteam = enriched && enriched.steamRequirements;

    // Check if we have data AND if it's the NEW format (with requirements objects)
    const hasDetailedPlatforms = enriched && enriched.platforms &&
        enriched.platforms.length > 0 &&
        typeof enriched.platforms[0] === 'object';

    const requirements = hasDetailedPlatforms
        ? enriched.platforms.filter(p => p.requirements && (p.requirements.minimum || p.requirements.recommended))
        : [];

    if (!hasSteam && (!enriched || !hasDetailedPlatforms || (hasDetailedPlatforms && requirements.length === 0))) {

        // If no data, or old data format, or new format but no requirements found in RAWG
        // We show the "Fetch" box unless we are SURE RAWG has nothing (which we can't be without trying)
        return `
            <div class="fetch-req-box">
                <div style="font-size: 2rem; margin-bottom: 1rem;">🔧</div>
                <h3 style="margin-bottom: 0.5rem; color: var(--text);">
                    ${currentState.lang === 'es' ? '¿Faltan los Requerimientos?' : 'Missing Requirements?'}
                </h3>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; max-width: 400px; margin-left: auto; margin-right: auto;">
                    ${currentState.lang === 'es'
                ? 'Podemos intentar obtener los datos técnicos (mínimos y recomendados) directamente desde RAWG.'
                : 'We can try to fetch technical data (minimum and recommended) directly from RAWG.'}
                </p>
                <button class="lang-btn" onclick="enrichSingleGame('${currentState.currentId}')" style="display: flex; align-items: center; gap: 0.5rem; margin: 0 auto; padding: 0.75rem 1.5rem;">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
                    ${currentState.lang === 'es' ? 'Actualizar Ficha Técnica' : 'Update Technical Data'}
                </button>
            </div>
        `;
    }

    const steam = enriched?.steamRequirements;

    // Build combined list of requirement sources
    const allReqs = [];
    if (steam) {
        allReqs.push({
            id: 'steam-pc',
            name: 'PC (Steam)',
            minimum: steam.minimum,
            recommended: steam.recommended,
            isHtml: true
        });
    }

    requirements.forEach(r => {
        // Skip adding RAWG PC if we already have Steam PC
        const isPc = r.name.toLowerCase().includes('pc') || r.name.toLowerCase().includes('windows');
        if (steam && isPc) return;

        allReqs.push({
            id: r.name.replace(/\s+/g, '-'),
            name: r.name,
            minimum: r.requirements.minimum?.replace('Minimum:', '').trim(),
            recommended: r.requirements.recommended?.replace('Recommended:', '').trim(),
            isHtml: false
        });
    });

    if (allReqs.length === 0) return ''; // Should not happen due to if above

    return `
        <section id="requirements" style="margin-top: 3rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; border: none;">
                    ${currentState.lang === 'es' ? 'Requerimientos del Sistema' : 'System Requirements'}
                </h2>
                ${steam ? '<span style="font-size: 0.7rem; color: var(--text-muted); padding: 2px 8px; border: 1px solid var(--border); border-radius: 4px; opacity: 0.8;">via Steam</span>' : ''}
            </div>
            <div class="req-container">
                <div class="req-tabs">
                    ${allReqs.map((r, i) => `
                        <button class="req-tab-btn ${i === 0 ? 'active' : ''}" onclick="switchReqTab(this, '${r.id}')">
                            ${r.name}
                        </button>
                    `).join('')}
                </div>
                <div class="req-content">
                    ${allReqs.map((r, i) => `
                        <div id="req-${r.id}" class="req-panel ${i === 0 ? '' : 'hidden'}">
                            ${r.minimum ? `
                                <div class="req-section">
                                    <div class="req-label">${currentState.lang === 'es' ? 'Mínimo' : 'Minimum'}</div>
                                    <div class="req-text" style="background: var(--bg); padding: 1.25rem; border-radius: 8px; border-left: 4px solid #94a3b8; font-family: ${r.isHtml ? 'inherit' : 'monospace'}; white-space: ${r.isHtml ? 'normal' : 'pre-wrap'}; font-size: 0.9rem; line-height: 1.5;">
                                        ${r.isHtml ? r.minimum : r.minimum}
                                    </div>
                                </div>
                            ` : ''}
                            ${r.recommended ? `
                                <div class="req-section" style="margin-top: 2rem;">
                                    <div class="req-label">${currentState.lang === 'es' ? 'Recomendado' : 'Recommended'}</div>
                                    <div class="req-text" style="background: var(--bg); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--primary); font-family: ${r.isHtml ? 'inherit' : 'monospace'}; white-space: ${r.isHtml ? 'normal' : 'pre-wrap'}; font-size: 0.9rem; line-height: 1.5;">
                                        ${r.isHtml ? r.recommended : r.recommended}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}


window.switchReqTab = function (btn, platformId) {
    const container = btn.closest('.req-container');
    container.querySelectorAll('.req-tab-btn').forEach(b => b.classList.remove('active'));
    container.querySelectorAll('.req-panel').forEach(p => p.classList.add('hidden'));

    btn.classList.add('active');
    document.getElementById(`req-${platformId}`).classList.remove('hidden');
};

async function loadRAWGSimilarGames(item) {
    const rawgData = currentState.enrichedData[item.id] || item.rawg;
    if (!rawgData || !rawgData.id) return;

    const container = document.getElementById('rawg-related');
    if (!container) return;

    // Show loading
    container.innerHTML = `
        <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1rem;">
            ${currentState.lang === 'es' ? 'Otros juegos de la serie' : 'More games in this series'}
        </h2>
        <div class="loading-spinner" style="width: 20px; height: 20px; margin: 2rem auto;"></div>
    `;

    try {
        const series = await getGameSeries(rawgData.id);
        if (!series || series.length === 0) {
            container.innerHTML = '';
            return;
        }

        const html = `
            <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1.5rem;">
                ${currentState.lang === 'es' ? 'Otros juegos de la serie' : 'More games in this series'}
            </h2>
            <div class="similar-games-grid">
                ${series.slice(0, 6).map(g => `
                    <div class="similar-game-card" onclick="navigateToSimilarGame('${g.id}', '${g.name}', '${g.slug}')">
                        <img src="${g.background_image || 'https://api.dicebear.com/7.x/shapes/svg?seed=' + g.id}" alt="${g.name}" loading="lazy">
                        <div class="similar-game-info">
                            <span class="similar-game-title">${g.name}</span>
                            <span class="similar-game-meta">${g.released ? g.released.split('-')[0] : ''} • ${g.rating}★</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.innerHTML = html;
    } catch (e) {
        console.error('Failed to load similar games:', e);
        container.innerHTML = '';
    }
}

window.navigateToSimilarGame = function (gameId, name, slug) {
    // 1. Try to find in our local database first to keep using internal IDs if possible
    const match = GAMES_DATA.find(g =>
        g.rawgId == gameId ||
        g.id === slug ||
        g.title.toLowerCase() === name.toLowerCase()
    );

    if (match) {
        navigateToWiki(match.id);
    } else {
        // 2. Not in local? No problem! Use the numeric ID with the rawg- prefix.
        // navigateToWiki will fetch all details and create the page dynamically.
        navigateToWiki(`rawg-${gameId}`);
    }
    window.scrollTo(0, 0);
};

// Redundant renderInternalLink removed

// --- Mobile Sidebar Toggle ---
function renderWikiLoading() {
    el.wikiContainer.classList.remove('hidden');
    el.hero.classList.add('hidden');
    el.gameGrid.classList.add('hidden');
    el.genreFilter.classList.add('hidden');
    el.wikiArticle.innerHTML = `
        <div class="wiki-skeleton" style="padding: 2rem; max-width: 900px; margin: 0 auto;">
            <div class="skeleton-title skeleton"></div>
            <div style="display: flex; gap: 2rem; margin-bottom: 3rem;">
                <div style="flex: 2;">
                    <div class="skeleton-image skeleton" style="height: 300px;"></div>
                    <div class="skeleton-text skeleton"></div>
                    <div class="skeleton-text skeleton"></div>
                    <div class="skeleton-text skeleton" style="width: 80%;"></div>
                </div>
                <div style="flex: 1;">
                    <div class="skeleton skeleton-image" style="height: 400px;"></div>
                </div>
            </div>
            <div class="skeleton-title skeleton" style="width: 40%;"></div>
            <div class="skeleton-text skeleton"></div>
            <div class="skeleton-text skeleton"></div>
        </div>
    `;
}

// Redundant duplicate removed

window.toggleWikiSidebar = function () {
    const sidebar = el.wikiSidebar;
    sidebar.classList.toggle('mobile-active');

    // Create overlay if it doesn't exist
    let overlay = document.getElementById('sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'sidebar-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.4)'; // Less dark for better readability
        overlay.style.zIndex = '900';
        overlay.onclick = () => window.toggleWikiSidebar();
        document.body.appendChild(overlay);
    }

    if (sidebar.classList.contains('mobile-active')) {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // We must lift the main content container above the body overlay
        el.appContent.style.position = 'relative';
        el.appContent.style.zIndex = '1000';
    } else {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        el.appContent.style.zIndex = '';
    }
};

// --- Event Listeners ---
function setupEventListeners() {
    el.langToggle.onclick = () => {
        // Capture current scroll before re-render
        const currentScroll = window.scrollY;

        currentState.lang = currentState.lang === 'es' ? 'en' : 'es';
        localStorage.setItem('gamewiki-lang', currentState.lang);
        updateUILabels();
        if (typeof trackLangSwap === 'function') trackLangSwap();

        if (currentState.view === 'home') {
            // For home, we update the state so renderHome picks it up
            currentState.homeScrollY = currentScroll;
            renderHome(currentState.currentGenre);
        } else {
            // For wiki, we just restore it immediately after render
            renderWiki();
            window.scrollTo(0, currentScroll);
        }
    };

    el.themeToggle.onclick = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('gamewiki-theme', newTheme);
        currentState.theme = newTheme;
    };

    el.homeLink.onclick = () => {
        filterByGenre(null);
    };

    // Favorites button
    const favoritesBtn = document.getElementById('favorites-btn');
    if (favoritesBtn) {
        favoritesBtn.onclick = () => {
            renderFavorites();
        };
    }

    // Search input focus behavior for history
    el.search.onfocus = () => {
        if (!el.search.value.trim() && currentState.searchHistory.length > 0) {
            handleSearch('');
        }
    };

    // Clear search button
    const clearSearchBtn = document.getElementById('clear-search-btn');
    if (clearSearchBtn) {
        clearSearchBtn.onclick = () => {
            el.search.value = '';
            clearSearchBtn.style.display = 'none';
            handleSearch('');
            el.search.focus();
        };
    }

    // Keyboard Shortcuts Button
    if (el.kbdShortcutsBtn) {
        el.kbdShortcutsBtn.onclick = () => {
            if (el.kbdModal) {
                el.kbdModal.classList.remove('hidden');
                void el.kbdModal.offsetWidth;
                el.kbdModal.classList.add('visible');
            }
        };
    }

    // Achievements Button
    if (el.achievementsBtn) {
        el.achievementsBtn.onclick = () => {
            if (el.achievementsModal) {
                renderAchievementsModal();
                el.achievementsModal.classList.remove('hidden');
                void el.achievementsModal.offsetWidth;
                el.achievementsModal.classList.add('visible');
            }
        };
    }

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        // Search: '/'
        if (e.key === '/' && document.activeElement !== el.search) {
            e.preventDefault();
            el.search.focus();
        }

        // Home: Alt + H
        if (e.altKey && e.key.toLowerCase() === 'h') {
            e.preventDefault();
            renderHome();
        }

        // Favorites: Alt + F
        if (e.altKey && e.key.toLowerCase() === 'f') {
            e.preventDefault();
            renderFavorites();
        }

        // Close Modals: Escape
        if (e.key === 'Escape') {
            const visibleModal = document.querySelector('.modal:not(.hidden)');
            if (visibleModal) {
                const closeBtn = visibleModal.querySelector('.close-modal');
                if (closeBtn) closeBtn.click();
            }
        }
    });

    // Close search on click outside
    document.addEventListener('click', (e) => {
        if (!el.search.contains(e.target) && !el.searchResults.contains(e.target)) {
            el.searchResults.classList.add('hidden');
        }
    });

    // Global navigation event to handle dynamic internal links
    window.addEventListener('nav', (e) => {
        if (el.search.value.trim()) {
            addToSearchHistory(el.search.value.trim());
        }
        navigateToWiki(e.detail);
        el.searchResults.classList.add('hidden');
        el.search.value = '';
    });
}

// --- Lightbox Logic ---
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');

    if (closeBtn) {
        closeBtn.onclick = () => {
            lightbox.classList.remove('active');
        };
    }

    lightbox.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
}

function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const img = lightbox.querySelector('.lightbox-img');
    img.src = imgSrc;
    lightbox.classList.add('active');
}

// --- Task 2: Advanced Search & Filters ---
function initializeSearchFilters() {
    const genreSelect = document.getElementById('filter-genre');
    const yearSelect = document.getElementById('filter-year');
    const devSelect = document.getElementById('filter-developer');
    const filterToggle = document.getElementById('filters-toggle-btn');
    const filterPanel = document.getElementById('search-filters-panel');
    const clearBtn = document.getElementById('clear-filters-btn');

    if (!genreSelect) return;

    // 1. Populate Genre Select
    const genres = new Set();
    GAMES_DATA.forEach(g => {
        if (g.genre) {
            g.genre.split(',').forEach(s => genres.add(s.trim()));
        }
    });

    if (genres.size === 0) {
        ['Action', 'Adventure', 'RPG', 'Shooter', 'Indie', 'Strategy', 'Puzzle', 'Platformer', 'Sports', 'Racing', 'Fighting'].forEach(g => genres.add(g));
    }

    Array.from(genres).sort().forEach(g => {
        const opt = document.createElement('option');
        opt.value = g;
        opt.textContent = g;
        genreSelect.appendChild(opt);
    });

    // 2. Populate Year Select
    const years = new Set();
    GAMES_DATA.forEach(g => {
        if (g.releaseDate) {
            const year = g.releaseDate.split('-')[0];
            if (year) years.add(year);
        }
    });

    if (years.size === 0) {
        const currentYear = new Date().getFullYear();
        for (let y = currentYear; y >= currentYear - 15; y--) years.add(y.toString());
    }

    Array.from(years).sort((a, b) => b - a).forEach(y => {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y;
        yearSelect.appendChild(opt);
    });

    // 3. Populate Developer Select
    COMPANIES_DATA.sort((a, b) => a.name.localeCompare(b.name)).forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        devSelect.appendChild(opt);
    });

    // 4. Connect Listeners
    filterToggle.onclick = () => {
        filterPanel.classList.toggle('hidden');
        filterToggle.classList.toggle('active');
        const wrapper = document.querySelector('.search-wrapper');
        if (wrapper) wrapper.classList.toggle('filters-active');
    };

    const runSearch = () => {
        currentState.searchFilters.genre = genreSelect.value || null;
        currentState.searchFilters.year = yearSelect.value || null;
        currentState.searchFilters.developer = devSelect.value || null;
        handleSearch(el.search.value);
    };

    genreSelect.onchange = runSearch;
    yearSelect.onchange = runSearch;
    devSelect.onchange = runSearch;

    clearBtn.onclick = () => {
        genreSelect.value = '';
        yearSelect.value = '';
        devSelect.value = '';
        runSearch();
    };

    // 5. Update Search Input with Debounce & Nav
    let searchTimeout;
    el.search.oninput = (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(e.target.value);
        }, 250);
    };

    el.search.onkeydown = (e) => {
        const items = el.searchResults.querySelectorAll('.search-item');
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentState.selectedSearchIndex = Math.min(currentState.selectedSearchIndex + 1, items.length - 1);
            updateSearchSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentState.selectedSearchIndex = Math.max(currentState.selectedSearchIndex - 1, -1);
            updateSearchSelection(items);
        } else if (e.key === 'Enter' && currentState.selectedSearchIndex > -1) {
            e.preventDefault();
            items[currentState.selectedSearchIndex].click();
        } else if (e.key === 'Escape') {
            el.searchResults.classList.add('hidden');
        }
    };
}

function renderSearchHistory() {
    if (currentState.searchHistory.length === 0) return '';
    return `
        <div class="search-section-header" style="display: flex; justify-content: space-between; align-items: center;">
            <span>${currentState.lang === 'es' ? 'Búsquedas Recientes' : 'Recent Searches'}</span>
            <span class="clear-all-link" onclick="clearSearchHistory(); el.searchResults.innerHTML = renderSearchHistory();" style="font-size: 0.65rem; cursor: pointer; opacity: 0.6; text-transform: none; letter-spacing: 0;">${currentState.lang === 'es' ? 'Limpiar todo' : 'Clear all'}</span>
        </div>
        ${currentState.searchHistory.map(q => `
            <div class="history-item" onclick="el.search.value='${q}'; handleSearch('${q}')" style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1;">
                    <svg class="history-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span>${q}</span>
                </div>
                <button class="remove-history-btn" onclick="event.stopPropagation(); removeFromSearchHistory('${q}'); el.searchResults.innerHTML = renderSearchHistory();" title="Quitar">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
        `).join('')}
    `;
}

function handleSearch(query) {
    const q = query.toLowerCase().trim();
    const filters = currentState.searchFilters;
    const clearBtn = document.getElementById('clear-search-btn');
    if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

    // If no query and no filters, show history if available
    if (!q && !filters.genre && !filters.year && !filters.developer) {
        if (currentState.searchHistory.length > 0) {
            el.searchResults.innerHTML = renderSearchHistory();
            el.searchResults.classList.remove('hidden');
        } else {
            el.searchResults.classList.add('hidden');
        }
        return;
    }

    const gamesToSearch = [
        ...GAMES_DATA,
        ...currentState.discoveryGames.map(transformRAWGToGame),
        ...Object.values(currentState.dynamicDetails).map(transformRAWGToGame)
    ].filter((v, i, a) => a.findIndex(t => (t && t.id === v.id)) === i);

    let filteredGames = gamesToSearch.filter(g => {
        if (!g) return false;
        const matchesQuery = !q || g.title.toLowerCase().includes(q);
        const matchesGenre = !filters.genre || g.genre.includes(filters.genre);
        const matchesYear = !filters.year || g.releaseDate.startsWith(filters.year);
        const matchesDev = !filters.developer || (
            (g.companyId && g.companyId === filters.developer) ||
            (g.developer && g.developer.toLowerCase().includes(filters.developer.toLowerCase()))
        );
        return matchesQuery && matchesGenre && matchesYear && matchesDev;
    });

    let filteredCompanies = q ? COMPANIES_DATA.filter(c => c.name.toLowerCase().includes(q)) : [];

    if (filteredGames.length || filteredCompanies.length) {
        el.searchResults.classList.remove('hidden');
        currentState.selectedSearchIndex = -1;

        let html = '';

        // Add Filter Indicator
        if (filters.genre || filters.year || filters.developer) {
            const t = UI_TEXT[currentState.lang];
            html += `<div class="search-section-header" style="background: rgba(var(--primary-rgb), 0.1); padding: 0.5rem 1rem; margin-bottom: 0.5rem; border-bottom: 1px solid var(--primary);">
                <span>🔍 ${t.showing}: </span>
                ${filters.genre ? `<span class="filter-tag">${filters.genre}</span>` : ''}
                ${filters.year ? `<span class="filter-tag">${filters.year}</span>` : ''}
                ${filters.developer ? `<span class="filter-tag">${COMPANIES_DATA.find(c => c.id === filters.developer)?.name || filters.developer}</span>` : ''}
            </div>`;
        }
        if (filteredGames.length) {
            html += `<div class="search-section-header">${currentState.lang === 'es' ? 'Juegos' : 'Games'}</div>`;
            html += filteredGames.slice(0, 10).map(g => `
                <div class="search-item" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${g.id}'}))">
                    <img src="${getGameImage(g)}" alt="${g.title}">
                    <div style="display: flex; flex-direction: column;">
                        <span class="item-title">${g.title}</span>
                        <span class="item-meta">${g.genre.split(',')[0]} • ${g.releaseDate.split('-')[0]}</span>
                    </div>
                </div>
            `).join('');
        }

        if (filteredCompanies.length) {
            html += `<div class="search-section-header">${currentState.lang === 'es' ? 'Compañías' : 'Companies'}</div>`;
            html += filteredCompanies.slice(0, 5).map(c => `
                <div class="search-item" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${c.id}'}))">
                    <img src="https://api.dicebear.com/7.x/shapes/svg?seed=${c.id}" style="width: 25px; height: 25px;">
                    <span class="item-title">${c.name}</span>
                </div>
            `).join('');
        }

        el.searchResults.innerHTML = html;
    } else {
        el.searchResults.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 0.5rem; opacity: 0.5;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg><br>
            ${currentState.lang === 'es' ? 'No se encontraron resultados' : 'No results found'}
        </div>`;
        el.searchResults.classList.remove('hidden');
    }
}

function updateSearchSelection(items) {
    items.forEach((item, idx) => {
        if (idx === currentState.selectedSearchIndex) {
            item.classList.add('selected');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('selected');
        }
    });
}

// --- Modal Logic ---
function setupModalListeners() {
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.onclick = () => {
                modal.classList.remove('visible');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    // If video modal, stop video
                    if (modal.id === 'video-modal') {
                        const container = document.getElementById('video-player-container');
                        if (container) container.innerHTML = '';
                    }
                }, 300);
            };
        }

        modal.onclick = (event) => {
            if (event.target === modal) {
                modal.classList.remove('visible');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    if (modal.id === 'video-modal') {
                        const container = document.getElementById('video-player-container');
                        if (container) container.innerHTML = '';
                    }
                }, 300);
            }
        };
    });
}

async function openDealsModal(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId) ||
        transformRAWGToGame(currentState.discoveryGames.find(g => `rawg-${g.id}` === gameId)) ||
        transformRAWGToGame(currentState.dynamicDetails[gameId.replace('rawg-', '')]);
    if (!game) return;

    if (typeof trackDealCheck === 'function') trackDealCheck(gameId);

    const modal = document.getElementById('deals-modal');
    const container = document.getElementById('modal-stores');
    const title = document.getElementById('modal-title');

    if (!modal || !container) return; // safety

    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;
    modal.classList.add('visible');

    title.textContent = currentState.lang === 'es' ? `Ofertas para ${game.title}` : `Deals for ${game.title}`;

    // Show spinner
    container.innerHTML = `
        <div class="store-loading" style="justify-content: center; height: 100px;">
            <div class="loading-spinner" style="width: 30px; height: 30px;"></div>
            <span style="font-size: 1.1rem;">${currentState.lang === 'es' ? 'Buscando mejores precios...' : 'Finding best deals...'}</span>
        </div>
    `;

    await renderStoresToContainer(game, currentState.lang, container);
}

async function renderStoresToContainer(game, lang, container) {
    const userCountry = getUserCountryCode();
    const appId = STEAM_APP_IDS[game.id];
    let steamData = null;
    if (appId) {
        steamData = await fetchSteamPrice(appId);
    }
    const deals = await fetchGameDeals(game.title);

    let html = '<div class="store-grid" style="overflow-x: auto; flex-wrap: nowrap; padding-bottom: 10px;">';

    if (steamData) {
        const isDiscounted = steamData.discount_percent > 0;
        const discount = isDiscounted ? `-${steamData.discount_percent}%` : '';
        html += `
            <a href="https://store.steampowered.com/app/${appId}" target="_blank" rel="noopener noreferrer" class="store-card best-deal" style="border-color: #66c0f4; background: linear-gradient(135deg, rgba(102, 192, 244, 0.1) 0%, rgba(0,0,0,0) 100%); min-width: 160px;">
                ${discount ? `<div class="store-discount-badge" style="background: #66c0f4;">${discount}</div>` : ''}
                <div class="store-card-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" class="store-logo" alt="Steam">
                    <span class="store-name">Steam (${userCountry})</span>
                </div>
                <div class="store-price-container">
                    <span class="store-current-price" style="color: #66c0f4;">${steamData.final_formatted}</span>
                    ${isDiscounted ? `<span class="store-original-price">${steamData.initial_formatted}</span>` : ''}
                </div>
            </a>
        `;
    }

    if (deals && deals.length > 0) {
        deals.forEach((deal) => {
            if (deal.name === 'Steam' && steamData) return;
            const isBetterThanSteam = steamData ? (parseFloat(deal.price) < steamData.final / 100) : false;
            const isBest = !steamData && deal === deals[0];
            const discount = parseFloat(deal.savings) > 0 ? `-${deal.savings}%` : '';
            html += `
                <a href="https://www.cheapshark.com/redirect?dealID=${deal.dealID}" target="_blank" rel="noopener noreferrer" class="store-card ${(isBest || isBetterThanSteam) ? 'best-deal' : ''}" style="min-width: 160px;">
                    ${discount ? `<div class="store-discount-badge">${discount}</div>` : ''}
                    <div class="store-card-header">
                        <img src="${deal.logo}" class="store-logo" alt="${deal.name}">
                        <span class="store-name">${deal.name}</span>
                    </div>
                    <div class="store-price-container">
                        <span class="store-current-price">$${deal.price} <span style="font-size: 0.6em; color: var(--text-muted); font-weight: 400;">USD</span></span>
                        ${deal.retailPrice > deal.price ? `<span class="store-original-price">$${deal.retailPrice}</span>` : ''}
                    </div>
                </a>
            `;
        });
    } else if (!steamData && game.stores) {
        game.stores.forEach(store => {
            html += `
                <a href="${store.url}" target="_blank" rel="noopener noreferrer" class="store-card" style="min-width: 160px;">
                    <div class="store-card-header">
                        <span class="store-name">${store.name}</span>
                    </div>
                    <div class="store-price-container">
                        <span class="store-current-price" style="font-size: 0.8rem; opacity: 0.7;">Ir a tienda</span>
                    </div>
                </a>
            `;
        });
    } else if (!steamData && (!deals || deals.length === 0)) {
        html = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">${lang === 'es' ? 'No se encontraron ofertas activas en este momento.' : 'No active deals found at this time.'}</div>`;
        container.innerHTML = html;
        return;
    }

    html += '</div>';

    if (steamData || (deals && deals.length > 0)) {
        html += `
            <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 15px; border-top: 1px solid var(--border); padding-top: 10px;">
                <span style="font-size: 0.8rem; color: var(--text-muted);">Powered by CheapShark & Steam</span>
            </div>
        `;
    }

    container.innerHTML = html;
}

// --- Initialization ---

function init() {
    // DIAGNOSTIC CLEANUP: Fix Silent Hill 2 corruption from old data
    const enriched = JSON.parse(localStorage.getItem('gamewiki-enriched') || '{}');
    if (enriched['silent-hill-2'] && (enriched['silent-hill-2'].id !== 824851 || enriched['silent-hill-2'].released?.includes('2001'))) {
        console.log('🚨 Correcting Silent Hill 2 data mismatch...');
        delete enriched['silent-hill-2'];
        localStorage.setItem('gamewiki-enriched', JSON.stringify(enriched));
        // Also clear the persistent search cache to avoid fetching the same wrong game
        localStorage.removeItem('gamewiki_rawg_cache');

        // Clean up current state if it's already loaded
        if (typeof currentState !== 'undefined') {
            delete currentState.enrichedData['silent-hill-2'];
            delete currentState.dynamicDetails['silent-hill-2'];
        }
    }

    // Load user preferences from localStorage
    const savedLang = localStorage.getItem('gamewiki-lang');
    if (savedLang) currentState.lang = savedLang;

    const savedTheme = localStorage.getItem('gamewiki-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    currentState.theme = savedTheme;

    currentState.textSize = localStorage.getItem('gamewiki-text-size') || 'standard';
    currentState.contentWidth = localStorage.getItem('gamewiki-content-width') || 'standard';

    // Load favorites from localStorage
    loadFavorites();
    updateFavoritesCount();

    // Load enriched RAWG data
    const savedEnriched = localStorage.getItem('gamewiki-enriched');
    if (savedEnriched) {
        try {
            currentState.enrichedData = JSON.parse(savedEnriched);
        } catch (e) {
            console.error('Failed to load enriched data:', e);
        }
    }

    // Load search history
    loadSearchHistory();

    // Load achievements
    if (typeof loadAchievements === 'function') loadAchievements();

    // Initialize Search Filters
    initializeSearchFilters();

    // Setup Lightbox listeners
    setupLightbox();

    // Parallax effect for Hero
    document.addEventListener('mousemove', (e) => {
        if (currentState.view !== 'home' || !el.hero) return;
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
    });

    updateUILabels();
    setupEventListeners();
    setupModalListeners(); // Initialize modal handlers

    // Load Discovery games from persistent cache if available
    currentState.isFetching = true; // Block infinite scroll while initial fetch happens
    fetchDiscoverGames(1).then(data => {
        if (data && data.results) {
            currentState.discoveryGames = data.results;
            currentState.discoverPage = 2; // Next page to load
            if (currentState.view === 'home') renderHome(currentState.currentGenre, true);
        }
    }).finally(() => {
        currentState.isFetching = false;
    });

    // Check URL params for deep linking
    const urlParams = new URLSearchParams(window.location.search);
    const game = urlParams.get('game');
    const company = urlParams.get('company');

    if (game) {
        const item = GAMES_DATA.find(g => g.id === game);
        if (item) {
            currentState.view = 'wiki';
            renderWiki(item);
            return;
        }
    }
    if (company) {
        const item = COMPANIES_DATA.find(c => c.id === company);
        if (item) {
            currentState.view = 'wiki';
            renderWiki(item);
            return;
        }
    }

    // URL History Handling
    window.onpopstate = function (event) {
        if (event.state) {
            const state = event.state;
            if (state.view === 'home') {
                renderHome(state.genre, true);
            } else if (state.view === 'favorites') {
                renderFavorites(state.collection, true);
            } else if (state.view === 'wiki') {
                navigateToWiki(state.id, true);
            }
        } else {
            // Only go home if no state AND no current hash (avoids bug with TOC/anchor links)
            if (!window.location.hash && currentState.view !== 'home') {
                renderHome(null, true);
            }
        }
    };

    renderHome(null, true);
    // Push initial home state
    history.replaceState({ view: 'home', genre: null }, "", "");
}

// ============================================================================
// RAWG API INTEGRATION UTILITIES
// ============================================================================

/**
 * Setup RAWG API - Call this in console to configure your API key
 * Usage: setupRAWG('your-api-key-here')
 */
window.setupRAWG = function (apiKey) {
    if (!apiKey) {
        const key = window.prompt(
            currentState.lang === 'es'
                ? 'Ingresa tu RAWG API Key:\n(Consíguela gratis en rawg.io/apidocs)'
                : 'Enter your RAWG API Key:\n(Get it for free at rawg.io/apidocs)',
            localStorage.getItem('rawg-api-key') || ''
        );
        if (key !== null) {
            localStorage.setItem('rawg-api-key', key);
            location.reload(); // Reload to apply changes
        }
        return;
    }

    localStorage.setItem('rawg-api-key', apiKey);
    console.log('✅ RAWG API configured successfully!');
    console.log('🧪 Test it with: testRAWG()');
};

/**
 * Test RAWG API integration
 */
window.testRAWG = async function () {
    console.log('🧪 Testing RAWG API integration...\n');

    // Test 1: Search for a game
    console.log('Test 1: Searching for "The Witcher 3"...');
    const game = await findGameByName('The Witcher 3');
    if (game) {
        console.log('✅ Found:', game.name);
        console.log('   Rating:', game.rating, '⭐');
        console.log('   Metacritic:', game.metacritic);

        // Test 2: Get screenshots
        console.log('\nTest 2: Fetching screenshots...');
        const screenshots = await getGameScreenshots(game.id, 3);
        console.log('✅ Found', screenshots.length, 'screenshots');
        screenshots.forEach((s, i) => {
            console.log(`   ${i + 1}. ${s.image}`);
        });

        console.log('\n✅ All tests passed!');
        console.log('💡 Try: enrichGameData(GAMES_DATA[0])');
    } else {
        console.log('❌ Test failed. Check your API key.');
    }
};

/**
 * Enrich a single game from your data
 * Usage: enrichSingleGame('elden-ring')
 */
window.enrichSingleGame = async function (gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId) ||
        transformRAWGToGame(currentState.discoveryGames.find(g => `rawg-${g.id}` === gameId)) ||
        transformRAWGToGame(currentState.dynamicDetails[gameId.replace('rawg-', '')]);

    if (!game) {
        console.log('🔍 Attempting to fetch from RAWG for enrichment:', gameId);
        const rawgId = gameId.replace('rawg-', '');
        const details = await getGameDetails(rawgId);
        if (details) {
            currentState.dynamicDetails[rawgId] = details;
            // Now we proceed with enrichment of the freshly fetched details
        } else {
            console.log('❌ Game not found in any cache:', gameId);
            return;
        }
    }

    console.log(`🔍 Enriching: ${game.title}...`);
    const enriched = await enrichGameData(game);

    // TRY STEAM FALLBACK FOR REQUIREMENTS
    const steamId = STEAM_APP_IDS[gameId];
    if (steamId) {
        console.log(`🔍 Checking Steam for additional data (AppID: ${steamId})...`);
        const steamReqs = await fetchSteamRequirements(steamId);
        if (steamReqs) {
            console.log('✅ Steam requirements found!');
            if (!enriched.rawg) enriched.rawg = {};
            enriched.rawg.steamRequirements = steamReqs;
        }
    }

    if (enriched.rawg) {
        // PERMANENTLY UPDATE STATE
        currentState.enrichedData[gameId] = enriched.rawg;
        localStorage.setItem('gamewiki-enriched', JSON.stringify(currentState.enrichedData));

        console.log('✅ Enriched successfully!');

        // RE-RENDER CURRENT VIEW
        if (currentState.view === 'home') renderHome(currentState.currentGenre);
        if (currentState.view === 'wiki' && currentState.currentId === gameId) renderWiki();

        return enriched;
    } else {
        console.log('⚠️ Could not enrich this game');
    }
};

/**
 * Enrich all games in batch (with progress)
 * Usage: enrichAllGames()
 */
window.enrichAllGames = async function () {
    const confirm = window.confirm(
        `This will enrich ${GAMES_DATA.length} games with RAWG data.\n\n` +
        `This may take several minutes and use ~${GAMES_DATA.length} API requests.\n\n` +
        `Continue?`
    );

    if (!confirm) return;

    console.log(`🚀 Starting batch enrichment of ${GAMES_DATA.length} games...`);

    const enrichedList = await enrichGamesInBatch(GAMES_DATA, (current, total) => {
        const percent = Math.round((current / total) * 100);
        console.log(`📊 Progress: ${current}/${total} (${percent}%)`);
    });

    // SAVE ALL ENRICHED DATA
    enrichedList.forEach(g => {
        if (g.rawg) currentState.enrichedData[g.id] = g.rawg;
    });
    localStorage.setItem('gamewiki-enriched', JSON.stringify(currentState.enrichedData));

    console.log('\n✅ Batch enrichment complete!');

    // RE-RENDER
    if (currentState.view === 'home') renderHome(currentState.currentGenre);

    return enrichedList;
};

/**
 * Show RAWG cache stats
 */
window.rawgStats = function () {
    const stats = getRAWGCacheStats();
    console.log('📊 RAWG Cache Statistics:');
    console.log('   Cached entries:', stats.entries);
    console.log('   Cache expiry:', stats.expiryHours, 'hours');
    console.log('\n💡 Clear cache with: clearRAWGCache()');
};

/**
 * Display help for RAWG integration
 */
window.rawgHelp = function () {
    console.log('🎮 RAWG API Integration - Quick Guide\n');
    console.log('📝 Setup:');
    console.log('   setupRAWG()              - Show setup instructions');
    console.log('   setupRAWG("api-key")     - Configure your API key\n');
    console.log('🧪 Testing:');
    console.log('   testRAWG()               - Test API connection\n');
    console.log('🔧 Enrichment:');
    console.log('   enrichSingleGame("id")   - Enrich one game');
    console.log('   enrichAllGames()         - Enrich all games (batch)\n');
    console.log('📊 Utilities:');
    console.log('   rawgStats()              - Show cache statistics');
    console.log('   clearRAWGCache()         - Clear cached data\n');
    console.log('💡 Get started: setupRAWG()');
};

// Show help on load if API key not configured
if (!localStorage.getItem('rawg-api-key')) {
    console.log('');
    console.log('🎮 RAWG API Integration Available!');
    console.log('💡 Type: rawgHelp() for instructions');
    console.log('');
}

/**
 * Native Share Integration
 */
window.shareGame = async (id, title) => {
    const url = window.location.href;
    const shareData = {
        title: `GameWiki: ${title}`,
        text: currentState.lang === 'es'
            ? `¡Mira este juego en GameWiki: ${title}!`
            : `Check out this game on GameWiki: ${title}!`,
        url: url
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
            showToast(currentState.lang === 'es' ? '¡Compartido!' : 'Shared!', 'success');
        } else {
            await navigator.clipboard.writeText(url);
            showToast(currentState.lang === 'es' ? 'Enlace copiado al portapapeles' : 'Link copied to clipboard', 'info');
        }
    } catch (err) {
        // User cancelled share
        if (err.name !== 'AbortError') console.error('Error sharing:', err);
    }
};

/**
 * Pull to Refresh Logic
 */
function initPullToRefresh() {
    let touchStart = 0;
    const indicator = document.getElementById('pull-refresh');
    if (!indicator) return;
    const threshold = 150;

    window.addEventListener('touchstart', (e) => {
        if (window.scrollY <= 10) {
            touchStart = e.touches[0].clientY;
        } else {
            touchStart = 0;
        }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (window.scrollY <= 10 && touchStart > 0) {
            const pullDistance = e.touches[0].clientY - touchStart;
            if (pullDistance > 20) {
                indicator.classList.add('active');
                indicator.style.height = `${Math.min(pullDistance * 0.4, 80)}px`;
                const progress = Math.min(pullDistance / threshold, 1);
                indicator.querySelector('svg').style.transform = `rotate(${progress * 360}deg)`;
            }
        }
    }, { passive: true });

    window.addEventListener('touchend', () => {
        const currentHeight = parseInt(indicator.style.height) || 0;
        if (currentHeight >= 50) {
            indicator.classList.add('refreshing');
            indicator.style.height = '60px';

            // Trigger Refresh (Simulation or Real)
            setTimeout(() => {
                if (currentState.view === 'home') {
                    renderHome(currentState.currentGenre);
                } else if (currentState.view === 'wiki') {
                    renderWiki();
                }

                showToast(currentState.lang === 'es' ? 'Contenido actualizado' : 'Content updated', 'info');

                setTimeout(() => {
                    indicator.classList.remove('active', 'refreshing');
                    indicator.style.height = '0';
                    touchStart = 0;
                }, 500);
            }, 800);
        } else {
            indicator.classList.remove('active');
            indicator.style.height = '0';
            touchStart = 0;
        }
    });
}

init();

// Initialize Mobile features
initPullToRefresh();

// Connectivity Monitor
window.addEventListener('online', () => showToast(currentState.lang === 'es' ? 'Conexión restablecida' : 'Connection restored', 'success'));
window.addEventListener('offline', () => showToast(currentState.lang === 'es' ? 'Modo sin conexión' : 'Offline mode', 'info'));

// PWA: Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('🚀 GameWiki: PWA Service Worker Registered!'))
            .catch(err => console.log('⚠️ GameWiki: PWA Registration Failed', err));
    });
}

