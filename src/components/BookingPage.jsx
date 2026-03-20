import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  ChevronRight, 
  Clock, 
  ArrowRight,
  Filter,
  ArrowUpDown
} from 'lucide-react';

const flights = [
  { id: 1, airline: 'Emirates', from: 'DXB', to: 'HND', duration: '11h 45m', price: '₹94,500', time: '10:30 AM - 08:15 PM', type: 'Non-stop' },
  { id: 2, airline: 'Qatar Airways', from: 'DOH', to: 'NRT', duration: '12h 10m', price: '₹88,200', time: '02:00 PM - 10:10 PM', type: '1 Stop' },
  { id: 3, airline: 'Air France', from: 'CDG', to: 'HND', duration: '13h 30m', price: '₹1,12,000', time: '11:45 PM - 09:15 AM', type: 'Non-stop' },
];

const BookingPage = () => {
  const [searchStep, setSearchStep] = useState('search'); // 'search' or 'results'

  return (
    <div className="min-h-screen bg-bg text-text-primary pt-24 pb-12 px-8 md:px-12 flex flex-col items-center">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl mb-12 text-center"
      >
        <span className="font-jost text-[10px] tracking-widest text-gold uppercase mb-3 block font-semibold">Elevate your journey</span>
        <h1 className="font-display font-light text-text-primary text-5xl md:text-7xl">Where to <span className="italic font-light text-forest">next?</span></h1>
      </motion.div>

      {/* Search Bar / Console */}
      <motion.div 
        layout
        className="w-full max-w-6xl bg-card border border-border-default rounded-[32px] p-8 shadow-2xl mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <SearchField icon={<MapPin size={20} className="text-forest" />} label="From" value="London (LHR)" />
          <SearchField icon={<MapPin size={20} className="text-gold" />} label="To" value="Tokyo (HND)" />
          <SearchField icon={<Calendar size={20} className="text-forest/40" />} label="Date" value="July 15, 2025" />
          <div className="flex items-center gap-4">
            <SearchField icon={<Users size={20} className="text-forest/40" />} label="Guests" value="2 Adults" />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSearchStep('results')}
              className="bg-forest hover:bg-forest-dark text-white w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg shadow-forest/10"
            >
              <Search size={24} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {searchStep === 'results' && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-6xl space-y-6"
          >
            {/* Filters Bar */}
            <div className="flex justify-between items-center mb-8 px-2">
              <h2 className="font-display font-light text-text-primary text-2xl">Available Flights <span className="text-text-muted text-lg ml-2">{flights.length} flights found</span></h2>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 font-jost text-[11px] uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors py-2 px-4 border border-border-default rounded-full">
                  <Filter size={14} /> Filter
                </button>
                <button className="flex items-center gap-2 font-jost text-[11px] uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors py-2 px-4 border border-border-default rounded-full">
                  <ArrowUpDown size={14} /> Sort By
                </button>
              </div>
            </div>

            {/* Flight Cards */}
            {flights.map((flight, i) => (
              <FlightCard key={flight.id} flight={flight} delay={i * 0.1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SearchField = ({ icon, label, value }) => (
  <div className="space-y-2 group cursor-pointer">
    <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1 group-hover:text-gold transition-colors">{label}</label>
    <div className="flex items-center gap-4 bg-bg border border-border-default rounded-2xl p-4 group-hover:bg-bg-alt transition-all duration-500">
      {icon}
      <span className="font-jost text-sm text-text-primary">{value}</span>
    </div>
  </div>
);

const FlightCard = ({ flight, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ y: -5, borderColor: 'var(--color-border-emphasis)' }}
    className="bg-card border border-border-default rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 transition-all group"
  >
    <div className="flex items-center gap-6">
      <div className="w-16 h-16 bg-bg border-border-default rounded-2xl flex items-center justify-center border group-hover:border-forest/30 transition-colors">
        <Plane className="text-forest w-8 h-8 rotate-45" />
      </div>
      <div>
        <h4 className="font-display font-normal text-text-primary text-xl mb-1">{flight.airline}</h4>
        <div className="flex items-center gap-2 text-text-muted font-jost text-sm uppercase tracking-widest">
          <Clock size={14} /> {flight.duration}
        </div>
      </div>
    </div>

    <div className="flex items-center gap-12 flex-1 justify-center">
      <div className="text-center">
        <p className="text-3xl font-display font-light text-text-primary">{flight.from}</p>
        <p className="text-[10px] text-text-muted font-jost uppercase tracking-widest">Departure</p>
      </div>
      <div className="flex flex-col items-center gap-2 flex-1 max-w-[120px]">
        <span className="text-[10px] text-text-muted font-jost uppercase tracking-widest">{flight.type}</span>
        <div className="w-full h-[1px] bg-forest/20 relative">
          <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-gold" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-3xl font-display font-light text-text-primary">{flight.to}</p>
        <p className="text-[10px] text-text-muted font-jost uppercase tracking-widest">Arrival</p>
      </div>
    </div>

    <div className="text-right flex flex-col items-end gap-2">
      <p className="text-text-muted font-jost text-xs uppercase tracking-widest">Starting from</p>
      <p className="text-3xl font-display font-medium text-gold">{flight.price}</p>
      <button className="flex items-center gap-2 font-jost text-[11px] uppercase tracking-widest font-bold text-forest hover:text-forest-dark transition-colors group/btn">
        Select Flight <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

export default BookingPage;
