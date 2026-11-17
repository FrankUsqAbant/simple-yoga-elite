export default function Sanctuary() {
  return (
    <section id="santuario" className="section-padding">
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
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              El lujo no es opulencia, es precisión: silencio absoluto, luz natural y aire puro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
