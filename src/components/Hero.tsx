import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-brand" />
            <span className="font-mono text-brand font-bold tracking-widest uppercase text-sm">No Excuses</span>
          </div>
          
          <h1 className="font-display text-[15vw] leading-[0.8] tracking-tighter uppercase mb-6 mix-blend-lighten text-white">
            Push Your <br />
            <span className="text-stroke-brand">Limits</span>
          </h1>

          <p className="max-w-md text-text-muted text-lg font-medium mb-10 border-l-2 border-brand/50 pl-4">
            Experience raw power and relentless conditioning. Join the elite and become
            the strongest version of yourself.
          </p>

          <a href="#join" className="skew-btn bg-brand text-dark px-10 py-5 group flex items-center gap-4 hover:shadow-[0_0_30px_rgba(225,255,1,0.3)]">
            <span className="font-display uppercase tracking-widest text-2xl mt-1">Start Training</span>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <p className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Est. 2024 / Gym Junkies
        </p>
      </div>
    </section>
  );
}
