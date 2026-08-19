import React from 'react';
import { ArrowUpRight, Github, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import StatusBadge from './StatusBadge';

const socials = [
  { icon: Github, href: 'https://github.com/shahzaibkesrani1' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shahzaib-kesrani/' },
  { icon: MessageCircle, href: 'https://wa.me/923282719635' },
];

const coreTech = ['React', 'Next.js', 'Node.js'];

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      const headerOffset = 100;
      const offsetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-36 pb-16 px-4 md:px-8 bg-white overflow-hidden"
    >
      {/* Single restrained glow — replaces the previous dual animated blobs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] max-w-[900px] max-h-[600px] bg-orange-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center relative z-10">
        {/* Signature status badge — same element used in Header/Footer */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <StatusBadge variant="light" />
        </motion.div>

        {/* Name — the thesis of the page, kept as the one bold move */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center px-4 w-full"
        >
          <h1 className="text-[16vw] sm:text-[12vw] lg:text-[140px] font-black tracking-tighter text-[#111111] leading-[0.8] uppercase flex flex-col items-center">
            <span className="italic text-orange-primary">Shahzaib</span>
            <span className="mt-[-2vw]">Kesrani.</span>
          </h1>
        </motion.div>

        {/* Role line — monospace utility face, doubles as the "developer" signature */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm md:text-base text-gray-500 mt-6 tracking-tight"
        >
          <span className="text-orange-primary">const</span> role ={' '}
          <span className="text-[#111111] font-semibold">'Frontend Engineer, MERN Stack'</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex items-center bg-[#111111] rounded-full border border-white/10 p-1.5 min-w-[280px] sm:min-w-[380px] shadow-[0_25px_50px_rgba(0,0,0,0.35)] mt-10"
        >
          <a
            href="#project"
            onClick={(e) => handleSmoothScroll(e, '#project')}
            className="flex-[1.5] bg-orange-primary hover:bg-orange-600 text-white px-8 sm:px-10 py-4 rounded-full flex items-center justify-center gap-3 transition-colors active:scale-95 font-black text-sm sm:text-base"
          >
            <span>View My Work</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="flex-1 text-white hover:text-orange-primary px-4 py-4 rounded-full transition-colors font-black text-xs sm:text-sm uppercase tracking-widest text-center"
          >
            Contact
          </a>
        </motion.div>

        {/* Socials + core tech — unified with the Footer's icon style */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-14 mt-14"
        >
          <div className="flex gap-3">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#111111] hover:border-[#111111] transition-all"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <div className="hidden md:block w-px h-8 bg-black/10" />

          <div className="flex items-center gap-2">
            {coreTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border border-black/10 rounded-full text-[10px] font-black uppercase tracking-wider text-gray-500"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="hidden md:block w-px h-8 bg-black/10" />

          <p className="text-gray-400 font-bold uppercase tracking-[0.25em] text-[10px]">
            3+ Years Building Digital Solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;