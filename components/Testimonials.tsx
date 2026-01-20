
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  { 
    id: 1, 
    name: 'Michael Chen', 
    role: 'Product Manager at TechFlow', 
    text: 'Shahzaib transformed our web application with his expertise in React and Next.js. His clean code architecture and attention to performance optimization resulted in a 40% improvement in load times. Working with him was seamless and professional.', 
    active: false 
  },
  { 
    id: 2, 
    name: 'Sarah Johnson', 
    role: 'CEO at Digital Innovations', 
    text: 'We hired Shahzaib to build our AI-powered dashboard, and he exceeded all expectations. His ability to integrate complex AI features while maintaining excellent UI/UX is remarkable. The project was delivered on time with zero compromises on quality.', 
    active: true 
  },
  { 
    id: 3, 
    name: 'David Rodriguez', 
    role: 'CTO at StartupHub', 
    text: 'Shahzaib is one of the best front-end developers I\'ve worked with. His scalable component architecture and performance optimization skills helped us scale from 1K to 100K users without any issues. Highly recommend him for any serious project.', 
    active: false 
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#111111] rounded-[80px] py-24 md:py-32 px-6 mx-4 overflow-hidden relative">
      {/* Floating Sparkles */}
      <motion.div 
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }} 
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-24 left-[15%] pointer-events-none"
      >
        <Star fill="white" className="w-14 h-14 text-white opacity-20" />
      </motion.div>
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], rotate: [0, 45, 0] }} 
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 right-[15%] pointer-events-none"
      >
        <Star fill="white" className="w-10 h-10 text-white opacity-10" />
      </motion.div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-white text-6xl md:text-8xl font-black mb-10 leading-none tracking-tighter"
        >
          Testimonials That<br />
          Speak to <span className="text-orange-primary">My Results</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl mx-auto mb-20 text-xl leading-relaxed"
        >
          Don't just take my word for it. Hear from the visionaries I've collaborated with across various industries.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-12 rounded-[50px] border relative transition-all duration-700 group hover:-translate-y-4 ${
                t.active ? 'bg-white/10 border-white/20 ring-1 ring-white/10' : 'bg-white/5 border-white/5'
              }`}
            >
              <Quote className="absolute top-10 right-10 text-white/5 w-20 h-20 group-hover:text-orange-primary/10 transition-colors" fill="currentColor" />
              
              <div className="flex items-center space-x-5 mb-10 relative z-10">
               
                <div className="text-left">
                  <h4 className="text-white font-black text-xl leading-none mb-1">{t.name}</h4>
                  <p className="text-gray-500 text-xs font-black uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-5 h-5 bg fill-orange-primary text-orange-primary" />
                ))}
                <span className="text-white font-black ml-2 text-lg">5.0</span>
              </div>

              <p className="text-gray-400 text-left leading-relaxed text-lg relative z-10 group-hover:text-gray-300 transition-colors">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
