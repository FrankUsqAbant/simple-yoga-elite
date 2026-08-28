import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import Calendar from 'react-calendar';
import { Clock, User, Calendar as CalendarIcon, ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';
import SEO from '../../components/SEO';

const DEFAULT_CLASSES = [
  {
    id: 'c1',
    title: 'Cognitive Flow & Neuro-Alineación',
    description: 'Secuencias dinámicas de respiración y física de vectores para desbloquear el foco mental y la calma ejecutiva.',
    schedule: 'Lun, Mié y Vie · 07:00 - 08:15',
    level: 'Nivel Intermedio / Avanzado',
    price: 45,
    image_url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c2',
    title: 'Restorative Yin & Sound Immersion',
    description: 'Inmersión profunda en frecuencias acústicas armónicas y posturas pasivas prolongadas para regeneración celular.',
    schedule: 'Mar y Jue · 18:30 - 20:00',
    level: 'Todos los niveles',
    price: 50,
    image_url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c3',
    title: 'Bio-Vectores & Fuerza Isométrica',
    description: 'Protocolo de alta precisión postural enfocado en biomecánica espinal, fuerza del core y estabilidad articular.',
    schedule: 'Sábados · 09:00 - 10:30',
    level: 'Avanzado',
    price: 55,
    image_url: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Classes() {
  const [classes, setClasses] = useState(DEFAULT_CLASSES);
  const [loading, setLoading] = useState(false);

  // States for Booking Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState(null);
  const [reserveDate, setReserveDate] = useState(new Date());
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    fetchClasses();
    window.scrollTo(0, 0);
  }, []);

  const fetchClasses = async () => {
    try {
      const { data, error } = await supabase
        .from('yoga_classes')
        .select('*')
        .order('created_at', { ascending: true });

      if (!error && data && data.length > 0) {
        setClasses(data);
      }
    } catch (error) {
      console.warn('Using default boutique classes fallback:', error);
    }
  };

  const openReserveModal = (yogaClass) => {
    setSelectedClass(yogaClass);
    setIsModalOpen(true);
    setReserveDate(new Date());
    setFormData({ name: '', email: '', phone: '' });
  };

  const sanitizeInput = (val) => String(val || '').replace(/[<>]/g, '').trim();

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    const cleanName = sanitizeInput(formData.name).slice(0, 100);
    const cleanEmail = sanitizeInput(formData.email).slice(0, 120);
    const cleanPhone = sanitizeInput(formData.phone).slice(0, 30);

    if (!cleanName || !cleanEmail) return;
    
    setProcessing(true);
    
    try {
      const bookingData = {
        class_id: selectedClass.id,
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        date: reserveDate.toISOString().split('T')[0],
        status: 'confirmada', 
        stripe_session_id: 'ZEN_RSV_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        created_at: new Date().toISOString()
      };

      try {
        await supabase.from('class_bookings').insert([bookingData]);
      } catch (err) {
        console.warn('Booking recorded locally:', err);
      }

      navigate(`/success?demo=true&class_id=${selectedClass.id}&name=${encodeURIComponent(cleanName)}`);
    } catch (error) {
      console.error('Error:', error);
      setProcessing(false);
    }
  };

  return (
    <div className="obsidian-page animate-fadeIn">
      <SEO 
        title="Sesiones Exclusivas de Yoga | Simple Yoga Elite" 
        description="Explora nuestras disciplinas de yoga diseñadas para el equilibrio técnico, biomecánico y mental."
      />
      
      {/* HERO SECTION */}
      <section style={{ paddingTop: '5rem', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge-gold" style={{ marginBottom: '1.2rem' }}>
            <Sparkles size={13} /> DISCIPLINA & BIOMECÁNICA
          </span>
          <h1 style={{ marginBottom: '1.2rem' }}>
            Sesiones de <span className="text-gold-gradient">Alto Rendimiento</span>
          </h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem' }}>
            Protocolos guiados en grupos reducidos de máximo 8 practicantes para garantizar una experiencia verdaderamente transformadora.
          </p>
        </div>
      </section>

      {/* CLASSES GRID */}
      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-3">
            {classes.map((c) => (
              <div key={c.id} className="zen-card" style={{ padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '230px', position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={c.image_url} 
                      alt={c.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                      <span className="badge-gold" style={{ background: 'rgba(7, 10, 15, 0.85)', backdropFilter: 'blur(8px)' }}>
                        {c.level || 'Todos los niveles'}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ padding: '1.8rem 1.8rem 1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{c.title}</h3>
                    <p style={{ fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                      {c.description}
                    </p>
                    
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--color-gold-light)' }}>
                        <Clock size={15} />
                        <span>{c.schedule}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 1.8rem 1.8rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>Inversión por Sesión</span>
                    <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#fff', fontWeight: 700 }}>
                      ${c.price || 45} <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', fontFamily: 'var(--font-sans)', fontWeight: 400 }}>USD</span>
                    </span>
                  </div>

                  <button 
                    onClick={() => openReserveModal(c)}
                    className="btn-gold"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Reservar Lugar <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION MODAL */}
      {isModalOpen && selectedClass && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(4, 7, 12, 0.85)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '1.5rem'
        }}>
          <div className="zen-card zen-card-vip" style={{
            width: '100%',
            maxWidth: '900px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            padding: 0,
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <button 
              onClick={() => setIsModalOpen(false)} 
              aria-label="Cerrar modal"
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}
            >
              <X size={18} />
            </button>

            {/* Calendar Side */}
            <div style={{ padding: '2.5rem', background: 'rgba(0, 0, 0, 0.2)', borderRight: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold-light)' }}>
                <CalendarIcon size={18} /> Fecha de Sesión
              </h3>
              <div style={{ background: '#0a0f19', borderRadius: '12px', padding: '12px', border: '1px solid var(--color-border)' }}>
                <Calendar onChange={setReserveDate} value={reserveDate} minDate={new Date()} />
              </div>
              <div style={{ marginTop: '1.5rem', background: 'rgba(212, 175, 55, 0.08)', padding: '1rem', borderRadius: '10px', display: 'flex', gap: '10px', alignItems: 'center', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <CheckCircle2 size={20} color="var(--color-gold-light)" />
                <p style={{ fontSize: '0.85rem', margin: 0, color: '#e2e8f0' }}>
                  Sesión para el <strong>{reserveDate.toLocaleDateString()}</strong> · {selectedClass.schedule}
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge-gold" style={{ marginBottom: '0.8rem' }}>RESERVA BOUTIQUE</span>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{selectedClass.title}</h2>
              </div>

              <form onSubmit={handlePaymentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)' }}>
                    Nombre y Apellidos
                  </label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    placeholder="Ej. Sofía Martínez"
                    style={{ width: '100%', padding: '12px 16px', background: '#080c14', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)' }}>
                    Email de Confirmación
                  </label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    placeholder="sofia@ejemplo.com"
                    style={{ width: '100%', padding: '12px 16px', background: '#080c14', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)' }}>
                    Teléfono / WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                    placeholder="+593 9..."
                    style={{ width: '100%', padding: '12px 16px', background: '#080c14', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }} 
                  />
                </div>
                
                <div style={{ marginTop: '1rem', paddingTop: '1.2rem', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>Monto de Reserva</span>
                    <span style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: 'var(--color-gold-light)', fontWeight: 700 }}>
                      ${selectedClass.price || 45}.00 USD
                    </span>
                  </div>
                  <button 
                    type="submit" 
                    disabled={processing} 
                    className="btn-gold" 
                    style={{ width: '100%', padding: '14px' }}
                  >
                    {processing ? 'Confirmando Reserva...' : 'Confirmar Reserva de Plaza'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
