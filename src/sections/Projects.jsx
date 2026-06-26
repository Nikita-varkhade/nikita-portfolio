import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS. Features dark theme and smooth animations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with product management, cart, and payment gateway integration.",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=2072&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool for teams. Includes real-time updates and boards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <h2 className="text-xl font-semibold text-white">Featured Projects</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-primary hover:text-glow transition-colors text-sm font-medium">
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link} className="text-white/40 hover:text-white transition-colors p-1 border border-white/10 rounded-md hover:bg-white/5">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
