import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { 
    id: 1, 
    number: '127', 
    label: 'EXPEDITIONS LED',
    detail: 'Across 5 continents with zero safety incidents.'
  },
  { 
    id: 2, 
    number: '34', 
    label: 'COUNTRIES EXPLORED',
    detail: 'From the peaks of Patagonia to the jungles of Borneo.'
  },
  { 
    id: 3, 
    number: '98', 
    label: '% RETURN RATE',
    detail: 'Our clients become lifelong explorers and friends.'
  },
  { 
    id: 4, 
    number: '12', 
    label: 'YEARS OF MASTERY',
    detail: 'A decade of crafting bespoke luxury nature experiences.'
  }
];

const Stats = () => {
  return (
    <section className="bg-forest border-t border-b border-border-default/20 py-32 px-8 md:px-[52px] overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group flex flex-col items-center justify-center p-12 text-center transition-colors duration-500 hover:bg-white/5 relative
                ${index !== stats.length - 1 ? 'lg:border-r border-white/10' : ''}
              `}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10" />
              
              <div className="mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="font-display font-light text-white text-[clamp(64px,5vw,84px)] leading-none drop-shadow-2xl">
                  {stat.number}
                </span>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <p className="font-jost text-[11px] tracking-[0.2em] text-white/55 uppercase transition-colors duration-500 group-hover:text-gold">
                  {stat.label}
                </p>
                
                {/* Hidden details revealed on hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: 'auto' }}
                  className="overflow-hidden"
                >
                  <p className="font-body text-[13px] text-white/70 max-w-[200px] leading-relaxed italic">
                    {stat.detail}
                  </p>
                </motion.div>
                
                {/* Visual indicator (small gold line) */}
                <div className="w-8 h-[1px] bg-gold/20 group-hover:w-16 group-hover:bg-gold/50 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
