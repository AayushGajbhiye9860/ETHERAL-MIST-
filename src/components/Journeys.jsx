import React from 'react';
import { motion } from 'framer-motion';

const journeys = [
  {
    id: 1,
    title: 'Patagonia, Chile',
    category: 'The Edge of the World',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200',
    gridClass: 'md:col-span-1 md:row-span-2 min-h-[560px]'
  },
  {
    id: 2,
    title: 'Black Beach, Iceland',
    category: 'Volcanic Serenity',
    image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=800',
    gridClass: 'md:col-start-2 md:row-start-1 h-[274px]'
  },
  {
    id: 3,
    title: 'Arashiyama, Kyoto',
    category: 'Eternal Bamboo',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
    gridClass: 'md:col-start-2 md:row-start-2 h-[274px]'
  },
  {
    id: 4,
    title: 'Swiss Alps',
    category: 'Alpine Silence',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900',
    gridClass: 'md:col-span-1 h-[400px]'
  },
  {
    id: 5,
    title: 'Norwegian Fjords',
    category: 'Ancient Waterways',
    image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=900',
    gridClass: 'md:col-span-1 h-[400px]'
  }
];

const DestinationCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    className={`relative group overflow-hidden cursor-pointer ${item.gridClass}`}
  >
    {/* Image with hover zoom */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${item.image})` }}
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
    
    {/* Content */}
    <div className="absolute bottom-10 left-8 z-20">
      <p className="font-jost text-[9px] tracking-[0.2em] text-gold uppercase mb-1">
        {item.category}
      </p>
      <h3 className="font-display text-white text-2xl md:text-3xl">
        {item.title}
      </h3>
    </div>

    {/* Arrow Icon */}
    <div className="absolute bottom-10 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </div>
  </motion.div>
);

const Journeys = () => {
  return (
    <section id="journeys" className="bg-[#111111] py-[80px] px-8 md:px-[52px]">
      <div className="mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-4"
        >
          Curated Experiences
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-white text-[56px] leading-[1.1] mb-6"
        >
          Journeys That <br />
          <span className="italic text-mint">Transform</span>
        </motion.h2>
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-12 h-[2px] bg-gold origin-left"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[64fr_36fr] gap-[12px]">
        {/* Row 1 & 2 */}
        {journeys.slice(0, 3).map((item, index) => (
          <DestinationCard key={item.id} item={item} index={index} />
        ))}
        
        {/* Row 3 - Full Width Wrapper */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-[12px]">
          {journeys.slice(3).map((item, index) => (
            <DestinationCard key={item.id} item={item} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journeys;
