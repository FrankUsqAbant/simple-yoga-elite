import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Dna,
  Crown,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import SEO from '../../components/SEO';

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

      {/* 1. HERO OBSIDIAN ZEN LUXURY */}
      <section style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '4rem 1.5rem 6rem',
      }}>
        {/* Background Sanctuary Image with Dark Gradient Vignette */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img 
            src="./hero_sanctuary.webp" 
            alt="Santuario Simple Yoga Elite" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.38, filter: 'brightness(0.85) contrast(1.1)' }}
          />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'radial-gradient(circle at center, rgba(7, 10, 15, 0.4) 0%, rgba(7, 10, 15, 0.95) 85%)' 
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '180px',
            background: 'linear-gradient(to top, var(--color-bg), transparent)'
          }} />
        </div>

        {/* Hero Central Glass Container */}
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '960px' }}>
          <h1 style={{ marginBottom: '1.8rem' }}>
            La Ingeniería <br />
            <span className="text-gold-gradient">del Silencio</span>
          </h1>

          <p style={{ 
            maxWidth: '680px', 
            margin: '0 auto 3rem',
            fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)',
            lineHeight: 1.7,
            color: '#cbd5e1'
          }}>
            Boutique yoga para la armonía cognitiva y el bienestar de alto rendimiento. Sesiones exclusivas en un entorno diseñado con precisión arquitectónica.
          </p>

          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/contacto" className="btn-gold">
              <Sparkles size={16} /> Descubrir el Estudio
            </Link>
            <Link to="/clases" className="btn-outline-gold">
              Explorar Sesiones <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EXQUISITE OFFERINGS (3 LUXURY CARDS) */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>EXQUISITE EXPERIENCES</span>
            <h2>Nuestras <span className="text-gold-gradient">Disciplinas de Élite</span></h2>
            <p style={{ maxWidth: '600px', margin: '0.8rem auto 0' }}>
              Protocolos diseñados milimétricamente para potenciar la recuperación física y la claridad mental.
            </p>
          </div>

          <div className="grid-3">
            {/* Card 1: Cognitive Flow */}
            <div className="zen-card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--color-border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-light)',
                marginBottom: '1.5rem'
              }}>
                <Compass size={24} />
              </div>
              <h3 style={{ marginBottom: '0.8rem', fontSize: '1.6rem' }}>Cognitive Flow Yoga</h3>
              <p style={{ marginBottom: '1.8rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Armonía neuro-corporal a través de respiración rítmica y alineación postural dinámica para restaurar el foco ejecutivo.
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.2rem' }}>
                <Link to="/clases" style={{ color: 'var(--color-gold-light)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Explorar Clase <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Private Sessions */}
            <div className="zen-card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--color-border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-light)',
                marginBottom: '1.5rem'
              }}>
                <Dna size={24} />
              </div>
              <h3 style={{ marginBottom: '0.8rem', fontSize: '1.6rem' }}>Sesiones Privadas 1 a 1</h3>
              <p style={{ marginBottom: '1.8rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Instrucción personalizada y privada en suites individuales con bio-mecánica a medida y diagnóstico continuo.
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.2rem' }}>
                <Link to="/contacto" style={{ color: 'var(--color-gold-light)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Agendar con Instructor <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: VIP Founder Memberships */}
            <div className="zen-card zen-card-vip">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                border: '1px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-light)',
                marginBottom: '1.5rem'
              }}>
                <Crown size={24} />
              </div>
              <h3 style={{ marginBottom: '0.8rem', fontSize: '1.6rem' }}>Membresías de Fundador</h3>
              <p style={{ marginBottom: '1.8rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Acceso ilimitado sin restricciones al santuario privado, vestuarios boutique y amenidades de bienestar de clase mundial.
              </p>
              <div style={{ borderTop: '1px solid var(--color-border-gold)', paddingTop: '1.2rem' }}>
                <Link to="/contacto" style={{ color: 'var(--color-gold-light)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Solicitar Membresía <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SANCTUARY SHOWCASE - LA GEOMETRÍA DE LA PAZ */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <div className="zen-card" style={{ 
            padding: '0', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            alignItems: 'stretch',
            minHeight: '520px'
          }}>
            <div style={{ position: 'relative', minHeight: '350px' }}>
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop" 
                alt="Santuario Simple Yoga Elite" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(14, 21, 36, 0.95))' }} />
            </div>

            <div style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge-gold" style={{ marginBottom: '1.2rem', width: 'fit-content' }}>ARQUITECTURA BOUTIQUE</span>
              <h2 style={{ marginBottom: '1.5rem' }}>
                La Geometría <br />
                <span className="text-gold-gradient">de la Paz.</span>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                En Simple Yoga Elite, el lujo no es opulencia, es precisión. Cada rincón ha sido diseñado para ofrecer aislamiento acústico de grado clínico, luz circadiana y filtración de aire puro.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ color: 'var(--color-gold-light)', fontWeight: 700, fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>0.0 dB</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>Aislamiento Acústico</div>
                </div>
                <div>
                  <div style={{ color: 'var(--color-emerald)', fontWeight: 700, fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>99.9%</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>Pureza del Aire HEPA</div>
                </div>
              </div>

              <Link to="/clases" className="btn-gold" style={{ width: 'fit-content' }}>
                Conocer las Instalaciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER PASSES & MEMBERSHIP TIERS */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>MEMBRESÍAS EXCLUSIVAS</span>
            <h2>Pases de <span className="text-gold-gradient">Acceso Privado</span></h2>
            <p style={{ maxWidth: '600px', margin: '0.8rem auto 0' }}>
              Cupos limitados por temporada para garantizar la máxima exclusividad y atención personalizada.
            </p>
          </div>

          <div className="grid-3">
            {/* Tier 1: Single Pass */}
            <div className="zen-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)', textTransform: 'uppercase' }}>Acceso Sesión</span>
                <h3 style={{ marginTop: '0.4rem', marginBottom: '1rem' }}>Pase Singular</h3>
                <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '1.5rem' }}>
                  $45 <span style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', fontFamily: 'var(--font-sans)' }}>/ sesión</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  {['1 Sesión en Grupo Reducido', 'Acceso a Zona de Hidratación', 'Equipamiento de Lujo Incluido'].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 size={16} color="var(--color-gold-light)" /> {feat}
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contacto" className="btn-outline-gold" style={{ width: '100%', textAlign: 'center' }}>
                Reservar Pase
              </Link>
            </div>

            {/* Tier 2: Aurora Monthly (Featured) */}
            <div className="zen-card zen-card-vip" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transform: 'scale(1.03)', borderColor: 'var(--color-gold)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-gold-light)', textTransform: 'uppercase' }}>Más Solicitada</span>
                  <span className="badge-gold" style={{ fontSize: '0.65rem' }}>POPULAR</span>
                </div>
                <h3 style={{ marginTop: '0.4rem', marginBottom: '1rem' }}>Membresía Aurora</h3>
                <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-gold-light)', marginBottom: '1.5rem' }}>
                  $240 <span style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', fontFamily: 'var(--font-sans)' }}>/ mes</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  {['Sesiones Grupales Ilimitadas', '2 Sesiones Privadas 1 a 1 al mes', 'Casillero y Ducha Boutique', 'Acceso Prioritario a Talleres'].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#fff' }}>
                      <CheckCircle2 size={16} color="var(--color-gold-light)" /> {feat}
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contacto" className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>
                Ingresar a Aurora
              </Link>
            </div>

            {/* Tier 3: Founder Circle */}
            <div className="zen-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)', textTransform: 'uppercase' }}>Círculo Privado</span>
                <h3 style={{ marginTop: '0.4rem', marginBottom: '1rem' }}>Fundadores VIP</h3>
                <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '1.5rem' }}>
                  $490 <span style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', fontFamily: 'var(--font-sans)' }}>/ mes</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  {['Acceso 24/7 con Llave Biométrica', 'Sesiones Privadas Ilimitadas', 'Concierge Personalizado', 'Invitación a Retiros Exclusivos'].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 size={16} color="var(--color-gold-light)" /> {feat}
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contacto" className="btn-outline-gold" style={{ width: '100%', textAlign: 'center' }}>
                Solicitar Acceso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL LUXURY CALL TO ACTION */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <div className="zen-card" style={{
            background: 'linear-gradient(135deg, #0c121d 0%, #06090f 100%)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(4rem, 8vw, 6rem) 2rem',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '300px',
              height: '300px',
              background: 'var(--color-gold-glow)',
              filter: 'blur(100px)',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }} />

            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', position: 'relative' }}>
              Tu Próximo Nivel <br />
              <span className="text-gold-gradient">de Armonía y Silencio.</span>
            </h2>
            <p style={{ maxWidth: '620px', margin: '0 auto 3rem', position: 'relative' }}>
              Accede al santuario. Agenda tu primera sesión diagnóstica y descubre el bienestar boutique de Simple Yoga Elite.
            </p>
            <div style={{ position: 'relative' }}>
              <Link to="/contacto" className="btn-gold" style={{ padding: '16px 36px', fontSize: '0.9rem' }}>
                <Sparkles size={16} /> Solicitar Acceso al Santuario
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
