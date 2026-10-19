import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nikita's work on our organization website was exceptional. The premium feel and dynamic capabilities have transformed our online presence.",
    name: "Rahul M.",
    role: "President, Congress Organization",
  },
  {
    quote: "Delivered exactly what we needed. The platform is robust, extremely fast, and handles our scale perfectly. Highly recommended.",
    name: "Kunal S.",
    role: "Founder, Kunal Dryfruits",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Client <span className="text-gradient-primary">Feedback</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="glass-card p-10 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <p className="text-xl text-white/80 leading-relaxed mb-8 relative z-10 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-glow opacity-80 flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
