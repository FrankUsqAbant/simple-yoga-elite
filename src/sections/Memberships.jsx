import { CheckCircle2 } from 'lucide-react';

const tiers = [
  { label: 'Sesión', name: 'Pase Singular', price: '$45', unit: '/ sesión', feats: ['1 sesión en grupo reducido', 'Equipamiento incluido'], cta: 'Reservar' },
  { label: 'Más solicitada', name: 'Membresía Aurora', price: '$240', unit: '/ mes', feats: ['Sesiones grupales ilimitadas', '2 sesiones privadas al mes', 'Casillero y ducha'], cta: 'Ingresar', featured: true },
  { label: 'Círculo privado', name: 'Fundadores VIP', price: '$490', unit: '/ mes', feats: ['Acceso 24/7', 'Sesiones privadas ilimitadas', 'Concierge personal'], cta: 'Solicitar' },
];

export default function Memberships() {
  return (
    <section id="membresias" className="section-padding">
      <div className="container">
        <div className="section-head">
          <h2>Pases de <span className="text-gold-gradient">Acceso Privado</span></h2>
        </div>
        <div className="grid-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={t.featured ? 'zen-card zen-card-vip' : 'zen-card'}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ...(t.featured && { borderColor: 'var(--color-gold)' }) }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: t.featured ? 'var(--color-gold-light)' : 'var(--color-text-dim)', textTransform: 'uppercase' }}>{t.label}</span>
                <h3 style={{ marginTop: '0.4rem', marginBottom: '1rem' }}>{t.name}</h3>
                <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: t.featured ? 'var(--color-gold-light)' : '#fff', marginBottom: '1.4rem' }}>
                  {t.price} <span style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', fontFamily: 'var(--font-sans)' }}>{t.unit}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                  {t.feats.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 size={16} color="var(--color-gold-light)" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#contacto" className={t.featured ? 'btn-gold' : 'btn-outline-gold'} style={{ width: '100%', textAlign: 'center' }}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
