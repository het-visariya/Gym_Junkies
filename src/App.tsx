import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Classes } from './components/Classes';
import { Trainers } from './components/Trainers';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark text-white min-h-screen font-sans selection:bg-brand selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Classes />
        <Trainers />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
