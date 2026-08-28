import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import ScrollProgress from '../components/ScrollProgress';

export default function PublicLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO />
      <ScrollProgress />
      
      {/* NAVBAR OBSIDIAN ZEN LUXURY */}
      <nav className={`navbar-wellness ${scrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          {/* Brand Logo with Monogram */}
          <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              border: '1px solid var(--color-border-gold)',
              background: 'rgba(212, 175, 55, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold-light)',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 700
            }}>
              Ψ
            </div>
            <span style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-serif)', letterSpacing: '0.08em', fontWeight: 600 }}>
              SIMPLE<span style={{ color: 'var(--color-gold-light)', fontWeight: 400 }}>YOGA</span>ELITE
            </span>
          </Link>

          {/* Desktop Nav Links in Glass Pill */}
          <div className="navbar-pill hide-mobile">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Universo</Link>
            <Link to="/clases" className={`nav-link ${location.pathname === '/clases' ? 'active' : ''}`}>Sesiones</Link>
            <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Diario</Link>
            <Link to="/contacto" className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}>Contacto</Link>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/contacto" className="btn-gold hide-mobile" style={{ padding: '10px 22px', fontSize: '0.75rem' }}>
              <Sparkles size={14} /> Reservar Sesión
            </Link>

            <button 
              className="mobile-toggle" 
              onClick={toggleMenu} 
              aria-label="Abrir menú"
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#fff', padding: '6px' }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE NAV OVERLAY */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={toggleMenu}>Universo</Link>
        <Link to="/clases" className={`mobile-nav-link ${location.pathname === '/clases' ? 'active' : ''}`} onClick={toggleMenu}>Sesiones</Link>
        <Link to="/blog" className={`mobile-nav-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={toggleMenu}>Diario</Link>
        <Link to="/contacto" className={`mobile-nav-link ${location.pathname === '/contacto' ? 'active' : ''}`} onClick={toggleMenu}>Contacto VIP</Link>
        
        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
           <p style={{ color: 'var(--color-gold-light)', fontSize: '0.85rem', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>SANTUARIO BOUTIQUE</p>
           <div style={{ display: 'flex', gap: '1.5rem' }}>
             {['Instagram', 'WhatsApp', 'Concierge'].map(social => (
               <span key={social} style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{social}</span>
             ))}
           </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="main-content" style={{ flex: 1, paddingTop: '80px' }}>
        <Outlet />
      </main>

      {/* FOOTER OBSIDIAN ZEN */}
      <footer style={{
        background: '#04070c',
        borderTop: '1px solid var(--color-border)',
        padding: '5rem 0 3rem 0',
        marginTop: '6rem'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            {/* Brand Column */}
            <div>
              <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  border: '1px solid var(--color-border-gold)',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold-light)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  fontWeight: 700
                }}>
                  Ψ
                </div>
                <span style={{ color: '#fff', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', letterSpacing: '0.08em', fontWeight: 600 }}>
                  SIMPLE<span style={{ color: 'var(--color-gold-light)', fontWeight: 400 }}>YOGA</span>ELITE
                </span>
              </Link>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Donde la ingeniería del silencio se convierte en el estándar de oro del bienestar consciente.
              </p>
              <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2rem' }}>
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <div key={i} style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}>
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Column */}
            <div>
              <h4 style={{ color: 'var(--color-gold-light)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                Arquitectura
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link to="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>El Santuario</Link>
                <Link to="/clases" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Sesiones Privadas</Link>
                <Link to="/blog" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Diario de Alto Rendimiento</Link>
              </div>
            </div>

            {/* Sanctuary Column */}
            <div>
              <h4 style={{ color: 'var(--color-gold-light)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                Concierge Privado
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <p>Quito, Sierra del Lujo</p>
                <p>concierge@yoga-elite.com</p>
                <p>+593 9 8765 4321</p>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <h4 style={{ color: 'var(--color-gold-light)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                Privacidad Boutique
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link to="/contacto" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Protocolos de Confidencialidad</Link>
                <Link to="/contacto" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Términos de Exclusividad</Link>
                <Link to="/login" style={{ color: 'var(--color-text-dim)', textDecoration: 'none', fontSize: '0.85rem' }}>Acceso Staff</Link>
              </div>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} SimpleYogaElite. Elevando la consciencia técnica.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
               <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)', fontFamily: 'var(--font-mono)' }}>AURORA PROTOCOL v20.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
