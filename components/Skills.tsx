
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Zap, Code2 } from 'lucide-react';

const mainSkills = [
  { name: 'React.js & Next.js', level: '95%', icon: Layers },
  { name: 'JavaScript (ES6+)', level: '92%', icon: Code2 },
  { name: 'Tailwind CSS', level: '98%', icon: Zap },
  { name: 'AI API Integration', level: '88%', icon: Globe },
];

const subSkills = [
  'HTML5 & CSS3', 'Responsive Design', 'Performance Optimization', 'SEO', 
  'REST APIs', 'State Management', 'Git & GitHub', 'Accessibility',
  'UI/UX Design', 'Scalable Development'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-[#111111] rounded-[60px] md:rounded-[80px] mx-4 my-8 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h4 className="text-orange-primary font-black uppercase tracking-[0.4em] text-xs">Technical Arsenal</h4>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
              My <span className="text-orange-primary">Stack</span> & Expertise
            </h2>
          </div>
          <p className="text-gray-400 text-xl font-bold leading-relaxed max-w-md">
            Building intelligent, scalable, and high-performance web experiences powered by clean code and AI innovation. Specializing in React.js, Next.js, and AI-powered features to deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {subSkills.map((s, i) => (
              <span key={i} className="px-5 py-2 rounded-full border border-white/10 text-white/60 font-bold text-sm hover:border-orange-primary hover:text-white transition-all cursor-default">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-[40px] group hover:border-orange-primary transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 bg-orange-primary/20 rounded-2xl flex items-center justify-center text-orange-primary group-hover:bg-orange-primary group-hover:text-white transition-all">
                  <skill.icon size={32} />
                </div>
                <span className="text-3xl font-black text-white/20 group-hover:text-orange-primary/40 transition-colors tracking-tighter">{skill.level}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{skill.name}</h3>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-orange-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
