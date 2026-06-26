import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something <span className="text-gradient-primary">Exceptional</span>
          </h2>
          <p className="text-xl text-white/60">
            Have a project in mind? Let's talk about how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 text-left"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                placeholder="varkhadenikita21@gmail.com"
              />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <label className="text-sm font-medium text-white/80 ml-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
              placeholder="+91 9876543210"
            />
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm font-medium text-white/80 ml-1">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <MagneticButton variant="glow" className="w-full justify-center">
            {status === 'sending' ? (
              'Sending...'
            ) : status === 'success' ? (
              'Message Sent Successfully!'
            ) : status === 'error' ? (
              'Failed to Send. Try Again.'
            ) : (
              <>Send Inquiry <Send className="w-5 h-5" /></>
            )}
          </MagneticButton>
        </motion.form>

      </div>
    </section>
  );
}
