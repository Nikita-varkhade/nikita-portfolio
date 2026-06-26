import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { User } from 'lucide-react';

const skills = [
  { name: 'Java', icon: '☕' },
  { name: 'Spring Boot', icon: '🍃' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Laravel', icon: '🐘' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'HTML5', icon: '🟧' },
  { name: 'CSS3', icon: '🟦' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'VS Code', icon: '💻' }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* About Me Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium tracking-wide text-sm">About Me</span>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Turning Ideas Into <br className="hidden md:block" />
              <span className="text-primary">Digital</span> Reality
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg mb-8 leading-relaxed"
            >
              I'm a passionate Full Stack Developer with expertise in Java, Spring Boot, React, and modern web technologies. I enjoy building end-to-end applications that are fast, secure, and user-friendly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <MagneticButton variant="outline" className="border-primary/50 text-white hover:bg-primary/10 px-6 py-3">
                <User className="w-4 h-4 mr-2" /> Know More About Me
              </MagneticButton>
            </motion.div>
          </div>

          {/* My Skills Column */}
          <div id="skills">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium tracking-wide text-sm">My Skills</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-4 flex items-center gap-3 hover:bg-surface/80 transition-colors cursor-default border-white/5"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium text-sm text-white/90">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
