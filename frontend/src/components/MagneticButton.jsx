import React from 'react';
import { cn } from '../utils/cn';

export default function MagneticButton({ children, className, onClick, href, target, variant = 'primary' }) {
  const variants = {
    primary: "bg-primary text-white hover:bg-glow hover:shadow-[0_0_20px_rgba(109,93,251,0.35)]",
    outline: "border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
    glow: "bg-primary text-white shadow-[0_0_20px_rgba(109,93,251,0.4)] hover:shadow-[0_0_30px_rgba(139,127,255,0.6)] hover:bg-glow"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      target={target}
      rel={target === '_blank' ? "noopener noreferrer" : undefined}
      className={cn(
        "relative px-8 py-4 rounded-full transition-all duration-200 font-medium tracking-wide flex items-center gap-2 active:scale-[0.98] select-none cursor-pointer",
        variants[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}

