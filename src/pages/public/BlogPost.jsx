import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../../supabase';
import { Calendar, ChevronLeft, Share2, Sparkles } from 'lucide-react';
import SEO from '../../components/SEO';

const DEFAULT_POSTS_MAP = {
  'p1': {
    title: 'La Neurociencia del Silencio: Cómo el Yoga Transforma el Foco Ejecutivo',
    content: 'En un mundo saturado de estímulos digitales y demandas cognitivas continuas, la capacidad de sostener un foco atencional profundo se ha convertido en una ventaja competitiva decisiva.\n\nEstudios recientes de neuroimagen funcional demuestran que las prácticas que combinan asanas restaurativas con control respiratorio consciente (Pranayama) inducen una disminución significativa en la hiperactividad de la Red Neuronal por Defecto (DMN). Esta red cerebral, asociada con la rumiación mental y el estrés anticipatorio, cede paso a un estado de flujo caracterizado por ondas alfa y theta.\n\nEn Simple Yoga Elite, estructuramos cada sesión bajo los principios de la ingeniería del silencio: reduciendo el ruido sensorial para que el sistema nervioso recupere su equilibrio homeostático y la toma de decisiones alcance su máxima nitidez.',
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    image_url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200'
  },
  'p2': {
    title: 'Bio-Mecánica Espinal y Rendimiento Físico en Ambientes de Alta Exigencia',
    content: 'La columna vertebral es el eje central de transmisión de fuerza y soporte biomecánico del cuerpo humano. Mantener posturas estáticas prolongadas genera micro-tensiones en los discos intervertebrales y restricción fascial.\n\nA través de secuencias diseñadas con física de vectores, descomprimimos las vértebras lumbares y dorsales, restaurando la movilidad torácica y la capacidad pulmonar total. Este protocolo previene contracturas crónicas y mejora la postura corporal instantáneamente.',
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    image_url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1200'
  },
  'p3': {
    title: 'El Arte de la Respiración Pránica en el Liderazgo Moderno',
    content: 'El ritmo respiratorio modula directamente la variabilidad de la frecuencia cardíaca (VFC) y la liberación de cortisol.\n\nAprender a alternar entre respiraciones lentas diafragmáticas y pausas conscientes permite al practicante reiniciar el tono vagal en menos de 90 segundos, manteniendo la calma y el dominio emocional incluso en momentos de máxima presión.',
    created_at: new Date(Date.now() - 86400000 * 9).toISOString(),
    image_url: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200'
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(DEFAULT_POSTS_MAP[id] || null);
  const [loading, setLoading] = useState(!DEFAULT_POSTS_MAP[id]);

  useEffect(() => {
    const fetchPost = async () => {
      if (DEFAULT_POSTS_MAP[id]) {
        setPost(DEFAULT_POSTS_MAP[id]);
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .single();

        if (!error && data) {
          setPost(data);
        }
      } catch (err) {
        console.warn('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem 0' }}>
        <p style={{ color: 'var(--color-gold-light)', fontFamily: 'var(--font-mono)' }}>Cargando ensayo...</p>
      </div>
    );
  }

  const currentPost = post || DEFAULT_POSTS_MAP['p1'];

  return (
    <article className="obsidian-page animate-fadeIn" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      <SEO 
        title={`${currentPost.title} | Simple Yoga Elite`} 
        description={(currentPost.content || '').substring(0, 160) + '...'}
        image={currentPost.image_url}
      />
      
      <div className="container" style={{ maxWidth: '850px' }}>
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-gold-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2.5rem', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
          <ChevronLeft size={16} /> Volver a las Crónicas
        </Link>
        
        <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={14} color="var(--color-gold-light)" />
          {new Date(currentPost.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.15, marginBottom: '2.5rem' }}>
          {currentPost.title}
        </h1>

        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3.5rem', border: '1px solid var(--color-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
          <img 
            src={currentPost.image_url} 
            alt={currentPost.title} 
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>

        <div style={{ fontSize: '1.15rem', lineHeight: '1.85', color: '#cbd5e1', fontWeight: 300 }}>
          {(currentPost.content || '').split('\n\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '2rem', color: '#cbd5e1' }}>{paragraph}</p>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0 0', borderTop: '1px solid var(--color-border)', marginTop: '4rem' }}>
          <Link to="/contacto" className="btn-gold">
            <Sparkles size={16} /> Agendar Sesión en el Santuario
          </Link>
        </div>
      </div>
    </article>
  );
}
