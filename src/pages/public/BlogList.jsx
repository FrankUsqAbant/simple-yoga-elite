import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../../components/SEO';

const DEFAULT_POSTS = [
  {
    id: 'p1',
    title: 'La Neurociencia del Silencio: Cómo el Yoga Transforma el Foco Ejecutivo',
    excerpt: 'Estudios de resonancia magnética demuestran que 20 minutos de flujo consciente reducen la actividad de la red neuronal por defecto, potenciando la claridad estratégica.',
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    image_url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    title: 'Bio-Mecánica Espinal y Rendimiento Físico en Ambientes de Alta Exigencia',
    excerpt: 'La alineación precisa de las vértebras dorsales optimiza la oxigenación y reduce la fatiga física en jornadas intensas.',
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    image_url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    title: 'El Arte de la Respiración Pránica en el Liderazgo Moderno',
    excerpt: 'Técnicas milenarias de control respiratorio para modular el sistema nervioso simpático en situaciones de alta presión.',
    created_at: new Date(Date.now() - 86400000 * 9).toISOString(),
    image_url: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BlogList() {
  const [posts, setPosts] = useState(DEFAULT_POSTS);
  const [loading, setLoading] = useState(false);

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

      if (!error && data && data.length > 0) {
        setPosts(data);
      }
    } catch (error) {
      console.warn('Using default blog posts:', error);
    }
  };

  return (
    <div className="obsidian-page animate-fadeIn">
      <SEO 
        title="El Diario de Alto Rendimiento | Simple Yoga Elite" 
        description="Explora reflexiones sobre yoga, neurociencia, biomecánica y vida consciente para el alto rendimiento."
      />
      
      {/* HERO SECTION */}
      <section style={{ paddingTop: '5rem', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge-gold" style={{ marginBottom: '1.2rem' }}>
            <Sparkles size={13} /> CRÓNICAS DEL SANTUARIO
          </span>
          <h1 style={{ marginBottom: '1.2rem' }}>
            La Geometría del <span className="text-gold-gradient">Pensamiento</span>
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
            Ensayos y protocolos sobre biomecánica, claridad cognitiva y el arte de vivir con consciencia plena.
          </p>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="section-padding" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="grid-3">
            {posts.map((post) => (
              <div key={post.id} className="zen-card" style={{ padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={post.image_url} 
                      alt={post.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                      <span className="badge-gold" style={{ background: 'rgba(7, 10, 15, 0.85)', backdropFilter: 'blur(8px)' }}>
                        ENSAYO
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ padding: '1.8rem 1.8rem 1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-gold-light)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8rem' }}>
                      <Calendar size={13} />
                      {new Date(post.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem', lineHeight: 1.3 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--color-text-muted)' }}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 1.8rem 1.8rem' }}>
                  <Link to={`/blog/${post.id}`} style={{ color: 'var(--color-gold-light)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Leer Artículo Completo <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
