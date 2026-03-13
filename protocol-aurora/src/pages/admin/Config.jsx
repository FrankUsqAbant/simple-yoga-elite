import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import { Trash2, MessageSquare, Calendar } from 'lucide-react';

export default function Config() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este mensaje?')) {
      try {
        const { error } = await supabase
          .from('contact_messages')
          .delete()
          .eq('id', id);

        if (error) throw error;
        setMessages(messages.filter(msg => msg.id !== id));
      } catch (error) {
        console.error('Error deleting message:', error);
        alert('Error al intentar eliminar el mensaje.');
      }
    }
  };

  return (
    <div className="admin-config-page">
      <div style={{ marginBottom: '3rem' }}>
        <h1 className="section-title">Buzón de <span className="text-accent">Interacciones</span></h1>
        <p className="text-muted">Gestiona las comunicaciones recibidas de tus clientes potenciales y alumnos.</p>
      </div>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem 0' }}><div className="loading-spinner"></div></div>
      ) : messages.length === 0 ? (
        <div className="wellness-card text-center" style={{ padding: '5rem' }}>
          <MessageSquare size={48} className="text-muted" style={{ marginBottom: '1.5rem', opacity: 0.3 }} />
          <p className="text-muted">No hay mensajes de contacto en este momento.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {messages.map(msg => (
            <div key={msg.id} className="wellness-card" style={{ position: 'relative', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="icon-badge-emerald">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: '#fff' }}>{msg.name}</h3>
                    <p className="text-accent" style={{ fontSize: '0.85rem', fontWeight: 600 }}>{msg.email}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                  <Calendar size={14} />
                  {new Date(msg.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                </div>
              </div>
              
              <div className="config-message-bubble">
                {msg.message}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  onClick={() => handleDelete(msg.id)}
                  className="btn-danger-elite"
                >
                  <Trash2 size={16} />
                  Eliminar Mensaje
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
