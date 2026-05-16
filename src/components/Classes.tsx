import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CLASSES = [
  {
    num: "01",
    name: "Strength & Conditioning",
    desc: "Build raw power and endurance through multi-joint barbell movements and high-intensity intervals.",
    time: "45 MIN",
  },
  {
    num: "02",
    name: "Olympia Weightlifting",
    desc: "Master the snatch and clean & jerk in our specialized platforms with competition plates.",
    time: "60 MIN",
  },
  {
    num: "03",
    name: "Brutal Metcon",
    desc: "Push your cardiovascular limits with assault bikes, rowers, and kettlebell complexes.",
    time: "30 MIN",
  },
  {
    num: "04",
    name: "Iron Mobility",
    desc: "Optimize joint health and recover faster to lift heavier tomorrow.",
    time: "45 MIN",
  }
];

export function Classes() {
  return (
    <section id="classes" className="py-24 bg-dark-gray border-b border-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-brand font-bold tracking-[0.2em] uppercase text-xs">02 / Programs</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase">
              Choose Your <span className="text-stroke">Battle</span>
            </h2>
          </div>
          <a href="#schedule" className="font-mono text-xs text-white uppercase tracking-widest border-b border-brand pb-1 hover:text-brand transition-colors w-fit">
            View Full Schedule
          </a>
        </div>

        <div className="grid grid-cols-1 border-t border-white/10">
          {CLASSES.map((cls, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row items-baseline md:items-center justify-between border-b border-white/10 py-8 hover:bg-white/5 transition-colors px-4 -mx-4 cursor-pointer">
              
              <div className="flex items-start md:items-center gap-6 w-full md:w-1/3 mb-4 md:mb-0">
                <span className="font-display text-4xl text-white/20 group-hover:text-brand transition-colors">{cls.num}</span>
                <h3 className="font-display text-3xl uppercase tracking-wide group-hover:translate-x-2 transition-transform">{cls.name}</h3>
              </div>
              
              <div className="w-full md:w-1/2 pr-4">
                <p className="text-text-muted font-medium">{cls.desc}</p>
              </div>

              <div className="w-full md:w-auto flex items-center justify-between gap-8 mt-4 md:mt-0">
                <span className="font-mono text-sm tracking-widest text-brand">{cls.time}</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand group-hover:text-dark group-hover:border-brand transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
