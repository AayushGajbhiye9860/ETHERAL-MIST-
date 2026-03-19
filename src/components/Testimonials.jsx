import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "The Patagonia expedition redefined what I thought travel could be. Our guide knew the name of every bird, every lichen — it was like walking through a living library.",
    author: "ISABELLE FONTAINE",
    location: "Patagonia's Edge, 2024",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  },
  {
    id: 2,
    quote: "I have traveled to 67 countries, and nothing compares to the reverence with which Ethereal Mist approaches the natural world. This is not tourism — it is pilgrimage.",
    author: "MARCUS ASHWORTH",
    location: "Borneo Rainforest, 2023",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
  },
  {
    id: 3,
    quote: "Waking under the northern lights in Iceland, a glass of whisky in hand, in absolute silence — that night is stitched permanently into the fabric of who I am.",
    author: "PRIYA NAIR",
    location: "Iceland's Silence, 2024",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
  },
  {
    id: 4,
    quote: "The silence in the Sahara is not an absence of sound, but a presence of something much deeper. Truly life-changing.",
    author: "ELENA ROSSI",
    location: "Sahara Zenith, 2023",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  },
  {
    id: 5,
    quote: "I've never felt so small and yet so connected to the earth. Ethereal Mist understands the soul of the wilderness.",
    author: "DAVID CHEN",
    location: "Borneo Rainforest, 2024",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    id: 6,
    quote: "Every detail was perfect. From the hand-pressed coffee at dawn to the expert tracking of snow leopards.",
    author: "SARAH JENKINS",
    location: "Himalayan Heights, 2024",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
  },
  {
    id: 7,
    quote: "A masterclass in sustainable luxury. We left only footprints and took memories that will last a lifetime.",
    author: "JAVIER MENDEZ",
    location: "Amazon Basin, 2023",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
  },
  {
    id: 8,
    quote: "It's rare to find a team that cares as much about the environment as they do about the guest experience.",
    author: "SOPHIE LAURENT",
    location: "Altai Mountains, 2024",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100"
  }
];

const Testimonials = () => {
  // Double the list for a perfect infinite loop
  const scrollTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-dark py-32 overflow-hidden">
      <div className="text-center mb-20 px-8 md:px-[52px]">
        <motion.p
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-6"
        >
          EXPLORER VOICES
        </motion.p>
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="font-display text-white text-[clamp(40px,5.5vw,64px)] leading-[1.1]"
        >
          Words from the <span className="italic text-mint font-normal">Wild</span>
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div 
          className="flex gap-8"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {scrollTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="bg-[#0D1219] p-12 border border-white/5 flex flex-col justify-between w-[450px] shrink-0"
            >
              <div>
                <div className="text-gold mb-8">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zM24 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                  </svg>
                </div>
                <p className="font-body text-white/55 text-xl leading-relaxed italic mb-12">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-white/5 pt-8">
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover grayscale opacity-50" />
                  <div>
                    <h4 className="font-jost text-[11px] tracking-eyebrow text-white uppercase">{testimonial.author}</h4>
                    <p className="font-body text-[13px] text-white/30">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth fading effect at edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark to-transparent z-10" />
      </div>
    </section>
  );
};

export default Testimonials;
