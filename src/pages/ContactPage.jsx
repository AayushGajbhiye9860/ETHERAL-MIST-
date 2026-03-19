import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-dark px-8 md:px-[52px]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <p className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-6">Inquiries</p>
            <h1 className="font-display text-white text-[clamp(48px,6vw,90px)] leading-[0.95] mb-8">
              Begin the <br />
              <span className="italic text-mint font-normal">Conversation</span>
            </h1>
            <p className="font-body text-white/60 text-xl max-w-md leading-relaxed mb-16">
              Whether you're planning a private expedition or a corporate retreat, our concierges are ready to assist.
            </p>

            <div className="space-y-10">
              <ContactCard 
                icon={<Mail className="text-gold" size={20} />}
                label="General Inquiries"
                value="hello@etherealmist.co"
                link="mailto:hello@etherealmist.co"
              />
              <ContactCard 
                icon={<Phone className="text-gold" size={20} />}
                label="Direct Line"
                value="+1 (888) 423 9100"
                link="tel:+18884239100"
              />
              <ContactCard 
                icon={<MapPin className="text-gold" size={20} />}
                label="Global Headquarters"
                value="72 Curated Way, London, UK"
              />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full -mr-32 -mt-32 transition-all duration-1000 group-hover:bg-gold/10" />
            
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField label="Name" type="text" placeholder="Your Name" />
                <InputField label="Email" type="email" placeholder="email@address.com" />
              </div>
              <InputField label="Subject" type="text" placeholder="What are you seeking?" />
              <div className="space-y-2">
                <label className="font-jost text-[10px] tracking-eyebrow text-white/40 uppercase">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-white/5 border-b border-white/20 py-4 font-body text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/10 resize-none"
                  placeholder="Tell us about your dream expedition..."
                ></textarea>
              </div>
              <button className="w-full bg-gold hover:bg-white text-dark py-4 rounded-xl font-jost text-[11px] tracking-[0.2em] font-bold uppercase transition-all duration-700 flex items-center justify-center gap-3 group">
                Send Enquiry
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

const ContactCard = ({ icon, label, value, link }) => (
  <div className="flex items-start gap-6">
    <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="font-jost text-[10px] tracking-eyebrow text-white/20 uppercase mb-1">{label}</p>
      {link ? (
        <a href={link} className="font-body text-white text-lg hover:text-gold transition-colors">{value}</a>
      ) : (
        <p className="font-body text-white text-lg">{value}</p>
      )}
    </div>
  </div>
);

const InputField = ({ label, type, placeholder }) => (
  <div className="space-y-2">
    <label className="font-jost text-[10px] tracking-eyebrow text-white/40 uppercase">{label}</label>
    <input 
      type={type} 
      className="w-full bg-transparent border-b border-white/20 py-4 font-body text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/10"
      placeholder={placeholder}
    />
  </div>
);

export default ContactPage;
