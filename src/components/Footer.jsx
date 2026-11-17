import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ background: '#04070c', borderTop: '1px solid var(--color-border)', padding: '3.5rem 0 2.5rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <Logo size={30} />
        <p style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} SimpleYogaElite
        </p>
      </div>
    </footer>
  );
}
