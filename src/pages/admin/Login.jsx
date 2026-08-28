import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email === 'ethan21abanto@gmail.com') {
      navigate('/admin');
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="login-wrapper-elite">
      <div className="wellness-card" style={{ width: '100%', maxWidth: '420px', padding: '3.5rem' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="badge-wellness" style={{ margin: '0 auto 1.5rem' }}>Mando Central</div>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Identificación <span className="text-accent">Elite</span></h2>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>Acceso restringido al santuario administrativo v10.1.</p>
        </div>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div className="form-group">
            <label className="text-muted" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Credencial de Enlace</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-accent)', opacity: 0.7 }} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="correo@elite.com"
                className="form-input-elite"
                style={{ width: '100%', padding: '1rem 1rem 1rem 3.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff' }}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label className="text-muted" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Llave de Seguridad</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-accent)', opacity: 0.7 }} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="form-input-elite"
                style={{ width: '100%', padding: '1rem 1rem 1rem 3.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff' }}
              />
            </div>
          </div>
          
          <button type="submit" className="btn-wellness" style={{ width: '100%', marginTop: '1rem', height: '56px' }}>
            Acceder al Santuario <ArrowRight size={18} style={{ marginLeft: '0.75rem' }} />
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
          <a href="/" className="nav-link" style={{ fontSize: '0.8rem', opacity: 0.6 }}>
            ← Abortar y volver al sitio público
          </a>
        </div>
      </div>
    </div>
  );
}
