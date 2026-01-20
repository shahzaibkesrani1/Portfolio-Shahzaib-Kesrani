
import React from 'react';
import { ArrowUpRight, Github, Linkedin, MessageCircle, Terminal, Cpu, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-4 md:px-8 bg-white overflow-hidden">
      {/* Dynamic Background Elements - Optimized for no overflow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-orange-primary/10 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-[-10%] w-[35vw] h-[35vw] bg-orange-primary/5 rounded-full blur-[100px] pointer-events-none z-0"
      />
      
      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[5%] hidden lg:block p-5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl border border-gray-100 z-10"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-primary/10 rounded-xl flex items-center justify-center text-orange-primary">
            <Terminal size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-gray-400">Status</span>
            <span className="text-xs font-bold text-[#111111]">Coding magic...</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[2%] right-[5%] hidden lg:block p-5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl border border-gray-100 z-10"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#111111] rounded-xl flex items-center justify-center text-white">
            <Code2 size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-gray-400">Expertise</span>
            <span className="text-xs font-bold text-[#111111]">Front-end Development</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center relative z-20">
        
        {/* Reference Quote */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4 md:mb-6"
        >
          <div className="flex items-center justify-center space-x-2 px-6 py-2.5 border-2 border-[#111111] rounded-full bg-white/80 backdrop-blur-md shadow-xl shadow-gray-200/40">
            <span className="text-[14px] md:text-xs font-black text-[#111111] uppercase tracking-[0.2em]">Hello, I'm</span>
          </div>
        </motion.div>
        
        {/* Title Group */}
        <div className="text-center px-4 w-full ">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center pb-20"
          >
            <h1 className="text-[16vw] sm:text-[12vw] lg:text-[140px] font-black tracking-tighter text-[#111111] leading-[0.8] uppercase flex flex-col">
              <span className="block italic text-orange-primary drop-shadow-sm">Shahzaib</span>
              <span className="block mt-[-2vw]">Kesrani.</span>
            </h1>
          </motion.div>
        </div>

        {/* Visual & Socials Container */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-[-40px] xl:mt-[-60px] px-4 md:px-12 xl:px-24">
          
          {/* Left Socials Bar - Desktop */}
          <motion.div 
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col gap-6 items-start z-30"
          >
            <div className="bg-white/40 backdrop-blur-xl rounded-[32px] flex flex-col gap-3 p-2">
              {[
                { icon: Github, href: "https://github.com/shahzaibkesrani1", color: "hover:bg-[#111111]" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shahzaib-kesrani/", color: "hover:bg-[#0077b5]" },
                { icon: MessageCircle, href: "https://wa.me/923282719635", color: "hover:bg-[#25D366]" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-14 h-14 rounded-full bg-white border border-black flex items-center justify-center text-[#111111] hover:text-white transition-all duration-300 shadow-md ${social.color}`}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Center Buttons */}
          <div className="relative flex justify-center items-center group hidden md:flex flex-1">
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center bg-[#111111]/90 backdrop-blur-2xl rounded-full border border-white/10 p-1.5 min-w-[280px] sm:min-w-[380px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-30"
            >
              <a href="#project" onClick={(e) => handleSmoothScroll(e, '#project')} className="flex-[1.5] bg-orange-primary hover:bg-orange-600 text-white px-6 sm:px-10 py-4 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 font-black shadow-xl text-sm sm:text-base">
                <span>View My Work</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="flex-1 text-white hover:text-orange-primary px-4 py-4 rounded-full transition-colors font-black text-xs sm:text-sm uppercase tracking-widest text-center">
                Contact
              </a>
            </motion.div>
          </div>

          {/* Right Stats - Desktop */}
          <motion.div 
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col items-end gap-8 z-30"
          >
            <div className="text-right space-y-2">
              <h3 className="text-4xl font-black text-[#111111] leading-none tracking-tighter">2+ Years</h3>
              <p className="text-gray-400 font-extrabold uppercase tracking-[0.3em] text-[10px]">Building Digital Solutions</p>
            </div>
            <div className="flex flex-col gap-3 items-end">
               <div className="text-xs font-black uppercase tracking-[0.2em] text-[#111111] border-b-2 border-orange-primary pb-1">Core Tech</div>
               <div className="flex flex-wrap gap-2 justify-end max-w-[200px]">
                 {['React', 'Next.js', 'Node'].map(tech => (
                   <span key={tech} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black uppercase text-gray-500 shadow-sm">{tech}</span>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Mobile Section - Socials, Core Tech, and Hire Me Button */}
          <div className="w-full flex flex-col lg:hidden mt-10 gap-6">
            {/* Social Icons - Horizontal at the end */}
            <div className="flex justify-center gap-4 z-30">
              {[
                { icon: Github, href: "https://github.com/shahzaibkesrani1" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shahzaib-kesrani/" },
                { icon: MessageCircle, href: "https://wa.me/923282719635" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-gray-400 hover:text-orange-primary hover:border-orange-primary transition-all shadow-sm"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Core Tech Section */}
            <div className="flex flex-col gap-3 items-center">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-[#111111] border-b-2 border-orange-primary pb-1">Core Tech</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {['React', 'Next.js', 'Node'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black uppercase text-gray-500 shadow-sm">{tech}</span>
                ))}
              </div>
            </div>

            {/* Hire Me Button */}
            <div className="flex justify-center">
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="bg-orange-primary text-white px-8 py-3 rounded-full font-black text-sm hover:bg-orange-600 active:scale-95 transition-all shadow-lg shadow-orange-500/20"
              >
                Hire Me
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
