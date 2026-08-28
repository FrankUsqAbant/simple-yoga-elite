import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import { Plus, Edit2, Trash2, X, Clock, MapPin } from 'lucide-react';
import ImageUpload from '../../components/ImageUpload';

export default function AdminClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    schedule: '',
    level: 'Todos los niveles',
    image_url: ''
  });

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const { data, error } = await supabase
        .from('yoga_classes')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setClasses(data || []);
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (yogaClass = null) => {
    if (yogaClass) {
      setEditingId(yogaClass.id);
      setFormData({
        title: yogaClass.title,
        description: yogaClass.description,
        schedule: yogaClass.schedule,
        level: yogaClass.level,
        image_url: yogaClass.image_url || ''
      });
    } else {
      setEditingId(null);
      setFormData({ title: '', description: '', schedule: '', level: 'Todos los niveles', image_url: '' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const { error } = await supabase
          .from('yoga_classes')
          .update(formData)
          .eq('id', editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('yoga_classes')
          .insert([formData]);
        if (error) throw error;
      }
      
      handleCloseModal();
      fetchClasses();
    } catch (error) {
      console.error('Error saving class:', error);
      alert('Error al guardar la clase.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar esta clase permanentemente?')) {
      try {
        const { error } = await supabase
          .from('yoga_classes')
          .delete()
          .eq('id', id);
        if (error) throw error;
        setClasses(classes.filter(c => c.id !== id));
      } catch (error) {
        console.error('Error deleting class:', error);
      }
    }
  };

  return (
    <div className="admin-page-wellness">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Gestión de Sesiones</h1>
          <p className="text-muted">Administra el catálogo de inmersiones y clases de yoga.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn-wellness">
          <Plus size={20} /> Nueva Clase
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem 0' }}><div className="loading-spinner"></div></div>
      ) : classes.length === 0 ? (
        <div className="wellness-card" style={{ textAlign: 'center', padding: '5rem' }}>
          <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>No hay clases registradas en el sistema.</p>
          <button onClick={() => handleOpenModal()} className="btn-wellness">Inicializar Sesión</button>
        </div>
      ) : (
        <div className="grid-3">
          {classes.map(c => (
            <div key={c.id} className="wellness-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {c.image_url && (
                <div style={{ height: '180px', width: '100%', position: 'relative' }}>
                  <img src={c.image_url} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="badge-wellness" style={{ position: 'absolute', top: '1rem', right: '1rem', margin: 0 }}>{c.level}</div>
                </div>
              )}
              <div style={{ padding: '1.5rem', flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                  {c.description.length > 90 ? c.description.substring(0, 90) + '...' : c.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.85rem' }}>
                  <Clock size={16} /> <span>{c.schedule}</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1rem', gap: '1rem' }}>
                <button onClick={() => handleOpenModal(c)} style={{ flex: 1, padding: '0.6rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: '0.85rem' }}>
                  Editar
                </button>
                <button onClick={() => handleDelete(c.id)} style={{ padding: '0.6rem', background: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.2)', color: '#dc2626', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Wellness v8.0 */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(2, 6, 23, 0.9)', backdropFilter: 'blur(15px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
          <div className="wellness-card" style={{ width: '100%', maxWidth: '650px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button onClick={handleCloseModal} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.05)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <X size={24} />
            </button>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: '#fff' }}>{editingId ? 'Refinar Sesión' : 'Nueva Inmersión'}</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px dashed rgba(255,255,255,0.1)' }}>
                <ImageUpload 
                  value={formData.image_url} 
                  onChange={(val) => setFormData({...formData, image_url: val})} 
                />
              </div>
              
              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Título de la Clase</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="form-input-elite" style={{ width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff' }} />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Descripción</label>
                <textarea required rows="4" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="form-input-elite" style={{ width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff', resize: 'vertical' }} />
              </div>

              <div className="grid-2" style={{ gap: '1.5rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Horario</label>
                  <input required type="text" value={formData.schedule} onChange={e => setFormData({...formData, schedule: e.target.value})} className="form-input-elite" style={{ width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff' }} placeholder="Lun - Vie 18:00" />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Nivel</label>
                  <select value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})} className="form-input-elite" style={{ width: '100%', padding: '1rem 1.25rem', background: 'rgba(2, 6, 23, 1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff' }}>
                    <option>Principiante</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                    <option>Todos los niveles</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={handleCloseModal} style={{ flex: 1, padding: '1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: 'var(--radius-sm)', fontWeight: 600, cursor: 'pointer' }}>
                  Cancelar
                </button>
                <button type="submit" className="btn-wellness" style={{ flex: 1 }}>
                  Confirmar Clase
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
