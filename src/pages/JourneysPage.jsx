import React, { useState, useEffect } from 'react';
import { journeys, JourneyCard } from '../components/Journeys';
import { motion, AnimatePresence } from 'framer-motion';
import SplitText from '../components/SplitText/SplitText';

const categories = ["ALL", "WILDLIFE", "CULTURE", "POLAR", "JUNGLE", "DESERT"];

const JourneysPage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [filteredJourneys, setFilteredJourneys] = useState(journeys);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === "ALL") {
      setFilteredJourneys(journeys);
    } else {
      setFilteredJourneys(journeys.filter(j => j.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-32 min-h-screen bg-bg"
    >
      {/* Header Section */}
      <div className="px-8 md:px-[52px] mb-20">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-6"
          >
            Curated since 1987
          </motion.p>
          <SplitText
            text="Our Expeditions"
            className="font-display font-light text-text-primary text-[clamp(56px,10vw,140px)] leading-[0.85] mb-10"
            delay={35}
            duration={0.9}
            textAlign="left"
            tag="h1"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Traverse the globe's most secluded corners. Each journey is a meticulously crafted masterpiece of exploration and luxury, designed for those who seek the extraordinary.
          </motion.p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-8 md:px-[52px] mb-16 overflow-x-auto no-scrollbar">
        <div className="flex gap-8 border-b border-border-default pb-6 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-jost text-[11px] tracking-btn uppercase transition-all duration-500 relative pb-6 ${
                activeCategory === cat ? "text-text-primary" : "text-text-muted hover:text-text-primary"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-forest"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Journeys Grid */}
      <div className="px-8 md:px-[52px]">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredJourneys.map((journey, index) => {
              // Create a mixed grid pattern
              // Pattern: Large (8 cols), Medium (4 cols), 3 Regular (4 cols each), repeat
              let colSpan = "lg:col-span-4";
              let height = "h-[500px] md:h-[600px]";
              
              if (activeCategory === "ALL") {
                if (index % 5 === 0) {
                  colSpan = "lg:col-span-8";
                } else {
                  colSpan = "lg:col-span-4";
                }
              }

              return (
                <motion.div
                  key={journey.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`${colSpan} ${height}`}
                >
                  <JourneyCard journey={journey} index={index} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="px-8 md:px-[52px] mt-32">
        <div className="relative overflow-hidden bg-forest h-[400px] flex flex-col items-center justify-center text-center p-8 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1800")' }}
          />
          <div className="relative z-10">
            <SplitText
              text="Begin Your Story"
              className="font-display font-light text-white text-[clamp(40px,6vw,80px)] leading-[0.9] mb-8"
              delay={35}
              duration={0.8}
              textAlign="center"
              tag="h2"
            />
            <p className="font-body text-white/80 text-lg mb-12 max-w-md mx-auto">
              Every expedition is private, bespoke, and entirely yours.
            </p>
            <button className="px-12 py-5 border border-white text-white font-jost text-[12px] tracking-btn uppercase hover:bg-white hover:text-forest transition-all duration-500">
              Plan My Journey
            </button>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default JourneysPage;
