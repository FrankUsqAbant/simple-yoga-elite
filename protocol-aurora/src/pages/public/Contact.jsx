import { useState, useEffect } from 'react';
import { MapPin, Mail, Send, CheckCircle, Clock } from 'lucide-react';
import { supabase } from '../../supabase';
import SEO from '../../components/SEO';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
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
      // Registro en Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([{ 
          name: formData.name, 
          email: formData.email, 
          message: formData.message,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      
      console.log('✅ Mensaje emitido al santuario.');
      setStatus('enviado');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 6000);
    } catch (error) {
      console.error('❌ Error en el protocolo de contacto:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="obsidian-page">
      <SEO 
        title="Contacto Wellness" 
        description="Ponte en contacto con nuestro santuario. Estamos aquí para asistirte en tu camino personal."
      />
      
      {/* HERO SECTION AURORA v8.0 */}
      <section className="section-padding" style={{ paddingTop: '10rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container text-center reveal-anim" style={{ position: 'relative', zIndex: 2 }}>
          <div className="badge-wellness" style={{ margin: '0 auto 1.5rem' }}>PROTOCOLO DE CONTACTO</div>
          <h1 className="section-title">Ingeniería del <span className="text-accent">Santuario.</span></h1>
          <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Canales de comunicación de alta fidelidad. Tu evolución es nuestra prioridad absoluta.
          </p>
        </div>
        {/* Decorative Aurora Glow */}
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.08), transparent 70%)', zIndex: 1 }}></div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Contact Information */}
            <div className="reveal-on-scroll">
              <div className="wellness-card" style={{ marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--color-accent)', display: 'flex' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#fff' }}>Nuestra Ubicación</h4>
                    <p className="text-muted">Parque La Carolina, Equinoccio HQ<br/>Quito, Ecuador</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--color-accent)', display: 'flex' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#fff' }}>Canal Directo</h4>
                    <p className="text-muted">hola@wellness-yoga.com<br/>+593 999 888 777</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--color-accent)', display: 'flex' }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#fff' }}>Horarios</h4>
                    <p className="text-muted">Lun - Vie: 07:00 - 20:00<br/>Sábados: 09:00 - 14:00</p>
                  </div>
                </div>
              </div>

              {/* Map Holder */}
              <div className="wellness-card" style={{ padding: 0, height: '300px', overflow: 'hidden' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7915!2d-78.483!3d-0.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTAnNDguMCJTIDc4wrAyOCU1OC44Ilc!5e0!3m2!1ses!2sec!4v1700000000" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Ubicación Wellness"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="wellness-card">
                <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Mensaje Directo</h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 10 }}>
                  <div className="form-group" style={{ position: 'relative', zIndex: 11 }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Nombre Completo</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="form-input-elite"
                      style={{ width: '100%', padding: '1.1rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff', position: 'relative', zIndex: 12 }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ position: 'relative', zIndex: 11 }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Email de Contacto</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="form-input-elite"
                      style={{ width: '100%', padding: '1.1rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff', position: 'relative', zIndex: 12 }}
                    />
                  </div>

                  <div className="form-group" style={{ position: 'relative', zIndex: 11 }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Tu Mensaje o Consulta</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows="6"
                      className="form-input-elite"
                      style={{ width: '100%', padding: '1.1rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff', resize: 'none', position: 'relative', zIndex: 12 }}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-wellness" 
                    disabled={status === 'enviando'}
                    style={{ width: '100%', padding: '1rem', marginTop: '1rem', position: 'relative', zIndex: 15 }}
                  >
                    {status === 'enviando' ? 'Enviando...' : (
                      <>
                        Enviar Mensaje <Send size={18} style={{ marginLeft: '0.5rem' }} />
                      </>
                    )}
                  </button>

                  {status === 'enviado' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#10b981', marginTop: '1rem', background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(16, 185, 129, 0.2)', position: 'relative', zIndex: 20 }}>
                      <CheckCircle size={20} />
                      <span>Protocolo de mensaje completado. Te contactaremos pronto.</span>
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div style={{ color: '#fca5a5', background: 'rgba(239, 68, 68, 0.1)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', marginTop: '1rem', border: '1px solid rgba(239, 68, 68, 0.2)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.75rem', position: 'relative', zIndex: 20 }}>
                      <X size={18} />
                      <span>Error en la transmisión. Protocolo de reintento necesario.</span>
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
