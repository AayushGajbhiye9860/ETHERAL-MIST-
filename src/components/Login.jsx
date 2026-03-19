import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Chrome, ArrowRight, Plane } from 'lucide-react';
import loginVideo from '../assets/videos/login-bg.mp4';

const Login = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover scale-105"
        style={{ filter: 'brightness(0.5) contrast(1.1)' }}
      >
        <source src={loginVideo} type="video/mp4" />
      </video>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />

      <div className="relative z-10 w-full max-w-[1200px] px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-white space-y-8"
        >

          <div className="space-y-4">
            <h1 className="font-display text-[clamp(40px,8vw,100px)] leading-[0.9] font-bold uppercase tracking-tight">
              Explore <br />
              <span className="text-white/90">Horizons</span>
            </h1>
            <p className="font-jost text-xl text-white/60 max-w-md leading-relaxed">
              Where Your Dream Destinations Become Reality.
            </p>
            <p className="font-jost text-sm text-white/40 max-w-sm">
              Embark on a journey where every corner of the world is within your reach.
            </p>
          </div>
        </motion.div>

        {/* Login Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[480px] bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-[40px] p-12 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -inset-24 bg-mint/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block font-jost text-[11px] uppercase tracking-widest text-white/50 ml-1">Email Address</label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300">
                    <Mail size={16} className="text-white/20 group-focus-within/input:text-mint" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.08] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="font-jost text-[11px] uppercase tracking-widest text-white/50">Security Key</label>
                  <button className="text-[11px] text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest">Forgot?</button>
                </div>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300">
                    <Lock size={16} className="text-white/20 group-focus-within/input:text-mint" />
                  </div>
                  <input 
                    type="password" 
                    placeholder="**********" 
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.08] transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-jost text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white/90 active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Sign In
            </button>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <span className="relative z-10 bg-transparent px-4 text-[11px] uppercase tracking-widest text-white/20">or connect with</span>
            </div>

            <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 py-4 rounded-2xl font-jost text-sm font-medium transition-all duration-300 flex items-center justify-center gap-3">
              <Chrome size={20} className="text-white" />
              Google Workspace
            </button>

            <p className="text-center font-jost text-sm text-white/40">
              New to Horizons? <button className="text-white hover:text-white/80 transition-colors font-medium border-b border-white/20">Sign Up</button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
