const STEAM_APP_IDS = {
    // Classics & Valve
    "half-life": 70, "half-life-2": 220, "portal": 400, "portal-2": 620,
    "left-4-dead-2": 550, "team-fortress-2": 440, "dota2": 570, "csgo": 730,

    // Horror & Capcom
    "resident-evil": 304240, "resident-evil-2": 883710, "resident-evil-3": 952060,
    "resident-evil-4": 2050650, "resident-evil-7": 418370, "resident-evil-village": 1196590,
    "the-walking-dead": 207610, "the-walking-dead-definitive": 1449690,
    "devil-may-cry-5": 601150, "monster-hunter-world": 582010, "street-fighter-6": 1364780,

    // RPG & Open World
    "elden-ring": 1245620, "baldurs-gate-3": 1086940, "the-witcher-3": 292030,
    "cyberpunk-2077": 1091500, "skyrim": 489830, "skyrim-ae": 489830,
    "fallout-4": 377160, "fallout-nv": 22380, "starfield": 1716740, "dragon-age-inquisition": 1222690,
    "mass-effect": 1324350, "mass-effect-2": 24960, "mass-effect-3": 1238020,
    "dark-souls-3": 374320, "sekiro": 814380, "bioshock": 7670, "bioshock-infinite": 8870,

    // Rockstar & Action
    "gta-v": 271590, "red-dead-redemption-2": 1174180, "max-payne-3": 204100,

    // Playstation Studios
    "horizon-zero-dawn": 1151640, "god-of-war": 1593500, "god-of-war-ragnarok": 2322010,
    "spider-man-ps4": 1817070, "death-stranding": 1190460, "ghost-of-tsushima": 2215430,
    "the-last-of-us": 1888160, "the-last-of-us-1": 1888160, "uncharted-4": 1659420, "uncharted-legacy": 1659420,

    // Indie & Others
    "hollow-knight": 367520, "celeste": 504230, "hades": 1145360, "stray": 1332010,
    "undertale": 391540, "deltarune": 1671210, "rust": 252490, "terraria": 105600, "stardew-valley": 413150,
    "among-us": 945360, "phasmophobia": 739630, "valheim": 892970,

    // EA & Ubisoft
    "battlefield-2042": 1517290, "the-sims-4": 1222670, "watch-dogs-2": 447040,
    "far-cry-6": 2369390, "assassins-creed-odyssey": 812140, "assassins-creed-valhalla": 2208920,
    "star-wars-jedi": 1172380, "star-wars-jedi-survivor": 1774580, "it-takes-two": 1426210, "dead-space-remake": 1693980,

    // Fighting & Anime
    "tekken-8": 1778820, "mortal-kombat-11": 976310, "persona-5": 1687950,
    "yakuza-0": 638970, "nioh-2": 1325200, "nier-automata": 524220,
    "silent-hill-2": 2124490, "metal-gear-solid-3": 2131650, "final-fantasy-vii": 39140,
    "catherine-classic": 893180, "persona-3-reload": 2161700, "persona-4-golden": 1113000, "persona-5-strikers": 1382330,

    // Bethesda & Arkane
    "doom-eternal": 782330, "wolfenstein-2": 612880, "control": 870780,
    "dishonored-2": 403640, "prey": 480490, "deathloop": 1252330,

    // Classics & Xbox
    "halo-ce": 1064220, "halo-infinite": 1240440, "sea-of-thieves": 1172620,

    // Multiplayer Free to Play (Served via Steam)
    "apex": 1172470, "overwatch-2": 2357570, "destiny-2": 1085660, "warframe": 230410,
    "apex-legends": 1172470, "counter-strike": 730, "dota-2": 570,

    // Others
    "diablo-iv": 2344520, "overwatch-2": 2357570, "destiny-2": 1085660, "warframe": 230410,
    "it-takes-two": 1426210, "dead-space-remake": 1693980, "cuphead": 268910, "outer-wilds": 753640,
    "a-way-out": 1222700, "brothers-a-tale-of-two-sons": 225080,
    "palworld": 1623730, "balatro": 2379780, "sonic-frontiers": 1237320, "metal-gear-rising": 235460,
    "nier-replicant": 1113560,
    "spider-man-miles-morales": 1817190, "horizon-forbidden-west": 2420110, "ratchet-clank-rift": 1895880,
    "returnal": 1649240, "sackboy-adventure": 1599660, "bioshock-2": 409710, "resident-evil-7": 418370,
    "mass-effect-3": 1238020
};

