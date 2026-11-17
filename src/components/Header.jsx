import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const LINKS = [
  { href: '#disciplinas', label: 'Disciplinas' },
  { href: '#santuario', label: 'Santuario' },
  { href: '#membresias', label: 'Membresías' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar-wellness ${scrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Logo />

          <div className="navbar-pill hide-mobile">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="#contacto" className="btn-nav-reserve hide-mobile">Reservar Sesión</a>
            <button
              className="mobile-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Abrir menú"
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#fff', padding: '6px' }}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav-overlay ${open ? 'active' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}
