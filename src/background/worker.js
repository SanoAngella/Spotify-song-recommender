const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

const mockTracks = [
  {
    id: 'mock-1',
    name: 'Late Night Focus',
    artist: 'Orbit Theory',
    albumImageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    spotifyUrl: 'https://open.spotify.com',
  },
  {
    id: 'mock-2',
    name: 'Summer Lift',
    artist: 'Velvet Tempo',
    albumImageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    spotifyUrl: 'https://open.spotify.com',
  },
]

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type !== 'MOOD_DISCOVERY_GET_RECOMMENDATIONS') return undefined;

  (async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/recommendations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message.payload || {}),
      })

      if (response.status === 404) {
        sendResponse({ ok: true, data: { tracks: mockTracks } })
        return
      }

      if (!response.ok) {
        const responseText = await response.text()
        sendResponse({
          ok: false,
          error: responseText || `Request failed with status ${response.status}`,
        })
        return
      }

      const data = await response.json()
      sendResponse({ ok: true, data })
    } catch (error) {
      sendResponse({
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown worker fetch error',
      })
    }
  })()

  return true
})
