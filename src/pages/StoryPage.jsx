import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/StoryStyles.css';
import SplitText from '../components/SplitText/SplitText';

// Assets
import patagoniaWilderness from '../assets/story/patagonia_wilderness.png';
import borneoRainforest from '../assets/story/borneo_rainforest.png';
import icelandGlacier from '../assets/story/iceland_glacier.png';
import modernLuxury from '../assets/story/modern_luxury_expedition.png';
import patagoniaEdge from '../assets/story/patagonia_edge_dest.png';
import borneoDest from '../assets/story/borneo_dest.png';

const StoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: '17+', label: 'ANNUAL EXPEDITIONS', subtext: 'Across 6 continents' },
    { number: '8', label: 'GUESTS PER JOURNEY', subtext: 'Always. No exceptions.' },
    { number: '0', label: 'CARBON FOOTPRINT', subtext: 'Since 2018' },
    { number: '3yr', label: 'WAITLIST', subtext: 'Worth every season' },
  ];

  const chapters = [
    {
      id: "01",
      year: "2009",
      label: "CHAPTER 01",
      title: <>A Question Asked in <span className="italic text-forest font-light">Patagonia</span></>,
      description: "It began with two naturalists and a broken compass in the Aysén Region. They returned with journals full of sketches and one obsession: to share the untouched world with those who could hold it gently.",
      image: patagoniaWilderness
    },
    {
      id: "02",
      year: "2012",
      label: "CHAPTER 02",
      title: <>Eight Guests, <span className="italic text-forest font-light">No Agenda</span></>,
      description: "The inaugural expedition welcomed eight strangers to the Borneo interior. No resort. No guided tour. Only scientists, a riverboat, and forty-two days. Three guests returned the following year. Two became founding advisors.",
      image: borneoRainforest
    },
    {
      id: "03",
      year: "2018",
      label: "CHAPTER 03",
      title: <>Carbon Neutral, <span className="italic text-forest font-light">By Design</span></>,
      description: "Ethereal Mist became one of the first luxury expedition companies to achieve verified carbon neutrality — not through offsets, but through structural redesign. Every vessel, every camp, reimagined from the ground up.",
      image: icelandGlacier
    },
    {
      id: "04",
      year: "2024",
      label: "CHAPTER 04",
      title: <>Seventeen Journeys, <span className="italic text-text-primary font-light">One </span><span className="italic text-forest font-light">Ethos</span></>,
      description: "Today we lead seventeen annual expeditions across six continents. The cap of eight guests has never changed. The waiting list runs three years. And somewhere in a Patagonian valley, two naturalists are still sketching in the rain.",
      image: modernLuxury,
      quote: "We measure success not in bookings, but in the silence our guests carry home."
    }
  ];

  const destinations = [
    { name: "PATAGONIA'S EDGE", image: patagoniaEdge },
    { name: "BORNEO", image: borneoDest },
    { name: "ICELAND'S SILENCE", image: icelandGlacier }, // Reusing glacier as silence dest
  ];

  return (
    <div className="story-container min-h-screen">
      {/* 1. Ethos Hero - Image 5 */}
      <section className="ethos-hero">
        <div className="bg-year">2009</div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="font-jost text-[10px] tracking-[0.3em] text-gold uppercase">OUR STORY</span>
          </div>
          <SplitText
            text="Our Ethos"
            className="font-display font-light text-text-primary text-[clamp(64px,12vw,180px)] leading-[0.8] mb-12"
            delay={35}
            duration={0.9}
            textAlign="left"
            tag="h1"
          />
          <p className="font-body text-text-secondary text-xl max-w-xl leading-relaxed mb-16">
            Founded on the principle that true luxury lies in the profound connection between the explorer and the untouched wild. This is not a travel company. This is a philosophy with a compass.
          </p>
          
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-[1px] h-12 bg-border-default" />
            <span className="font-jost text-[9px] tracking-[0.2em] text-text-muted uppercase">SCROLL TO EXPLORE</span>
          </div>
        </motion.div>
      </section>

      {/* 2. Stats Summary - Image 1 */}
      <section className="stats-summary overflow-hidden">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="stat-item"
          >
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-subtext">{stat.subtext}</span>
          </motion.div>
        ))}
      </section>

      {/* 3. Timeline Part 1 (Ch 1 & 2) - Image 2 */}
      <section className="timeline-section">
        <div className="flex items-center gap-4 mb-24">
          <div className="w-8 h-[1px] bg-gold" />
          <span className="font-jost text-[10px] tracking-[0.3em] text-gold uppercase">THE JOURNEY SO FAR</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40 px-4 md:px-0">
          {[chapters[0], chapters[1]].map((ch, i) => (
            <motion.div 
              key={ch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="chapter-card"
            >
              <div className="chapter-image-container">
                <img src={ch.image} alt={ch.label} className="chapter-image" />
                <div className="chapter-badge">{ch.year}</div>
              </div>
              <div className="flex items-end justify-between border-b border-border-default pb-4">
                <div className="flex flex-col">
                  <span className="chapter-number">{ch.id}</span>
                  <span className="chapter-label">{ch.label}</span>
                </div>
              </div>
              <SplitText
                text={ch.id === "01" ? "A Question Asked in Patagonia" : 
                      ch.id === "02" ? "Eight Guests, No Agenda" :
                      ch.id === "03" ? "Carbon Neutral, By Design" :
                      "Seventeen Journeys, One Ethos"} 
                className="font-display font-normal text-text-primary text-4xl leading-snug mt-6 mb-4"
                delay={25}
                duration={0.7}
                textAlign="left"
                tag="h2"
              />
              <p className="font-body text-text-muted text-lg leading-relaxed">
                {ch.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Destinations - Image 3 */}
      <section className="destinations-section">
        <div className="px-[52px] mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="font-jost text-[10px] tracking-[0.3em] text-gold uppercase">DESTINATIONS</span>
          </div>
        </div>
        
        <div className="dest-scroll no-scrollbar">
          {destinations.map((dest, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="dest-card"
            >
              <img src={dest.image} alt={dest.name} className="dest-image shadow-2xl" />
              <span className="dest-title">{dest.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Timeline Part 2 (Ch 3 & 4) - Image 4 */}
      <section className="timeline-section pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40 px-4 md:px-0">
          {[chapters[2], chapters[3]].map((ch, i) => (
            <motion.div 
              key={ch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="chapter-card"
            >
              <div className="chapter-image-container">
                <img src={ch.image} alt={ch.label} className="chapter-image" />
                <div className="chapter-badge">{ch.year}</div>
              </div>
              <div className="flex items-end justify-between border-b border-border-default pb-4">
                <div className="flex flex-col">
                  <span className="chapter-number">{ch.id}</span>
                  <span className="chapter-label">{ch.label}</span>
                </div>
              </div>
              <SplitText
                text={ch.id === "01" ? "A Question Asked in Patagonia" : 
                      ch.id === "02" ? "Eight Guests, No Agenda" :
                      ch.id === "03" ? "Carbon Neutral, By Design" :
                      "Seventeen Journeys, One Ethos"} 
                className="font-display font-normal text-text-primary text-4xl leading-snug mt-6 mb-4"
                delay={25}
                duration={0.7}
                textAlign="left"
                tag="h2"
              />
              <p className="font-body text-text-muted text-lg leading-relaxed">
                {ch.description}
              </p>
              {ch.quote && (
                <div className="mt-8 pl-6 border-l border-gold">
                  <p className="font-body italic text-text-secondary text-lg">"{ch.quote}"</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer padding */}
      <div className="h-32" />
    </div>
  );
};

export default StoryPage;
