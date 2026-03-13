import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import ScrollProgress from '../components/ScrollProgress';

export default function PublicLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO />
      <ScrollProgress />
      
      {/* NAVBAR AURORA BOUTIQUE */}
      <nav className={`navbar-wellness ${scrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link to="/" className="logo" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.04em', position: 'relative', zIndex: 1100 }}>
            SIMPLE<span style={{ color: 'var(--color-accent)', fontWeight: 300 }}>YOGA</span>ELITE
          </Link>

          {/* Nav Links in Pill */}
          <div className="navbar-pill hide-mobile">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Universo</Link>
            <Link to="/clases" className={`nav-link ${location.pathname === '/clases' ? 'active' : ''}`}>Sesiones</Link>
            <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Diario</Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/contacto" className="btn-wellness hide-mobile" style={{ padding: '0.9rem 2.2rem', fontSize: '0.8rem', fontWeight: 900 }}>
              ACCESO VIP
            </Link>

            {/* Mobile Toggle - Ahora controlado por CSS global */}
            <button className="mobile-toggle" onClick={toggleMenu} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#fff' }}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE NAV OVERLAY AURORA */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={toggleMenu}>Universo</Link>
        <Link to="/clases" className={`mobile-nav-link ${location.pathname === '/clases' ? 'active' : ''}`} onClick={toggleMenu}>Sesiones</Link>
        <Link to="/blog" className={`mobile-nav-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={toggleMenu}>Diario</Link>
        <Link to="/contacto" className={`mobile-nav-link ${location.pathname === '/contacto' ? 'active' : ''}`} onClick={toggleMenu}>Contacto VIP</Link>
        
        <div style={{ marginTop: 'auto', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
           <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>EL SANTUARIO MÓVIL</p>
           <div style={{ display: 'flex', gap: '1.5rem' }}>
             {['IG', 'FB', 'TW'].map(social => (
               <span key={social} style={{ color: '#fff', fontWeight: 900, fontSize: '0.8rem' }}>{social}</span>
             ))}
           </div>
        </div>
      </div>

      {/* MAIN CONTENT RAILS */}
      <main className="main-content" style={{ flex: 1, paddingTop: '100px' }}>
        <Outlet />
      </main>

      {/* FOOTER OBSIDIAN AURORA */}
      <footer className="footer-aurora">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
            <div className="footer-column">
              <Link to="/" className="logo" style={{ textDecoration: 'none', color: '#fff', display: 'block', marginBottom: '2rem' }}>
                SIMPLE<span style={{ color: 'var(--color-accent)', fontWeight: 400 }}>YOGA</span>ELITE
              </Link>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px', fontSize: '1.1rem' }}>
                Donde la ingeniería del silencio se convierte en el estándar de oro del bienestar.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <Icon key={i} size={22} style={{ color: 'var(--color-text-muted)', cursor: 'pointer', transition: 'var(--transition-fluid)' }} />
                ))}
              </div>
            </div>
            
            <div className="footer-column">
              <h4>Arquitectura</h4>
              <Link to="/" className="footer-link">El Método</Link>
              <Link to="/clases" className="footer-link">Membresías Elite</Link>
              <Link to="/blog" className="footer-link">Insights de Alto Rendimiento</Link>
            </div>

            <div className="footer-column">
              <h4>El Santuario</h4>
              <p className="footer-link" style={{ cursor: 'default' }}>Quito, Sierra del Lujo</p>
              <p className="footer-link" style={{ cursor: 'default' }}>concierge@yoga-elite.com</p>
              <p className="footer-link" style={{ cursor: 'default' }}>+593 9 8765 4321</p>
            </div>

            <div className="footer-column">
              <h4>Legal Boutique</h4>
              <Link to="/" className="footer-link">Protocolos de Privacidad</Link>
              <Link to="/" className="footer-link">Términos de Exclusividad</Link>
              <Link to="/login" className="footer-link" style={{ opacity: 0.3 }}>Staff Access</Link>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} SimpleYogaElite. Elevando la consciencia técnica.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--color-accent)', letterSpacing: '0.2rem' }}>DESIGNED BY ALEJABOT ELITE</span>
               <div style={{ width: '40px', height: '1px', background: 'var(--color-accent)' }}></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
