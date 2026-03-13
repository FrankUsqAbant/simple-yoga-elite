import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import { Check, X, CreditCard, Calendar } from 'lucide-react';

export default function AdminReservations() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('class_bookings')
        .select(`
          *,
          yoga_classes ( title, schedule )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page-wellness">
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Registro de Reservas</h1>
        <p className="text-muted">Visualiza y gestiona las transacciones y agendamientos realizados.</p>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem 0' }}><div className="loading-spinner"></div></div>
      ) : bookings.length === 0 ? (
        <div className="wellness-card" style={{ textAlign: 'center', padding: '5rem' }}>
          <p className="text-muted">Aún no se han registrado transacciones.</p>
        </div>
      ) : (
        <div className="wellness-card" style={{ padding: 0, overflowX: 'auto' }}>
          <table className="table-wellness">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Clase / Sesión</th>
                <th>ID Transacción</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Calendar size={16} className="text-accent" />
                      {new Date(b.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 600, color: '#fff' }}>{b.yoga_classes?.title || 'Clase Eliminada'}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{b.yoga_classes?.schedule}</div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                      <CreditCard size={14} style={{ opacity: 0.5 }} />
                      {b.stripe_session_id?.substring(0, 12)}...
                    </div>
                  </td>
                  <td>
                    <span className={`badge-wellness ${b.status === 'pagado' ? '' : 'status-pending'}`} style={{ 
                      backgroundColor: b.status === 'pagado' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(249, 115, 22, 0.1)',
                      color: b.status === 'pagado' ? '#10b981' : '#f97316'
                    }}>
                      {b.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
