import React from 'react';
import { Dumbbell, MapPin, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-brand/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="w-8 h-8 text-brand" />
              <span className="font-display text-2xl tracking-wider uppercase">Gym Junkies</span>
            </div>
            <p className="text-text-muted text-sm font-medium mb-8">
              Forged in iron. Built for those who don't know when to quit. The premier strength facility since 2024.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/gymjunkies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand hover:text-dark hover:border-brand transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/gymjunkies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand hover:text-dark hover:border-brand transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/gymjunkies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand hover:text-dark hover:border-brand transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase mb-6 border-b border-white/10 pb-2 inline-block">Navigation</h4>
            <ul className="space-y-3">
              {['About Us', 'Classes', 'Our Trainers', 'Pricing Plans', 'Schedule'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-medium text-text-muted hover:text-brand transition-colors uppercase tracking-wider">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase mb-6 border-b border-white/10 pb-2 inline-block">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand shrink-0" />
                <span className="text-sm text-text-muted font-medium">1024 Iron Boulevard,<br/>Steel District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand shrink-0" />
                <a href="tel:+15550194766" className="text-sm text-text-muted font-medium hover:text-brand transition-colors">+1 (555) 019-IRON</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand shrink-0" />
                <a href="mailto:info@gymjunkies.com" className="text-sm text-text-muted font-medium hover:text-brand transition-colors">info@gymjunkies.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase mb-6 border-b border-white/10 pb-2 inline-block">Newsletter</h4>
            <p className="text-sm text-text-muted mb-4 font-medium">Subscribe for workout tips, news and special offers.</p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand w-full text-white font-mono placeholder:text-white/30"
              />
              <button className="bg-brand text-dark px-4 py-3 hover:bg-brand-dark transition-colors font-display uppercase tracking-widest">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Gym Junkies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-mono text-xs text-white/30 uppercase tracking-widest">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
