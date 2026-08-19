import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import StatusBadge from './StatusBadge';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#project' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeHref, setActiveHref] = useState('#home');

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  // Header visibility on scroll + active section tracking
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setLastScrollY(currentScrollY);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsVisible(true), 150);

      // Track which section is in view for the active-link underline
      const sections = navLinks.map((l) => l.href.substring(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveHref(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      const headerOffset = 100;
      const offsetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setActiveHref(href);
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-3 md:top-5 left-0 right-0 z-[110] px-4"
      >
        <nav className="max-w-5xl mx-auto bg-[#111111] rounded-full h-[62px] md:h-[68px] flex items-center justify-between pl-4 pr-2 shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-white/[0.06]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-orange-primary rounded-full flex items-center justify-center font-black text-white italic text-base">
              SK
            </div>
            <span className="text-white font-extrabold tracking-[0.15em] text-sm md:text-base uppercase transition-colors group-hover:text-orange-primary">
              Shahzaib
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative px-4 py-2 text-sm font-bold tracking-wide transition-colors"
              >
                <span
                  className={
                    activeHref === link.href
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }
                >
                  {link.name}
                </span>
                {activeHref === link.href && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full bg-orange-primary"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-3 pr-1">
            <StatusBadge variant="dark" className="py-1.5 hidden xl:inline-flex" />
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="bg-orange-primary text-white px-6 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#111111] z-[105] lg:hidden flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white z-[120]"
              aria-label="Close Menu"
            >
              <X size={30} />
            </button>

            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.07 }}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`text-4xl font-black tracking-tight transition-colors ${
                    activeHref === link.href ? 'text-orange-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <StatusBadge variant="dark" />
              </motion.div>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="bg-orange-primary text-white py-4 px-10 rounded-full font-black text-xl mt-2"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;