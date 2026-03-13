import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { supabase } from '../../supabase';
import { Calendar, ChevronLeft, Share2 } from 'lucide-react';
import SEO from '../../components/SEO';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setPost(data);
        window.scrollTo(0, 0);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem 0' }}>
      <div className="loading-spinner"></div>
    </div>
  );
  if (error || !post) return <Navigate to="/blog" />;

  return (
    <article className="obsidian-page" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <SEO 
        title={`${post.title} | Reflexiones Elite`} 
        description={(post.content || '').substring(0, 160) + '...'}
        image={post.image_url}
      />
      
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem', textDecoration: 'none' }}>
          <ChevronLeft size={18} />
          Volver a las Crónicas
        </Link>
        
        <div className="text-accent" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Calendar size={18} />
          {new Date(post.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, marginBottom: '4rem', color: '#fff', fontWeight: 900 }}>
          {post.title}
        </h1>

        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '6rem', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
          <img 
            src={post.image_url || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200'} 
            alt={post.title} 
            style={{ width: '100%', maxHeight: '650px', objectFit: 'cover' }}
          />
        </div>

        <div className="post-content" style={{ fontSize: '1.35rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
          {(post.content || '').split('\n').map((paragraph, index) => (
            paragraph.trim() ? <p key={index} style={{ marginBottom: '2.5rem' }}>{paragraph}</p> : null
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', padding: '6rem 0 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '6rem' }}>
          <button className="btn-wellness" style={{ gap: '1rem', padding: '1.25rem 3rem' }}>
            <Share2 size={20} />
            Compartir Revelación
          </button>
        </div>
      </div>
    </article>
  );
}
