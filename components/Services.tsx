
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { 
    title: 'Scalable Front-end Development', 
    description: 'Building scalable, high-performance, and user-centric web applications using React.js and Next.js. Crafting clean, maintainable frontend architectures that align business goals with exceptional user experiences.',
    active: true 
  },
  { 
    title: 'AI-Powered Web Solutions', 
    description: 'Integrating AI-powered features into modern web applications, including AI-driven UI personalization, intelligent search, chatbot interfaces, and API-based AI integrations to enhance usability and automation.',
    active: false 
  },
  { 
    title: 'UI/UX Excellence', 
    description: 'Deep focus on UI/UX design, creating intuitive and visually appealing interfaces that provide exceptional user experiences. Collaborating closely with designers to build seamless, production-ready solutions.',
    active: false 
  },
  { 
    title: 'Performance Optimization & SEO', 
    description: 'Optimizing website speed, loading times, and overall performance. Implementing SEO best practices to ensure your web applications rank well and provide the best user experience.',
    active: false 
  },
  { 
    title: 'State Management & APIs', 
    description: 'Expertise in REST APIs integration and advanced state management solutions. Building efficient data flow architectures that ensure smooth user interactions and optimal performance.',
    active: false 
  },
  { 
    title: 'Accessibility & Scalability', 
    description: 'Ensuring web applications are accessible to all users and scalable to handle growth. Building solutions that are production-ready and maintainable for long-term success.',
    active: false 
  },
];

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 4000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Scroll to current index
  useEffect(() => {
    const scrollToIndex = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cards = container.querySelectorAll('.carousel-card');
        if (cards.length > 0 && cards[currentIndex]) {
          const card = cards[currentIndex] as HTMLElement;
          const scrollLeft = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
          
          container.scrollTo({
            left: Math.max(0, scrollLeft),
            behavior: 'smooth'
          });
        }
      }
    };

    // Use requestAnimationFrame for better scroll handling
    const rafId = requestAnimationFrame(() => {
      setTimeout(scrollToIndex, 50);
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
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-orange-primary/30 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-6xl md:text-8xl font-black leading-none">
              My <span className="text-orange-primary">Services</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-lg text-lg font-bold leading-relaxed border-l-2 border-orange-primary/30 pl-8"
          >
            Elevating your digital presence through thoughtful design. We blend aesthetics with functionality to deliver world-class products.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="flex gap-8 md:gap-10">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  className={`group relative overflow-hidden p-10 h-auto min-h-[400px] flex flex-col justify-between border rounded-2xl transition-all duration-700 cursor-pointer carousel-card snap-start min-w-full md:min-w-[calc(50%-20px)] lg:min-w-[calc(33.333%-27px)] ${
                    currentIndex === idx ? 'bg-white/10 border-white/20 ring-1 ring-white/10' : 'bg-transparent border-white/5 hover:bg-white/5'
                  }`}
                >
                  <div className="flex justify-between items-start z-10 relative mb-6">
                    <h3 className="text-white text-4xl font-black max-w-[250px]">{service.title}</h3>
                   
                  </div>

                  {/* Description Area */}
                  <div className="relative w-full mt-6">
                    <p className="text-gray-300 text-lg  leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-3 rounded-full transition-all ${
                  currentIndex === idx 
                    ? 'bg-orange-primary w-8' 
                    : 'bg-white/20 hover:bg-white/40 w-3'
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
