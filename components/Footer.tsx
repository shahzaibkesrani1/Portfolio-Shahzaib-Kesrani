
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Linkedin, ArrowUpRight, Send, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
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
    <footer className="bg-[#111111] rounded-t-[60px] md:rounded-t-[80px] pt-44 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5">
          <h2 className="text-white text-6xl md:text-9xl font-black tracking-tighter leading-none mb-10 md:mb-0">
            Let's <span className="text-orange-primary">Collaborate</span>.
          </h2>
       
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="md:col-span-2 space-y-10">
            <div className="flex items-center space-x-4 cursor-pointer">
              <div className="w-14 h-14 bg-orange-primary rounded-full flex items-center justify-center font-black text-white italic text-xl shadow-inner">
                SK
              </div>
              <span className="text-white font-black tracking-[0.3em] text-3xl uppercase">Shahzaib</span>
            </div>
            <p className="text-gray-500 max-w-md text-xl leading-relaxed">
              Based in Pakistan. Operating globally. I design and code functional web applications with a focus on high-fidelity user interactions.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/shahzaibkesrani1" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-orange-primary hover:border-orange-primary hover:bg-orange-primary/5 transition-all">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/shahzaib-kesrani/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-orange-primary hover:border-orange-primary hover:bg-orange-primary/5 transition-all">
                <Linkedin size={22} />
              </a>
              <a href="https://wa.me/923282719635" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-orange-primary hover:border-orange-primary hover:bg-orange-primary/5 transition-all">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-orange-primary font-black text-sm uppercase tracking-[0.3em] mb-12">Sitemap</h4>
            <ul className="space-y-6 text-gray-300 font-black text-lg">
              <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')} className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#project" onClick={(e) => handleSmoothScroll(e, '#project')} className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-orange-primary font-black text-sm uppercase tracking-[0.3em] mb-12">Contact Details</h4>
            <ul className="space-y-6 text-gray-300 font-black text-lg">
              <li><a href="https://wa.me/923282719635" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-primary transition-colors">+92 328 2719635</a></li>
              <li><a href="mailto:shahzaibabco@gmail.com" className="hover:text-white transition-colors cursor-pointer">shahzaibabco@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/shahzaib-kesrani/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer text-sm">LinkedIn Profile</a></li>
            </ul>
          </div>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
