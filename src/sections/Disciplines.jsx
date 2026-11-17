import { ArrowRight, Compass, Dna, Crown } from 'lucide-react';

const disciplines = [
  { icon: Compass, title: 'Cognitive Flow Yoga', text: 'Respiración rítmica y postura dinámica para recuperar el foco.', cta: 'Reservar' },
  { icon: Dna, title: 'Sesiones Privadas', text: 'Instrucción individual, a tu medida y en un espacio solo para ti.', cta: 'Agendar' },
  { icon: Crown, title: 'Membresía Fundador', text: 'Acceso ilimitado al santuario y a todas sus amenidades.', cta: 'Solicitar', vip: true },
];

const linkStyle = { color: 'var(--color-gold-light)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' };

export default function Disciplines() {
  return (
    <section id="disciplinas" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="section-head">
          <h2>Nuestras <span className="text-gold-gradient">Disciplinas</span></h2>
        </div>
        <div className="grid-3">
          {disciplines.map((d) => (
            <div key={d.title} className={d.vip ? 'zen-card zen-card-vip' : 'zen-card'}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(212,175,55,0.1)', border: '1px solid var(--color-border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold-light)', marginBottom: '1.4rem' }}>
                <d.icon size={24} />
              </div>
              <h3 style={{ marginBottom: '0.7rem', fontSize: '1.6rem' }}>{d.title}</h3>
              <p style={{ marginBottom: '1.6rem', fontSize: '0.95rem', lineHeight: 1.7 }}>{d.text}</p>
              <a href="#contacto" style={linkStyle}>{d.cta} <ArrowRight size={14} /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
