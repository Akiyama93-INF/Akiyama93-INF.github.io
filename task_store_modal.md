# Task: Redesign Store Offers as a Modal/Popup

## Status: In Progress

## Context
User requested a significant UI change for the "Store Offers" section:
1.  **Placement**: Move access to the top-left area (near the "Contents" sidebar or title).
2.  **Interaction**: Use a visible **Green Button** labeled "Consultar Ofertas" (Check Deals).
3.  **Behavior**: Clicking the button opens the offers (loading them on demand).
4.  **Content**: Preserve the existing rich content (Logos, Local Steam Prices, horizontal scroll).

## Implementation Plan
1.  **UI Update (HTML/CSS)**:
    *   Add a "Check Deals" button to the `wiki-sidebar` or just below the cover image in the `infobox`. Given the request "left side of top part", integrating it into the `wiki-sidebar` or floating it might be best. *Correction*: "lado izquierdo de la parte top" typically implies the sidebar area or near the title. I will place it prominently in the **Sidebar** for high visibility.
    *   Create a **Modal/Overlay** structure in `index.html` to host the deals grid. This is cleaner than expanding inline code.
2.  **Logic Update (JS)**:
    *   Remove the automatic `renderStores` call on page load.
    *   Bind the new Green Button to `openDealsModal()`.
    *   `openDealsModal()` will trigger the fetching logic (Steam + CheapShark) and populate the modal.
    *   Reuse the existing Card CSS/HTML generation logic.

## Todos
- [x] Add Modal HTML structure to `index.html` <!-- id: 0 -->
- [x] Add CSS for Modal and Green Button <!-- id: 1 -->
- [x] Update `renderWiki` to include the button in Sidebar <!-- id: 2 -->
- [x] Refactor `renderStores` to populate the Modal instead of the Infobox <!-- id: 3 -->
