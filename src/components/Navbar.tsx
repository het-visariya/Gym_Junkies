import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Phone } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Classes', 'Trainers', 'Pricing'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <Dumbbell className="w-8 h-8 text-brand" />
          <span className="font-display text-2xl tracking-wider uppercase">Gym Junkies</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-widest hover:text-brand transition-colors">
              {link}
            </a>
          ))}
          <a href="tel:+15550194766" className="text-sm font-semibold uppercase tracking-widest hover:text-brand transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">+1 (555) 019-IRON</span>
          </a>
          <a href="#join" className="skew-btn bg-brand text-dark px-6 py-2 ml-4">
            <span className="font-display uppercase tracking-widest text-lg ml-1">Join Now</span>
          </a>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <a href="tel:+15550194766" className="text-white hover:text-brand transition-colors">
            <Phone className="w-6 h-6" />
          </a>
          <button 
            className="text-white hover:text-brand transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark-gray flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map(link => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            onClick={() => setMobileMenuOpen(false)}
            className="font-display text-4xl hover:text-brand transition-colors"
          >
            {link}
          </a>
        ))}
        <a 
          href="#join" 
          onClick={() => setMobileMenuOpen(false)}
          className="bg-brand text-dark px-10 py-4 font-display text-2xl uppercase mt-4"
        >
          Join Now
        </a>
      </div>
    </nav>
  );
}
