import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Pune City Congress Committee",
    category: "Live Client Project",
    description: "Official political organization website developed with a modern, responsive and user-friendly interface.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Laravel"],
    liveLink: "https://punecongress.in/"
  },

  {
    title: "Empire Capitals",
    category: "Live Client Project",
    description: "Professional financial services website showcasing investment solutions, services and company information.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS"],
    liveLink: "https://www.empirecapitals.in/"
  },
  {
    title: "AGS Agro Crop Solution",
    category: "Live Client Project",
    description: "Professional agricultural business website showcasing products, services and company information.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS"],
    liveLink: "https://agsagrocropsolution.com/"
  },

  {
    title: "Aditya Jewellers",
    category: "Live Client Project",
    description: "Modern jewellery business website designed to showcase jewellery collections and provide a premium online presence.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS"],
    liveLink: "https://adityajewellers.co/"
  },

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
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

        {/* List Grid */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-full glass-card rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(109,93,251,0.15)] bg-surface/80 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-primary tracking-wider uppercase">{project.category}</p>
                <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-4 pt-4 border-t border-white/10 flex">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary/20 hover:bg-primary/30 border border-primary/50 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(109,93,251,0.3)] w-full sm:w-auto"
                    >
                      View Live Website <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white/40 text-sm font-medium cursor-not-allowed w-full sm:w-auto"
                      title="Live URL currently unavailable"
                    >
                      View Live Website <ExternalLink className="w-4 h-4 opacity-50" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

