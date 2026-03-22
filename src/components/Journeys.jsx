import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplitText from './SplitText/SplitText';

// Import local premium assets
import serengetiImg from '../assets/journeys/serengeti.png';
import snowLeopardImg from '../assets/journeys/snow_leopard.png';
import kyotoImg from '../assets/journeys/kyoto.png';
import machuPicchuImg from '../assets/journeys/machu_picchu.png';
import galapagosImg from '../assets/journeys/galapagos.png';
import bhutanImg from '../assets/journeys/bhutan.png';
import greenlandImg from '../assets/journeys/greenland.png';
import mekongImg from '../assets/journeys/mekong.png';
import atacamaImg from '../assets/journeys/atacama.png';

const journeys = [
  {
    id: 1,
    title: "The Great Migration Safari",
    location: "SERENGETI, TANZANIA",
    label: "SIGNATURE",
    category: "WILDLIFE",
    price: "18,400",
    image: serengetiImg,
    description: "Witness the world's most spectacular wildlife event as millions of wildebeest traverse the plains."
  },
  {
    id: 2,
    title: "Snow Leopard Quest",
    location: "LADAKH, HIMALAYAS",
    label: "EXPEDITION",
    category: "WILDLIFE",
    price: "14,200",
    image: snowLeopardImg,
    description: "Track the elusive ghost of the mountains in the high-altitude wilderness of Hemis."
  },
  {
    id: 3,
    title: "Ancient Kyoto Immersion",
    location: "KYOTO, JAPAN",
    label: "CULTURAL",
    category: "CULTURE",
    price: "12,600",
    image: kyotoImg,
    description: "A private passage through temple corridors and sake ceremonies, guided by imperial historians."
  },
  {
    id: 4,
    title: "Machu Picchu Explorer",
    location: "ANDES, PERU",
    label: "CULTURAL",
    category: "CULTURE",
    price: "9,800",
    image: machuPicchuImg,
    description: "Discover the lost city of the Incas with private sunrise access and expert archaeologists."
  },
  {
    id: 5,
    title: "Aurora & Ice Floe",
    location: "SVALBARD, ARCTIC",
    label: "POLAR",
    category: "POLAR",
    price: "22,800",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&q=80&w=1200",
    description: "Chase the northern lights across frozen fjords aboard a private ice-class vessel."
  },
  {
    id: 6,
    title: "Antarctic Silence",
    location: "ROSS SEA, ANTARCTICA",
    label: "EXPEDITION",
    category: "POLAR",
    price: "32,500",
    image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&q=80&w=1200",
    description: "Experience the ultimate frontier in total solitude among the great white silence."
  },
  {
    id: 7,
    title: "Deep Amazon Immersion",
    location: "MANAUS, BRAZIL",
    label: "JUNGLE",
    category: "JUNGLE",
    price: "11,200",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=1200",
    description: "Venture beyond the tourist trail into untouched Amazonian territories with ethnobotanists."
  },
  {
    id: 8,
    title: "Borneo Sanctuary",
    location: "SABAH, MALAYSIA",
    label: "JUNGLE",
    category: "JUNGLE",
    price: "10,500",
    image: "https://images.unsplash.com/photo-1549471013-3364d7220b75?auto=format&fit=crop&q=80&w=1200",
    description: "Meet the kings of the canopy in their ancient rainforest home."
  },
  {
    id: 9,
    title: "Wadi Rum by Night",
    location: "WADI RUM, JORDAN",
    label: "DESERT",
    category: "DESERT",
    price: "8,600",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1200",
    description: "Sleep beneath an ocean of stars in the ancient rose-red city, guided by Bedouin elders."
  },
  {
    id: 10,
    title: "Sahara Starscape",
    location: "ERG CHEBBI, MOROCCO",
    label: "DESERT",
    category: "DESERT",
    price: "9,200",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=1200",
    description: "A nomadic journey through the golden dunes to a private tented camp under the Milky Way."
  },
  {
    id: 11,
    title: "Galapagos Evolution",
    location: "SANTA CRUZ, ECUADOR",
    label: "SIGNATURE",
    category: "WILDLIFE",
    price: "15,600",
    image: galapagosImg,
    description: "A yacht-based exploration of the islands that changed our understanding of the world."
  },
  {
    id: 12,
    title: "Bhutanese Spiritual Trail",
    location: "PARO, BHUTAN",
    label: "CULTURAL",
    category: "CULTURE",
    price: "13,800",
    image: bhutanImg,
    description: "Ascend to the Tiger's Nest and find inner peace in the Land of the Thunder Dragon."
  },
  {
    id: 13,
    title: "Greenland's Midnight Sun",
    location: "ILULISSAT, GREENLAND",
    label: "POLAR",
    category: "POLAR",
    price: "19,400",
    image: greenlandImg,
    description: "Sail among skyscraper-sized icebergs under the surreal light of the 24-hour sun."
  },
  {
    id: 14,
    title: "Mekong Delta Odyssey",
    location: "CAN THO, VIETNAM",
    label: "JUNGLE",
    category: "JUNGLE",
    price: "7,800",
    image: mekongImg,
    description: "Navigate the winding waterways and floating markets of Southeast Asia's lifeblood."
  },
  {
    id: 15,
    title: "Atacama Celestial Oasis",
    location: "SAN PEDRO, CHILE",
    label: "DESERT",
    category: "DESERT",
    price: "11,500",
    image: atacamaImg,
    description: "Explore the driest place on Earth, featuring crystal-clear skies and surreal lunar landscapes."
  },
];

