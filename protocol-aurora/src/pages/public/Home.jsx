import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Dna,
  Zap,
  Activity,
  PlayCircle
} from 'lucide-react';
import SEO from '../../components/SEO';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="obsidian-page elite-viewport">
      <SEO 
        title="La Ingeniería del Silencio | Aurora Elite" 
        description="Santuario boutique de alto rendimiento en Quito. Experimenta el lujo de la precisión técnica."
      />

      {/* AURORA ENVIRONMENT BLOBS */}
      <div className="aurora-blob" style={{ top: '-10%', left: '-5%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%)' }} />
      <div className="aurora-blob" style={{ top: '40%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(2, 132, 199, 0.1), transparent 70%)', animationDelay: '-5s' }} />

      {/* 1. HERO REBORN: THE SYMPHONY OF LIGHT */}
      <section className="hero-elite" style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 60px',
        overflow: 'hidden',
        zIndex: 5
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 20 }}>
          <div style={{ maxWidth: '1000px' }}>
            <div className="reveal-anim">
              <div className="badge-wellness" style={{ marginBottom: '2rem', border: '1px solid var(--color-accent)', padding: '0.6rem 1.5rem', background: 'rgba(16, 185, 129, 0.05)', position: 'relative', zIndex: 21 }}>
                SANTUARIO TÉCNICO v7.5 • AURORA PROTOCOL
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(4rem, 14vw, 8.5rem)', 
                lineHeight: 0.85,
                marginBottom: '3rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.06em',
                position: 'relative',
                zIndex: 22
              }}>
                Diseñamos <br /> 
                <span style={{ 
                  color: 'transparent', 
                  WebkitTextStroke: '2px #fff',
                  opacity: 0.8
                }}>Resultados.</span>
              </h1>

              <p style={{ 
                maxWidth: '800px', 
                marginBottom: '4rem',
                color: 'var(--color-text-muted)',
                fontSize: '1.8rem',
                lineHeight: 1.4,
                fontWeight: 400,
                position: 'relative',
                zIndex: 23
              }}>
                No somos un centro de yoga. Somos un laboratorio de maestría biomecánica donde la tecnología se funde con el silencio de vanguardia.
              </p>

              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 24 }}>
                <Link to="/contacto" className="btn-wellness" style={{ position: 'relative', zIndex: 25 }}>
                  Iniciar Transformación <ArrowRight size={22} />
                </Link>
                <button 
                  onClick={() => window.open('https://youtube.com', '_blank')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#fff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    fontWeight: 700, 
                    cursor: 'pointer',
                    fontSize: '1rem',
                    opacity: 0.7,
                    transition: 'var(--transition-fluid)',
                    position: 'relative',
                    zIndex: 25
                  }}
                >
                   <PlayCircle size={40} strokeWidth={1} /> Ver El Manifiesto
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFRAESTRUCTURA AURORA - THE NEOMORPHIC GRID */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-3" style={{ marginTop: '-80px' }}>
            {[
              { icon: <Dna />, title: "Bio-Ingeniería", desc: "Corrección postural basada en física de vectores y anatomía dinámica." },
              { icon: <ShieldCheck />, title: "Cero Rastro", desc: "Filtración de aire grado clínico y aislamiento acústico boutique." },
              { icon: <Compass />, title: "Flow Cognitivo", desc: "Protocolos de respiración optimizados para la claridad mental ejecutiva." }
            ].map((item, i) => (
              <div key={i} className="wellness-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  borderRadius: '20px', 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '2.5rem',
                  color: 'var(--color-accent)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ marginBottom: '1.2rem', fontSize: '1.8rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEPTH AND MOTION - THE AURORA GLASS PANEL */}
      <section className="section-padding" style={{ position: 'relative' }}>
          <div className="container">
             <div className="wellness-card" style={{ 
                 padding: '0', 
                 display: 'grid', 
                 gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                 alignItems: 'stretch',
                 overflow: 'hidden',
                 minHeight: '600px'
             }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img 
                        src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200&auto=format&fit=crop" 
                        alt="Elite Experience" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--color-bg), transparent)' }}></div>
                </div>
                <div style={{ padding: 'var(--space-xxl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span className="badge-wellness">MAESTRÍA TÉCNICA</span>
                    <h2 style={{ marginBottom: '2.5rem' }}>La Geometría <br /> de la <span style={{ color: 'var(--color-accent)' }}>Paz.</span></h2>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-text-muted)', marginBottom: '3.5rem' }}>
                        En SimpleYogaElite, el lujo no es opulencia, es precisión. Hemos diseñado un espacio donde cada ángulo y cada luz están configurados para inducir el estado óptimo de consciencia.
                    </p>
                    <Link to="/clases" className="btn-wellness" style={{ width: 'fit-content', textDecoration: 'none' }}>Explorar El Santuario</Link>
                </div>
             </div>
          </div>
      </section>

      {/* 4. CONVERSION AURORA - THE DARK LUX CTA */}
      <section style={{ padding: 'var(--space-xxxl) 0 0' }}>
        <div className="container">
          <div className="wellness-card" style={{ 
            background: 'linear-gradient(135deg, #05100a 0%, #020617 100%)', 
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: 'var(--radius-lg)',
            padding: '8rem 4rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Inner Aurora Effect */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '40%', height: '40%', background: 'var(--color-accent-glow)', filter: 'blur(100px)', transform: 'translate(-50%, -50%)', opacity: 0.3 }}></div>

            <h2 style={{ fontSize: '4.5rem', marginBottom: '2.5rem', whiteSpace: 'pre-line' }}>
                Tu Próximo Nivel <br /> de <span style={{ color: 'var(--color-accent)' }}>Excelencia.</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
                Accede a la membresía de fundadores. Cupos estrictamente limitados para garantizar la pureza del ecosistema.
            </p>
            <Link to="/contacto" className="btn-wellness" style={{ padding: '1.5rem 4rem' }}>
                Solicitar Acceso Privado
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
