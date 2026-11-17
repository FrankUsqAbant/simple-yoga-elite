import { Mail, Phone, Clock, Sparkles } from 'lucide-react';

const EMAIL = 'concierge@yoga-elite.com';
const PHONE = '+593 9 8765 4321';

const items = [
  { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, text: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}` },
  { icon: Clock, text: 'Lun - Vie 06:30 - 20:30 · Sáb y Dom 08:00 - 15:00' },
];

export default function Contact() {
  return (
    <section id="contacto" style={{ padding: '3rem 0 5rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', marginBottom: '2.2rem' }}>
          Tu próximo nivel <br /><span className="text-gold-gradient">de armonía.</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', alignItems: 'center', marginBottom: '2.6rem', color: 'var(--color-text-muted)' }}>
          {items.map((it) => {
            const { text, href } = it;
            return (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.95rem' }}>
              <it.icon size={16} color="var(--color-gold-light)" />
              {href ? <a href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{text}</a> : text}
            </div>
            );
          })}
        </div>
        <a href={`mailto:${EMAIL}?subject=Reserva%20de%20sesi%C3%B3n`} className="btn-gold" style={{ padding: '16px 36px', fontSize: '0.9rem' }}>
          <Sparkles size={16} /> Solicitar Acceso
        </a>
      </div>
    </section>
  );
}
