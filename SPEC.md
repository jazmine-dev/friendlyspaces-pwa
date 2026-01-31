# Friendly Spaces PWA

## Goal
Convert the existing web map into a proper Progressive Web App (PWA) that users can install directly from the website.

## Source
Copy and adapt from: /home/friendly/friendlyspaceswebmap/index.html
This already has: map, venues, filters, translations, mobile responsive design.

## What to Add

### 1. PWA Manifest (manifest.json)
```json
{
  "name": "Friendly Spaces",
  "short_name": "Friendly",
  "description": "Find family-friendly venues in Switzerland",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1E52BA",
  "icons": [
    { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### 2. Service Worker (sw.js)
- Cache the app shell (HTML, CSS, JS)
- Cache venue data for offline use
- Network-first strategy for fresh data, fallback to cache

### 3. Favorites Feature
- Heart/star button on each venue
- Store in localStorage (persists well in installed PWAs)
- "Favorites" tab/filter to show saved venues
- Favorites count badge

### 4. Install Prompt
- Detect if app can be installed
- Show "Add to Home Screen" button/banner
- Handle beforeinstallprompt event

### 5. Structure
```
/home/friendly/friendlyspaces-pwa/
├── index.html      # Main app (based on existing web map)
├── manifest.json   # PWA manifest
├── sw.js          # Service worker
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── assets/        # Copy from existing (venue images)
```

## Key Requirements
- Must work offline after first load
- Favorites must persist (localStorage)
- Must be installable on iOS and Android
- Keep the existing design/branding (#1E52BA blue)
- Mobile-first, works great on phones

## Testing
After building, test with:
1. Chrome DevTools > Application > Manifest (check installability)
2. Lighthouse PWA audit
3. Test offline mode (DevTools > Network > Offline)

Build this step by step. Start with copying the existing map, then add PWA features.

When finished, run: openclaw gateway wake --text "Done: Built Friendly Spaces PWA with offline support and favorites" --mode now
