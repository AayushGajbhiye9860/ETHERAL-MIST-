import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Minus, Plus, ArrowRight, ShieldCheck, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import sidebarBg from '../assets/sidebar-bg.png';

const BookingSidebar = ({ selectedDestination = 'JP' }) => {
  const [step, setStep] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [cabinClass, setCabinClass] = useState('Economy');
  const [activeTab, setActiveTab ] = useState('QUICK'); // 'QUICK' or 'FULL'

  const destinationMap = {
    'JP': 'JP Tokyo',
    'IT': 'IT Amalfi',
    'MV': 'MV Maldives',
    'PE': 'PE Machu Picchu'
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return (
    <div className="relative h-full flex flex-col overflow-hidden bg-dark">
      {/* Background and Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 grayscale-[0.5]"
        style={{
          backgroundImage: `url(${sidebarBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark/95 z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 p-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10" role="tablist">
        {['QUICK', 'FULL VIEW'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={activeTab === tab}
            className={`flex-1 py-3 text-[10px] font-jost uppercase tracking-[0.2em] rounded-lg transition-all duration-500
              ${activeTab === tab ? 'bg-gold text-dark font-bold shadow-lg' : 'text-white/30 hover:text-white/60'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'QUICK' ? (
        <div className="space-y-10">
          {/* Steps indicator */}
          <div className="flex items-center justify-between mb-2" aria-label="Booking steps">
            <Step num={1} label="Dates" active={step === 1} completed={step > 1} />
            <div className="h-[1px] flex-1 bg-white/5 mx-4" />
            <Step num={2} label="Guests" active={step === 2} completed={step > 2} />
          </div>

          <div>
            <p className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-2">STEP 0{step}</p>
            <h3 className="font-display text-white text-3xl">Select your dates</h3>
          </div>

          {/* Calendar Card */}
          <div className="bg-[#141415]/60 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-display text-white text-xl">July 2025</h4>
              <div className="flex gap-2">
                <button 
                  className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={16} className="text-white/40" />
                </button>
                <button 
                  className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors"
                  aria-label="Next month"
                >
                  <ChevronRight size={16} className="text-white/40" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-y-4 text-center">
              {weekDays.map(day => (
                <span key={day} className="font-jost text-[10px] text-white/20 uppercase tracking-widest" aria-hidden="true">{day}</span>
              ))}
              <div className="col-span-2" /> 
              {days.map(day => (
                <button 
                  key={day} 
                  aria-label={`Select July ${day}, 2025`}
                  aria-pressed={[15, 16, 17].includes(day)}
                  className={`w-10 h-10 mx-auto flex items-center justify-center text-sm font-jost rounded-lg transition-all duration-300
                    ${[15, 16, 17].includes(day) ? 'bg-mint text-dark font-medium' : 'text-white/40 hover:bg-white/5'}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Guests selector */}
          <div className="grid grid-cols-2 gap-4">
            <Counter label="ADULTS" value={adults} onChange={setAdults} />
            <Counter label="CHILDREN" value={children} onChange={setChildren} />
          </div>

          <button 
            className="w-full bg-gold hover:bg-white text-dark py-4 rounded-xl font-jost text-[11px] tracking-[0.2em] font-bold uppercase transition-all duration-700 flex items-center justify-center gap-3 group mt-4"
            aria-label="Proceed to passenger details"
          >
            Continue to Passengers
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 px-4">
          <div className="w-20 h-20 bg-mint/10 rounded-full flex items-center justify-center border border-mint/20 mb-4 animate-pulse">
            <Maximize2 size={32} className="text-mint" />
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-3xl text-white">Advanced Booking</h3>
            <p className="font-jost text-sm text-white/40 leading-relaxed">
              Experience our full cinematic booking flow with integrated flight results and premium concierge services.
            </p>
          </div>
          <Link 
            to="/booking"
            className="w-full bg-white/5 hover:bg-gold hover:text-dark text-white/80 py-4 rounded-xl font-jost text-[11px] tracking-[0.2em] font-bold uppercase transition-all duration-500 flex items-center justify-center gap-3 group"
            aria-label="Open full cinematic booking experience"
          >
            Open Full Experience
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}

      {/* Trust Badges */}
      <div className="mt-auto border-t border-white/5 pt-8">
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="flex items-center gap-2 text-[10px] text-white/20 font-jost uppercase tracking-[0.1em]" aria-label="SSL Encrypted">
            <ShieldCheck size={14} className="text-gold/40" aria-hidden="true" />
            256-bit SSL encrypted
          </div>
          <div className="w-[1px] h-3 bg-white/5" />
          <div className="text-[10px] text-white/20 font-jost uppercase tracking-[0.1em]">
            Free cancellation
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

const Step = ({ num, label, active, completed }) => (
  <div className="flex items-center gap-3" aria-current={active ? 'step' : undefined}>
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-medium transition-all duration-500
      ${active ? 'bg-mint text-dark' : completed ? 'bg-gold text-dark' : 'bg-white/5 text-white/20 border border-white/10'}`}>
      {num}
    </div>
    <span className={`font-jost text-[11px] uppercase tracking-widest transition-colors duration-500
      ${active ? 'text-white' : 'text-white/20'}`}>{label}</span>
  </div>
);

const Counter = ({ label, value, onChange }) => (
  <div className="bg-[#141415]/60 backdrop-blur-md rounded-xl p-5 border border-white/10" aria-label={`${label} selector`}>
    <p className="font-jost text-[10px] text-white/20 uppercase tracking-widest mb-4">{label}</p>
    <div className="flex items-center justify-between">
      <button 
        onClick={() => onChange(Math.max(0, value - 1))}
        className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 text-white/40 transition-colors"
        aria-label={`Decrease ${label.toLowerCase()} count`}
      >
        <Minus size={14} />
      </button>
      <span className="font-display text-white text-2xl" aria-live="polite">{value}</span>
      <button 
        onClick={() => onChange(value + 1)}
        className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 text-white/40 transition-colors"
        aria-label={`Increase ${label.toLowerCase()} count`}
      >
        <Plus size={14} />
      </button>
    </div>
  </div>
);

const SummaryRow = ({ label, value, gradient }) => (
  <div className="flex justify-between items-center text-sm">
    <span className="font-jost text-white/30">{label}</span>
    <span className={`font-jost font-medium ${gradient ? 'text-white' : 'text-white/80'}`}>{value}</span>
  </div>
);

export default BookingSidebar;
