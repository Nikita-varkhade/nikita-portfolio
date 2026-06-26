import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="text-3xl font-bold tracking-tighter text-primary">N</div>
          <div className="flex flex-col hidden sm:flex">
            <span className="text-sm font-semibold text-white leading-tight">Nikita Varkhade</span>
            <span className="text-xs text-white/60 leading-tight">Software Developer</span>
          </div>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
            </a>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className="hidden md:block">
          <a href="/resume.pdf" download className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm font-medium text-white hover:bg-white/5 hover:border-primary/50 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
