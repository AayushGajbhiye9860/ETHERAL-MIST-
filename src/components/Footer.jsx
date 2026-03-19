import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark pt-[48px] pb-[32px] px-8 md:px-[52px]">
      {/* Horizontal Rule */}
      <div className="w-full h-[1px] bg-white/10 mb-12" />
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 border border-gold rounded-full flex items-center justify-center overflow-hidden">
            <div className="absolute w-[140%] h-[1px] bg-gold rotate-45 transform"></div>
          </div>
          <span className="font-jost font-light text-[12px] tracking-[0.18em] uppercase text-white">
            Ethereal Mist
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <FooterLink label="Privacy" />
          <FooterLink label="Terms" />
          <FooterLink label="Sustainability" />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
            <Twitter size={20} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center mt-12">
        <p className="font-jost text-[11px] tracking-nav text-white/25 uppercase">
          © 2025 Ethereal Mist. All journeys reserved.
        </p>
      </div>
    </footer>
  );
};

const FooterLink = ({ label }) => (
  <a href="#" className="font-jost text-[11px] tracking-nav uppercase text-white/40 hover:text-white/80 transition-colors duration-300">
    {label}
  </a>
);

export default Footer;
