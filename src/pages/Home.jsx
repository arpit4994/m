import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center
                     relative overflow-hidden page-enter">

      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[500px] h-[500px] rounded-full bg-ember/[0.07] blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4
                        w-[350px] h-[350px] rounded-full bg-emberglow/[0.04] blur-[100px]" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,77,46,1) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(255,77,46,1) 1px,transparent 1px)`,
          backgroundSize: '56px 56px',
        }} />

      {/* Content */}
      <div className="relative text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-ember/10 border border-ember/20
                        rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
          <span className="text-ember text-[10px] font-bold uppercase tracking-[0.25em]">
            Now Streaming
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily:"'Bebas Neue',cursive", letterSpacing:'0.04em', lineHeight:1 }}
            className="text-[4.5rem] sm:text-[7rem] md:text-[9rem] text-white mb-6">
          Welcome to<br />
          <span className="grad-text">MoodVids69</span>
        </h1>

        {/* Subtitle */}
        <p className="text-silver text-lg sm:text-xl font-light tracking-wide
                      mb-12 max-w-sm mx-auto leading-relaxed">
          Your private video space.{' '}
          <span className="text-ghost">Curated reels. Raw moments.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/stars"
            className="px-8 py-3.5 bg-ember text-white font-bold rounded-full
                       text-xs uppercase tracking-widest
                       hover:bg-emberglow hover:scale-105
                       hover:shadow-[0_0_28px_rgba(255,77,46,0.5)]
                       transition-all duration-300">
            Browse Stars
          </Link>
          <Link to="/recommended"
            className="px-8 py-3.5 bg-transparent border border-white/20
                       text-silver font-bold rounded-full text-xs uppercase tracking-widest
                       hover:border-white/50 hover:text-white transition-all duration-300">
            Recommended ↗
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-10 flex gap-10 opacity-50">
        {[['6+','Creators'],['20+','Videos'],['50M+','Views']].map(([v,l]) => (
          <div key={l} className="text-center">
            <div style={{ fontFamily:"'Bebas Neue',cursive", fontSize:'1.5rem' }}
                 className="text-white">{v}</div>
            <div className="text-ghost text-[10px] uppercase tracking-widest">{l}</div>
          </div>
        ))}
      </div>
    </main>
  );
}