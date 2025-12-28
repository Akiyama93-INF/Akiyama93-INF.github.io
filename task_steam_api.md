# Task: Steam API Integration for Local Pricing

## Status: In Progress

## Context
User requested:
1.  **Use Steam API**: Prefer Steam data if available and free.
2.  **Local Currency**: Detect user country/currency if possible (Steam API supports `?cc=ES`).
3.  **Horizontal Visualization**: (Already done in previous step).

## Technical Constraint: CORS
Direct client-side fetch to `store.steampowered.com` is blocked by CORS.
**Solution**: Use a public CORS proxy (`https://api.allorigins.win/get?url=...`).
*Note: This is acceptable for a front-end demo. In production, a dedicated backend proxy is safer.*

## Implementation Plan
1.  **Steam App ID Map**: We already have `STEAM_APP_IDS` in `src/main.js`.
2.  **Fetch Logic**:
    *   Check if `STEAM_APP_IDS[game.id]` exists.
    *   If yes, fetch `https://api.allorigins.win/raw?url=` + `encodeURIComponent('https://store.steampowered.com/api/appdetails?appids=' + appId + '&cc=' + userCountryCode + '&filters=price_overview')`.
    *   Extract local price and currency.
3.  **Integration**:
    *   Modify `renderStores` to prioritize this Steam Data.
    *   If Steam data found, render a special "Steam Official" card first with the *actual local price*.
    *   Keep CheapShark as fallback/comparison for other stores.
4.  **Country Detection**:
    *   Use `Intl.DateTimeFormat().resolvedOptions().timeZone` or browser language to guess country code (e.g., 'es-ES' -> 'ES').

## Todos
- [x] Implement `getUserCountryCode()` helper <!-- id: 0 -->
- [x] Implement `fetchSteamPrice(appId, countryCode)` using `allorigins` proxy <!-- id: 1 -->
- [x] Update `renderStores` to merge Steam local price data <!-- id: 2 -->
