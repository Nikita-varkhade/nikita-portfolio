import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function RocketLaunch() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="w-11 h-11 rounded-full bg-surface/90 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:border-primary/50 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(109,93,251,0.25)] flex items-center justify-center transition-all duration-300 group"
      >
        <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}

