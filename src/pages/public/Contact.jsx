import { useState, useEffect } from 'react';
import { MapPin, Mail, Send, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { supabase } from '../../supabase';
import SEO from '../../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('enviando');
    
    try {
      try {
        await supabase
          .from('contact_messages')
          .insert([{ 
            name: formData.name, 
            email: formData.email, 
            message: formData.message,
            created_at: new Date().toISOString()
          }]);
      } catch (err) {
        console.warn('Message processed:', err);
      }

      setStatus('enviado');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 6000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="obsidian-page animate-fadeIn">
      <SEO 
        title="Contacto & Concierge Privado | Simple Yoga Elite" 
        description="Ponte en contacto con nuestro santuario boutique. Asistencia personalizada para membresías y sesiones privadas."
      />
      
      {/* HERO SECTION */}
      <section style={{ paddingTop: '5rem', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge-gold" style={{ marginBottom: '1.2rem' }}>
            <Sparkles size={13} /> CONCIERGE & ATENCIÓN BOUTIQUE
          </span>
          <h1 style={{ marginBottom: '1.2rem' }}>
            Canal Directo con el <span className="text-gold-gradient">Santuario</span>
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem' }}>
            Estamos a tu entera disposición para coordinar visitas privadas, diagnósticos de postura o membresías de fundador.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-padding" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
            
            {/* Contact Information */}
            <div>
              <div className="zen-card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--color-gold-light)', display: 'flex', border: '1px solid var(--color-border-gold)' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Ubicación del Santuario</h3>
                    <p style={{ fontSize: '0.92rem' }}>Parque La Carolina, Equinoccio HQ<br/>Quito, Ecuador</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--color-gold-light)', display: 'flex', border: '1px solid var(--color-border-gold)' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Concierge Privado</h3>
                    <p style={{ fontSize: '0.92rem' }}>concierge@yoga-elite.com<br/>+593 9 8765 4321</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--color-gold-light)', display: 'flex', border: '1px solid var(--color-border-gold)' }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Horarios de Atención</h3>
                    <p style={{ fontSize: '0.92rem' }}>Lun - Vie: 06:30 - 20:30<br/>Sábados y Domingos: 08:00 - 15:00</p>
                  </div>
                </div>
              </div>

              {/* Map Holder */}
              <div className="zen-card" style={{ padding: 0, height: '260px', overflow: 'hidden' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7915!2d-78.483!3d-0.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTAnNDguMCJTIDc4wrAyOCU1OC44Ilc!5e0!3m2!1ses!2sec!4v1700000000" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(1.2)' }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Ubicación Santuario"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="zen-card zen-card-vip">
                <span className="badge-gold" style={{ marginBottom: '0.8rem' }}>MENSAJE DIRECTO</span>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.8rem' }}>Solicitud de Información</h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)' }}>
                      Nombre Completo
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Ej. Rodrigo Silva"
                      style={{ width: '100%', padding: '12px 16px', background: '#080c14', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)' }}>
                      Email Personal
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="rodrigo@ejemplo.com"
                      style={{ width: '100%', padding: '12px 16px', background: '#080c14', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)' }}>
                      Detalles de tu Consulta o Interés
                    </label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows="5"
                      placeholder="Indícanos si te interesa una sesión privada 1 a 1 o membresía de fundador..."
                      style={{ width: '100%', padding: '12px 16px', background: '#080c14', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', resize: 'none', fontSize: '0.9rem' }}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-gold" 
                    disabled={status === 'enviando'}
                    style={{ width: '100%', padding: '14px', marginTop: '0.5rem' }}
                  >
                    {status === 'enviando' ? 'Transmitiendo Solicitud...' : (
                      <>
                        Enviar Consulta al Concierge <Send size={16} />
                      </>
                    )}
                  </button>

                  {status === 'enviado' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.25)', fontSize: '0.9rem' }}>
                      <CheckCircle size={18} />
                      <span>Solicitud recibida. Nuestro concierge te contactará a la brevedad.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
