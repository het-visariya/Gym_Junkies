import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const TRAINERS = [
  {
    name: "Marcus Cole",
    specialty: "Head Coach / Strength",
    img: "https://images.unsplash.com/photo-1563122870-6b0b48a0af09?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    specialty: "Olympic Weightlifting",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "David 'Tank' Barnes",
    specialty: "Metcon & Endurance",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-dark border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="font-mono text-brand font-bold tracking-[0.2em] uppercase text-xs">03 / The Vanguard</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase">
            Meet the <span className="text-stroke">Elite</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, idx) => (
            <div key={idx} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-dark-gray border border-white/10 mb-4">
                <img 
                  src={trainer.img} 
                  alt={trainer.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-brand/90 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <a href={`https://instagram.com/${trainer.name.split(' ')[0].toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={`https://twitter.com/${trainer.name.split(' ')[0].toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col border-l-2 border-brand pl-4">
                <h3 className="font-display text-2xl uppercase tracking-wider">{trainer.name}</h3>
                <p className="font-mono text-xs text-text-muted uppercase tracking-widest">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
