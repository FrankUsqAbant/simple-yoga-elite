import { useEffect } from 'react';

/**
 * useScrollReveal Hook
 * Automates the application of 'visible' class to elements when they enter the viewport.
 * Uses IntersectionObserver for high performance.
 */
export default function useScrollReveal(options = {}) {
  useEffect(() => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Optionally unobserve after revealing
          // observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [options]);
}
