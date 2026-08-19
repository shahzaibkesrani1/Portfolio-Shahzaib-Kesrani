import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Zap, Code2, ShoppingBag, Server } from 'lucide-react';

const mainSkills = [
  {
    name: 'React.js & Next.js',
    note: 'Primary stack — used in every production build',
    icon: Layers,
  },
  {
    name: 'JavaScript & TypeScript',
    note: 'Core language; TypeScript on every new project',
    icon: Code2,
  },
  {
    name: 'Tailwind CSS & Bootstrap',
    note: 'Default styling approach across all builds',
    icon: Zap,
  },
  {
    name: 'Shopify & WordPress',
    note: 'Custom themes — Liquid, PHP, and Elementor',
    icon: ShoppingBag,
  },
  {
    name: 'Node.js & Express.js',
    note: 'REST APIs and lightweight backend services',
    icon: Server,
  },
  {
    name: 'Firebase & REST APIs',
    note: 'Auth, Firestore, and third-party integrations',
    icon: Globe,
  },
];

const subSkills = [
  'HTML5 & CSS3',
  'Shopify Liquid',
  'Elementor Pro',
  'WooCommerce',
  'Redux Toolkit',
  'Responsive Design',
  'Performance Optimization',
  'REST API Integration',
  'Firebase Auth & Firestore',
  'Git & GitHub',
  'Vercel & Deployment',
  'Figma',
  'SEO',
  'Accessibility',
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 bg-[#111111] rounded-[60px] md:rounded-[80px] mx-4 my-8 relative overflow-hidden"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-primary/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <p className="font-mono text-orange-primary text-xs uppercase tracking-[0.3em]">
              Technical arsenal
            </p>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
              My <span className="text-orange-primary">Stack</span> & Expertise
            </h2>
          </div>
          <p className="text-gray-400 text-xl font-bold leading-relaxed max-w-md">
            Building fast, clean, and maintainable web products — from React & Next.js apps to
            Shopify stores, WordPress sites, and Node.js backends. I pick the right tool for the
            job and deliver code that lasts.
          </p>

          <div className="flex flex-wrap gap-3">
            {subSkills.map((s) => (
              <span
                key={s}
                className="px-5 py-2 rounded-full border border-white/10 text-white/60 font-bold text-sm hover:border-orange-primary hover:text-white transition-all cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl group hover:border-orange-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-orange-primary/15 rounded-2xl flex items-center justify-center text-orange-primary group-hover:bg-orange-primary group-hover:text-white transition-all mb-8">
                <skill.icon size={26} />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{skill.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{skill.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;