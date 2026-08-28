import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (windowScroll / height) * 100;
      setWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Only show on relevant pages if desired, here we show it globally for a premium feel
  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
}
