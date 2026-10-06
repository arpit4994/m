import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stars } from '../data/data';

export default function StarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const star = stars.find((s) => s.id === Number(id));
  const [playing, setPlaying] = useState(null);

  if (!star) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 page-enter">
        <p className="text-silver text-lg mb-4">
          Creator not found.
        </p>

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

      {/* Hero */}
      <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={star.thumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-md opacity-25"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent, #050507)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 -mt-16 sm:-mt-20 relative">

        {/* Creator Header */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-end mb-10">

          {/* Creator Thumbnail */}
          <div
            className="
              w-24 h-24
              sm:w-28 sm:h-28
              md:w-32 md:h-32
              rounded-2xl
              overflow-hidden
              border-[3px] border-ember/60
              flex-shrink-0
              shadow-xl
              bg-black
            "
          >
            <img
              src={star.thumbnail}
              alt={star.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Creator Name */}
          <div className="flex-1 min-w-0">
            <h1
              style={{
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: '0.05em',
              }}
              className="text-4xl sm:text-5xl text-white truncate"
            >
              {star.name}
            </h1>
          </div>

          {/* Back */}
          <button
            onClick={() => navigate('/stars')}
            className="
              text-ghost
              hover:text-white
              text-xs
              uppercase
              tracking-widest
              transition-colors
              duration-200
              flex-shrink-0
              py-2
            "
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
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-3
            sm:gap-4
            lg:gap-5
          "
        >
          {star.videos?.map((v, i) => {
            const isPlaying = playing === v.id;

            return (
              <div
                key={v.id}
                className="animate-scale-in min-w-0"
                style={{
                  animationDelay: `${i * 50}ms`,
                  animationFillMode: 'both',
                }}
              >
                <div
                  className={`
                    group
                    relative
                    w-full
                    aspect-[3/4]
                    rounded-2xl
                    overflow-hidden
                    bg-black
                    border
                    cursor-pointer
                    transition-all
                    duration-500
                    ease-out
                    ${
                      isPlaying
                        ? 'border-ember shadow-[0_0_20px_rgba(255,77,46,0.25)]'
                        : 'border-white/[0.06] hover:border-ember/40 hover:shadow-[0_20px_60px_rgba(255,77,46,0.15)]'
                    }
                  `}
                  onClick={() =>
                    setPlaying(isPlaying ? null : v.id)
                  }
                >

                  {/* Embedded Video */}
                  {isPlaying ? (
                    <iframe
                      src={`${v.src}${
                        v.src.includes('?') ? '&' : '?'
                      }autoplay=1`}
                      title={v.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      {/* Full Thumbnail */}
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        className="
                          absolute inset-0
                          w-full h-full
                          object-contain
                          bg-black
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                        loading="lazy"
                      />

                      {/* Gradient */}
                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-t
                          from-black/90
                          via-black/20
                          to-transparent
                        "
                      />

                      {/* Play Button */}
                      <div
                        className="
                          absolute inset-0
                          flex items-center justify-center
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                        "
                      >
                        <div
                          className="
                            w-11 h-11
                            sm:w-12 sm:h-12
                            rounded-full
                            bg-ember/90
                            flex items-center
                            justify-center
                          "
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            width="17"
                            height="17"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration */}
                      {v.duration && (
                        <span
                          className="
                            absolute
                            top-2
                            right-2
                            text-[9px]
                            bg-black/60
                            text-silver
                            px-2
                            py-0.5
                            rounded-full
                          "
                        >
                          {v.duration}
                        </span>
                      )}

                      {/* Video Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h4 className="text-white font-semibold text-xs sm:text-sm truncate">
                          {v.title}
                        </h4>

                        <p className="text-ghost text-[10px] sm:text-xs truncate">
                          by {star.name}
                        </p>
                      </div>
                    </>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* No Videos */}
        {(!star.videos || star.videos.length === 0) && (
          <div className="text-center py-20">
            <p className="text-ghost text-sm">
              No videos available.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}