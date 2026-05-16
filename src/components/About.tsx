import React from 'react';

export function About() {
  return (
    <section id="about" className="py-24 bg-dark relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] bg-dark-gray border border-white/5 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym culture" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-64 aspect-square bg-brand p-1 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                alt="Detail" 
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-brand font-bold tracking-[0.2em] uppercase text-xs">01 / The Philosophy</span>
            </div>
            
            <h2 className="font-display text-6xl md:text-8xl leading-none uppercase mb-8">
              Forged in <br/> <span className="text-stroke">Iron</span>
            </h2>

            <div className="space-y-6 text-text-muted font-medium text-lg border-l-2 border-white/10 pl-6">
              <p>
                We are not a wellness retreat. We are not a spa. Gym Junkies is a sanctuary 
                for those who demand more from themselves. We believe in chalk, heavy metal, 
                and pushing past the point of comfort.
              </p>
              <p>
                Our facility is equipped with competition-grade gear, but our true strength 
                lies in our community. When you train here, you train with a pack that won't 
                let you fail.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="font-display text-5xl text-brand mb-2">10k+</p>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Square Feet</p>
              </div>
              <div>
                <p className="font-display text-5xl text-brand mb-2">24/7</p>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Access</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
