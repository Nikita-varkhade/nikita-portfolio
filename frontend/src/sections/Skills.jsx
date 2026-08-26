import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    subtitle: 'User Interface Development',
    iconBg: 'bg-purple-600',
    icon: '</>',
    barColor: 'from-purple-500 to-violet-400',
    skills: [
      { name: 'React.js',    icon: '⚛️', level: 90 },
      { name: 'JavaScript', icon: '🟨', level: 85 },
      { name: 'Tailwind CSS',icon: '🎨', level: 90 },
      { name: 'HTML5 & CSS3',icon: '🟧', level: 95 },
      { name: 'Vite',        icon: '⚡', level: 80 },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'Application Logic & APIs',
    iconBg: 'bg-green-700',
    icon: '⚙️',
    barColor: 'from-green-500 to-emerald-400',
    skills: [
      { name: 'Java',        icon: '☕', level: 85 },
      { name: 'Spring & Spring Boot', icon: '🍃', level: 80 },
      { name: 'Hibernate',   icon: '❄️', level: 75 },
      { name: 'REST APIs',   icon: '🌐', level: 85 },
      { name: 'Node.js & Laravel', icon: '🟢', level: 75 },
    ],
  },
  {
    title: 'Database & Concepts',
    subtitle: 'Data & Architecture',
    iconBg: 'bg-yellow-600',
    icon: '🗄️',
    barColor: 'from-yellow-500 to-amber-400',
    skills: [
      { name: 'MySQL Database', icon: '🐬', level: 90 },
      { name: 'OOPs & MVC',     icon: '🧩', level: 85 },
      { name: 'Responsive Web Design', icon: '📱', level: 95 },
      { name: 'Data Structures', icon: '📊', level: 75 },
    ],
  },
  {
    title: 'Tools & Workflow',
    subtitle: 'Development Environment',
    iconBg: 'bg-blue-600',
    icon: '🔧',
    barColor: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'Git, GitHub & GitLab', icon: '🐙', level: 90 },
      { name: 'VS Code & Eclipse',   icon: '💻', level: 95 },
      { name: 'Postman',             icon: '📮', level: 85 },
      { name: 'Maven',                icon: '📦', level: 80 },
    ],
  },
];

const stats = [
  { icon: '⭐', value: '10+', label: 'Technologies' },
  { icon: '🚀', value: '2+',  label: 'Years Learning' },
  { icon: '</>',value: '15+', label: 'Projects Built' },
  { icon: '📈', value: '100%',label: 'Learning Every Day' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium tracking-wide text-sm">My Expertise</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Skills &amp; Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            A strong foundation in modern technologies and tools,<br className="hidden md:block" />
            constantly learning and building to stay ahead.
          </motion.p>
        </div>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + catIdx * 0.1 }}
              className="glass-card p-6 md:p-8 border border-white/5 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${category.iconBg} flex items-center justify-center text-white font-bold text-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-sm text-white/50">{category.subtitle}</p>
                  </div>
                </div>
                {/* Ghost icon top-right */}
                <div className="text-white/10 text-5xl font-bold select-none">{category.icon}</div>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-white/90">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-white/70">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + catIdx * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.barColor}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card border border-white/5 rounded-2xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-primary text-2xl">{stat.icon}</span>
              <div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-white/50 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
