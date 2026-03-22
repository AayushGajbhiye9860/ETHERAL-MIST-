import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplitText from './SplitText/SplitText';

const FOREST_IMAGE = 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800';

const Hero = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* ─── Full-bleed background image ─── */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${FOREST_IMAGE}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.95) saturate(1.0)',
        }}
      />

      {/* ─── Compact white wash ─── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, #ffffff 0%, #ffffff 22%, rgba(255,255,255,0.8) 32%, rgba(255,255,255,0.4) 45%, transparent 62%)',
        }}
      />

      {/* ─── Subtle top fade ─── */}
      <div
        className="absolute top-0 left-0 w-full h-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.30) 0%, transparent 100%)' }}
      />

      {/* ─── Decorative brackets ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="absolute top-28 left-[52px] w-10 h-10 border-t border-l border-gold/50 pointer-events-none z-20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="absolute bottom-12 right-[52px] w-10 h-10 border-b border-r border-gold/40 pointer-events-none z-20"
      />

      {/* ─── LEFT CONTENT ─── */}
      <div className="relative z-30 h-full flex flex-col justify-end pb-[72px] px-[52px] max-w-[480px]">
        <motion.p
          {...fadeUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-4"
        >
          Luxury Nature Expeditions
        </motion.p>

        <div className="mb-6">
            <SplitText
              text="Where the Wild Whispers"
              className="font-display text-black text-[clamp(48px,6vw,82px)] leading-[0.95] font-light"
              delay={35}
              duration={0.8}
              ease="power2.out"
              textAlign="left"
              tag="h1"
            />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="font-body text-black/60 text-lg max-w-[380px] mb-10 leading-relaxed font-light"
        >
          Venture beyond the ordinary into earth's most pristine, untouched landscapes.
          Curated journeys for the discerning explorer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          <Link
            to="/booking"
            className="group relative px-8 py-[14px] border border-black text-black font-jost text-[11px] tracking-btn uppercase overflow-hidden flex items-center justify-center transition-colors hover:text-white"
            aria-label="Start your booking process"
          >
            <span className="relative z-10">Begin Your Journey</span>
            <div className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 -z-0" />
          </Link>

          <Link
            to="/story"
            className="font-jost text-black/50 text-[11px] tracking-btn uppercase hover:text-black transition-colors relative group py-2"
            aria-label="Read our story"
          >
            Our Story
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black/40 transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="font-jost text-[9px] tracking-[0.3em] text-black/40 uppercase mb-3 transition-colors duration-500 group-hover:text-black" aria-hidden="true">
          Scroll
        </span>
        <div className="w-[18px] h-[30px] border border-black/30 rounded-full flex justify-center p-1.5 transition-colors duration-500 group-hover:border-black/70">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1.5px] h-[5px] bg-black rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
