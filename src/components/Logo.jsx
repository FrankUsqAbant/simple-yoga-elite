export default function Logo({ size = 34 }) {
  return (
    <a href="#inicio" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        width: size,
        height: size,
        borderRadius: 8,
        border: '1px solid var(--color-border-gold)',
        background: 'rgba(212, 175, 55, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-gold-light)',
        fontFamily: 'var(--font-serif)',
        fontSize: '1.1rem',
        fontWeight: 700,
      }}>
        Ψ
      </div>
      <span style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-serif)', letterSpacing: '0.08em', fontWeight: 600 }}>
        SIMPLE<span style={{ color: 'var(--color-gold-light)', fontWeight: 400 }}>YOGA</span>ELITE
      </span>
    </a>
  );
}
