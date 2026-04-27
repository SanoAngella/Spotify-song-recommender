import { useEffect, useMemo, useState } from 'react'

const moodOptions = [
  { id: 'sad', label: 'Sad', icon: CloudRainIcon, accent: 'from-sky-400/30 to-sky-700/20' },
  { id: 'angry', label: 'Angry', icon: FlameIcon, accent: 'from-red-500/30 to-red-800/20' },
  { id: 'happy', label: 'Happy', icon: SunIcon, accent: 'from-yellow-300/30 to-amber-600/20' },
  { id: 'hyped', label: 'Hyped', icon: BoltIcon, accent: 'from-orange-400/30 to-red-600/20' },
  { id: 'focused', label: 'Focused', icon: TargetIcon, accent: 'from-emerald-400/30 to-green-700/20' },
  { id: 'peaceful', label: 'Peaceful', icon: MoonIcon, accent: 'from-indigo-400/30 to-violet-700/20' },
  { id: 'romantic', label: 'Romantic', icon: HeartIcon, accent: 'from-pink-400/30 to-rose-700/20' },
  { id: 'workout', label: 'Workout', icon: DumbbellIcon, accent: 'from-lime-400/30 to-emerald-700/20' },
]

function CloudRainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.7-1A3.5 3.5 0 1 1 17.5 18H7Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 20v2M13 20v2M17 20v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M13 2L5 13h6l-1 9 9-13h-6l1-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path
        d="M12 3c1 3-1 4.5-1 6.5 0 1.6 1.2 2.8 2.8 2.8 1.6 0 2.7-1.2 2.7-2.8 0-2.5-1.6-4.1-3-6.5 4.6 1.6 7.5 5.2 7.5 9.5A9 9 0 0 1 3 12.5C3 8.9 5.2 5.4 8.8 3.5 8 6.2 9.1 8 10.8 8c1.4 0 2.3-1 2.3-2.3 0-1-.4-1.8-1.1-2.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 2.5v2.5M12 19v2.5M21.5 12H19M5 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function DumbbellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M8 10v4M6 9v6M18 10v4M20 9v6M8 12h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M12 2L14.9 9.1L22 12L14.9 14.9L12 22L9.1 14.9L2 12L9.1 9.1L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SpotifyGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path d="M6.8 8.9a8.5 8.5 0 0 1 10.4 1.2" stroke="#000" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M7.5 12a6.7 6.7 0 0 1 8.2.9" stroke="#000" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M8.1 14.8a5.1 5.1 0 0 1 6 .6" stroke="#000" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function requestMoodRecommendations(payload) {
  return new Promise((resolve, reject) => {
    const runtime = globalThis.chrome?.runtime
    if (!runtime?.sendMessage) {
      resolve({
        tracks: [
          {
            id: 'dev-track-1',
            name: 'Dev Session',
            artist: 'Local Mock',
            albumImageUrl: 'https://via.placeholder.com/300',
            spotifyUrl: '#',
          },
        ],
      })
      return
    }

    runtime.sendMessage({ type: 'MOOD_DISCOVERY_GET_RECOMMENDATIONS', payload }, (response) => {
      if (runtime.lastError) {
        reject(new Error(runtime.lastError.message))
        return
      }

      if (!response) {
        reject(new Error('No response from extension worker.'))
        return
      }

      if (!response.ok) {
        reject(new Error(response.error || 'Recommendation request failed.'))
        return
      }

      resolve(response.data || { tracks: [] })
    })
  })
}

