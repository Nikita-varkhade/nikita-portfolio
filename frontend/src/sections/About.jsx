import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';
import { User, CheckCircle2 } from 'lucide-react';

const features = [
  'Business Websites',
  'Admin Dashboards',
  'Responsive Design',
  'Clean Code',
  'Fast Delivery',
  'Website Maintenance'
];

export default function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <h2 className="text-primary font-medium tracking-wide text-sm m-0">About Me</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Turning Ideas Into <br className="hidden md:block" />
            <span className="text-primary">Digital</span> Reality
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg mb-8 leading-relaxed"
          >
            I am Nikita Varkhade, a passionate Java Full Stack Developer based in Pune, dedicated to building modern, scalable, and user-centric digital solutions. With expertise in Java, Spring Boot, React.js, REST APIs, and MySQL, I transform complex requirements into seamless web applications. Whether it's crafting intuitive frontend interfaces or architecting robust backend systems, I focus on delivering high-quality code and exceptional full stack development experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-white/90 font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <MagneticButton variant="outline" className="border-primary/50 text-white hover:bg-primary/10 px-6 py-3" onClick={() => navigate('/journey')}>
              <User className="w-4 h-4 mr-2" /> View My Journey
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
