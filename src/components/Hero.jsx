import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-end pb-[72px] px-8 md:px-[52px]">
      {/* Background Image with Reveal Animation */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#080E14]/30 to-[#080E14]/72" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#080E14]/55 to-transparent w-full md:w-[75%]" />

      {/* Decorative Brackets */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="absolute top-28 left-8 md:left-[52px] w-12 h-12 border-t border-l border-gold/40 z-20 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="absolute bottom-12 right-8 md:right-[52px] w-12 h-12 border-b border-r border-gold/40 z-20 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 max-w-[800px]">
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
          className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-4"
        >
          Luxury Nature Expeditions
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          className="font-display text-white text-[clamp(52px,7.2vw,90px)] leading-[0.95] mb-6"
        >
          Where the <br /> 
          <span className="italic text-mint font-normal">Wild</span> Whispers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="font-body text-white/72 text-lg md:text-xl max-w-[420px] mb-10 leading-relaxed"
        >
          Venture beyond the ordinary into earth's most pristine, untouched landscapes. Curated journeys for the discerning explorer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-9"
        >
          <Link to="/booking" className="btn-gold group flex items-center justify-center" aria-label="Start your booking process">
            <span className="relative z-10">Begin Your Journey</span>
          </Link>
          <Link 
            to="/story" 
            className="font-jost text-white/50 text-[11px] tracking-btn uppercase hover:text-white transition-colors relative group py-2"
            aria-label="Read our story"
          >
            Our Story
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/20 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="font-jost text-[9px] tracking-[0.3em] text-white/30 uppercase mb-4 transition-colors duration-500 group-hover:text-gold" aria-hidden="true">
          Scroll
        </span>
        <div className="w-[18px] h-[32px] border border-white/20 rounded-full flex justify-center p-1.5 transition-colors duration-500 group-hover:border-gold/50">
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-[1.5px] h-[6px] bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
