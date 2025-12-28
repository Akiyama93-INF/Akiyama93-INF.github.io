# RAWG API Integration - GameWiki

## 📋 Overview

This document describes the integration of the **RAWG Video Games Database API** into GameWiki to enrich game data with high-quality screenshots, metadata, ratings, and more.

---

## 🎯 Benefits

### What RAWG API Provides:
- ✅ **500,000+ games** in database
- ✅ **2.1+ million screenshots** (high quality)
- ✅ **Metacritic scores** and ratings
- ✅ **Platform information** (PC, PlayStation, Xbox, etc.)
- ✅ **Store links** (Steam, Epic, GOG, etc.)
- ✅ **Tags and genres**
- ✅ **Game descriptions** and metadata
- ✅ **Related games** and series information
- ✅ **DLC and expansions** data

### Free Tier Limits:
- **20,000 requests/month** (plenty for our use case)
- **Non-commercial use** (requires attribution)
- **No credit card required**

---

## 🚀 Quick Start

### 1. Get Your API Key

1. Visit: https://rawg.io/login/?forward=developer
2. Create a free account or log in
3. Copy your API key from the developer dashboard

### 2. Configure in GameWiki

Open your browser console (F12) and run:

```javascript
setupRAWG('your-api-key-here')
```

### 3. Test the Integration

```javascript
testRAWG()
```

You should see:
```
🧪 Testing RAWG API integration...

Test 1: Searching for "The Witcher 3"...
✅ Found: The Witcher 3: Wild Hunt
   Rating: 4.66 ⭐
   Metacritic: 92

Test 2: Fetching screenshots...
✅ Found 3 screenshots
   1. https://media.rawg.io/media/games/618/...
   2. https://media.rawg.io/media/games/618/...
   3. https://media.rawg.io/media/games/618/...

✅ All tests passed!
```

---

## 📚 Available Functions

### Console Commands

All functions are available globally in the browser console:

#### Setup & Testing
```javascript
// Show setup instructions
setupRAWG()

// Configure API key
setupRAWG('your-api-key')

// Test API connection
testRAWG()

// Show help
rawgHelp()
```

#### Enrich Game Data
```javascript
// Enrich a single game
enrichSingleGame('elden-ring')

// Enrich all games (batch)
enrichAllGames()
```

#### Utilities
```javascript
// Show cache statistics
rawgStats()

// Clear cached data
clearRAWGCache()
```

---

## 🔧 API Functions (Advanced)

### Search Functions

```javascript
// Search for games by name
const results = await searchGames('Cyberpunk', 10);

// Find best match for a game
const game = await findGameByName('The Witcher 3');

// Get detailed game information
const details = await getGameDetails(gameId);
```

### Media Functions

```javascript
// Get screenshots for a game
const screenshots = await getGameScreenshots(gameId, 6);

// Get trailers/videos
const trailers = await getGameTrailers(gameId);
```

### Related Content

```javascript
// Get games in the same series
const series = await getGameSeries(gameId);

// Get DLC and expansions
const dlc = await getGameDLC(gameId);
```

### Data Enrichment

```javascript
// Enrich a single game object
const enriched = await enrichGameData(gameObject);

// Enrich multiple games with progress callback
const enriched = await enrichGamesInBatch(gamesArray, (current, total) => {
    console.log(`Progress: ${current}/${total}`);
});
```

---

## 📊 Enriched Data Structure

When you enrich a game, it adds a `rawg` property with this structure:

```javascript
{
    id: 3328,                    // RAWG game ID
    slug: "the-witcher-3-wild-hunt",
    rating: 4.66,                // User rating (0-5)
    ratingsCount: 12345,         // Number of ratings
    metacritic: 92,              // Metacritic score
    playtime: 46,                // Average playtime (hours)
    esrbRating: "Mature",        // ESRB rating
    screenshots: [               // Array of screenshots
        {
            id: 123,
            image: "https://...",
            thumbnail: "https://..."
        }
    ],
    platforms: [                 // Available platforms
        "PC", "PlayStation 4", "Xbox One"
    ],
    stores: [                    // Available stores
        "Steam", "GOG", "Epic Games"
    ],
    tags: [                      // Game tags
        "RPG", "Open World", "Fantasy"
    ],
    website: "https://...",      // Official website
    reddit: "https://...",       // Reddit community
    description: "..."           // Full description
}
```

---

## 💡 Usage Examples

