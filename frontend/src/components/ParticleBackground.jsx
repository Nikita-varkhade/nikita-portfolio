import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    let mouse = { x: null, y: null, radius: 200 };
    let rocket = { x: null, y: null, radius: 300 };

    // Premium subtle colors (white and very subtle primary tints)
    const colors = ['#ffffff', '#ffffff', '#ffffff', '#6d5dfc', '#8b7fff', '#a299ff'];

    class Particle {
      constructor(x, y) {
        this.originX = x;
        this.originY = y;
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.5 + 0.5; // Tiny dots
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.02; // Very fluid return
        this.friction = 0.90; // Smooth deceleration
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.angleOffset = Math.random() * Math.PI * 2;
        this.baseAlpha = Math.random() * 0.5 + 0.1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Twinkling effect
        const alpha = (Math.sin(Date.now() * this.twinkleSpeed + this.angleOffset) + 1) / 2 * 0.5 + this.baseAlpha;
        
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.min(alpha, 1);
        
        // Subtle glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      update() {
        // Mouse Repulsion
        if (mouse.x != null && mouse.y != null) {
          this.dx = mouse.x - this.x;
          this.dy = mouse.y - this.y;
          this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

          if (this.distance < mouse.radius) {
            this.force = (mouse.radius - this.distance) / mouse.radius;
            this.angle = Math.atan2(this.dy, this.dx);
            
            const repelX = Math.cos(this.angle) * this.force * 2;
            const repelY = Math.sin(this.angle) * this.force * 2;
            
            this.vx -= repelX;
            this.vy -= repelY;
          }
        }

        // Rocket Repulsion
        if (rocket.x != null && rocket.y != null) {
          const rDx = rocket.x - this.x;
          const rDy = rocket.y - this.y;
          const rDistance = Math.sqrt(rDx * rDx + rDy * rDy);

          if (rDistance < rocket.radius) {
            const rForce = (rocket.radius - rDistance) / rocket.radius;
            const rAngle = Math.atan2(rDy, rDx);
            
            const repelX = Math.cos(rAngle) * rForce * 5; // Stronger force for rocket
            const repelY = Math.sin(rAngle) * rForce * 5;
            
            this.vx -= repelX;
            this.vy -= repelY;
          }
        }

        // Spring back to origin
        this.vx += (this.originX - this.x) * this.ease;
        this.vy += (this.originY - this.y) * this.ease;

        // Apply friction
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        this.draw();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 20000); // Further reduced density
      
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      // Reset rocket after drawing so it only repels while event is actively firing
      rocket.x = null;
      rocket.y = null;
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
    };

    const handleRocketMove = (event) => {
      rocket.x = event.detail.x;
      rocket.y = event.detail.y;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('rocket-move', handleRocketMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('rocket-move', handleRocketMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
