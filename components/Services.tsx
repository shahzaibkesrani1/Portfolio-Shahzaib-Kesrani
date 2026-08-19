import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Scalable Front-end Development',
    description:
      'Building scalable, high-performance, and user-centric web applications using React.js and Next.js. Crafting clean, maintainable frontend architectures that align business goals with exceptional user experiences.',
  },
  {
    title: 'AI-Powered Web Solutions',
    description:
      'Integrating AI-powered features into modern web applications, including AI-driven UI personalization, intelligent search, chatbot interfaces, and API-based AI integrations to enhance usability and automation.',
  },
  {
    title: 'UI/UX Excellence',
    description:
      'Deep focus on UI/UX design, creating intuitive and visually appealing interfaces that provide exceptional user experiences. Collaborating closely with designers to build seamless, production-ready solutions.',
  },
  {
    title: 'Performance Optimization & SEO',
    description:
      'Optimizing website speed, loading times, and overall performance. Implementing SEO best practices to ensure your web applications rank well and provide the best user experience.',
  },
  {
    title: 'State Management & APIs',
    description:
      'Expertise in REST API integration and advanced state management solutions. Building efficient data flow architectures that ensure smooth user interactions and optimal performance.',
  },
  {
    title: 'Accessibility & Scalability',
    description:
      'Ensuring web applications are accessible to all users and scalable to handle growth. Building solutions that are production-ready and maintainable for long-term success.',
  },
];

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 4000);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setTimeout(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const cards = container.querySelectorAll('.carousel-card');
        const card = cards[currentIndex] as HTMLElement | undefined;
        if (card) {
          const scrollLeft = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
          container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
        }
      }, 50);
    });
    return () => cancelAnimationFrame(rafId);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="services" className="bg-[#111111] rounded-t-[80px] relative -mt-16 pt-32 pb-36 px-6 overflow-hidden">
      <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] bg-orange-primary/[0.08] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-orange-primary text-xs uppercase tracking-[0.3em] mb-4">
              // 06 core services
            </p>
            <h2 className="text-white text-6xl md:text-8xl font-black leading-none">
              My <span className="text-orange-primary">Services</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-lg text-lg font-bold leading-relaxed border-l-2 border-orange-primary/30 pl-8"
          >
            Elevating your digital presence through thoughtful engineering — blending clean
            architecture with exceptional user experience.
          </motion.p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="flex gap-6 md:gap-8">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className={`group relative p-10 min-h-[380px] flex flex-col justify-between border rounded-3xl transition-all duration-500 cursor-pointer carousel-card snap-start min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] ${
                    currentIndex === idx
                      ? 'bg-white/[0.06] border-white/15'
                      : 'bg-transparent border-white/[0.06] hover:bg-white/[0.03]'
                  }`}
                >
                  <span className="font-mono text-xs text-gray-600">
                    {String(idx + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-white text-3xl font-black mb-4 leading-tight">{service.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-12">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-orange-primary w-8' : 'bg-white/20 hover:bg-white/40 w-2.5'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;