### Example 1: Enrich a Single Game

```javascript
// Find Elden Ring in your data
const eldenRing = GAMES_DATA.find(g => g.id === 'elden-ring');

// Enrich it with RAWG data
const enriched = await enrichGameData(eldenRing);

// Access new data
console.log('Rating:', enriched.rawg.rating);
console.log('Metacritic:', enriched.rawg.metacritic);
console.log('Screenshots:', enriched.rawg.screenshots.length);
```

### Example 2: Get Screenshots for Gallery

```javascript
// Search for a game
const game = await findGameByName('Cyberpunk 2077');

// Get 6 screenshots
const screenshots = await getGameScreenshots(game.id, 6);

// Use in your UI
screenshots.forEach(screenshot => {
    console.log(screenshot.image); // Full size
    console.log(screenshot.thumbnail); // Thumbnail
});
```

### Example 3: Batch Enrich All Games

```javascript
// Enrich all games with progress tracking
const enrichedGames = await enrichGamesInBatch(GAMES_DATA, (current, total) => {
    const percent = Math.round((current / total) * 100);
    console.log(`Progress: ${current}/${total} (${percent}%)`);
});

// Save to file (optional)
const json = JSON.stringify(enrichedGames, null, 2);
const blob = new Blob([json], { type: 'application/json' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'enriched-games.json';
a.click();
```

---

## 🎨 Integration Ideas

### 1. Screenshot Gallery (Task 3)
Use `getGameScreenshots()` to create an image carousel on wiki pages:

```javascript
const screenshots = await getGameScreenshots(rawgId, 6);
// Display in a carousel/lightbox
```

### 2. Enhanced Game Cards
Show Metacritic scores and ratings on game cards:

```javascript
if (game.rawg) {
    // Display metacritic badge
    // Show star rating
}
```

### 3. Similar Games Recommendations
Use RAWG's recommendation algorithm:

```javascript
const similar = await getGameSeries(rawgId);
// Display as "You might also like..."
```

### 4. Platform Badges
Show which platforms a game is available on:

```javascript
game.rawg.platforms.forEach(platform => {
    // Display platform icon
});
```

---

## ⚙️ Configuration

### Cache Settings

The integration includes automatic caching to reduce API calls:

```javascript
// Cache expires after 24 hours
RAWG_CONFIG.cacheExpiry = 1000 * 60 * 60 * 24;

// Check cache stats
rawgStats();

// Clear cache manually
clearRAWGCache();
```

### Rate Limiting

Built-in rate limiting (100ms between requests) to respect API limits:

```javascript
// Automatically applied in enrichGamesInBatch()
// Prevents hitting rate limits
```

---

## 🐛 Troubleshooting

### "RAWG API key not set"
```javascript
// Solution: Configure your API key
setupRAWG('your-api-key-here')
```

### "No results found"
```javascript
// The game name might not match exactly
// Try variations:
await findGameByName('The Witcher 3')
await findGameByName('Witcher 3')
await findGameByName('The Witcher III')
```

### Rate Limit Errors
```javascript
// Free tier: 20,000 requests/month
// Check your usage at: https://rawg.io/apidocs
// Clear cache to reduce duplicate requests:
clearRAWGCache()
```

---

## 📝 Attribution

As per RAWG's free tier requirements, you must include attribution:

**Add to your footer:**
```html
<p>Game data provided by <a href="https://rawg.io/">RAWG</a></p>
```

---

## 🔗 Resources

- **RAWG API Docs**: https://api.rawg.io/docs/
- **Get API Key**: https://rawg.io/login/?forward=developer
- **API Status**: https://rawg.io/apidocs
- **Rate Limits**: 20,000 requests/month (free tier)

---

## 📈 Next Steps

1. ✅ **Setup Complete** - API key configured
2. ⏳ **Test Integration** - Run `testRAWG()`
3. ⏳ **Enrich Sample Game** - Try `enrichSingleGame('elden-ring')`
4. ⏳ **Implement Gallery** - Use screenshots in Task 3
5. ⏳ **Batch Enrich** - Run `enrichAllGames()` when ready

---

## 💾 Files Modified

- `src/rawg-api.js` - **NEW** - RAWG API integration module
- `src/main.js` - Added console utilities
- `index.html` - Added script tag for rawg-api.js

---

**Last Updated**: 2025-12-27  
**Version**: 1.0.0  
**Status**: ✅ Ready to use
