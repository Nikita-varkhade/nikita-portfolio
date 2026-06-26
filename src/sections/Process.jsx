import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Discover",
    description: "Understanding your vision, business goals, and technical requirements.",
    number: "01"
  },
  {
    title: "Design",
    description: "Creating premium, user-centric interfaces with attention to every detail.",
    number: "02"
  },
  {
    title: "Develop",
    description: "Building robust, scalable solutions using cutting-edge technologies.",
    number: "03"
  },
  {
    title: "Deploy",
    description: "Launching with optimal performance, security, and SEO configuration.",
    number: "04"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative z-10 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Development <span className="text-gradient-primary">Process</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/30 mx-auto lg:mx-0 flex items-center justify-center mb-8 relative group hover:border-primary transition-colors">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
