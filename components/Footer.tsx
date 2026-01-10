import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-serif text-3xl font-bold tracking-tighter flex items-center gap-2 mb-6">
              <span className="text-luxury-gold">✦</span> LUXE GLOW
            </a>
            <p className="text-white/60 max-w-sm font-light">
              Elevating beauty to an art form. Experience the pinnacle of personalized care in an environment of pure luxury.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-luxury-gold transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-luxury-gold transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-luxury-gold transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-serif text-lg mb-6">Legal</h4>
             <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40 uppercase tracking-widest">
            © 2024 Luxe Glow Salon. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 hover:bg-luxury-gold text-white rounded-full flex items-center justify-center transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;