import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export default function MagneticButton({ children, className, onClick, href, target, variant = 'primary' }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-primary text-white hover:bg-glow",
    outline: "border border-white/20 text-white hover:bg-white/5",
    glow: "bg-primary text-white shadow-[0_0_20px_rgba(109,93,251,0.4)] hover:shadow-[0_0_30px_rgba(139,127,255,0.6)]"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={target}
      rel={target === '_blank' ? "noopener noreferrer" : undefined}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 font-medium tracking-wide flex items-center gap-2", variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
