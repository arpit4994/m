import { Link } from 'react-router-dom';

const STACK = [
  { icon:'⚛️', name:'React 18',       desc:'UI library'            },
  { icon:'🔀', name:'React Router 6',  desc:'Client-side routing'   },
  { icon:'🎨', name:'Tailwind CSS',    desc:'Utility-first styling' },
  { icon:'🎬', name:'HTML5 Video',     desc:'Native video playback' },
];

const FEATURES = [
  'Dark cinematic UI with ember accent colour',
  'Vertical reel-style cards (9:16 aspect ratio)',
  'React Router for seamless multi-page navigation',
  'HTML5 video player with poster thumbnails',
  'Category filter pills on Recommended page',
  'Mobile-responsive grid layout',
  'Hover scale animations & smooth transitions',
  'Noise texture & ambient glow depth effects',
  'Zero paid dependencies',
];

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 lg:px-10 max-w-4xl mx-auto page-enter">

      <div className="mb-14">
        <p className="text-ember text-[10px] font-bold uppercase tracking-[0.28em] mb-2">
          Platform
        </p>
        <h1 style={{ fontFamily:"'Bebas Neue',cursive", letterSpacing:'0.05em', lineHeight:1 }}
            className="text-5xl sm:text-7xl text-white">
          About<br /><span className="grad-text">MoodVids69</span>
        </h1>
      </div>

      {/* Description */}
      <div className="bg-graphite border border-white/[0.06] rounded-2xl p-7 mb-8">
        <p className="text-silver text-lg leading-relaxed mb-3">
          This is a private video platform UI built using{' '}
          <span className="text-white font-semibold">React</span> and{' '}
          <span className="text-white font-semibold">Tailwind CSS</span>.
        </p>
        <p className="text-ghost text-sm leading-relaxed">
          MoodVids69 is a minimal, aesthetic-first streaming concept inspired by the visual
          language of modern short-form video platforms — all without a single paid dependency.
        </p>
      </div>

      {/* Tech stack */}
      <p className="text-ghost text-[10px] uppercase tracking-[0.2em] mb-4">Built With</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {STACK.map(t => (
          <div key={t.name}
               className="bg-graphite border border-white/[0.06] rounded-xl p-5 text-center
                          hover:border-ember/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">{t.icon}</div>
            <div className="text-white text-sm font-semibold">{t.name}</div>
            <div className="text-ghost text-xs mt-0.5">{t.desc}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <p className="text-ghost text-[10px] uppercase tracking-[0.2em] mb-4">Features</p>
      <ul className="space-y-2.5 mb-12">
        {FEATURES.map(f => (
          <li key={f} className="flex items-start gap-3 text-silver text-sm">
            <span className="text-ember mt-0.5">✦</span> {f}
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap">
        <Link to="/stars"
          className="px-6 py-3 bg-ember text-white text-xs font-bold uppercase
                     tracking-widest rounded-full hover:bg-emberglow hover:scale-105
                     transition-all duration-300">
          Browse Stars →
        </Link>
        <Link to="/"
          className="px-6 py-3 bg-transparent border border-white/15 text-silver
                     text-xs font-bold uppercase tracking-widest rounded-full
                     hover:border-white/40 hover:text-white transition-all duration-300">
          ← Home
        </Link>
      </div>
    </main>
  );
}