function getGameImage(game) {
    const manualImages = {
        'minecraft': "https://images.igdb.com/igdb/image/upload/t_cover_big/co8fu7.webp",
        'league-of-legends': "https://images.igdb.com/igdb/image/upload/t_cover_big/coabh7.webp",
        'valorant': "https://images.igdb.com/igdb/image/upload/t_cover_big/coau39.webp",
        'fortnite': "https://images.igdb.com/igdb/image/upload/t_cover_big/coaxt6.webp",
        'zelda-botw': "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp",
        'mario-odyssey': "https://images.igdb.com/igdb/image/upload/t_cover_big/co1mxf.webp",
        'alan-wake-2': "https://images.igdb.com/igdb/image/upload/t_cover_big/co6jar.webp",
        'bloodborne': "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rba.webp",
        'dark-souls': "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x78.webp",
        'unreal-tournament': "https://images.igdb.com/igdb/image/upload/t_cover_big/co1i2j.webp",
        'undertale': "https://images.igdb.com/igdb/image/upload/t_cover_big/cob1t2.webp",
        'deltarune': "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/header.jpg",
        'terraria': "https://images.igdb.com/igdb/image/upload/t_cover_big/coaamg.webp",
        'the-last-of-us': "https://images.igdb.com/igdb/image/upload/t_cover_big/coa1gq.webp",
        'uncharted-4': "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7h.webp",
        'world-of-warcraft': "https://images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.webp",
        'hearthstone': "https://images.igdb.com/igdb/image/upload/t_cover_big/co1sh2.webp",
        'the-last-of-us-2': "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.webp"
    };
    if (manualImages[game.id]) return manualImages[game.id];
    if (game.image) return game.image; // Use manual override if exists
    const appId = STEAM_APP_IDS[game.id];
    if (appId) {
        // Steam images are served over Cloudflare's edge network
        return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`;
    }
    // Fallback to stylized abstract shapes using DiceBear
    return `https://api.dicebear.com/7.x/identicon/svg?seed=${game.id}`;
}

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
    searchHistory: [],
    selectedSearchIndex: -1 // For keyboard navigation
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
        showing: "Mostrando"
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
        showing: "Showing"
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
    themeToggle: document.getElementById('theme-toggle')
};

// --- Initialization (moved to end of file) ---

