import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    subtitle: 'User Interface Development',
    skills: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'HTML5', icon: '🟧' },
      { name: 'CSS3', icon: '🟦' }
    ]
  },
  {
    title: 'Backend',
    subtitle: 'Application Logic & APIs',
    skills: [
      { name: 'Java', icon: '☕' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'Laravel', icon: '🐘' },
      { name: 'Node.js', icon: '🟢' }
    ]
  },
  {
    title: 'Database',
    subtitle: 'Data Storage & Management',
    skills: [
      { name: 'MySQL', icon: '🐬' }
    ]
  },
  {
    title: 'Tools',
    subtitle: 'Development Workflow',
    skills: [
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💻' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium tracking-wide text-sm">My Skills</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            I use these technologies to build responsive business websites, admin dashboards, and scalable web applications.
          </motion.p>
        </div>

        {/* Specialization Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16 flex flex-col items-center"
        >
          <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em] mb-5">Specialized In</span>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {['Business Websites', 'Admin Dashboards', 'Portfolio Websites', 'API Integration'].map((spec, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-primary/30 text-white/90 text-xs md:text-sm font-medium shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(109,93,251,0.25)] hover:border-primary/50 hover:bg-black/50 cursor-default whitespace-nowrap"
              >
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-400 shrink-0" />
                {spec}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 md:p-8 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(109,93,251,0.2)] hover:border-primary/40"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white/90 mb-1.5">{category.title}</h3>
                <p className="text-sm text-white/50 font-medium">{category.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(109,93,251,0.3)] hover:bg-black/40 cursor-default shadow-sm"
                  >
                    <span className="text-lg shrink-0">{skill.icon}</span>
                    <span className="text-sm font-medium text-white/90 whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
