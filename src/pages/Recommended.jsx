import { useState } from 'react';
import { recommended } from '../data/data';

const ALL_CATS = ['All', ...new Set(recommended.map(v => v.category))];

export default function Recommended() {
  const [filter, setFilter] = useState('All');
  const [playing, setPlaying] = useState(null);

  const filtered =
    filter === 'All'
      ? recommended
      : recommended.filter(v => v.category === filter);

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 lg:px-10 max-w-7xl mx-auto page-enter">

      {/* Header */}
      <div className="mb-8">
        <p className="text-ember text-[10px] font-bold uppercase tracking-[0.28em] mb-2">
          Hand Picked
        </p>

        <h1
          style={{
            fontFamily: "'Bebas Neue', cursive",
            letterSpacing: '0.05em',
          }}
          className="text-5xl sm:text-6xl text-white"
        >
          Recommended
        </h1>

        <p className="text-ghost text-sm mt-1">
          Curated picks across all creators
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap mb-10">
        {ALL_CATS.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setPlaying(null);
            }}
            className={`text-[10px] uppercase tracking-widest px-4 py-1.5
              rounded-full border font-bold transition-all duration-200
              ${
                filter === cat
                  ? 'bg-ember border-ember text-white shadow-[0_0_18px_rgba(255,77,46,0.3)]'
                  : 'bg-transparent border-white/10 text-ghost hover:border-white/30 hover:text-silver'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">

        {filtered.map((v, i) => (
          <div
            key={v.id}
            className="animate-scale-in"
            style={{
              animationDelay: `${i * 50}ms`,
              animationFillMode: 'both',
            }}
          >

            {/* Card */}
            <div
              className="group relative reel-card w-full rounded-2xl overflow-hidden
              bg-graphite border border-white/[0.06]
              transition-all duration-500 ease-out
              hover:border-ember/40
              hover:shadow-[0_20px_60px_rgba(255,77,46,0.15)]"
            >

              {/* Embedded video */}
              {playing === v.id ? (
                <iframe
                  src={`${v.src}${v.src.includes('?') ? '&' : '?'}autoplay=1`}
                  title={v.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* Thumbnail */}
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Play button */}
                  <button
                    onClick={() => setPlaying(v.id)}
                    className="absolute inset-0 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label={`Play ${v.title}`}
                  >
                    <span className="w-12 h-12 rounded-full bg-ember/90 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        width="18"
                        height="18"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>

                  {/* Category */}
                  <span
                    className="absolute top-3 left-3 text-[9px] font-bold uppercase
                    tracking-widest bg-ember/90 text-white px-2 py-0.5 rounded-full"
                  >
                    {v.category}
                  </span>

                  {/* Duration */}
                  <span
                    className="absolute top-3 right-3 text-[9px] bg-black/60
                    text-silver px-2 py-0.5 rounded-full"
                  >
                    {v.duration}
                  </span>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold text-sm truncate">
                      {v.title}
                    </h3>

                    <p className="text-ghost text-xs truncate">
                      by {v.creator}
                    </p>
                  </div>
                </>
              )}

            </div>

          </div>
        ))}

      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <p className="text-center py-20 text-ghost">
          No videos for{' '}
          <span className="text-ember">{filter}</span>.
        </p>
      )}

    </main>
  );
}