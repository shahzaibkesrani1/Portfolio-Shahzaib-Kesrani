
import React from 'react';
import { Star } from 'lucide-react';

const TickerTape: React.FC = () => {
  const items = [
    "Front-end Development",
    "React & Next.js",
    "UI/UX Design",
    "TypeScript",
    "Front-end Development",
    "Responsive Design",
    "Performance Optimization",
    "Component Design"
  ];
  
  return (
    <div className="bg-orange-primary py-10 overflow-hidden relative rotate-[-2.5deg] scale-[1.1] z-10 shadow-[0_30px_60px_rgba(255,140,66,0.3)] my-12">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((text, idx) => (
              <React.Fragment key={idx}>
                <span className="text-white text-5xl md:text-7xl font-black mx-14 flex items-center tracking-tighter uppercase italic">
                  {text}
                </span>
                <Star fill="white" className="w-10 h-10 text-white opacity-40 mx-4" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