function App({ embedded = false }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [overlayStep, setOverlayStep] = useState('mood')
  const [mood, setMood] = useState('')
  const [genres, setGenres] = useState('')
  const [favoriteArtists, setFavoriteArtists] = useState('')
  const [energy, setEnergy] = useState(55)
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const parsedGenres = useMemo(
    () => genres.split(',').map((item) => item.trim()).filter(Boolean),
    [genres],
  )

  const parsedArtists = useMemo(
    () => favoriteArtists.split(',').map((item) => item.trim()).filter(Boolean),
    [favoriteArtists],
  )

  useEffect(() => {
    function handleOpenOverlay() {
      setOverlayStep('mood')
      setIsOverlayVisible(true)
    }

    window.addEventListener('mood-discovery:open-overlay', handleOpenOverlay)
    return () => window.removeEventListener('mood-discovery:open-overlay', handleOpenOverlay)
  }, [])

  function openMoodPicker() {
    setOverlayStep('mood')
    setIsOverlayVisible(true)
  }

  function selectMood(selectedMood) {
    setMood(selectedMood)
    setOverlayStep('form')
    setIsOverlayVisible(true)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      const response = await requestMoodRecommendations({
        mood,
        preferredGenres: parsedGenres,
        favoriteArtists: parsedArtists,
        energy: Number(energy),
      })
      setRecommendations(response.tracks || [])
      setIsOverlayVisible(false)
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : 'Failed to fetch recommendations.')
      setRecommendations([])
    } finally {
      setLoading(false)
    }
  }

  if (embedded && !isOverlayVisible) return null

  return (
    <div className="relative min-h-screen text-white">
      <div className="mx-auto flex min-h-screen max-w-[1300px]">
        <aside className="hidden w-[260px] border-r border-white/10 bg-[#090909]/90 p-4 md:block">
          <div className="mb-6 flex items-center gap-2 text-xl font-extrabold text-spotify-green-soft">
            <SpotifyGlyph />
            <span className="text-white">Spotify</span>
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="rounded-lg px-3 py-2 hover:bg-white/10">Home</li>
            <li className="rounded-lg px-3 py-2 hover:bg-white/10">Your Library</li>
            <li>
              <button
                type="button"
                onClick={openMoodPicker}
                className="flex w-full items-center gap-3 rounded-lg bg-white/5 px-3 py-2 text-left hover:bg-white/15"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-spotify-green text-black">
                  <SparkIcon />
                </span>
                Mood Discovery
              </button>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-4 md:p-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-[#111] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-spotify-green-soft">Now playing your taste</p>
            <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">Mood Discovery for Spotify</h1>
            <p className="mt-3 max-w-2xl text-white/70">
              You are now on your music home screen. Use Mood Discovery in the sidebar when your mood changes.
            </p>
          </div>

          <section className="mt-5">
            <h2 className="text-lg font-bold">Recommendations</h2>
            {error && <p className="mt-2 rounded-lg border border-red-300/20 bg-red-500/10 p-2 text-sm text-red-200">{error}</p>}
            {recommendations.length === 0 ? (
              <p className="mt-3 text-white/60">No recommendations yet. Open Mood Discovery to begin.</p>
            ) : (
              <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {recommendations.map((track) => (
                  <article
                    key={track.id}
                    className="rounded-xl border border-white/10 bg-[#191919] p-3 transition hover:-translate-y-0.5 hover:bg-[#202020]"
                  >
                    <img
                      src={track.albumImageUrl}
                      alt={`${track.name} album cover`}
                      className="h-44 w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                    <h3 className="mt-3 font-bold">{track.name}</h3>
                    <p className="text-sm text-white/70">{track.artist}</p>
                    <a
                      href={track.spotifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-spotify-green-soft hover:underline"
                    >
                      Open in Spotify
                    </a>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>

      <button
        type="button"
        onClick={openMoodPicker}
        className="fixed bottom-5 left-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-spotify-green text-black shadow-lg shadow-green-500/30 md:hidden"
      >
        <SparkIcon />
      </button>

      {isOverlayVisible && (
        <section className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-white/10">
            <div className={`flex w-[200%] transition-transform duration-500 ${overlayStep === 'form' ? '-translate-x-1/2' : 'translate-x-0'}`}>
              <div className="w-1/2 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-spotify-green-soft">Mood Picker</p>
                <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">How are you feeling right now?</h2>
                <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {moodOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => selectMood(option.id)}
                      className={`group rounded-2xl border border-white/25 bg-gradient-to-br ${option.accent} p-4 text-left shadow-lg transition hover:-translate-y-0.5 hover:border-spotify-green/80 hover:shadow-green-500/30`}
                    >
                      <span className="text-2xl">
                        <option.icon />
                      </span>
                      <p className="mt-5 font-bold">{option.label}</p>
                      <p className="text-xs text-white/70 group-hover:text-white">Discover music for this mood</p>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsOverlayVisible(false)}
                  className="mx-auto mt-8 block text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  Not now, take me to my music
                </button>
              </div>

              <div className="w-1/2 p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-extrabold">Refine your vibe</h3>
                  <button type="button" onClick={() => setOverlayStep('mood')} className="text-sm text-white/70 hover:text-white">
                    Back
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm text-white/70">Selected mood</label>
                    <div className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 font-semibold capitalize">{mood || 'none'}</div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-white/70">Genres</label>
                    <input
                      type="text"
                      value={genres}
                      onChange={(event) => setGenres(event.target.value)}
                      placeholder="amapiano, afrobeats, pop"
                      className="w-full rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none ring-spotify-green transition focus:ring-2"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-white/70">Artists</label>
                    <input
                      type="text"
                      value={favoriteArtists}
                      onChange={(event) => setFavoriteArtists(event.target.value)}
                      placeholder="Jeroismusic, Burna Boy"
                      className="w-full rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none ring-spotify-green transition focus:ring-2"
                    />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm text-white/70">
                      <label htmlFor="energy-range">Energy</label>
                      <span className="font-semibold text-white">{energy}</span>
                    </div>
                    <input
                      id="energy-range"
                      type="range"
                      min="0"
                      max="100"
                      value={energy}
                      onChange={(event) => setEnergy(event.target.value)}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-spotify-green"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !mood}
                    className="w-full rounded-full bg-spotify-green px-4 py-2.5 font-bold text-black transition hover:bg-spotify-green-soft disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? 'Finding tracks...' : 'Get Recommendations'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default App
