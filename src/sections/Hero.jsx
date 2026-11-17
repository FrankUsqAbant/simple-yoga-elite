import { ArrowRight, Sparkles } from 'lucide-react';
import heroSanctuaryImg from '../assets/hero_sanctuary.webp';

export default function Hero() {
  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '6rem 1.5rem' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <img
          src={heroSanctuaryImg}
          alt=""
          fetchPriority="high"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(7,10,15,0.55) 0%, rgba(7,10,15,0.92) 90%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, var(--color-bg), transparent)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px' }}>
        <h1 style={{ marginBottom: '1.6rem', textShadow: '0 2px 24px rgba(7,10,15,0.7)' }}>
          La Ingeniería <br />
          <span className="text-gold-gradient">del Silencio</span>
        </h1>
        <p style={{ maxWidth: '520px', margin: '0 auto 2.6rem', fontSize: 'clamp(1.05rem, 1.2vw, 1.2rem)', lineHeight: 1.7, color: '#e2e8f0' }}>
          Yoga boutique para la calma y el alto rendimiento.
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#contacto" className="btn-gold"><Sparkles size={16} /> Descubrir el Estudio</a>
          <a href="#disciplinas" className="btn-outline-gold">Explorar Disciplinas <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
