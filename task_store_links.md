# Task: Enhanced Store Links (Horizontal & Currency)

## Status: In Progress

## Context
User requested:
1.  **Horizontal Visualization**: Improved layout, preferably a horizontal list.
2.  **Local Currency**: Attempt to show user's country price.

## Constraints
- **CheapShark API**: Only returns **USD**.
- **Action**: We will explicitly label prices as "USD" to avoid confusion. We cannot reliably convert to local currency server-side without an extra API key, and client-side conversion is approximate. We will advise the user that the *store page* will show the final local price.

## Implementation Plan
1.  **CSS Update**:
    *   Change `.store-grid` to a horizontal scrolling flex container.
    *   Add scroll snapping and hide scrollbars for cleanliness.
2.  **JS Update**:
    *   Update `renderStores` HTML structure to match new CSS.
    *   Add "USD" label to prices.

## Todos
- [x] Integrate CheapShark API (Done) <!-- id: 0 -->
- [ ] Update CSS for horizontal scrolling (`overflow-x: auto`) <!-- id: 1 -->
- [ ] Update JS to label currency as USD <!-- id: 2 -->
