import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass, Dna, Crown, CheckCircle2 } from 'lucide-react';
import heroSanctuaryImg from '../../assets/hero_sanctuary.webp';
import SEO from '../../components/SEO';

const disciplines = [
  { icon: Compass, title: 'Cognitive Flow Yoga', text: 'Respiración rítmica y postura dinámica para recuperar el foco.', to: '/clases', cta: 'Ver sesiones' },
  { icon: Dna, title: 'Sesiones Privadas', text: 'Instrucción individual, a tu medida y en un espacio solo para ti.', to: '/contacto', cta: 'Agendar' },
  { icon: Crown, title: 'Membresía Fundador', text: 'Acceso ilimitado al santuario y a todas sus amenidades.', to: '/contacto', cta: 'Solicitar', vip: true },
];

const tiers = [
  { label: 'Sesión', name: 'Pase Singular', price: '$45', unit: '/ sesión', feats: ['1 sesión en grupo reducido', 'Equipamiento incluido'], cta: 'Reservar' },
  { label: 'Más solicitada', name: 'Membresía Aurora', price: '$240', unit: '/ mes', feats: ['Sesiones grupales ilimitadas', '2 sesiones privadas al mes', 'Casillero y ducha'], cta: 'Ingresar', featured: true },
  { label: 'Círculo privado', name: 'Fundadores VIP', price: '$490', unit: '/ mes', feats: ['Acceso 24/7', 'Sesiones privadas ilimitadas', 'Concierge personal'], cta: 'Solicitar' },
];

const sectionHead = { textAlign: 'center', marginBottom: '3.5rem' };
const linkStyle = { color: 'var(--color-gold-light)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' };

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="obsidian-page animate-fadeIn">
      <SEO
        title="La Ingeniería del Silencio | Simple Yoga Elite"
        description="Santuario boutique de alto rendimiento. Experimenta la ingeniería del silencio, sesiones personalizadas de yoga y bienestar de élite."
      />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4rem 1.5rem 6rem' }}>
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
            <Link to="/contacto" className="btn-gold"><Sparkles size={16} /> Descubrir el Estudio</Link>
            <Link to="/clases" className="btn-outline-gold">Explorar Sesiones <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* DISCIPLINAS */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={sectionHead}>
            <h2>Nuestras <span className="text-gold-gradient">Disciplinas</span></h2>
          </div>
          <div className="grid-3">
            {disciplines.map((d) => {
              const { title, text, to, cta, vip } = d;
              return (
              <div key={title} className={vip ? 'zen-card zen-card-vip' : 'zen-card'}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(212,175,55,0.1)', border: '1px solid var(--color-border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold-light)', marginBottom: '1.4rem' }}>
                  <d.icon size={24} />
                </div>
                <h3 style={{ marginBottom: '0.7rem', fontSize: '1.6rem' }}>{title}</h3>
                <p style={{ marginBottom: '1.6rem', fontSize: '0.95rem', lineHeight: 1.7 }}>{text}</p>
                <Link to={to} style={linkStyle}>{cta} <ArrowRight size={14} /></Link>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SANTUARIO */}
      <section className="section-padding">
        <div className="container">
          <div className="zen-card" style={{ padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'stretch', minHeight: '440px', overflow: 'hidden' }}>
            <div style={{ position: 'relative', minHeight: '300px' }}>
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=70&w=900&auto=format&fit=crop"
                alt="Interior del santuario"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 40%, rgba(14,21,36,0.95))' }} />
            </div>
            <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ marginBottom: '1.2rem' }}>
                La Geometría <br /><span className="text-gold-gradient">de la Paz.</span>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                El lujo no es opulencia, es precisión: silencio absoluto, luz natural y aire puro.
              </p>
              <Link to="/clases" className="btn-gold" style={{ width: 'fit-content' }}>Conocer el estudio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBRESÍAS */}
      <section className="section-padding">
        <div className="container">
          <div style={sectionHead}>
            <h2>Pases de <span className="text-gold-gradient">Acceso Privado</span></h2>
          </div>
          <div className="grid-3">
            {tiers.map(({ label, name, price, unit, feats, cta, featured }) => (
              <div key={name} className={featured ? 'zen-card zen-card-vip' : 'zen-card'} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ...(featured && { borderColor: 'var(--color-gold)' }) }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: featured ? 'var(--color-gold-light)' : 'var(--color-text-dim)', textTransform: 'uppercase' }}>{label}</span>
                  <h3 style={{ marginTop: '0.4rem', marginBottom: '1rem' }}>{name}</h3>
                  <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: featured ? 'var(--color-gold-light)' : '#fff', marginBottom: '1.4rem' }}>
                    {price} <span style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', fontFamily: 'var(--font-sans)' }}>{unit}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                    {feats.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        <CheckCircle2 size={16} color="var(--color-gold-light)" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/contacto" className={featured ? 'btn-gold' : 'btn-outline-gold'} style={{ width: '100%', textAlign: 'center' }}>{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section style={{ padding: '3rem 0 4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', marginBottom: '2rem' }}>
            Tu próximo nivel <br /><span className="text-gold-gradient">de armonía.</span>
          </h2>
          <Link to="/contacto" className="btn-gold" style={{ padding: '16px 36px', fontSize: '0.9rem' }}>
            <Sparkles size={16} /> Solicitar Acceso
          </Link>
        </div>
      </section>
    </div>
  );
}
