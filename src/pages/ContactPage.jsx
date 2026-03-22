import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import SplitText from '../components/SplitText/SplitText';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-bg-alt px-8 md:px-[52px]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <p className="font-jost text-[10px] tracking-eyebrow text-gold uppercase mb-6">Inquiries</p>
            <SplitText
              text="Begin the Conversation"
              className="font-display font-light text-text-primary text-[clamp(48px,6vw,90px)] leading-[0.95] mb-8"
              delay={35}
              duration={0.9}
              textAlign="left"
              tag="h1"
            />
            <p className="font-body text-text-muted text-xl max-w-md leading-relaxed mb-16">
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

          <div className="bg-card backdrop-blur-xl border border-border-default p-10 md:p-16 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-forest/5 blur-[120px] rounded-full -mr-32 -mt-32 transition-all duration-1000 group-hover:bg-forest/10" />
            
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField label="Name" type="text" placeholder="Your Name" />
                <InputField label="Email" type="email" placeholder="email@address.com" />
              </div>
              <InputField label="Subject" type="text" placeholder="What are you seeking?" />
              <div className="space-y-2">
                <label className="font-jost text-[10px] tracking-eyebrow text-text-muted uppercase">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-bg border-b border-border-default py-4 font-body text-text-primary focus:outline-none focus:border-forest transition-colors placeholder:text-text-muted/50 resize-none"
                  placeholder="Tell us about your dream expedition..."
                ></textarea>
              </div>
              <button className="w-full bg-forest hover:bg-forest-dark text-white py-4 rounded-xl font-jost text-[11px] tracking-[0.2em] font-bold uppercase transition-all duration-700 flex items-center justify-center gap-3 group">
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
    <div className="w-12 h-12 border border-border-default rounded-full flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="font-jost text-[10px] tracking-eyebrow text-text-muted uppercase mb-1">{label}</p>
      {link ? (
        <a href={link} className="font-body text-text-primary text-lg hover:text-forest transition-colors">{value}</a>
      ) : (
        <p className="font-body text-text-primary text-lg">{value}</p>
      )}
    </div>
  </div>
);

const InputField = ({ label, type, placeholder }) => (
  <div className="space-y-2">
    <label className="font-jost text-[10px] tracking-eyebrow text-text-muted uppercase">{label}</label>
    <input 
      type={type} 
      className="w-full bg-transparent border-b border-border-default py-4 font-body text-text-primary focus:outline-none focus:border-forest transition-colors placeholder:text-text-muted/50"
      placeholder={placeholder}
    />
  </div>
);

export default ContactPage;
