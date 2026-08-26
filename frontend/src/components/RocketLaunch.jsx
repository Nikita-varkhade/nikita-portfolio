import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function RocketLaunch() {
  const [phase, setPhase] = useState('idle');
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const rocketRef = useRef(null);
  const canvasRef = useRef(null);

  // Scroll visibility listener
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control visibility and idle state based on scroll
  useEffect(() => {
    if (phase === 'idle') {
      if (isVisible) {
        controls.start({ opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } });
      } else {
        controls.start({ opacity: 0, scale: 0.5, y: 0, transition: { duration: 0.3 } });
      }
    }
  }, [isVisible, phase, controls]);

  // Track rocket position for ParticleBackground interaction & smoke
  useEffect(() => {
    let animationFrame;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let particles = [];

    const drawParticles = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y += p.vy;
        p.x += p.vx;
        p.size += p.growth;
        p.life -= p.decay;
        
        if (p.life <= 0 || p.size <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        if (p.type === 'smoke') {
          ctx.fillStyle = `rgba(150, 150, 150, ${p.life * 0.5})`;
        } else if (p.type === 'fire') {
          // Dynamic fire color based on life
          if (p.life > 0.7) {
            ctx.fillStyle = `rgba(255, 255, 200, ${p.life})`; // Hot white-yellow core
          } else if (p.life > 0.4) {
            ctx.fillStyle = `rgba(255, 165, 0, ${p.life})`; // Bright orange
          } else {
            ctx.fillStyle = `rgba(255, 50, 0, ${p.life})`; // Dissipating red
          }
          // Add glow to fire
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(255, 100, 0, 0.5)';
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    };

    const trackPosition = () => {
      if (rocketRef.current) {
        const rect = rocketRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const nozzleY = rect.bottom - 5;

        if (phase === 'ascent') {
          window.dispatchEvent(new CustomEvent('rocket-move', { detail: { x: centerX, y: centerY } }));
        }

        if (phase === 'ignition' || phase === 'ascent') {
          const isAscent = phase === 'ascent';
          
          // Generate smoke particles
          const smokeCount = (isAscent && Math.random() > 0.5) ? 1 : 0; // Further reduced to make it less snowy
          for (let i = 0; i < smokeCount; i++) {
            particles.push({
              x: centerX + (Math.random() - 0.5) * 10,
              y: nozzleY,
              vx: (Math.random() - 0.5) * 2,
              vy: Math.random() * 1.5 + 2,
              size: Math.random() * 6 + 4,
              growth: Math.random() * 0.2 + 0.1,
              life: 1.0,
              decay: Math.random() * 0.02 + 0.015,
              type: 'smoke'
            });
          }

          // Generate realistic fire particles
          for (let i = 0; i < (isAscent ? 5 : 2); i++) {
            particles.push({
              x: centerX + (Math.random() - 0.5) * 6, // Tighter spread for fire
              y: nozzleY,
              vx: (Math.random() - 0.5) * 1, // Mostly straight down
              vy: Math.random() * 4 + (isAscent ? 6 : 3), // Reduced downwards thrust speed
              size: Math.random() * 4 + 2, // Smaller fire particles
              growth: -0.1, // Shrink rapidly
              life: 1.0,
              decay: Math.random() * 0.08 + 0.05, // Die even faster
              type: 'fire'
            });
          }
        }
      }
      
      drawParticles();
      animationFrame = requestAnimationFrame(trackPosition);
    };

    const syncCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    syncCanvas();
    window.addEventListener('resize', syncCanvas);

    animationFrame = requestAnimationFrame(trackPosition);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', syncCanvas);
    };
  }, [phase]);

  const launch = async () => {
    if (phase !== 'idle' || !isVisible) return;

    setPhase('pre-launch');
    controls.start({
      x: [-2, 2, -2, 2, -1, 1, 0],
      y: [0, 15],
      transition: { 
        x: { repeat: Infinity, duration: 0.1 },
        y: { duration: 1.5, ease: "easeInOut" } 
      }
    });
    await new Promise(r => setTimeout(r, 1500));

    setPhase('ignition');
    await new Promise(r => setTimeout(r, 1000));

    setPhase('ascent');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

    controls.stop();
    await controls.start({
      x: 0,
      y: -window.innerHeight - 200,
      transition: { 
        duration: 2.5, 
        ease: [0.5, 0, 0.2, 1]
      }
    });

    // Snap back instantly to bottom, totally invisible
    controls.set({ opacity: 0, y: 0, x: 0 });
    
    setPhase('idle');
  };

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-40"
      />
      <div 
        className={`fixed bottom-8 right-8 z-50 flex justify-center items-center transition-all duration-300 ${isVisible || phase !== 'idle' ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <motion.div
          ref={rocketRef}
          animate={controls}
          initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
          whileHover={phase === 'idle' ? { y: -5 } : {}}
          onClick={launch}
          className="cursor-pointer group relative"
        >
          {/* Ambient Engine Glow */}
          <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full blur-xl transition-all duration-300 pointer-events-none ${
            phase === 'idle' ? 'bg-orange-500/0' : 
            phase === 'pre-launch' ? 'bg-orange-500/10' : 
            'bg-orange-500/40'
          }`}></div>

          {/* Intense Plasma Core (replaces static gradient) */}
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 rounded-full blur-[1px] transition-all duration-100 pointer-events-none ${
            phase === 'idle' || phase === 'pre-launch' ? 'h-0 bg-transparent' : 
            phase === 'ignition' ? 'h-4 bg-white animate-pulse' :
            'h-6 bg-white shadow-[0_0_10px_#fff,0_0_20px_#facc15]'
          }`}></div>

          {/* Premium Dark Rocket SVG */}
          <div className="relative z-10 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] -rotate-45">
              {/* Rocket Fuselage */}
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="#0f172a" />
              {/* Left Fin */}
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="#1e293b"/>
              {/* Right Fin */}
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="#1e293b"/>
              {/* Engine Nozzle */}
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" fill="#334155"/>
              {/* Cyan Window */}
              <circle cx="14.5" cy="9.5" r="1.5" fill="#38bdf8" stroke="none" />
            </svg>
          </div>
        </motion.div>
      </div>
    </>
  );
}