const JourneyCard = ({ journey, index }) => (
  <div className={`relative group h-full`}>
    <div className="relative h-full overflow-hidden border border-border-default bg-bg">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        src={journey.image}
        alt={journey.title}
        className="w-full h-full object-cover"
      />

      {/* Static Label (Top Right) */}
      <div className="absolute top-4 right-4 z-20">
        <span className="font-jost text-[9px] font-semibold text-white bg-forest px-3 py-1.5 uppercase tracking-[2px]">
          {journey.label}
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C1A]/62 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 z-30">
        <div className="mb-2">
          <p className="font-jost text-[10px] tracking-eyebrow text-gold-light uppercase">{journey.category}</p>
        </div>

        <h3 className="font-display text-white text-[22px] font-normal mb-1">{journey.title}</h3>
        <p className="font-jost text-[9.5px] uppercase tracking-wider text-white/60 mb-4">{journey.location}</p>

        <p className="font-body text-white/80 text-sm mb-8 line-clamp-2 max-w-[280px]">
          {journey.description}
        </p>

        <div className="flex justify-between items-end border-t border-white/20 pt-6">
          <div className="flex flex-col">
            <span className="font-jost text-[9px] tracking-eyebrow text-white/60 uppercase">starting from</span>
            <span className="font-display text-text-primary bg-bg/90 px-3 py-1 mt-1 font-medium text-lg">${journey.price}</span>
          </div>

          <Link
            to="/booking"
            className="group/btn relative px-6 py-3 overflow-hidden border border-white/40 flex items-center gap-3 hover:bg-forest hover:border-forest transition-all duration-500"
            aria-label={`Book ${journey.title} expedition`}
          >
            <span className="font-jost text-[10px] tracking-btn text-white uppercase relative z-10">Inquire</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white relative z-10">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Journeys = ({ layout = "scroll" }) => {
  if (layout === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {journeys.map((journey, index) => (
          <div key={journey.id} className="h-[500px]">
            <JourneyCard journey={journey} index={index} />
          </div>
        ))}
      </div>
    );
  }

  // Default Scroll Layout (for Home page)
  const scrollJourneys = [...journeys, ...journeys];

  return (
    <section id="journeys" className="bg-bg py-32 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 px-8 md:px-[52px]">
        <div>
          <p className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-6 font-semibold">
            FEATURED EXPEDITIONS
          </p>
          <SplitText
            text="Choose Your Wilderness"
            className="font-display font-light text-text-primary text-[clamp(40px,5.5vw,64px)] leading-[1.1]"
            delay={35}
            duration={0.8}
            textAlign="left"
            tag="h2"
          />
        </div>
        <Link to="/journeys" className="font-jost text-[10px] tracking-btn text-text-muted uppercase hover:text-forest transition-colors mt-8 md:mt-0 flex items-center gap-2" aria-label="View all luxury journeys">
          VIEW ALL JOURNEYS <span>&rarr;</span>
        </Link>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 md:gap-12"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            duration: 60, // Much slower now with 30 cards total (15*2)
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {scrollJourneys.map((journey, index) => (
            <div key={`${journey.id}-${index}`} className="w-[280px] md:w-[380px] shrink-0 h-[480px]">
              <JourneyCard journey={journey} index={index} />
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fading effect at edges */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export { journeys, JourneyCard };
export default Journeys;
