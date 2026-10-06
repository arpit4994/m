export default function Card({ thumbnail, name, category, views, duration, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative reel-card w-full rounded-2xl overflow-hidden cursor-pointer
        bg-graphite border border-white/[0.06]
        transition-all duration-500 ease-out
        hover:scale-[1.04] hover:border-ember/40
        hover:shadow-[0_20px_60px_rgba(255,77,46,0.15)]"
    >
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover
                   transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Category badge */}
      {category && (
        <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest
                         bg-ember/90 text-white px-2 py-0.5 rounded-full">
          {category}
        </span>
      )}

      {/* Duration */}
      {duration && (
        <span className="absolute top-3 right-3 text-[9px] bg-black/60 text-silver
                         px-2 py-0.5 rounded-full">
          {duration}
        </span>
      )}

      {/* Play button on hover */}
      <div className="absolute inset-0 flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-ember/90 flex items-center justify-center shadow-xl">
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-white font-semibold text-sm truncate">{name}</h3>
        {views && (
          <p className="text-ghost text-xs mt-0.5">👁 {views}</p>
        )}
      </div>
    </div>
  );
}