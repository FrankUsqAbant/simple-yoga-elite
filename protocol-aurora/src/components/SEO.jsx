import { useEffect } from 'react';

export default function SEO({ title, description, image }) {
  useEffect(() => {
    // 1. Update Title
    const baseTitle = 'SimpleYogaStudio | Boutique Experience';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Un santuario de alta gama dedicado al equilibrio técnico y la claridad mental profunda. Yoga boutique en el corazón de la ciudad.';

    // 3. Update OG Tags (for social media)
    const updateOgTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateOgTag('og:title', title || baseTitle);
    updateOgTag('og:description', description || metaDescription.content);
    if (image) updateOgTag('og:image', image);

  }, [title, description, image]);

  return null; // This component doesn't render anything
}
