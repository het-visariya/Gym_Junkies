import React from 'react';

export function Marquee() {
  const words = ["Strength", "Endurance", "Power", "Agility", "Discipline", "Focus", "Iron"];
  
  return (
    <div className="w-full bg-brand py-4 overflow-hidden relative border-y border-dark-gray flex items-center">
      <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {words.map((word, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="font-display text-4xl text-dark uppercase mx-8">{word}</span>
                <span className="text-dark font-black mx-4">*</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      
      {/* Required for Tailwind dynamic animation if not defined in config, but we can use inline styles or add to index.css */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </div>
  );
}
