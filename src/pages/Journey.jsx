import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';
import { 
  GraduationCap, 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  BookOpen, 
  TerminalSquare, 
  HeartHandshake, 
  Lightbulb, 
  Rocket, 
  TrendingUp, 
  Palette, 
  Music, 
  Code, 
  Coffee, 
  Trophy, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Journey() {
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* 1. Hero Banner */}
      <section className="relative py-20 px-6 md:px-12 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 relative z-10"
        >
          My <span className="text-gradient-primary">Journey</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed relative z-10"
        >
          From a Computer Science student to a passionate Full Stack Web Developer building modern digital experiences.
        </motion.p>
      </section>

      {/* 2. My Story & 3. Education */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Story & Certifications */}
          <div className="space-y-8">
            {/* Story */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <BookOpen className="text-primary w-8 h-8" />
                The Story
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-lg text-white/70 leading-relaxed">
                Hi, I'm <span className="text-white font-medium">Nikita Varkhade</span>.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-lg text-white/70 leading-relaxed">
                I completed my Bachelor of Science in Computer Science from Savitribai Phule Pune University.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-lg text-white/70 leading-relaxed">
                My journey into web development started with curiosity about how websites work. That curiosity soon became a passion for creating responsive, user-friendly and visually appealing applications.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-lg text-white/70 leading-relaxed">
                Over time I explored HTML, CSS, JavaScript, React.js, Java, MySQL and modern development tools.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-lg text-white/70 leading-relaxed">
                Today I focus on building professional websites, dashboards and web applications that solve real business problems while delivering excellent user experiences.
              </motion.p>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/40 transition-all duration-700"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
              
              <ul className="space-y-4 relative z-10 pl-1">
                {[
                  { name: "Full Stack Java Development", issuer: "The Kiran Academy" },
                  { name: "Java Programming", issuer: "Crio" },
                  { name: "Career Skills in Software Development", issuer: "LinkedIn Learning" }
                ].map((cert, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-primary mt-1 text-sm">🏆</span>
                    <div>
                      <h4 className="font-semibold text-white leading-snug">{cert.name}</h4>
                      <p className="text-xs text-white/50">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="space-y-8">
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/40 transition-all duration-700"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>
              
              <div className="relative pl-6 border-l-2 border-white/10 mt-8 space-y-8 z-10">
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                  <h3 className="text-xl font-semibold text-white mb-1">Software Developer Intern</h3>
                  <h4 className="text-primary font-medium mb-1">MR Network Web Solution</h4>
                  <p className="text-white/50 text-sm mb-3">May 2026 – Present</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["React.js", "Spring Boot", "Laravel", "Node.js", "Tailwind CSS", "MySQL", "GitLab"].map((tech) => (
                      <span key={tech} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="text-sm text-white/70 space-y-2 list-disc pl-4">
                    <li>Developed and maintained responsive web applications using React.js, Tailwind CSS, HTML5, CSS3, and JavaScript.</li>
                    <li>Worked on live client projects by implementing new features and fixing bugs.</li>
                    <li>Integrated REST APIs with frontend applications for seamless data communication.</li>
                    <li>Contributed to backend development using Java Spring Boot, Laravel, and Node.js.</li>
                    <li>Collaborated with the development team using Git and GitLab for version control.</li>
                    <li>Assisted in deployment, build troubleshooting, and application maintenance.</li>
                    <li>Optimized UI responsiveness and improved user experience across devices.</li>
                    <li>Participated in testing, debugging, and code review to ensure application quality.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/40 transition-all duration-700"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              
              <div className="relative pl-6 border-l-2 border-white/10 mt-8 space-y-8 z-10">
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                  <h3 className="text-xl font-semibold text-white mb-1">Bachelor of Science in Computer Science</h3>
                  <h4 className="text-primary font-medium mb-1">Savitribai Phule Pune University</h4>
                  <p className="text-white/60 mb-2">CGPA: 7.73</p>
                  <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-white/50">2022–2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Skills Journey */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Skills Journey</h2>
          <p className="text-white/60 text-lg">Technologies I've mastered along the way</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend */}
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl border border-white/10 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <ul className="space-y-3">
              {['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite'].map(skill => (
                <li key={skill} className="flex items-center gap-2 text-white/70">
                  <span className="text-primary">✔</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl border border-white/10 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <ul className="space-y-3">
              {['Java', 'Spring & Spring Boot', 'Hibernate', 'REST APIs', 'Node.js & Laravel'].map(skill => (
                <li key={skill} className="flex items-center gap-2 text-white/70">
                  <span className="text-primary">✔</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Database & Concepts */}
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl border border-white/10 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold">Database &amp; Concepts</h3>
            </div>
            <ul className="space-y-3">
              {['MySQL Database', 'OOPs & MVC', 'Responsive Web Design', 'Data Structures'].map(skill => (
                <li key={skill} className="flex items-center gap-2 text-white/70">
                  <span className="text-primary">✔</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools & Workflow */}
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-2xl border border-white/10 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold">Tools &amp; Workflow</h3>
            </div>
            <ul className="space-y-3">
              {['Git, GitHub & GitLab', 'VS Code & Eclipse', 'Postman', 'Maven'].map(skill => (
                <li key={skill} className="flex items-center gap-2 text-white/70">
                  <span className="text-primary">✔</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. My Values */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My Values</h2>
          <p className="text-white/60 text-lg">The core principles that guide my work</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Continuous Learning", icon: BookOpen },
            { title: "Clean Code", icon: TerminalSquare },
            { title: "Client Satisfaction", icon: HeartHandshake },
            { title: "Problem Solving", icon: Lightbulb },
            { title: "Innovation", icon: Rocket },
            { title: "Growth Mindset", icon: TrendingUp },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(108, 99, 255, 0.4)' }}
              className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 group transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-white/90">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Beyond Coding */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Beyond Coding</h2>
          <p className="text-center text-white/60 mb-10 text-lg">Outside development, I enjoy exploring my creative side and engaging in community events.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Hackathons", icon: Trophy },
              { title: "Mehndi Art", icon: Palette },
              { title: "Rangoli", icon: Palette },
              { title: "Dancing", icon: Music },
              { title: "New Tech", icon: Code },
              { title: "Cooking", icon: Coffee },
            ].map((hobby, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <hobby.icon className="w-5 h-5 text-primary" />
                <span className="text-white/80 font-medium">{hobby.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. My Mission */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden p-12 text-center border border-primary/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-xl text-primary font-bold tracking-widest uppercase mb-6">My Mission</h2>
            <p className="text-2xl md:text-4xl font-semibold text-white leading-tight md:leading-snug max-w-4xl mx-auto">
              "My goal is to help businesses and startups transform their ideas into fast, responsive and scalable web applications while continuously improving my skills as a Full Stack Developer."
            </p>
          </div>
        </motion.div>
      </section>

      {/* 8. Fun Facts */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: "15+", suffix: "" },
            { label: "Technologies Learned", value: "10+", suffix: "" },
            { label: "Coffee Consumed", value: "☕", suffix: "Lots" },
            { label: "Learning", value: "Every Day", suffix: "" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center border border-white/5"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <p className="text-white/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. Call To Action */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Let's Build Something <span className="text-gradient-primary">Amazing</span> Together
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <MagneticButton variant="glow" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }}>
            Hire Me <ArrowRight className="w-5 h-5 ml-2" />
          </MagneticButton>
          <MagneticButton variant="outline" className="border-white/20" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('projects')?.scrollIntoView(), 100); }}>
            View Projects
          </MagneticButton>
          <MagneticButton variant="outline" className="border-white/20" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }}>
            Contact Me
          </MagneticButton>
        </motion.div>
      </section>

      {/* 10. Back to Home */}
      <section className="pb-16 px-6 md:px-12 max-w-4xl mx-auto relative z-10 text-center">
        <div className="w-24 h-px bg-white/10 mx-auto mb-12" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MagneticButton
            variant="outline"
            className="border-white/20 hover:border-primary/50"
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView(), 100); }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </MagneticButton>
        </motion.div>
      </section>

    </div>
  );
}
