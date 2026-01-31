
import React from 'react';
import { motion } from 'framer-motion';
// Fixed missing ArrowUpRight import from lucide-react
import { Code, Terminal, Rocket, Search, ArrowUpRight } from 'lucide-react';
// @ts-ignore
import myImg from '../assets/Myimg.png';

const WhyHireMe: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        
        {/* Visual Content */}
        <div className="relative lg:w-2/5 flex justify-center order-2 lg:order-1">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[400px] group"
          >
            <img 
              src={myImg}
              alt="Shahzaib at work" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-3xl z-20 border-2 border-orange-primary shadow-lg">
              <div className="text-4xl font-black text-[#111111]">2+</div>
              <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Years Experience</div>
            </div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="lg:w-3/5 space-y-12 order-1 lg:order-2 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left w-full"
          >
            <h4 className="text-orange-primary font-black uppercase tracking-[0.4em] text-xs">The Developer</h4>
            <h2 className="text-6xl md:text-8xl font-black leading-tight text-[#111111] tracking-tighter">
              About <span className="text-orange-primary">Me</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Hello! I'm Shahzaib Kesrani, a Front-end Developer who loves turning pixels into meaningful experiences. My journey started with a curiosity for how things work on the web, and it evolved into a career of building scalable systems and elegant UIs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {[
{ 
  icon: Code, 
  title: 'Scalable Front-end Development', 
  desc: 'Designing clean, modular, and scalable component systems that are easy to maintain and grow with your product.' 
},
{ 
  icon: Rocket, 
  title: 'Fast & Reliable Delivery', 
  desc: 'Shipping production-ready features efficiently without compromising code quality or performance.' 
},
{ 
  icon: Search, 
  title: 'Pixel-Perfect Implementation', 
  desc: 'Translating designs into precise, responsive interfaces with smooth animations and attention to detail.' 
},
{ 
  icon: Terminal, 
  title: 'Strategic Technical Decisions', 
  desc: 'Selecting the right tools and technologies to support long-term stability, performance, and business goals.' 
},

            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-5"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-orange-primary shrink-0">
                  <item.icon size={26} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#111111]">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))} 
          </div>

          <div className="flex justify-center">
            <motion.a 
              href="#contact"
              className="inline-flex px-8 py-4 rounded-full bg-[#111111] text-white font-black text-lg transition-all items-center space-x-3 uppercase tracking-tighter"
            >
              <span>Hire &nbsp; Me</span>
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
