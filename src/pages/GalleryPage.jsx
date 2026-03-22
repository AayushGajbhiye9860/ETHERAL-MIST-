import React from 'react';
import DomeGallery from '../components/DomeGallery/DomeGallery';
import { motion } from 'framer-motion';
import SplitText from '../components/SplitText/SplitText';

const GalleryPage = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 min-h-screen bg-bg-alt overflow-hidden"
    >
      <div className="px-8 md:px-[52px] mb-12">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-6"
          >
            Visual Journey
          </motion.p>
          <SplitText
            text="The Dome Gallery"
            className="font-display font-light text-text-primary text-[clamp(48px,8vw,100px)] leading-[0.9] mb-6"
            delay={35}
            duration={0.9}
            textAlign="left"
            tag="h1"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-text-muted text-lg max-w-2xl"
          >
            Immerse yourself in our collection of curated captures. Every tile features a unique moment from our expeditions. Drag to rotate the dome and discover more.
          </motion.p>
        </div>
      </div>

      <div className="h-[70vh] w-full relative">
        <DomeGallery 
          grayscale={false} 
          overlayBlurColor="#f2f5f0"
          openedImageWidth="400px"
          openedImageHeight="550px"
        />
      </div>

      <div className="h-32" />
    </motion.main>
  );
};

export default GalleryPage;
