import { Activity, BookOpen, Users } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="section-padding" style={{ paddingTop: 0 }}>
      {/* Metrics Row */}
      <div className="grid-3" style={{ marginBottom: '3rem' }}>
        <div className="wellness-card reveal-anim" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
          <div className="text-accent" style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <Activity size={24} />
          </div>
          <div>
            <h4 className="text-muted" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Clases Activas</h4>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>03</div>
          </div>
        </div>
        
        <div className="wellness-card reveal-anim" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
          <div className="text-accent" style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <BookOpen size={24} />
          </div>
          <div>
            <h4 className="text-muted" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Entradas Blog</h4>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>01</div>
          </div>
        </div>

        <div className="wellness-card reveal-anim" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
          <div className="text-accent" style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <Users size={24} />
          </div>
          <div>
            <h4 className="text-muted" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nuevos Leads</h4>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>00</div>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="wellness-card" style={{ borderLeft: '4px solid var(--color-accent)', background: 'rgba(16, 185, 129, 0.02)' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#fff' }}>Centro de Control Wellness</h2>
        <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '800px' }}>
          Bienvenido al centro de mando de SimpleYogaElite. Este entorno ha sido purificado para ofrecer máxima claridad y enfoque en la gestión de tu santuario.
          Tus datos están blindados en tiempo real con Supabase.
        </p>
      </div>
    </div>
  );
}
