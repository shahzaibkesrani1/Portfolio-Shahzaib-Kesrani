
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import travelAgencyImg from '../assets/Travel Agency Landing Page UI.png';
import mockup1Img from '../assets/mockup1.webp';
import mockup2Img from '../assets/mockup2.webp';
import mockup4Img from '../assets/mockup4.webp';
// @ts-ignore
import mockup3Img from '../assets/mockup3.webp';
import coverImg from '../assets/Cover.png';


const projects = [
  { 
    id: 1, 
    title: 'Travel Agency Landing Page', 
    category: 'Landing Page Design', 
    description: 'A modern, conversion-focused landing page for a travel agency featuring beautiful UI/UX design, responsive layout, and optimized performance using React and Tailwind CSS.',
    img: travelAgencyImg,
    tags: ['React', 'Tailwind CSS', 'Responsive Design'],
  },
  { 
    id: 2, 
    title: 'AI-Powered ChatBot Platform', 
    category: 'Web Application', 
    description: 'Boost sales and support with an AI-powered chatbot platform. Built with React and Next.js, featuring real-time messaging, intelligent responses, and seamless user experience for customer support automation.',
    img: mockup1Img,
    tags: ['React', 'Next.js', 'AI Integration'],
  },
  { 
    id: 3, 
    title: 'Solar Energy Portfolio', 
    category: 'Portfolio Website', 
    description: 'A modern portfolio website for a solar energy company, showcasing services and solutions with smooth animations, responsive design, and clean architecture using React and Framer Motion.',
    img: mockup2Img,
    tags: ['React', 'Framer Motion', 'Modern Design'],
  },
  { 
    id: 4, 
    title: 'Positivus - Digital Marketing Platform', 
    category: 'Web Application', 
    description: 'A comprehensive digital marketing platform featuring AI-powered features, intelligent search, and modern UI/UX design. Built with scalable architecture and optimized performance for navigating the digital landscape.',
    img: coverImg,
    tags: ['Next.js', 'AI Integration', 'UI/UX'],
  },
  { 
    id: 5, 
    title: 'AI ChatBot - Customer Support Platform', 
    category: 'Web Application', 
    description: 'Boost sales and support with an AI-powered chatbot platform. Features real-time messaging, intelligent automated responses, and seamless integration. Built with React and modern AI technologies for enhanced customer experience.',
    img: mockup3Img,
    tags: ['React', 'AI Integration', 'Real-time Chat'],
  },
  { 
    id: 6, 
    title: 'Longtail - Pet Memories Platform', 
    category: 'Web Application', 
    description: 'More Years, More Memories - A pet care platform focused on preserving and sharing pet memories. Features include pet profiles, memory albums, and community sharing. Built with React, featuring beautiful design and user-friendly interface.',
    img: mockup4Img,
    tags: ['React', 'Responsive Design', 'Modern UI'],
  }
];

const Portfolio: React.FC = () => {

  return (
    <section id="project" className="relative py-24 md:py-32 bg-white px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-orange-primary font-black uppercase tracking-[0.4em] text-xs">Selected Works</h4>
            <h2 className="text-6xl md:text-[100px] font-black leading-[0.85] tracking-tighter">
              Featured <br /> <span className="text-orange-primary italic">Projects</span>
            </h2>
          </motion.div>
          <motion.a 
            href="https://github.com/shahzaibkesrani1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-[#111111] text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl transition-all"
          >
            View GitHub
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                  {/* Image Container */}
                  <div className="relative object-cover aspect-[4/3] cursor-pointer ">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  </div>
                  
                  {/* Content Container */}
                  <div className="mt-8 px-2 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">{p.title}</h3>
                    <p className="text-orange-primary font-bold text-sm uppercase tracking-widest">{p.category}</p>
                    <p className="text-gray-500 text-base leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Scalable Development Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-4xl mx-auto space-y-8 px-6 bg-gray-50 py-12 md:py-16 rounded-[60px]"
        >
           <h3 className="text-3xl md:text-5xl font-black text-[#111111] tracking-tighter leading-tight">
             "I don't just write code, <br className="hidden md:block" /> I craft digital solutions."
           </h3>
           <p className="text-gray-500  text-lg md:text-xl leading-relaxed">
             My focus is on modular development, reusable components, and optimized performance. I ensure your front-end is not only visually stunning but also lightning-fast and easy to maintain.
           </p>
           <div className="flex justify-center">
             <div className="h-1.5 w-24 bg-orange-primary rounded-full"></div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
