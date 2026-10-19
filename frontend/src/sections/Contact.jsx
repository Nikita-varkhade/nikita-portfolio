import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const cleanedMobile = formData.mobile.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Please enter your mobile number.';
    } else if (!/^[0-9]{7,15}$/.test(cleanedMobile)) {
      newErrors.mobile = 'Please enter a valid mobile number (e.g. 10 digits).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your project message.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Message must be at least 8 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (!validate()) {
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    const submissionDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      message: formData.message.trim(),
      to_email: 'shetenikita21@gmail.com',
      subject: `New Portfolio Inquiry — ${formData.name.trim()}`,
      submissionDate
    };

    try {
      let sentSuccessfully = false;

      // 1. Try EmailJS browser delivery if credentials are provided in env
      const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        try {
          const res = await emailjs.send(
            emailjsServiceId,
            emailjsTemplateId,
            {
              to_email: 'shetenikita21@gmail.com',
              to_name: 'Nikita Varkhade',
              from_name: payload.name,
              from_email: payload.email,
              mobile_number: payload.mobile,
              message: payload.message,
              subject: payload.subject,
              submission_time: submissionDate
            },
            emailjsPublicKey
          );
          if (res.status === 200 || res.text === 'OK') {
            sentSuccessfully = true;
          }
        } catch (emailjsErr) {
          console.warn('EmailJS attempt failed, attempting backend server...', emailjsErr);
        }
      }

      // 2. Fall back to / try backend server or dev API endpoint
      if (!sentSuccessfully) {
        const explicitApiUrl = import.meta.env.VITE_API_URL;
        const candidateEndpoints = [];
        if (explicitApiUrl) {
          candidateEndpoints.push(`${explicitApiUrl.replace(/\/$/, '')}/api/contact`);
        }
        candidateEndpoints.push('/api/contact');
        candidateEndpoints.push('http://localhost:3001/api/contact');

        // Deduplicate endpoints
        const endpoints = [...new Set(candidateEndpoints)];

        let lastError = null;
        for (const endpoint of endpoints) {
          try {
            const response = await fetch(endpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(payload)
            });

            if (response.ok) {
              const data = await response.json();
              if (data.success) {
                sentSuccessfully = true;
                break;
              } else {
                throw new Error(data.error || 'Failed to send message.');
              }
            } else {
              const errData = await response.json().catch(() => ({}));
              throw new Error(errData.error || `Server responded with status ${response.status}`);
            }
          } catch (err) {
            lastError = err;
          }
        }

        if (!sentSuccessfully && lastError) {
          throw lastError;
        }
      }

      if (sentSuccessfully) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent to shetenikita21@gmail.com. I will get back to you shortly.');
        // Clear form fields only on verified success
        setFormData({ name: '', email: '', mobile: '', message: '' });
        setErrors({});
        setTimeout(() => {
          setStatus('');
          setStatusMessage('');
        }, 7000);
      } else {
        throw new Error('Unable to send inquiry through email service.');
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      setStatus('error');
      setStatusMessage(
        error.message ||
        'Failed to deliver inquiry. Please ensure the email service is running, or email me directly at shetenikita21@gmail.com.'
      );
      setTimeout(() => {
        setStatus('');
      }, 9000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="glass-card p-8 md:p-12 text-left"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'sending'}
                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-all`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-xs text-red-400 ml-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'sending'}
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-all`}
                placeholder="abc@xyz.com"
              />
              {errors.email && (
                <p className="text-xs text-red-400 ml-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <label className="text-sm font-medium text-white/80 ml-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              disabled={status === 'sending'}
              className={`w-full bg-white/5 border ${errors.mobile ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-all`}
              placeholder="xxxxxxxxxx"
            />
            {errors.mobile && (
              <p className="text-xs text-red-400 ml-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.mobile}
              </p>
            )}
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm font-medium text-white/80 ml-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'sending'}
              rows={4}
              className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-all resize-none`}
              placeholder="Tell me about your project..."
            ></textarea>
            {errors.message && (
              <p className="text-xs text-red-400 ml-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.message}
              </p>
            )}
          </div>

          <MagneticButton
            variant="glow"
            className="w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            disabled={status === 'sending'}
            type="submit"
          >
            {status === 'sending' ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending Inquiry...
              </span>
            ) : status === 'success' ? (
              <span className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Message Sent Successfully!
              </span>
            ) : status === 'error' ? (
              <span className="flex items-center gap-2 text-rose-300">
                <AlertCircle className="w-5 h-5" />
                Failed to Send. Try Again
              </span>
            ) : (
              <>
                Send Inquiry <Send className="w-5 h-5" />
              </>
            )}
          </MagneticButton>

          {/* Feedback messages */}
          {statusMessage && (
            <div
              className={`mt-4 p-4 rounded-xl text-sm flex items-start gap-2.5 transition-all ${
                status === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
              )}
              <span className="leading-relaxed">{statusMessage}</span>
            </div>
          )}
        </motion.form>

      </div>
    </section>
  );
}
