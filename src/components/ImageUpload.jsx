import { useCallback, useState } from 'react';
import { UploadCloud, X } from 'lucide-react';

export default function ImageUpload({ value, onChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(value || null);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const processFile = useCallback(async (file) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen válido.');
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        setPreview(data.secure_url);
        if (onChange) onChange(data.secure_url);
      } else {
        throw new Error('No se recibió URL segura');
      }
    } catch (error) {
      console.error('Error subiendo imagen:', error);
      alert('Error al subir la imagen.');
    } finally {
      setIsUploading(false);
    }
  }, [onChange]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  }, [processFile]);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setPreview(null);
    if (onChange) onChange('');
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>
        Imagen Destacada
      </label>
      
      {preview ? (
        <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
          <img src={preview} alt="Vista previa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <button 
            type="button" 
            onClick={removeImage}
            style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', display: 'flex', boxShadow: 'var(--shadow-sm)' }}
          >
            <X size={18} color="var(--color-text-main)" />
          </button>
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          style={{
            border: `2px dashed ${isDragging ? 'var(--color-accent)' : 'var(--color-border)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '3rem 1.5rem',
            textAlign: 'center',
            backgroundColor: isDragging ? '#f0fdf4' : '#f9fafb',
            cursor: 'pointer',
            transition: 'var(--transition-fast)'
          }}
          onClick={() => document.getElementById('file-upload').click()}
        >
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleChange}
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <UploadCloud size={40} className={isDragging ? 'text-accent' : 'text-muted'} />
            <div>
              <p style={{ margin: '0 0 0.5rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
                {isUploading ? 'Subiendo archivo...' : 'Haz clic o arrastra una imagen'}
              </p>
              {!isUploading && <p className="text-muted" style={{ fontSize: '0.85rem' }}>Formatos aceptados: JPG, PNG, WEBP</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
