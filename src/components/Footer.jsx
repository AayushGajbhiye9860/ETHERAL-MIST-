import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 px-8 md:px-[52px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
        
        {/* Brand and Socials */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center p-1.5">
              <div className="w-full h-full rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-1 h-1 bg-gold rounded-full" />
              </div>
            </div>
            <span className="font-display text-white text-xl tracking-widest uppercase">
              Ethereal Mist
            </span>
          </div>
          
          <p className="font-body text-white/45 text-lg leading-relaxed mb-10 max-w-sm">
            Curating the world's most extraordinary natural encounters for those who seek the profound over the predictable.
          </p>
          
          <div className="flex gap-4">
            <SocialIcon icon={<Twitter size={16} />} label="Follow us on Twitter" />
            <SocialIcon icon={<Linkedin size={16} />} label="Connect on LinkedIn" />
            <SocialIcon icon={<Instagram size={16} />} label="Follow us on Instagram" />
            <SocialIcon icon={<Youtube size={16} />} label="Subscribe on Youtube" />
          </div>
        </div>

        {/* Expeditions */}
        <div className="lg:col-span-2 lg:col-start-6">
          <h4 className="font-jost text-[11px] tracking-eyebrow text-gold uppercase mb-8">Expeditions</h4>
          <ul className="flex flex-col gap-4">
            <FooterLink label="Patagonia's Edge" to="/journeys" />
            <FooterLink label="Borneo Rainforest" to="/journeys" />
            <FooterLink label="Iceland's Silence" to="/journeys" />
            <FooterLink label="Sahara Nights" to="/journeys" />
            <FooterLink label="All Journeys" to="/journeys" />
          </ul>
        </div>

        {/* Company */}
        <div className="lg:col-span-2">
          <h4 className="font-jost text-[11px] tracking-eyebrow text-gold uppercase mb-8">Company</h4>
          <ul className="flex flex-col gap-4">
            <FooterLink label="Our Story" to="/story" />
            <FooterLink label="The Guides" to="/story" />
            <FooterLink label="Sustainability" to="/story" />
            <FooterLink label="Press" to="/story" />
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="font-jost text-[11px] tracking-eyebrow text-gold uppercase mb-8">Contact</h4>
          <ul className="flex flex-col gap-4">
            <FooterLink label="Private Enquiries" to="/contact" />
            <FooterLink label="Corporate Retreats" to="/contact" />
            <li>
              <a href="mailto:hello@etherealmist.co" className="font-body text-white/45 text-lg hover:text-gold transition-colors duration-500">
                hello@etherealmist.co
              </a>
            </li>
            <li>
              <a href="tel:+18884239100" className="font-body text-white/45 text-lg hover:text-gold transition-colors duration-500">
                +1 (888) 423 9100
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-jost text-[11px] tracking-nav text-white/25 uppercase">
          © 2025 Ethereal Mist. All rights reserved.
        </p>
        
        <p className="font-serif italic text-white/35 text-sm tracking-widest">
          Where the Wild Whispers
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="font-jost text-[11px] tracking-nav text-white/25 uppercase hover:text-white/60 transition-colors">Privacy</a>
          <a href="#" className="font-jost text-[11px] tracking-nav text-white/25 uppercase hover:text-white/60 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, label }) => (
  <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-500" aria-label={label}>
    {icon}
  </a>
);

const FooterLink = ({ label, to = "#" }) => (
  <li>
    <Link to={to} className="font-body text-white/45 text-lg hover:text-gold transition-colors duration-500">
      {label}
    </Link>
  </li>
);

export default Footer;
