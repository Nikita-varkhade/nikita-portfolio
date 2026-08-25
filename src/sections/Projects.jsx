import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';

const projects = [
  {
    title: "Political Organization Management Portal",
    category: "Live Client Project",
    shortDescription: "Developed a modern, responsive and user-friendly official website with a clean interface, smooth navigation and optimized performance.",
    detailedDescription: "Contributed to the development of the official Pune City District Congress Committee website. Built responsive user interfaces using React.js and Tailwind CSS, integrated REST APIs for dynamic content rendering, built reusable UI components, resolved UI and build issues, and collaborated using GitLab.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "REST API", "Laravel", "MySQL"],
    features: [
      "Developed responsive user interfaces using React.js and Tailwind CSS",
      "Integrated REST APIs for dynamic content rendering",
      "Built reusable UI components and optimized website performance",
      "Resolved UI bugs, build issues, and deployment-related problems",
      "Collaborated with the development team using GitLab in a production environment"
    ],
    image: "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmE0N2IzMGUxZDA0ODE5MWExODZlMzFkOGU2NTg5YjM6c2VkaW1lbnQ6Ly80ODJhNTU0NzY0NTEyZDgjZmlsZV8wMDAwMDAwMDk2MTA3MWZiOWY3NWFjN2Y5MDJhNjRmNyN1bmZ1cmwiLCJnaXptb19pZCI6bnVsbCwidHMiOiIyMDYzNyIsInAiOiJweWkiLCJjaWQiOiIxIiwic2lnIjoiOTgxZmM4YjU4MmZlOWVhMDdkOGY2YjYyNmI0YjIzNDFlNzlhMzgxNDA1MjMyZmJmYTAyYWQ0ZGM1NjE2ZDU5YiIsInYiOiIwIiwiY3MiOm51bGwsImNkbiI6bnVsbCwiZm4iOm51bGwsImNkIjpudWxsLCJjcCI6bnVsbCwibWEiOm51bGx9",
    liveLink: "https://punecongress.in",
    githubLink: "https://github.com/Nikita-varkhade"
  },

  {
    title: "Interactive Portfolio Website",
    category: "Personal Project",
    shortDescription: "Personal portfolio built with React and Tailwind CSS. Features dark theme and smooth animations.",
    detailedDescription: "Designed and developed a fully responsive personal portfolio website using React.js and Tailwind CSS. Showcases projects, technical skills, certifications, and professional experience through an intuitive UI. Integrated smooth navigation, responsive layouts, and a contact form.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    features: [
      "Designed and developed a fully responsive personal portfolio website using React.js and Tailwind CSS",
      "Showcased projects, technical skills, certifications, and professional experience through an intuitive user interface",
      "Implemented reusable React components and optimized application performance",
      "Integrated smooth navigation and responsive layouts for desktop, tablet, and mobile devices",
      "Deployed the application and maintained the source code using Git and GitHub",
      "Implemented a contact form for user inquiries and professional networking"
    ],
    image: "add",
    liveLink: "https://nikita-portfolio.vercel.app",
    githubLink: "https://github.com/Nikita-varkhade"
  },
  {
    title: "Student Attendance Tracking System",
    category: "Academic Project",
    shortDescription: "Developed a web-based Student Attendance Tracking System to manage student records and daily attendance efficiently.",
    detailedDescription: "Developed a web-based Student Attendance Tracking System using Java, Spring Boot, MySQL, REST APIs, and Hibernate. Implemented CRUD operations for student registration, attendance management, and record updates. Designed and integrated a secure MySQL database.",
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs", "Hibernate"],
    features: [
      "Developed a web-based Student Attendance Tracking System to manage student records and daily attendance efficiently",
      "Implemented CRUD operations for student registration, attendance management, and record updates using Spring Boot and REST APIs",
      "Designed and integrated a MySQL database with Hibernate for secure and efficient data storage and retrieval",
      "Implemented validation and exception handling to ensure accurate attendance records and reliable system performance",
      "Tested REST API endpoints using Postman and maintained clean, modular backend architecture"
    ],
    image: "/attendance_dashboard.png",
    liveLink: null,
    githubLink: "https://github.com/Nikita-varkhade"
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full h-[480px] sm:h-[420px] [perspective:1500px] group cursor-pointer"
            >
              <div className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">

                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group/front">

                  {/* Full Card Image */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 z-10 transition-opacity duration-500 group-hover/front:opacity-80"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content (Overlaid) */}
                  <div className="relative z-20 p-6 flex-1 flex flex-col justify-end">
                    <div className="mt-auto flex flex-col">
                      <p className="text-xs font-semibold text-primary mb-1 tracking-wider uppercase drop-shadow-md">{project.category || "Project"}</p>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2 drop-shadow-md">
                        {project.shortDescription || project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack?.slice(0, 4).map((tech, i) => (
                          <span key={i} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 shadow-sm">
                            {tech}
                          </span>
                        ))}
                        {project.techStack?.length > 4 && (
                          <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/70 shadow-sm">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="mt-2 flex items-center justify-center gap-2 text-white/70 text-xs font-medium bg-black/40 backdrop-blur-md py-2.5 rounded-lg border border-white/10 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg> Hover to view details
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] glass-card rounded-2xl p-6 border-primary/40 border-2 flex flex-col bg-background/95 backdrop-blur-xl shadow-[0_0_30px_rgba(109,93,251,0.15)] overflow-hidden">
                  <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 pb-4">
                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight">{project.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-5">
                      {project.detailedDescription || project.description}
                    </p>

                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <div className="w-1 h-4 bg-primary rounded-full"></div> Key Features
                    </h4>
                    <ul className="text-white/70 text-sm space-y-1.5 mb-6 pl-1">
                      {project.features?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-[10px]">●</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-3 shrink-0">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary/20 hover:bg-primary/30 border border-primary/50 rounded-lg text-white text-sm font-medium transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Website
                      </a>
                    )}
                    {project.githubLink ? (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white text-sm font-medium transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> Source Code
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-black/40 border border-white/10 rounded-lg text-white/50 text-xs font-medium cursor-not-allowed">
                        <Lock className="w-3.5 h-3.5" /> Source Code: Private (Company Project)
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
