import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Trophy } from 'lucide-react';

const stats = [
  {
    icon: <Code2 className="w-8 h-8 text-primary mb-4" />,
    value: "5+",
    label: "Projects Completed"
  },
  {
    icon: <Users className="w-8 h-8 text-[#00adb5] mb-4" />,
    value: "4+",
    label: "Happy Clients"
  },
  {
    icon: <Trophy className="w-8 h-8 text-emerald-500 mb-4" />,
    value: "6+",
    label: "Technologies"
  }
];

export default function Stats() {
  return (
    <section className="py-20 md:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 flex flex-col items-center text-center hover:bg-surface/80 transition-colors border-white/5"
            >
              {stat.icon}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base text-white/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