// --- Logic ---
function updateUILabels() {
    const t = UI_TEXT[currentState.lang];
    el.langText.innerText = currentState.lang === 'es' ? 'EN' : 'ES';
    el.search.placeholder = t.searchPlaceholder;
    el.heroTitle.innerText = t.heroTitle;
    el.heroSubtitle.innerText = t.heroSubtitle;
    el.statGames.innerText = t.statGames;
    document.documentElement.lang = currentState.lang;
}

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
    } else {
        collectionArray.push(gameId);
    }

    saveFavorites();
    updateFavoritesCount();

    // Update UI if we're on the current game's wiki page
    if (currentState.view === 'wiki' && currentState.currentId === gameId) {
        renderWiki();
    }

    // Update UI if we're on favorites view
    if (currentState.view === 'favorites') {
        renderFavorites();
    }

    // Update UI if we're on home view
    if (currentState.view === 'home') {
        renderHome(currentState.currentGenre);
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
                    alert(currentState.lang === 'es' ? 'Favoritos importados exitosamente' : 'Favorites imported successfully');
                } catch (error) {
                    alert(currentState.lang === 'es' ? 'Error al importar favoritos' : 'Error importing favorites');
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


function updateUILabels() {
    const t = UI_TEXT[currentState.lang];
    el.heroTitle.innerText = t.heroTitle;
    el.heroSubtitle.innerText = t.heroSubtitle;
    el.statGames.innerText = t.statGames;
    el.search.placeholder = t.searchPlaceholder;
    el.langText.innerText = currentState.lang === 'es' ? 'EN' : 'ES'; // Muestra a qué cambiará
}

function renderHome(filterGenre = undefined, isFromPopState = false) {
    currentState.view = 'home';
    document.title = "GameWiki - Home";

    // Handle History
    if (!isFromPopState) {
        const state = { view: 'home', genre: filterGenre || currentState.currentGenre };
        history.pushState(state, "", "");
    }

    setTimeout(() => {
        if (typeof currentState.homeScrollY === 'number') {
            window.scrollTo(0, currentState.homeScrollY);
        }
    }, 0);

    // If filterGenre is null/string, update state. If undefined (lang toggle), use state.
    if (filterGenre !== undefined) {
        currentState.currentGenre = filterGenre;
    }
    const activeGenre = currentState.currentGenre;

    el.hero.classList.remove('hidden');
    el.gameGrid.classList.remove('hidden');
    el.genreFilter.classList.remove('hidden');
    el.wikiContainer.classList.add('hidden');

    // Animation
    el.appContent.style.opacity = '0';
    el.appContent.style.transform = 'translateY(10px)';
    void el.appContent.offsetWidth;
    el.appContent.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    el.appContent.style.opacity = '1';
    el.appContent.style.transform = 'translateY(0)';

    document.title = activeGenre ? `Juegos de ${activeGenre} - GameWiki` : 'GameWiki - Tu Enciclopedia de Videojuegos';
    if (!isFromPopState) window.scrollTo(0, 0);

    // 1. Render Genre Filter Bar (Collapsible)
    const allGenres = new Set();
    GAMES_DATA.forEach(game => {
        if (game.genre) {
            game.genre.split(',').forEach(g => allGenres.add(g.trim()));
        }
    });

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

    el.gameGrid.innerHTML = '';

    // Add a filter indicator if filtering
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

    const gamesToRender = activeGenre
        ? GAMES_DATA.filter(g => g.genre.includes(activeGenre))
        : GAMES_DATA;

    if (gamesToRender.length === 0) {
        el.gameGrid.innerHTML += `<div style="grid-column: 1 / -1; text-align: center; padding: 5rem 2rem; background: var(--wiki-bg); border-radius: var(--radius); border: 1px dashed var(--border);">
            <p style="font-size: 1.2rem; font-weight: 600; color: var(--text-muted);">${currentState.lang === 'es' ? 'No se encontraron juegos para este género.' : 'No games found for this genre.'}</p>
        </div>`;
    }

    gamesToRender.forEach(game => {
        const enriched = currentState.enrichedData[game.id] || game.rawg;
        const card = document.createElement('div');
        card.className = 'game-card';
        const isFav = isFavorite(game.id);

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
            <p>${game.description[currentState.lang]}</p>
        `;
        card.onclick = () => navigateToWiki(game.id);
        el.gameGrid.appendChild(card);
    });
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
        .map(id => GAMES_DATA.find(g => g.id === id))
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

    const item = GAMES_DATA.find(g => g.id === id) || COMPANIES_DATA.find(c => c.id === id);
    if (item) document.title = `${item.title || item.name} - GameWiki`;
    renderWiki();
}

function renderWiki() {
    const id = currentState.currentId;
    const game = GAMES_DATA.find(g => g.id === id);
    const item = game || COMPANIES_DATA.find(c => c.id === id);

    if (!item) {
        renderHome();
        return;
    }

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

    window.scrollTo(0, 0);

    const t = UI_TEXT[currentState.lang];
    const isGame = !!game;

    // 1. Contents & Appearance Sidebar (Left)
    el.wikiSidebar.innerHTML = `
        <div class="sidebar-section">
            <div class="sidebar-title">
                <h3>${t.contents}</h3>
                <span class="hide-btn" onclick="this.parentElement.nextElementSibling.style.display = this.parentElement.nextElementSibling.style.display === 'none' ? 'block' : 'none'">${currentState.lang === 'es' ? 'ocultar' : 'hide'}</span>
            </div>
            <ul>
                <li><a href="#" class="active">(Top)</a></li>
                <li><a href="#intro">${isGame ? t.about : 'Resumen'}</a></li>
                <li><a href="#history">${currentState.lang === 'es' ? 'Historia' : 'History'}</a></li>
                ${isGame ? `
                    <li class="sub-item"><a href="#dev">${currentState.lang === 'es' ? 'Desarrollo' : 'Development'}</a></li>
                    ${item.relatedGames ? `<li class="sub-item"><a href="#related">${currentState.lang === 'es' ? 'Relacionados' : 'Related'}</a></li>` : ''}
                ` : `
                    <li class="sub-item"><a href="#catalog">${currentState.lang === 'es' ? 'Catálogo' : 'Catalog'}</a></li>
                `}
            </ul>
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

    let articleHtml = `
        <div class="wiki-article" style="font-size: ${currentState.textSize === 'small' ? '0.9rem' : currentState.textSize === 'large' ? '1.3rem' : '1.1rem'}; max-width: ${currentState.contentWidth === 'wide' ? '100%' : '900px'};">
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

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
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
                        <button class="btn-check-deals" onclick="openDealsModal('${item.id}')" style="margin-top: 0; padding: 0.5rem 1rem; width: auto; font-size: 0.8rem;">
                            <span style="font-size: 1rem;">🏷️</span>
                            ${currentState.lang === 'es' ? 'Consultar Ofertas' : 'Check Deals'}
                        </button>
                    ` : ''}
                </div>
            </div>
            <h1>${isGame ? item.title : item.name}</h1>
            
            ${tocHtml}
        </div>
        
        <p class="disambiguation" style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 2rem; font-style: italic; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; display: flex; gap: 0.4rem; align-items: center;">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11 9h2V7h-2v2zm1 11c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6z"/></svg>
            ${isGame
            ? (currentState.lang === 'es'
                ? `Este artículo trata sobre el videojuego de ${item.releaseDate.split('-')[0]}.`
                : `This article is about the ${item.releaseDate.split('-')[0]} video game.`)
            : (currentState.lang === 'es'
                ? `Este artículo trata sobre la empresa desarrolladora.`
                : `This article is about the development company.`)}
        </p>

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
                        <div class="infobox-value">${renderInternalLink(item.companyId)}</div>
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
            </div >
        </div >

        <div class="wiki-content">
            <section id="intro">
                <p class="lead">${item.description[currentState.lang]}</p>
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

            ${isGame && renderSystemRequirements(currentState.enrichedData[item.id] || item.rawg)}

            <div id="trailers-container">
                <!-- Dynamically filled Trailers from RAWG -->
            </div>
        </div>

        <div id="history" style="margin-top: 2rem;">
            <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1rem;">
                ${isGame ? (currentState.lang === 'es' ? 'Historia y Trasfondo' : 'History and Background') : (currentState.lang === 'es' ? 'Historia de la Empresa' : 'Company History')}
            </h2>
            <p>
                ${isGame
            ? (item.detailedHistory ? item.detailedHistory[currentState.lang] :
                (currentState.lang === 'es'
                    ? `Desde su lanzamiento en ${item.releaseDate}, ${item.title} ha sido un referente en el género de ${item.genre}. Desarrollado por ${renderInternalLink(item.companyId)}, el juego introdujo mecánicas innovadoras que cambiaron la industria.`
                    : `Since its release in ${item.releaseDate}, ${item.title} has been a benchmark in the ${item.genre} genre. Developed by ${renderInternalLink(item.companyId)}, the game introduced innovative mechanics that changed the industry.`))
            : (currentState.lang === 'es'
                ? `${item.name} ha moldeado la industria del videojuego a través de décadas de innovación y títulos legendarios.`
                : `${item.name} has shaped the video game industry through decades of innovation and legendary titles.`)}
            </p>
        </div>

        ${isGame ? `
            <div id="dev" style="margin-top: 2rem;">
                <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1rem;">${currentState.lang === 'es' ? 'Desarrollo' : 'Development'}</h2>
                <p>
                    ${item.development ? item.development[currentState.lang] :
                (currentState.lang === 'es'
                    ? `El desarrollo de ${item.title} involucró un proceso creativo enfocado en la innovación dentro del género ${item.genre}.`
                    : `The development of ${item.title} involved a creative process focused on innovation within the ${item.genre} genre.`)}
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
                                    <div class="mini-card" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${relatedGame.id}'}))" style="cursor: pointer; transition: transform 0.2s;">
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
                    ${GAMES_DATA.filter(g => g.companyId === item.id).map(g => `
                        <li>
                            <div class="mini-card" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${g.id}'}))">
                                <img src="${getGameImage(g)}" alt="${g.title}" loading="lazy" style="width: 100%; height: 80px; object-fit: cover; border-radius: 4px; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; font-weight: 600;">${g.title}</span>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `}
`;

    el.wikiArticle.innerHTML = articleHtml;

    // 3. Right Sidebar (Now optional or for extra info)
    el.wikiAppearanceSidebar.classList.add('hidden'); // Hide the right sidebar as requested to use left

    setupWikiListeners();

    // Trigger RAWG Similar Games load
    if (isGame) {
        loadRAWGSimilarGames(item);
        loadRAWGTrailers(item);

        // Automatic enrichment if not already done
        if (!currentState.enrichedData[item.id]) {
            console.log(`✨ Automáticamente enriqueciendo datos para: ${item.title}`);
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
        { id: 'requirements', title: currentState.lang === 'es' ? 'Requerimientos' : 'Requirements', show: !!enriched?.platforms },
        { id: 'trailers', title: currentState.lang === 'es' ? 'Tráilers' : 'Trailers', show: true }, // We check trailers async, but usually games have them
        { id: 'history', title: currentState.lang === 'es' ? 'Historia' : 'History', show: true },
        { id: 'dev', title: currentState.lang === 'es' ? 'Desarrollo' : 'Development', show: !!item.development || isGame },
        { id: 'related', title: currentState.lang === 'es' ? 'Relacionados' : 'Related', show: !!item.relatedGames || isGame }
    ];

    const visibleSections = sections.filter(s => s.show);

    return `
        <div class="toc-container">
            <div class="toc-title">
                ${currentState.lang === 'es' ? 'Contenido' : 'Contents'}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </div>
            <ul class="toc-list">
                ${visibleSections.map(s => `
                    <li class="toc-item">
                        <a href="#${s.id}" class="toc-link">${s.title}</a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

async function loadRAWGTrailers(item) {
    const rawgData = currentState.enrichedData[item.id] || item.rawg;

    // Helper to hide TOC section
    const hideTOCSection = () => {
        const tocLink = document.querySelector(`.toc-link[href="#trailers"]`);
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
                        <div class="trailer-card" onclick="window.open('${t.data.max}', '_blank')">
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

function setupWikiListeners() {
    // Scroll handling for active sidebar link
    const sections = document.querySelectorAll('.wiki-article div[id], .wiki-article section[id]');
    const navLinks = document.querySelectorAll('.wiki-sidebar a');

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
            if (link.getAttribute("href") === `#${current} `) {
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
    const comp = COMPANIES_DATA.find(c => c.id === companyId);
    if (!comp) return companyId;
    return `<span class="internal-link" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${companyId}'}))">${comp.name}</span>`;
}

function renderSystemRequirements(enriched) {
    // Check if we have data AND if it's the NEW format (with requirements objects)
    // Old format was just an array of strings: ['PC', 'PS5']
    const hasDetailedPlatforms = enriched && enriched.platforms &&
        enriched.platforms.length > 0 &&
        typeof enriched.platforms[0] === 'object';

    const requirements = hasDetailedPlatforms
        ? enriched.platforms.filter(p => p.requirements && (p.requirements.minimum || p.requirements.recommended))
        : [];

    if (!enriched || !hasDetailedPlatforms || (hasDetailedPlatforms && requirements.length === 0)) {
        // If no data, or old data format, or new format but no requirements found in RAWG
        // We show the "Fetch" box unless we are SURE RAWG has nothing (which we can't be without trying)
        return `
            <div class="fetch-req-box" style="margin-top: 2rem; padding: 2rem; background: var(--wiki-bg); border-radius: 12px; border: 2px dashed var(--primary); text-align: center; box-shadow: var(--shadow);">
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

    return `
        <section id="requirements" style="margin-top: 3rem;">
            <h2 style="border-bottom: 1px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 1.5rem;">
                ${currentState.lang === 'es' ? 'Requerimientos del Sistema' : 'System Requirements'}
            </h2>
            <div class="req-container">
                <div class="req-tabs">
                    ${requirements.map((r, i) => `
                        <button class="req-tab-btn ${i === 0 ? 'active' : ''}" onclick="switchReqTab(this, '${r.name.replace(/\s+/g, '-')}')">
                            ${r.name}
                        </button>
                    `).join('')}
                </div>
                <div class="req-content">
                    ${requirements.map((r, i) => `
                        <div id="req-${r.name.replace(/\s+/g, '-')}" class="req-panel ${i === 0 ? '' : 'hidden'}">
                            ${r.requirements.minimum ? `
                                <div class="req-section">
                                    <div class="req-label">${currentState.lang === 'es' ? 'Mínimo' : 'Minimum'}</div>
                                    <div class="req-text" style="background: var(--bg); padding: 1.25rem; border-radius: 8px; border-left: 4px solid #94a3b8; font-family: monospace; white-space: pre-wrap;">${r.requirements.minimum.replace('Minimum:', '').trim()}</div>
                                </div>
                            ` : ''}
                            ${r.requirements.recommended ? `
                                <div class="req-section" style="margin-top: 2rem;">
                                    <div class="req-label">${currentState.lang === 'es' ? 'Recomendado' : 'Recommended'}</div>
                                    <div class="req-text" style="background: var(--bg); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--primary); font-family: monospace; white-space: pre-wrap;">${r.requirements.recommended.replace('Recommended:', '').trim()}</div>
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
                    <div class="similar-game-card" onclick="navigateToSimilarGame('${g.slug}', '${g.name}')">
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

window.navigateToSimilarGame = function (slug, name) {
    // 1. Try to find in our local database
    // We check by slug or title match
    const match = GAMES_DATA.find(g =>
        g.id === slug ||
        g.title.toLowerCase() === name.toLowerCase()
    );

    if (match) {
        navigateToWiki(match.id);
        window.scrollTo(0, 0);
    } else {
        // 2. If not found, search it in our search bar for the user
        el.search.value = name;
        handleSearch(name);
        el.search.focus();

        // Notify user
        const msg = currentState.lang === 'es'
            ? `"${name}" no está en la Wiki todavía. ¡Búscalo entre nuestros resultados!`
            : `"${name}" is not in the Wiki yet. Search it in our results!`;
        console.log(msg);
    }
};

function renderInternalLink(companyId) {
    const comp = COMPANIES_DATA.find(c => c.id === companyId);
    if (!comp) return companyId;
    return `<span class="internal-link" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${companyId}'}))">${comp.name}</span>`;
}

// --- Mobile Sidebar Toggle ---
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

    el.search.oninput = (e) => {
        const query = e.target.value.toLowerCase();
        if (!query) {
            el.searchResults.classList.add('hidden');
            return;
        }

        const filteredGames = GAMES_DATA.filter(g => g.title.toLowerCase().includes(query));
        const filteredCompanies = COMPANIES_DATA.filter(c => c.name.toLowerCase().includes(query));

        if (filteredGames.length || filteredCompanies.length) {
            el.searchResults.classList.remove('hidden');
            el.searchResults.innerHTML = [
                ...filteredGames.map(g => `
                    <div class="search-item" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${g.id}'}))">
                        <img src="${getGameImage(g)}" style="width: 30px; height: 17px; object-fit: cover; border-radius: 2px; margin-right: 10px;">
                        <span>${g.title}</span>
                    </div>
                `),
                ...filteredCompanies.map(c => `
                    <div class="search-item" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${c.id}'}))">
                        <img src="https://api.dicebear.com/7.x/shapes/svg?seed=${c.id}" style="width: 20px; vertical-align: middle; margin-right: 10px;">
                        <span>${c.name}</span>
                    </div>
                `)
            ].join('');
        } else {
            el.searchResults.classList.add('hidden');
        }
    };

    // Keyboard shortcut for search
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== el.search) {
            e.preventDefault();
            el.search.focus();
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
    GAMES_DATA.forEach(g => g.genre.split(',').forEach(s => genres.add(s.trim())));
    Array.from(genres).sort().forEach(g => {
        const opt = document.createElement('option');
        opt.value = g;
        opt.textContent = g;
        genreSelect.appendChild(opt);
    });

    // 2. Populate Year Select
    const years = new Set();
    GAMES_DATA.forEach(g => {
        const year = g.releaseDate.split('-')[0];
        if (year) years.add(year);
    });
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

function handleSearch(query) {
    const q = query.toLowerCase().trim();
    const filters = currentState.searchFilters;

    // If no query and no filters, hide
    if (!q && !filters.genre && !filters.year && !filters.developer) {
        el.searchResults.classList.add('hidden');
        return;
    }

    let filteredGames = GAMES_DATA.filter(g => {
        const matchesQuery = !q || g.title.toLowerCase().includes(q);
        const matchesGenre = !filters.genre || g.genre.includes(filters.genre);
        const matchesYear = !filters.year || g.releaseDate.startsWith(filters.year);
        const matchesDev = !filters.developer || g.companyId === filters.developer;
        return matchesQuery && matchesGenre && matchesYear && matchesDev;
    });

    let filteredCompanies = q ? COMPANIES_DATA.filter(c => c.name.toLowerCase().includes(q)) : [];

    if (filteredGames.length || filteredCompanies.length) {
        el.searchResults.classList.remove('hidden');
        currentState.selectedSearchIndex = -1;
        el.searchResults.innerHTML = [
            ...filteredGames.map(g => `
                <div class="search-item" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${g.id}'}))">
                    <img src="${getGameImage(g)}" style="width: 30px; height: 17px; object-fit: cover; border-radius: 2px; margin-right: 10px;">
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-weight: 600; font-size: 0.9rem;">${g.title}</span>
                        <span style="font-size: 0.7rem; color: var(--text-muted);">${g.genre} • ${g.releaseDate.split('-')[0]}</span>
                    </div>
                </div>
            `),
            ...filteredCompanies.map(c => `
                <div class="search-item" onclick="window.dispatchEvent(new CustomEvent('nav', {detail: '${c.id}'}))">
                    <img src="https://api.dicebear.com/7.x/shapes/svg?seed=${c.id}" style="width: 20px; vertical-align: middle; margin-right: 10px;">
                    <span>${c.name}</span>
                </div>
            `)
        ].join('');
    } else {
        el.searchResults.innerHTML = `<div style="padding: 1rem; text-align: center; color: var(--text-muted);">${currentState.lang === 'es' ? 'No se encontraron resultados' : 'No results found'}</div>`;
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
    const modal = document.getElementById('deals-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.remove('visible');
            setTimeout(() => modal.classList.add('hidden'), 300);
        };
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.remove('visible');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    };
}

async function openDealsModal(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;

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
            // Default to home if no state
            renderHome(null, true);
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
        console.log('📝 To setup RAWG API:');
        console.log('1. Get your free API key from: https://rawg.io/login/?forward=developer');
        console.log('2. Call: setupRAWG("your-api-key-here")');
        console.log('3. Test with: testRAWG()');
        return;
    }

    setRAWGApiKey(apiKey);
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
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) {
        console.log('❌ Game not found:', gameId);
        return;
    }

    console.log(`🔍 Enriching: ${game.title}...`);
    const enriched = await enrichGameData(game);

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

init();

