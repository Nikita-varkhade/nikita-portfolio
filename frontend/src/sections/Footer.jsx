import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 bg-background overflow-hidden border-t border-white/5 pt-16 pb-8">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand & Tagline */}
          <div className="flex flex-col items-start">
            <div className="text-3xl font-bold tracking-tighter flex items-center gap-1 mb-4">
              <span className="text-primary">N</span>
              <span className="text-white">\</span>
              <span className="text-primary">V</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              A passionate Freelance Full Stack Web Developer dedicated to building premium digital experiences that are fast, accessible, and visually stunning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <div className="flex flex-col space-y-4">
              <h4 className="text-white font-semibold mb-2">Quick Links</h4>
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Nikita-varkhade" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/nikitavarkhade" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="mailto:varkhadenikita21@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Nikita Varkhade. All rights reserved.
          </p>
          <p className="text-white/40 text-xs text-center md:text-right flex items-center gap-1">
            Designed & Built with <span className="text-primary">React</span> & <span className="text-[#0ea5e9]">Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
