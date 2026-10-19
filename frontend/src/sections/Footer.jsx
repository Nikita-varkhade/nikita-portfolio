import React from 'react';

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
            <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap">
              {/* GitHub */}
              <a
                href="https://github.com/Nikita-varkhade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 hover:bg-white/10 hover:scale-110 transition-all group shadow-sm"
              >
                <svg className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nikitavarkhade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:scale-110 transition-all group shadow-sm"
              >
                <svg className="w-4 h-4 text-[#0A66C2] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.4a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:shetenikita21@gmail.com"
                aria-label="Send Email"
                title="Email"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-[#EA4335] hover:border-[#EA4335]/40 hover:bg-[#EA4335]/10 hover:scale-110 transition-all group shadow-sm"
              >
                <svg className="w-4 h-4 text-[#EA4335] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919185044845"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:scale-110 transition-all group shadow-sm"
              >
                <svg className="w-4 h-4 text-[#25D366] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/websby.nikita/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                title="Instagram"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:scale-110 transition-all group shadow-sm"
              >
                <svg className="w-4 h-4 transition-transform" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="footer-instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#footer-instagram-gradient)" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4.2" stroke="url(#footer-instagram-gradient)" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="url(#footer-instagram-gradient)" />
                </svg>
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
