import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, MapPin, Calendar, Users, Search, ChevronRight, 
  Clock, ArrowRight, Filter, ArrowUpDown, CreditCard, 
  CheckCircle, User, Briefcase, ChevronDown
} from 'lucide-react';

const destinations = [
  "London (LHR)", "Tokyo (HND)", "Dubai (DXB)", "Paris (CDG)", "Maldives (MLE)", "New York (JFK)"
];

const generateMockFlights = (from, to, date) => {
  const airlines = ['Ethereal Airways', 'Emirates', 'Qatar Airways', 'Singapore Airlines'];
  return airlines.map((airline, i) => ({
    id: i + 1,
    airline,
    from: from.split(' ')[0],
    to: to.split(' ')[0],
    duration: `${Math.floor(Math.random() * 8) + 5}h ${Math.floor(Math.random() * 60)}m`,
    price: `₹${(Math.floor(Math.random() * 100) + 50)},000`,
    time: '10:30 AM - 08:15 PM', 
    type: i % 2 === 0 ? 'Non-stop' : '1 Stop'
  }));
};

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [searchData, setSearchData] = useState({
    type: 'round-trip',
    from: 'London (LHR)',
    to: 'Tokyo (HND)',
    departDate: '2025-07-15',
    returnDate: '2025-07-25',
    guests: '2 Adults'
  });
  
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState({ firstName: '', lastName: '', email: '', passport: '' });
  const [paymentDetails, setPaymentDetails] = useState({ card: '', expiry: '', cvc: '' });

  const handleSearch = () => {
    setFlights(generateMockFlights(searchData.from, searchData.to, searchData.departDate));
    setStep(2);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setStep(3);
  };

  const handlePassengerSubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setStep(5);
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary pt-24 pb-12 px-6 md:px-12 flex flex-col items-center">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl mb-12 text-center"
      >
        <span className="font-jost text-[10px] tracking-widest text-gold uppercase mb-3 block font-semibold">Elevate your journey</span>
        <h1 className="font-display font-light text-text-primary text-4xl md:text-6xl">
          {step === 1 && <span>Where to <span className="italic font-light text-forest">next?</span></span>}
          {step === 2 && <span>Select your <span className="italic font-light text-forest">Flight</span></span>}
          {step === 3 && <span>Passenger <span className="italic font-light text-forest">Details</span></span>}
          {step === 4 && <span>Secure <span className="italic font-light text-forest">Checkout</span></span>}
          {step === 5 && <span>Journey <span className="italic font-light text-forest">Confirmed</span></span>}
        </h1>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mb-12 flex justify-between items-center relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border-default -z-10 -translate-y-1/2" />
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center font-jost text-xs transition-colors duration-500
            ${step >= i ? 'bg-forest text-white' : 'bg-card border border-border-default text-text-muted'}
          `}>
            {i}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-5xl"
          >
            <div className="bg-card border border-border-default rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
               {/* Elegant Background pattern */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

               <div className="flex gap-6 mb-8 relative z-10">
                 <button 
                  className={`font-jost text-xs uppercase tracking-widest pb-2 border-b-2 transition-colors ${searchData.type === 'round-trip' ? 'border-gold text-gold' : 'border-transparent text-text-muted hover:text-text-primary'}`}
                  onClick={() => setSearchData({...searchData, type: 'round-trip'})}
                 >Round Trip</button>
                 <button 
                  className={`font-jost text-xs uppercase tracking-widest pb-2 border-b-2 transition-colors ${searchData.type === 'one-way' ? 'border-gold text-gold' : 'border-transparent text-text-muted hover:text-text-primary'}`}
                  onClick={() => setSearchData({...searchData, type: 'one-way'})}
                 >One Way</button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                 <div className="space-y-2 lg:col-span-1">
                   <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">From</label>
                   <select 
                     className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm text-text-primary focus:border-forest/50 focus:outline-none appearance-none cursor-pointer"
                     value={searchData.from}
                     onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                   >
                     {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                   </select>
                 </div>
                 <div className="space-y-2 lg:col-span-1">
                   <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">To</label>
                   <select 
                     className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm text-text-primary focus:border-forest/50 focus:outline-none appearance-none cursor-pointer"
                     value={searchData.to}
                     onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                   >
                     {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                   </select>
                 </div>
                 <div className="space-y-2 lg:col-span-1">
                   <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">Departure</label>
                   <input 
                     type="date"
                     className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm text-text-primary focus:border-forest/50 focus:outline-none cursor-pointer"
                     style={{ colorScheme: 'dark' }}
                     value={searchData.departDate}
                     onChange={(e) => setSearchData({...searchData, departDate: e.target.value})}
                   />
                 </div>
                 <div className={`space-y-2 lg:col-span-1 transition-opacity ${searchData.type === 'one-way' ? 'opacity-30 pointer-events-none' : ''}`}>
                   <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">Return</label>
                   <input 
                     type="date"
                     className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm text-text-primary focus:border-forest/50 focus:outline-none cursor-pointer"
                     style={{ colorScheme: 'dark' }}
                     value={searchData.returnDate}
                     onChange={(e) => setSearchData({...searchData, returnDate: e.target.value})}
                   />
                 </div>
                 <div className="flex items-end lg:col-span-1">
                   <motion.button 
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     onClick={handleSearch}
                     className="bg-forest hover:bg-forest-light text-white w-full h-[58px] rounded-2xl flex items-center justify-center gap-2 transition-all duration-500 shadow-lg shadow-forest/10 font-jost uppercase tracking-widest text-xs font-semibold"
                   >
                     Search <Search size={16} />
                   </motion.button>
                 </div>
               </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-5xl"
          >
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={() => setStep(1)}
                className="text-text-muted hover:text-gold transition-colors font-jost text-sm flex items-center gap-2"
              >
                <ChevronRight className="rotate-180" size={16} /> Back to Search
              </button>
              <div className="font-jost text-sm text-text-muted">
                {searchData.from} <ArrowRight className="inline mx-2" size={14}/> {searchData.to}
              </div>
            </div>

            <div className="space-y-6">
              {flights.map((flight, i) => (
                <motion.div 
                  key={flight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border-default rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-gold/50 transition-colors group cursor-pointer"
                  onClick={() => handleSelectFlight(flight)}
                >
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="w-16 h-16 bg-bg border border-border-default rounded-2xl flex items-center justify-center group-hover:border-gold/30 transition-colors shrink-0">
                      <Plane className="text-forest w-8 h-8 rotate-45" />
                    </div>
                    <div>
                      <h4 className="font-display text-text-primary text-xl mb-1">{flight.airline}</h4>
                      <div className="flex items-center gap-2 text-text-muted font-jost text-xs uppercase tracking-widest">
                        <Clock size={12} /> {flight.duration} &bull; {flight.type}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 md:gap-12 w-full md:flex-1">
                    <div className="text-center">
                      <p className="text-2xl font-display font-light text-text-primary">10:30</p>
                      <p className="text-[10px] text-text-muted font-jost uppercase tracking-widest">{flight.from}</p>
                    </div>
                    <div className="flex-1 max-w-[100px] flex items-center relative">
                       <div className="w-full h-[1px] bg-border-emphasis" />
                       <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold w-4 h-4 rotate-90" />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-display font-light text-text-primary">22:15</p>
                      <p className="text-[10px] text-text-muted font-jost uppercase tracking-widest">{flight.to}</p>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t border-border-default md:border-t-0">
                    <p className="text-2xl font-display font-medium text-gold">{flight.price}</p>
                    <button className="flex items-center gap-2 font-jost text-[10px] uppercase tracking-widest font-bold text-forest group-hover:text-gold transition-colors">
                      Select <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-3xl"
          >
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={() => setStep(2)}
                className="text-text-muted hover:text-gold transition-colors font-jost text-sm flex items-center gap-2"
              >
                <ChevronRight className="rotate-180" size={16} /> Back to Flights
              </button>
            </div>

            <form onSubmit={handlePassengerSubmit} className="bg-card border border-border-default rounded-[32px] p-8 shadow-2xl space-y-8">
              <h3 className="font-display text-2xl mb-6">Primary Passenger</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">First Name</label>
                  <input required className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm focus:border-forest/50 focus:outline-none" 
                    value={passengerDetails.firstName} onChange={e => setPassengerDetails({...passengerDetails, firstName: e.target.value})} placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">Last Name</label>
                  <input required className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm focus:border-forest/50 focus:outline-none" 
                    value={passengerDetails.lastName} onChange={e => setPassengerDetails({...passengerDetails, lastName: e.target.value})} placeholder="Doe" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">Email Address</label>
                  <input required type="email" className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm focus:border-forest/50 focus:outline-none" 
                    value={passengerDetails.email} onChange={e => setPassengerDetails({...passengerDetails, email: e.target.value})} placeholder="john@example.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">Passport Number</label>
                  <input required className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm focus:border-forest/50 focus:outline-none" 
                    value={passengerDetails.passport} onChange={e => setPassengerDetails({...passengerDetails, passport: e.target.value})} placeholder="A1234567" />
                </div>
              </div>

              <div className="pt-6 border-t border-border-default flex justify-end">
                <button type="submit" className="bg-forest hover:bg-forest-light text-white px-8 py-4 rounded-2xl transition-all duration-300 font-jost uppercase tracking-widest text-xs font-semibold flex items-center gap-2 shadow-lg shadow-forest/20">
                  Continue to Payment <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 space-y-6">
              <button 
                onClick={() => setStep(3)}
                className="text-text-muted hover:text-gold transition-colors font-jost text-sm flex items-center gap-2 mb-2"
              >
                <ChevronRight className="rotate-180" size={16} /> Back to Details
              </button>

              <form onSubmit={handlePaymentSubmit} className="bg-card border border-border-default rounded-[32px] p-8 shadow-2xl space-y-8">
                <h3 className="font-display text-2xl mb-6">Payment Method</h3>
                
                <div className="space-y-2">
                  <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">Card Number</label>
                  <div className="relative">
                    <input required className="w-full bg-bg border border-border-default rounded-2xl p-4 pl-12 font-jost text-sm focus:border-forest/50 focus:outline-none font-mono" 
                      placeholder="0000 0000 0000 0000" />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">Expiry Date</label>
                    <input required className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm focus:border-forest/50 focus:outline-none" 
                      placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-jost text-[10px] uppercase tracking-[0.2em] text-text-muted ml-1">CVC</label>
                    <input required type="password" maxLength={4} className="w-full bg-bg border border-border-default rounded-2xl p-4 font-jost text-sm focus:border-forest/50 focus:outline-none" 
                      placeholder="123" />
                  </div>
                </div>

                <div className="pt-6 border-t border-border-default">
                  <button type="submit" className="w-full bg-gold hover:opacity-80 text-black px-8 py-4 rounded-2xl transition-all duration-300 font-jost uppercase tracking-widest text-xs font-bold flex justify-center items-center gap-2 shadow-lg shadow-gold/20">
                    Pay {selectedFlight?.price}
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border-default rounded-[32px] p-8 shadow-2xl sticky top-32">
                <h3 className="font-display text-xl mb-6">Booking Summary</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-text-muted font-jost uppercase tracking-widest mb-1">Flight</p>
                    <p className="font-display text-xl">{searchData.from}</p>
                    <p className="font-display text-xl">{searchData.to}</p>
                    <p className="text-sm font-jost text-text-muted mt-1">{searchData.departDate} • {selectedFlight?.airline}</p>
                  </div>
                  <div className="border-t border-border-default pt-6">
                    <p className="text-[10px] text-text-muted font-jost uppercase tracking-widest mb-1">Passenger</p>
                    <p className="font-jost">{passengerDetails.firstName} {passengerDetails.lastName}</p>
                    <p className="text-sm font-jost text-text-muted">{passengerDetails.email}</p>
                  </div>
                  <div className="border-t border-border-default pt-6 flex justify-between items-center">
                    <span className="font-jost uppercase tracking-widest text-xs">Total</span>
                    <span className="font-display text-2xl text-gold">{selectedFlight?.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div 
            key="step5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl text-center bg-card border border-border-default rounded-[32px] p-12 shadow-2xl"
          >
            <div className="w-24 h-24 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
              <div className="absolute inset-0 border-2 border-forest rounded-full animate-ping opacity-20" />
              <CheckCircle className="text-forest w-12 h-12" />
            </div>
            <h2 className="font-display text-4xl mb-4 text-gold">Booking Confirmed</h2>
            <p className="font-jost text-text-muted mb-8 text-lg">Your journey to {searchData.to} awaits. A confirmation email has been sent to {passengerDetails.email}.</p>
            
            <div className="bg-bg border border-border-default rounded-2xl p-6 flex justify-between items-center text-left mb-8">
              <div>
                <p className="text-[10px] text-text-muted font-jost uppercase tracking-widest mb-1">Booking Reference</p>
                <p className="font-mono text-2xl text-text-primary tracking-widest">EM-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
              </div>
              <Plane className="text-forest/30 w-10 h-10 p-2 bg-forest/5 rounded-full" />
            </div>

            <button 
              onClick={() => {
                setStep(1);
                setPassengerDetails({ firstName: '', lastName: '', email: '', passport: '' });
                setPaymentDetails({ card: '', expiry: '', cvc: '' });
                setSelectedFlight(null);
              }}
              className="text-forest hover:text-gold font-jost text-sm uppercase tracking-widest font-semibold transition-colors flex items-center gap-2 justify-center w-full mt-4"
            >
              Book Another Flight <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingPage;
