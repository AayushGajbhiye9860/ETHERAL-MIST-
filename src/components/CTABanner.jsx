import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplitText from './SplitText/SplitText';

const CTABanner = () => {
  const MotionLink = motion(Link);
  
  return (
    <section className="bg-forest py-[160px] px-8 md:px-[52px] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center max-w-4xl mx-auto"
      >
        <p className="font-jost text-[12px] tracking-eyebrow text-gold uppercase mb-6">
          Ready?
        </p>
        
        <SplitText
          text="Let's Get Lost"
          className="font-display font-light text-white text-[clamp(40px,8vw,80px)] leading-[1.1] mb-12"
          delay={40}
          duration={0.9}
          textAlign="center"
          tag="h2"
        />
        
        <MotionLink
          to="/booking"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="btn-gold px-[52px] py-[18px] inline-flex items-center justify-center"
          aria-label="Plan your escape and start booking"
        >
          <span className="relative z-10 transition-colors duration-1000">Plan Your Escape</span>
        </MotionLink>
      </motion.div>
    </section>
  );
};

export default CTABanner;
