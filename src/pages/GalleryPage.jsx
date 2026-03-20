import React from 'react';
import DomeGallery from '../components/DomeGallery/DomeGallery';
import { motion } from 'framer-motion';

import atacama from '../components/DomeGallery/assets/atacama.png';
import bhutan from '../components/DomeGallery/assets/bhutan.png';
import borneo_dest from '../components/DomeGallery/assets/borneo_dest.png';
import borneo_rainforest from '../components/DomeGallery/assets/borneo_rainforest.png';
import galapagos from '../components/DomeGallery/assets/galapagos.png';
import greenland from '../components/DomeGallery/assets/greenland.png';
import iceland_glacier from '../components/DomeGallery/assets/iceland_glacier.png';
import kyoto from '../components/DomeGallery/assets/kyoto.png';
import machu_picchu from '../components/DomeGallery/assets/machu_picchu.png';
import mekong from '../components/DomeGallery/assets/mekong.png';
import modern_luxury_expedition from '../components/DomeGallery/assets/modern_luxury_expedition.png';
import patagonia_edge_dest from '../components/DomeGallery/assets/patagonia_edge_dest.png';
import patagonia_wilderness from '../components/DomeGallery/assets/patagonia_wilderness.png';
import serengeti from '../components/DomeGallery/assets/serengeti.png';
import snow_leopard from '../components/DomeGallery/assets/snow_leopard.png';

const UNIQUE_IMAGES = [
  atacama, bhutan, borneo_dest, borneo_rainforest, galapagos, 
  greenland, iceland_glacier, kyoto, machu_picchu, mekong, 
  modern_luxury_expedition, patagonia_edge_dest, patagonia_wilderness, 
  serengeti, snow_leopard
];

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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display font-light text-text-primary text-[clamp(48px,8vw,100px)] leading-[0.9] mb-6"
          >
            The <span className="italic text-forest font-light">Dome Gallery</span>
          </motion.h1>
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
          images={UNIQUE_IMAGES}
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
