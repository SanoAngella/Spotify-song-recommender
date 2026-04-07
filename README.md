# Spotify Mood Discovery UI (React + Tailwind)

Spotify-style frontend that simulates a Chrome extension injection flow:
- full-screen mood picker overlay
- slide-in form (genre, artist, energy)
- persistent mood icon entry point in sideba
- recommendations cards

## Run locally

```bash
npm install
npm run dev
```

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:4000
```

## Backend contract

`POST {VITE_API_BASE_URL}/api/recommendations`

```json
{
  "mood": "happy",
  "preferredGenres": ["afrobeats", "amapiano"],
  "favoriteArtists": ["Burna Boy", "Tyla"],
  "energy": 75,
  "language": "English"
}
```

Expected response:

```json
{
  "tracks": [
    {
      "id": "spotify-track-id",
      "name": "Track Name",
      "artist": "Artist Name",
      "albumImageUrl": "https://...",
      "spotifyUrl": "https://open.spotify.com/track/..."
    }
  ]
}
```

## Main files

- `src/App.jsx`: overlay flow + Spotify-like shell + recommendations rendering.
- `src/api/recommendations.js`: API client (`getMoodRecommendations`).
- `src/index.css`: Tailwind + theme setup (Spotify dark aesthetic).

## Extension-ready integration notes

1. Keep Spotify OAuth + client secret in backend/service worker only.
2. Content script/UI should message a background script to fetch Spotify data.
3. Background script calls your backend (or Spotify directly if token managed there).
4. Content script receives sanitized track data and updates UI.

This avoids common extension issues:
- CORS blocks from page context
- expired token handling in UI code

## Lovable prompt (extension style, copy/paste)

Create a React + Tailwind component for a Spotify Chrome Extension called "Mood Discovery".
Design and behavior requirements:
- Full-screen semi-transparent overlay that opens by default.
- First view: "Mood Picker" with large glassmorphism cards in a responsive grid for moods (Sad, Hyped, Focused, Peaceful, Romantic, Workout).
- Each card has an icon + label and subtle hover glow.
- Bottom center text link: "Not now, take me to my music" to close overlay.
- Second view: when mood card is selected, slide horizontally to a refined form with fields:
  - Genres (comma separated)
  - Artists (comma separated)
  - Energy slider (0-100)
  - Submit button for recommendations
- Persistent entry point:
  - Circular mood icon in Spotify left nav
  - Clicking it reopens mood picker overlay
- Use Spotify-like palette: black / deep gray / white / #1DB954 green
- Typography should mimic Circular (with graceful fallback)
- Dark mode only and mobile responsive
- Keep API calls in a separate module:
  - POST /api/recommendations
  - payload: mood, preferredGenres[], favoriteArtists[], energy
  - response: tracks[] with id, name, artist, albumImageUrl, spotifyUrl
- Include loading and error states
