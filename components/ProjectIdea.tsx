
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Award, Star, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ProjectIdea: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      setTimeout(() => setMessage({ type: null, text: '' }), 3000);
      return;
    }

    setLoading(true);
    setMessage({ type: null, text: '' });

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing EmailJS config:', { serviceId: !!serviceId, templateId: !!templateId, publicKey: !!publicKey });
        throw new Error('EmailJS configuration is missing. Please check your .env file and restart the server.');
      }

      // Initialize EmailJS (optional but recommended)
      emailjs.init(publicKey);

      // Send email with template parameters
      // Template expects: {{email}}, {{name}}, {{title}}
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          email: 'shahzaibabco@gmail.com', // This goes to "To Email" field in template
          name: email.split('@')[0] || 'User', // For {{name}} in template content
          title: `New project inquiry from: ${email}`, // For {{title}} in template content
          from_email: email, // User's email who is sending
          user_email: email, // Also send user email
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setMessage({ type: 'success', text: 'Email sent successfully! I\'ll get back to you soon.' });
      setEmail('');
      setTimeout(() => setMessage({ type: null, text: '' }), 5000);
    } catch (error: any) {
      console.error('Email sending failed:', error);
      let errorMessage = 'Failed to send email. Please try again or contact directly.';
      
      if (error?.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error?.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      setMessage({ type: 'error', text: errorMessage });
      setTimeout(() => setMessage({ type: null, text: '' }), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[80px] font-black leading-[0.85] text-[#111111] tracking-tighter"
        >
          Have an Awsome Project<br />
          Idea? <span className="text-orange-primary">Let's Discuss</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex items-center bg-white border-2 border-gray-100 rounded-full p-3 shadow-[0_40px_100px_rgba(0,0,0,0.08)] focus-within:border-orange-primary transition-all group">
              <div className="w-16 h-16 bg-orange-primary/10 rounded-full flex items-center justify-center ml-2 ">
                <Mail className="w-7 h-7" />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address" 
                className="flex-1 bg-transparent border-none px-8 outline-none text-2xl font-bold placeholder:text-gray-300 text-[#111111]"
                required
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-orange-primary text-white px-12 py-5 rounded-full font-black text-xl hover:bg-orange-600 active:scale-95 transition-all shadow-xl shadow-orange-500/30 flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{loading ? 'Sending...' : 'Send'}</span>
                {!loading && <Send className="w-5 h-5" />}
              </button>
            </div>
          </form>
          
          {message.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-center text-lg font-bold ${
                message.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message.text}
            </motion.div>
          )}
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 pt-8">
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-orange-primary/10 transition-colors">
              <Star className="w-6 h-6 fill-[#111111] text-[#111111]" />
            </div>
            <span className="font-black text-lg tracking-tight">50+ Projects Delivered</span>
          </div>
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-orange-primary/10 transition-colors">
              <Award className="w-6 h-6 fill-[#111111] text-[#111111]" />
            </div>
            <span className="font-black text-lg tracking-tight">2+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-orange-primary/10 transition-colors">
              <CheckCircle className="w-6 h-6 fill-[#111111] text-[#111111]" />
            </div>
            <span className="font-black text-lg tracking-tight">React & Next.js Expert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIdea;
