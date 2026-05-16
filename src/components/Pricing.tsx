import React from 'react';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: "Rookie",
    price: "49",
    desc: "Access to open gym and basic equipment.",
    features: ["24/7 Gym Access", "Basic Equipment", "Locker Room", "1 Intro Session"]
  },
  {
    name: "Junkie",
    price: "99",
    desc: "Full access to facility and all group classes.",
    features: ["Everything in Rookie", "Unlimited Classes", "Recovery Zone", "Guest Passes"],
    popular: true
  },
  {
    name: "Elite",
    price: "189",
    desc: "The ultimate package with personal coaching.",
    features: ["Everything in Junkie", "2 PT Sessions / Month", "Nutrition Plan", "Competition Prep"]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-brand font-bold tracking-[0.2em] uppercase text-xs">04 / Memberships</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase max-w-2xl">
            Commit to <span className="text-stroke">Greatness</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative border ${plan.popular ? 'border-brand bg-dark md:-mt-8 md:mb-8' : 'border-white/10 bg-dark/50'} p-8 hover:border-brand/50 transition-colors duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand text-dark font-mono text-[10px] font-bold uppercase py-1 px-3 tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-display text-3xl uppercase tracking-wider mb-2">{plan.name}</h3>
              <p className="text-text-muted text-sm font-medium mb-8 h-10">{plan.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display text-6xl">${plan.price}</span>
                <span className="font-mono text-sm uppercase tracking-widest text-text-muted">/ MO</span>
              </div>

              <div className="space-y-4 mb-10 h-40">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand shrink-0" />
                    <span className="font-medium text-sm text-white/90">{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full skew-btn py-4 ${plan.popular ? 'bg-brand text-dark' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                <span className="font-display uppercase tracking-widest text-lg inline-block">Select Plan</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
