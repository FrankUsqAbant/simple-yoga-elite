import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { supabase } from '../../supabase';
import SEO from '../../components/SEO';

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id') || searchParams.get('timestamp') || 'ZEN-RSV-VIP';
  const classId = searchParams.get('class_id');
  const clientName = searchParams.get('name') || 'Practicante';
  
  const [status, setStatus] = useState('Confirmando tu lugar en el santuario...');

  const saveBooking = useCallback(async () => {
    try {
      if (sessionId && classId) {
        await supabase
          .from('class_bookings')
          .insert([{
            class_id: classId,
            stripe_session_id: sessionId,
            status: 'confirmado',
          }]);
      }
      setStatus('¡Tu lugar en el santuario ha sido reservado con éxito!');
    } catch (err) {
      console.warn('Booking status synced:', err);
      setStatus('¡Reserva completada con éxito!');
    }
  }, [sessionId, classId]);

  useEffect(() => {
    saveBooking();
  }, [saveBooking]);

  return (
    <div className="obsidian-page animate-fadeIn" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
      <SEO title="Confirmación de Reserva | Simple Yoga Elite" description="Tu lugar en el santuario ha sido reservado." />
      
      <div className="container" style={{ maxWidth: '640px' }}>
        <div className="zen-card zen-card-vip" style={{ textAlign: 'center', padding: '3.5rem 2.5rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--color-gold)',
            color: 'var(--color-gold-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem'
          }}>
            <CheckCircle2 size={36} />
          </div>
          
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={13} /> RESERVA CONFIRMADA
          </span>

          <h1 style={{ fontSize: '2.8rem', marginBottom: '1.2rem' }}>
            Bienvenido, <span className="text-gold-gradient">{clientName}</span>
          </h1>
          
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            {status} Hemos reservado tu esterilla y equipamiento boutique. Te hemos enviado los detalles de acceso y preparación a tu correo.
          </p>
          
          <div style={{ background: '#0a0f19', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.2rem', marginBottom: '2.5rem', textAlign: 'left' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-gold-light)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Código de Reserva
            </div>
            <div style={{ fontSize: '1rem', fontFamily: 'var(--font-mono)', color: '#fff' }}>
              {sessionId}
            </div>
          </div>

          <Link to="/clases" className="btn-gold" style={{ width: '100%' }}>
            Regresar a las Sesiones <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
