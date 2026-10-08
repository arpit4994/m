import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stars } from '../data/data';

// ── helper: is this src a direct video file or an embed URL?
function isDirectVideo(src) {
  if (!src) return false;
  const url = src.toLowerCase().split('?')[0];
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
}

export default function StarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const star = stars.find((s) => s.id === Number(id));
  const [playing, setPlaying] = useState(null);

  if (!star) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 page-enter">
        <p className="text-silver text-lg mb-4">Creator not found.</p>
        <button
          onClick={() => navigate('/stars')}
          className="text-ember text-sm underline"
        >
          ← Back to Stars
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-16 page-enter">

      {/* Hero Banner */}
      <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={star.thumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-md opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent, #050507)' }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 -mt-16 sm:-mt-20 relative">

        {/* Creator Header */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-end mb-10">

          {/* Avatar */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
                          rounded-2xl overflow-hidden border-[3px] border-ember/60
                          flex-shrink-0 shadow-xl bg-black">
            <img
              src={star.thumbnail}
              alt={star.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Name */}
          <div className="flex-1 min-w-0">
            <h1
              style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.05em' }}
              className="text-4xl sm:text-5xl text-white truncate"
            >
              {star.name}
            </h1>
          </div>

          {/* Back */}
          <button
            onClick={() => navigate('/stars')}
            className="text-ghost hover:text-white text-xs uppercase tracking-widest
                       transition-colors duration-200 flex-shrink-0 py-2"
          >
            ← All Stars
          </button>
        </div>

        {/* Videos Heading */}
        <div className="mb-5">
          <p className="text-ghost text-[10px] uppercase tracking-widest">
            All Videos · {star.videos?.length || 0} clips
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 sm:gap-6">

          {star.videos?.map((v, i) => {
            const isPlaying = playing === v.id;
            const direct    = isDirectVideo(v.src);
            const autoShow  = !v.thumbnail;

            return (
              <div
                key={v.id}
                className="animate-scale-in min-w-0"
                style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }}
              >
                <div
                  className={`
                    group relative w-full rounded-2xl overflow-hidden bg-black border
                    cursor-pointer transition-all duration-500 ease-out
                    ${isPlaying || autoShow
                      ? 'border-ember shadow-[0_0_24px_rgba(255,77,46,0.3)]'
                      : 'border-white/[0.06] hover:border-ember/40 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,77,46,0.15)]'
                    }
                  `}
                  style={{
                    aspectRatio: (isPlaying || autoShow) ? '16 / 9' : undefined,
                    minHeight:   (isPlaying || autoShow) ? '520px'  : undefined,
                  }}
                  onClick={() => !autoShow && setPlaying(isPlaying ? null : v.id)}
                >

                  {/* ── PLAYING STATE ── */}
                  {(isPlaying || autoShow) ? (
                    <>
                      {/* Direct mp4 */}
                      {direct ? (
                        <video
                          className="absolute inset-0 w-full h-full object-cover"
                          controls
                          autoPlay
                          poster={v.thumbnail || ''}
                        >
                          <source src={v.src} type="video/mp4" />
                        </video>

                      ) : v.src ? (
                        /* Embed iframe */
                        <iframe
                          src={v.src}
                          title={v.title}
                          className="absolute inset-0 w-full h-full border-0"
                          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                        />

                      ) : (
                        /* No src */
                        <div className="absolute inset-0 flex flex-col items-center
                                        justify-center gap-2 bg-graphite">
                          <svg viewBox="0 0 24 24" fill="none" width="48" height="48"
                               stroke="rgba(255,77,46,0.3)" strokeWidth="1.5">
                            <path d="M15 10l4.553-2.277A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                          </svg>
                          <p className="text-ghost text-xs">No video source</p>
                        </div>
                      )}

                      {/* Close button */}
                      {!autoShow && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setPlaying(null); }}
                          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full
                                     bg-black/70 text-white flex items-center justify-center
                                     text-sm hover:bg-ember transition-colors duration-200"
                        >
                          ✕
                        </button>
                      )}
                    </>

                  ) : (

                    /* ── THUMBNAIL STATE ── */
                    <div
                      className="relative w-full bg-black"
                      style={{ height: '520px' }}
                    >

                      {/* Blurred background — fills black gaps on sides */}
                      <img
                        src={v.thumbnail}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full"
                        style={{
                          objectFit:  'cover',
                          filter:     'blur(18px)',
                          transform:  'scale(1.1)',
                          opacity:    0.35,
                        }}
                      />

                      {/* Main thumbnail — full image, no cropping */}
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        className="absolute inset-0 w-full h-full
                                   transition-transform duration-700 group-hover:scale-105"
                        style={{
                          objectFit:      'contain',  /* ← no cropping */
                          objectPosition: 'center',
                        }}
                        loading="lazy"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t
                                      from-black/90 via-black/10 to-transparent" />

                      {/* Duration */}
                      {v.duration && (
                        <span className="absolute top-3 right-3 text-[10px] bg-black/70
                                         text-silver px-2.5 py-1 rounded-full backdrop-blur-sm">
                          {v.duration}
                        </span>
                      )}

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-ember/90
                                        flex items-center justify-center shadow-xl">
                          <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-white font-semibold text-base truncate">
                          {v.title}
                        </h4>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* No Videos */}
        {(!star.videos || star.videos.length === 0) && (
          <div className="text-center py-20">
            <p className="text-ghost text-sm">No videos available.</p>
          </div>
        )}

      </div>
    </main>
  );
}