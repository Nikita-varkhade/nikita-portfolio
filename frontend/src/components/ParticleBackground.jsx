import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const colors = ['#ffffff', '#a299ff', '#8b7fff'];

    class Particle {
      constructor(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.2 + 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.twinkleSpeed = Math.random() * 0.008 + 0.002;
        this.angleOffset = Math.random() * Math.PI * 2;
        this.baseAlpha = Math.random() * 0.3 + 0.1;
      }

      draw(time) {
        const alpha = prefersReducedMotion
          ? this.baseAlpha
          : ((Math.sin(time * this.twinkleSpeed + this.angleOffset) + 1) / 2) * 0.3 + this.baseAlpha;

        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.min(alpha, 0.7);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];

      // Calm, modest density (1 particle per 30,000 px^2)
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 30000), 80);

      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const renderStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = 0;
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(time);
      }
      ctx.globalAlpha = 1;
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(time);
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    init();

    if (prefersReducedMotion) {
      renderStatic();
    } else {
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      init();
      if (prefersReducedMotion) {
        renderStatic();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}

