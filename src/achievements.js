/**
 * GameWiki Achievements System
 * Handles tracking, unlocking and displaying wiki-related achievements.
 */

const ACHIEVEMENTS = [
    {
        id: 'first_steps',
        name: { es: 'Primeros Pasos', en: 'First Steps' },
        desc: { es: 'Has explorado tu primer artículo en la Wiki.', en: 'You explored your first Wiki article.' },
        icon: '📖',
        condition: (stats) => stats.wikisViewed >= 1
    },
    {
        id: 'collector',
        name: { es: 'Coleccionista', en: 'Collector' },
        desc: { es: 'Has añadido 10 juegos a tus favoritos.', en: 'You added 10 games to your favorites.' },
        icon: '💖',
        condition: (stats) => stats.favoritesCount >= 10
    },
    {
        id: 'historian_90s',
        name: { es: 'Historiador de los 90', en: '90s Historian' },
        desc: { es: 'Has consultado 5 juegos lanzados en la década de los 90.', en: 'You consulted 5 games released in the 90s.' },
        icon: '🕹️',
        condition: (stats) => stats.yearsExplored['199'] >= 5 // Simplified check for 199x
    },
    {
        id: 'genre_expert',
        name: { es: 'Experto en Géneros', en: 'Genre Expert' },
        desc: { es: 'Has explorado juegos de 5 géneros diferentes.', en: 'You explored games from 5 different genres.' },
        icon: '🏷️',
        condition: (stats) => Object.keys(stats.genresExplored).length >= 5
    },
    {
        id: 'deal_hunter',
        name: { es: 'Cazador de Ofertas', en: 'Deal Hunter' },
        desc: { es: 'Has consultado ofertas para 5 juegos diferentes.', en: 'You checked deals for 5 different games.' },
        icon: '💰',
        condition: (stats) => stats.dealsChecked >= 5
    },
    {
        id: 'polyglot',
        name: { es: 'Políglota', en: 'Polyglot' },
        desc: { es: 'Has cambiado el idioma de la Wiki al menos 3 veces.', en: 'You changed the Wiki language at least 3 times.' },
        icon: '🌍',
        condition: (stats) => stats.langSwaps >= 3
    },
    {
        id: 'completionist',
        name: { es: 'Completista', en: 'Completionist' },
        desc: { es: 'Has marcado un juego como "Completado".', en: 'You marked a game as "Completed".' },
        icon: '🏆',
        condition: (stats) => stats.gamesCompleted >= 1
    }
];

let userStats = {
    wikisViewed: 0,
    favoritesCount: 0,
    gamesCompleted: 0,
    dealsChecked: 0,
    langSwaps: 0,
    genresExplored: {}, // { 'Action': 1, 'RPG': 2 }
    yearsExplored: {},   // { '199': 3 }
    viewedIds: new Set(),
    dealsCheckedIds: new Set()
};

let unlockedAchievements = [];

function loadAchievements() {
    const savedStats = localStorage.getItem('gamewiki-stats');
    if (savedStats) {
        const parsed = JSON.parse(savedStats);
        userStats = { ...userStats, ...parsed };
        userStats.viewedIds = new Set(parsed.viewedIds || []);
        userStats.dealsCheckedIds = new Set(parsed.dealsCheckedIds || []);
    }

    const savedUnlocked = localStorage.getItem('gamewiki-unlocked');
    if (savedUnlocked) {
        unlockedAchievements = JSON.parse(savedUnlocked);
    }
}

function saveAchievements() {
    const statsToSave = {
        ...userStats,
        viewedIds: Array.from(userStats.viewedIds),
        dealsCheckedIds: Array.from(userStats.dealsCheckedIds)
    };
    localStorage.setItem('gamewiki-stats', JSON.stringify(statsToSave));
    localStorage.setItem('gamewiki-unlocked', JSON.stringify(unlockedAchievements));
}

function trackWikiView(game) {
    if (!game) return;
    if (!userStats.viewedIds.has(game.id)) {
        userStats.viewedIds.add(game.id);
        userStats.wikisViewed++;

        // Track genre
        if (game.genre) {
            game.genre.split(',').forEach(g => {
                const genre = g.trim();
                userStats.genresExplored[genre] = (userStats.genresExplored[genre] || 0) + 1;
            });
        }

        // Track year
        if (game.releaseDate) {
            const decade = game.releaseDate.substring(0, 3);
            userStats.yearsExplored[decade] = (userStats.yearsExplored[decade] || 0) + 1;
        }
    }
    checkAchievements();
}

function trackDealCheck(gameId) {
    if (!userStats.dealsCheckedIds.has(gameId)) {
        userStats.dealsCheckedIds.add(gameId);
        userStats.dealsChecked++;
    }
    checkAchievements();
}

function trackLangSwap() {
    userStats.langSwaps++;
    checkAchievements();
}

function updateStat(key, value) {
    userStats[key] = value;
    checkAchievements();
}

function checkAchievements() {
    let newlyUnlocked = false;
    ACHIEVEMENTS.forEach(ach => {
        if (!unlockedAchievements.includes(ach.id)) {
            if (ach.condition(userStats)) {
                unlockedAchievements.push(ach.id);
                showAchievementUnlock(ach);
                newlyUnlocked = true;
            }
        }
    });

    if (newlyUnlocked || true) { // Always save stats even if no new achievement
        saveAchievements();
    }
}

function showAchievementUnlock(ach) {
    const lang = currentState.lang || 'es';
    const title = ach.name[lang];
    const desc = ach.desc[lang];

    if (typeof showToast === 'function') {
        showToast(`${ach.icon} ¡Logro Desbloqueado: ${title}!`, desc);
    } else {
        console.log(`🏆 ACHIEVEMENT UNLOCKED: ${title} - ${desc}`);
    }
}

function renderAchievementsModal() {
    const lang = currentState.lang || 'es';
    const container = document.getElementById('achievements-grid');
    if (!container) return;

    container.innerHTML = ACHIEVEMENTS.map(ach => {
        const isUnlocked = unlockedAchievements.includes(ach.id);
        return `
            <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="ach-icon">${ach.icon}</div>
                <div class="ach-info">
                    <div class="ach-name">${ach.name[lang]}</div>
                    <div class="ach-desc">${ach.desc[lang]}</div>
                </div>
                ${isUnlocked ? '<div class="ach-status">✅</div>' : ''}
            </div>
        `;
    }).join('');
}
