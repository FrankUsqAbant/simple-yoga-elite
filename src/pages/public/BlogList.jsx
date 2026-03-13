import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function BlogList() {
  useScrollReveal();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
    window.scrollTo(0, 0);
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
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="obsidian-page">
      <SEO 
        title="El Diario de Bienestar | Reflexiones Elite" 
        description="Explora nuestras reflexiones sobre yoga, meditación y vida consciente."
      />
      
      {/* HERO SECTION SMALLER v10.0 */}
      <section className="section-hero-obsidian">
        <div className="container text-center reveal-anim">
          <div className="badge-wellness" style={{ margin: '0 auto 1.5rem' }}>CRÓNICAS AURORA</div>
          <h1 className="section-title">La Geometría del <span className="text-accent">Pensamiento.</span></h1>
          <p className="text-muted" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.2rem' }}>
            Explora guías y pensamientos profundos sobre el arte de vivir con consciencia plena en el mundo moderno.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem 0' }}><div className="loading-spinner"></div></div>
          ) : posts.length === 0 ? (
            <div className="wellness-card text-center" style={{ padding: '8rem 2rem', background: 'rgba(255,255,255,0.02)' }}>
              <p className="text-muted" style={{ fontSize: '1.1rem' }}>Artículos en camino. El santuario está preparando nuevas revelaciones.</p>
            </div>
          ) : (
            <div className="grid-3">
              {posts.map((post) => (
                <div key={post.id} className="reveal-on-scroll">
                  <Link to={`/blog/${post.id}`} className="blog-card-elite">
                    <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                      <img 
                        src={post.image_url || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'} 
                        alt={post.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                        className="blog-img"
                      />
                      <div className="badge-wellness" style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', margin: 0, backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        OBSIDIAN READ
                      </div>
                    </div>
                    
                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div className="text-accent" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                        <Calendar size={14} />
                        {new Date(post.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', lineHeight: 1.2, color: '#fff' }}>{post.title}</h3>
                      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.7', flex: 1 }}>
                        {post.excerpt || (post.content || '').substring(0, 110) + '...'}
                      </p>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Expandir Conocimiento <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
