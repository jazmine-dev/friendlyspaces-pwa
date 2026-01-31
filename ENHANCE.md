# PWA Enhancement Task

Reference the native Expo app at /home/friendly/friendlyspaces-mobile/App.js for design inspiration.

## Features to Add

### 1. Bottom Tab Navigation
- Map tab (current view)
- List tab (scrollable venue cards)
- Favorites tab (saved venues only)

### 2. Language Switcher
- Support DE/FR/EN (already has translations in the code)
- Add language toggle buttons in header (like "DE | FR | EN")
- Remember language choice in localStorage

### 3. List View
- Card-based layout showing venue image, name, city, tags
- Tap card to see details (same popup as map markers)
- Heart/star icon on each card for favorites

### 4. Better Mobile Layout
- Fixed bottom tab bar (Map | List | Favorites)
- Clean header with title + language switcher
- Smooth transitions between views

### 5. Favorites Count Badge
- Show count on Favorites tab like "Favorites (3)"

## Keep
- All existing functionality (map, filters, search, offline)
- PWA installability
- Current color scheme (#1E52BA)

## Implementation
Modify index.html to add these features. Keep it as a single HTML file with embedded CSS/JS.

When done, commit and push to GitHub.

When completely finished, run: openclaw gateway wake --text "Done: Enhanced PWA with list view, tabs, and language switcher" --mode now
