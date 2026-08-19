import React from 'react';
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import StatusBadge from './StatusBadge';

const socials = [
  { icon: Github, href: 'https://github.com/shahzaibkesrani1' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shahzaib-kesrani/' },
  { icon: MessageCircle, href: 'https://wa.me/923282719635' },
  { icon: Instagram, href: 'https://www.instagram.com/shahzaibthewebdev/' },
];

const sitemap = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#project' },
  { name: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
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
    <footer className="bg-[#111111] rounded-t-[50px] md:rounded-t-[70px] pt-28 pb-14 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* Top */}
        <div className="flex flex-col gap-6 pb-16 border-b border-white/[0.06]">
          <StatusBadge variant="dark" />
          <h2 className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            Let's <span className="text-orange-primary italic">Collaborate</span>.
          </h2>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2 space-y-8">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="flex items-center gap-3 w-fit">
              <div className="w-12 h-12 bg-orange-primary rounded-full flex items-center justify-center font-black text-white italic text-lg">
                SK
              </div>
              <span className="text-white font-black tracking-[0.2em] text-xl uppercase">Shahzaib</span>
            </a>
            <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed">
              Based in Pakistan. Operating globally. I design and build functional web
              applications with a focus on clean, high-fidelity user interactions.
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-orange-primary hover:border-orange-primary transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-orange-primary font-mono font-bold text-xs uppercase tracking-[0.25em] mb-8">
              Sitemap
            </h4>
            <ul className="space-y-4 text-gray-300 font-bold text-base">
              {sitemap.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-orange-primary font-mono font-bold text-xs uppercase tracking-[0.25em] mb-8">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-300 font-bold text-base">
              <li>
                <a href="https://wa.me/923282719635" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-primary transition-colors">
                  +92 328 2719635
                </a>
              </li>
              <li>
                <a href="mailto:shahzaibabco@gmail.com" className="hover:text-white transition-colors">
                  shahzaibabco@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shahzaib-kesrani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-sm text-gray-400"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.06] text-gray-600 font-mono text-xs uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Shahzaib Kesrani</span>
          <span>Built with React &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;