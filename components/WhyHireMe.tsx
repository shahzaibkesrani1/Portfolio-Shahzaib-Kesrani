import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Rocket, Search, ArrowUpRight, Download } from 'lucide-react';
// @ts-ignore
import myImg from '../assets/Myimg.jpeg';

const highlights = [
  {
    icon: Code,
    title: 'Scalable Front-end Development',
    desc: 'Designing clean, modular, and scalable component systems that are easy to maintain and grow with your product.',
  },
  {
    icon: Rocket,
    title: 'Fast & Reliable Delivery',
    desc: 'Shipping production-ready features efficiently without compromising code quality or performance.',
  },
  {
    icon: Search,
    title: 'Pixel-Perfect Implementation',
    desc: 'Translating designs into precise, responsive interfaces with smooth animations and attention to detail.',
  },
  {
    icon: Terminal,
    title: 'Strategic Technical Decisions',
    desc: 'Selecting the right tools and technologies to support long-term stability, performance, and business goals.',
  },
];

const WhyHireMe: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        {/* Visual */}
        <div className="relative lg:w-2/5 flex justify-center order-2 lg:order-1">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[400px]"
          >
            <div className="rounded-[32px] overflow-hidden border border-black/5">
              <img src={myImg} alt="Shahzaib Kesrani at work" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-6 left-6 bg-white px-6 py-5 rounded-2xl border border-orange-primary/20 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="text-4xl font-black text-[#111111] leading-none">3+</div>
              <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mt-1">
                Years Experience
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text */}
        <div className="lg:w-3/5 space-y-12 order-1 lg:order-2 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left w-full"
          >
            <p className="font-mono text-orange-primary text-xs uppercase tracking-[0.3em]">
              The developer
            </p>
            <h2 className="text-6xl md:text-8xl font-black leading-tight text-[#111111] tracking-tighter">
              About <span className="text-orange-primary">Me</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Hello! I'm Shahzaib Kesrani, a Front-end Developer who loves turning pixels into
              meaningful experiences. My journey started with a curiosity for how things work on
              the web, and it evolved into a career of building scalable systems and elegant UIs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-5"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-orange-primary shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#111111]">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="inline-flex px-8 py-4 rounded-full bg-orange-primary hover:bg-orange-600 text-white text-lg font-black transition-all items-center gap-3 uppercase tracking-tighter"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;