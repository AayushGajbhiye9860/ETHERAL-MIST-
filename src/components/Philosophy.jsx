import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="bg-dark-philosophy py-[80px] px-8 md:px-[52px] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-4">
            Our Philosophy
          </p>
          <h2 className="font-display text-white text-[52px] leading-[1.1] mb-6">
            The Art of <br />
            <span className="italic text-mint">Silence</span>
          </h2>
          <div className="w-12 h-[2px] bg-gold mb-8" />
          
          <div className="space-y-6 max-w-lg mb-12">
            <p className="font-body text-white/75 text-lg leading-relaxed">
              In a world saturated with noise, we curate journeys into silence. Each expedition is meticulously designed to strip away the unnecessary and reconnect you with the raw, untamed beauty of our planet.
            </p>
            <p className="font-body text-white/75 text-lg leading-relaxed">
              Our guides are local storytellers, naturalists, and adventurers who reveal hidden trails, secret vantage points, and moments that no itinerary can capture. This is travel as it was meant to be — intimate, exclusive, and transformative.
            </p>
          </div>

          <div className="w-full h-[1px] bg-gold/30 mb-12" />

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8">
            <StatItem number="12" suffix="+" label="Destinations" />
            <StatItem number="98" suffix="%" label="Return Rate" />
            <StatItem number="8" label="Max Group Size" />
          </div>
        </motion.div>

        {/* Right Column: Photo Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900" 
            alt="Forest path" 
            className="w-full h-full object-cover"
          />
          {/* Subtle frame effect */}
          <div className="absolute inset-0 border border-white/5 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

const StatItem = ({ number, suffix, label }) => (
  <div>
    <div className="flex items-baseline font-body text-gold text-5xl leading-none">
      <span>{number}</span>
      {suffix && <span className="text-[0.6em] ml-1">{suffix}</span>}
    </div>
    <p className="font-jost text-[11px] tracking-nav uppercase text-white/45 mt-3">
      {label}
    </p>
  </div>
);

export default Philosophy;
