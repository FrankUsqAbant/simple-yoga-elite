import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, PartyPopper } from 'lucide-react';
import { supabase } from '../../supabase';
import SEO from '../../components/SEO';

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const classId = searchParams.get('class_id');
  
  const [status, setStatus] = useState('Confirmando tu reserva en el sistema...');

  const saveBooking = useCallback(async () => {
    try {
      const { data: existing } = await supabase
        .from('class_bookings')
        .select('*')
        .eq('stripe_session_id', sessionId)
        .single();

      if (existing) {
        setStatus('¡Tu reserva ya estaba confirmada!');
        return;
      }

      const { error } = await supabase
        .from('class_bookings')
        .insert([{
          class_id: classId,
          stripe_session_id: sessionId,
          status: 'pagado',
        }]);

      if (error) throw error;
      setStatus('¡Reserva confirmada y pago recibido con éxito!');
    } catch (err) {
      console.error(err);
      setStatus('Pago recibido, pero hubo un error de sincronización.');
    }
  }, [sessionId, classId]);

  useEffect(() => {
    if (sessionId && classId) {
      saveBooking();
    } else {
      setStatus('No se encontró información de la sesión.');
    }
  }, [sessionId, classId, saveBooking]);

  return (
    <div className="obsidian-page">
      <SEO title="Confirmación de Maestría | Aurora Success" description="Tu lugar en el santuario ha sido reservado." />
      
      <section className="success-elite-wrapper">
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="success-glass-card reveal-anim">
            <div className="icon-celebration-glow">
              <CheckCircle size={45} strokeWidth={1.5} />
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Reserva <span className="text-accent">Confirmada.</span>
            </h1>
            
            <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '3.5rem', maxWidth: '500px', margin: '0 auto 4rem' }}>
              {status}
            </p>
            
            <div className="success-info-panel">
              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <PartyPopper size={24} className="text-accent" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', margin: 0, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                  <strong>Bienvenido a la Élite.</strong> Tu lugar está asegurado. Recibirás un enlace de acceso privado para tu sesión biomecánica.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem' }}>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Protocolo de Enlace: <code style={{ color: 'var(--color-accent)', fontWeight: 700 }}>{sessionId?.substring(0, 16)}...</code>
                </p>
              </div>
            </div>

            <Link to="/clases" className="btn-wellness" style={{ width: '100%', padding: '1.4rem' }}>
              Regresar a la Agenda Elite <ArrowRight size={20} style={{ marginLeft: '0.75rem' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
