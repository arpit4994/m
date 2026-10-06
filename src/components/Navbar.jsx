import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Stars',       to: '/stars' },
  { label: 'Recommended', to: '/recommended' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    'relative text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ' +
    (isActive ? 'text-ember nav-active' : 'text-silver hover:text-white');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur bg-void/80 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-ember group-hover:scale-150 transition-transform duration-300" />
          <span style={{ fontFamily:"'Bebas Neue',cursive", letterSpacing:"0.15em", fontSize:"1.4rem" }}
                className="text-white select-none">
            Mood<span className="text-ember">Vids</span>69
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span className="block h-0.5 w-6 bg-white transition-all duration-300"
                style={menuOpen ? { transform:'rotate(45deg) translate(4px,5px)' } : {}} />
          <span className="block h-0.5 w-6 bg-white transition-all duration-300"
                style={menuOpen ? { opacity:0 } : {}} />
          <span className="block h-0.5 w-6 bg-white transition-all duration-300"
                style={menuOpen ? { transform:'rotate(-45deg) translate(4px,-5px)' } : {}} />
        </button>
      </div>

      <div className="md:hidden overflow-hidden bg-carbon border-b border-white/[0.06]"
           style={{ maxHeight: menuOpen ? '200px' : '0', transition:'max-height 0.35s ease' }}>
        <div className="flex flex-col px-6 py-5 gap-5">
          {NAV_LINKS.map(link => (
            <NavLink key={link.to} to={link.to} className={linkClass}
                     onClick={() => setMenuOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}