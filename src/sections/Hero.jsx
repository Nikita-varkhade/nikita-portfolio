import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { ArrowRight, Send, Mail, MessageCircle } from 'lucide-react';
import profileImg from '../../images/profile.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-2xl">👋</span>
            <span className="text-lg font-medium text-white/90">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="text-white">Nikita </span>
            <span className="text-primary">Varkhade</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            <span className="text-white">Software </span>
            <span className="text-primary">Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-white/60 max-w-xl mb-10 leading-relaxed"
          >
            I build scalable, efficient, and user-friendly web applications that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <MagneticButton variant="glow" onClick={() => document.getElementById('projects').scrollIntoView()}>
              View My Work <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>

            <MagneticButton variant="outline" className="px-6 border-white/20" onClick={() => document.getElementById('contact').scrollIntoView()}>
              <Send className="w-4 h-4 mr-2" /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <MagneticButton variant="outline" className="!p-3 !rounded-full" href="https://github.com/Nikita-varkhade" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </MagneticButton>
            <MagneticButton variant="outline" className="!p-3 !rounded-full" href="https://www.linkedin.com/in/nikitavarkhade" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </MagneticButton>
            <MagneticButton variant="outline" className="!p-3 !rounded-full" href="mailto:varkhadenikita21@gmail.com">
              <Mail className="w-5 h-5" />
            </MagneticButton>
            <MagneticButton variant="outline" className="!p-3 !rounded-full" href="tel:+917620783038">
              <MessageCircle className="w-5 h-5" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full p-2">
            {/* Glowing Border Rings */}
            <div className="absolute inset-0 rounded-full border-[2px] border-primary/50 shadow-[0_0_50px_rgba(109,93,251,0.3)] animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-[-10px] rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Image Container */}
            <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-surface border border-white/10">
              <img src={profileImg} alt="Nikita Varkhade" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
