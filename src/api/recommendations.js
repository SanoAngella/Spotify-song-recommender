const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

const mockTracks = [
  {
    id: '1',
    name: 'Calm Nights',
    artist: 'Luna Echo',
    albumImageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    spotifyUrl: 'https://open.spotify.com',
  },
  {
    id: '2',
    name: 'Energy Up',
    artist: 'Pulse Avenue',
    albumImageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    spotifyUrl: 'https://open.spotify.com',
  },
]

export async function getMoodRecommendations(payload) {
  const response = await fetch(`${API_BASE_URL}/api/recommendations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (response.status === 404) {
    return { tracks: mockTracks }
  }

  if (!response.ok) {
    throw new Error('Could not load recommendations. Check backend/API URL.')
  }

  return response.json()
}
