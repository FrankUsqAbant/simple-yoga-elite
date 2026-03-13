import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import { Plus, Edit2, Trash2, X, BookOpen, Calendar } from 'lucide-react';
import ImageUpload from '../../components/ImageUpload';

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image_url: ''
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (post = null) => {
    if (post) {
      setEditingId(post.id);
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        image_url: post.image_url || ''
      });
    } else {
      setEditingId(null);
      setFormData({ title: '', excerpt: '', content: '', image_url: '' });
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
          .from('blog_posts')
          .update(formData)
          .eq('id', editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([formData]);
        if (error) throw error;
      }
      
      handleCloseModal();
      fetchPosts();
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('Error al guardar la entrada del blog.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar esta entrada de blog permanentemente?')) {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id);
        if (error) throw error;
        setPosts(posts.filter(p => p.id !== id));
      } catch (error) {
        console.error('Error deleting blog post:', error);
      }
    }
  };

  return (
    <div className="admin-page-wellness">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Diario de Bienestar</h1>
          <p className="text-muted">Gestiona el contenido de tu blog y reflexiones.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn-wellness">
          <Plus size={20} /> Redactar Artículo
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem 0' }}><div className="loading-spinner"></div></div>
      ) : posts.length === 0 ? (
        <div className="wellness-card" style={{ textAlign: 'center', padding: '5rem' }}>
          <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Aún no has escrito ningún artículo.</p>
          <button onClick={() => handleOpenModal()} className="btn-wellness">Escribir mi Primer Post</button>
        </div>
      ) : (
        <div className="grid-3">
          {posts.map(p => (
            <div key={p.id} className="wellness-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {p.image_url && (
                <div style={{ height: '200px', width: '100%' }}>
                  <img src={p.image_url} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ padding: '1.5rem', flex: 1 }}>
                <div className="text-accent" style={{ fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Calendar size={14} />
                  {new Date(p.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: 1.3 }}>{p.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                  {p.excerpt.length > 100 ? p.excerpt.substring(0, 100) + '...' : p.excerpt}
                </p>
              </div>
              
              <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1rem', gap: '1rem' }}>
                <button onClick={() => handleOpenModal(p)} style={{ flex: 1, padding: '0.6rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: '0.85rem' }}>
                  Editar
                </button>
                <button onClick={() => handleDelete(p.id)} style={{ padding: '0.6rem', background: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.2)', color: '#dc2626', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
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
          <div className="wellness-card" style={{ width: '100%', maxWidth: '850px', maxHeight: '95vh', overflowY: 'auto', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button onClick={handleCloseModal} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.05)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <X size={24} />
            </button>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: '#fff' }}>{editingId ? 'Refinar Artículo' : 'Nuevo Artículo'}</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px dashed rgba(255,255,255,0.1)' }}>
                <ImageUpload 
                  value={formData.image_url} 
                  onChange={(val) => setFormData({...formData, image_url: val})} 
                />
              </div>
              
              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Título</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="form-input-elite" style={{ width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff' }} />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Resumen Corto</label>
                <textarea required rows="2" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} className="form-input-elite" style={{ width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff' }} />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Contenido Completo</label>
                <textarea required rows="10" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} className="form-input-elite" style={{ width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', color: '#fff', resize: 'vertical', lineHeight: '1.6' }} />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" onClick={handleCloseModal} style={{ flex: 1, padding: '1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: 'var(--radius-sm)', fontWeight: 600, cursor: 'pointer' }}>
                  Cancelar
                </button>
                <button type="submit" className="btn-wellness" style={{ flex: 1 }}>
                  Publicar Artículo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
