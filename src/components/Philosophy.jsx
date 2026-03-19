import React from 'react';
import { motion } from 'framer-motion';
import BookingSidebar from './BookingSidebar';

const journeyCards = [
  { id: 'JP', city: 'Tokyo', price: '₹82,000', active: true },
  { id: 'IT', city: 'Amalfi', price: '₹1,14,000', active: false },
  { id: 'MV', city: 'Maldives', price: '₹68,000', active: false },
  { id: 'PE', city: 'Machu Picchu', price: '₹96,000', active: false },
];

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
      </svg>
    ),
    title: "INTIMATE SCALE",
    description: "Max 8 guests per expedition, always."
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 12L12 22L22 12L12 2Z" />
      </svg>
    ),
    title: "ZERO TRACE",
    description: "Carbon-neutral operations since 2018."
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" />
      </svg>
    ),
    title: "EXPERT GUIDES",
    description: "Naturalists, scientists & storytellers."
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
    title: "BESPOKE DESIGN",
    description: "Every journey tailored to your vision."
  }
];

const Philosophy = () => {
  const [selectedDestination, setSelectedDestination] = React.useState('JP');

  return (
    <section id="philosophy" className="bg-[#0A0A0B] min-h-screen flex flex-col lg:flex-row relative">
      {/* Left Content Area */}
      <div className="flex-1 py-20 px-8 md:px-[52px] lg:pr-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gold" />
            <p className="font-jost text-[10px] tracking-eyebrow text-gold uppercase">
              BOOK YOUR JOURNEY
            </p>
          </div>
          
          <h2 className="font-display text-white text-[clamp(44px,7vw,100px)] leading-[1] mb-12">
            Travel as an <br />
            <span className="italic text-mint font-normal">Art Form</span>
          </h2>
          
          <div className="max-w-xl space-y-6 mb-20 text-white/35 font-body text-lg leading-relaxed">
            <p>
              We believe the most transformative journeys are not found on itineraries — they are felt in the silent spaces between destinations.
            </p>
          </div>

          {/* Journey Selector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24" role="radiogroup" aria-label="Select destination">
            {journeyCards.map((card) => (
              <div 
                key={card.id}
                role="radio"
                aria-checked={selectedDestination === card.id}
                tabIndex={0}
                onClick={() => setSelectedDestination(card.id)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedDestination(card.id)}
                className={`p-6 rounded-xl border transition-all duration-700 cursor-pointer group
                  ${selectedDestination === card.id 
                    ? 'bg-mint/10 border-mint/30 shadow-[0_0_30px_rgba(45,212,191,0.1)]' 
                    : 'bg-[#111112] border-white/5 hover:border-white/20'}`}
                aria-label={`Select ${card.city} destination`}
              >
                <h4 className={`text-2xl font-display mb-1 transition-colors ${selectedDestination === card.id ? 'text-white' : 'text-white/40'}`}>
                  {card.id}
                </h4>
                <p className={`text-sm font-jost uppercase tracking-widest mb-4 ${selectedDestination === card.id ? 'text-mint' : 'text-white/20'}`}>
                  {card.city}
                </p>
                <p className={`text-[10px] font-jost uppercase tracking-widest ${selectedDestination === card.id ? 'text-white/60' : 'text-white/10'}`}>
                  From {card.price}
                </p>
              </div>
            ))}
          </div>

          {/* Features Grid at Bottom Left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="flex flex-col gap-4">
                <div className="text-gold/60">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-white/25 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Sidebar Area */}
      <div className="w-full lg:w-[450px] shrink-0">
        <div className="sticky top-0 h-screen">
          <BookingSidebar selectedDestination={selectedDestination} />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
