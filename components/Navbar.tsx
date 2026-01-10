import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const scrollPosition = window.scrollY + 150; // Offset for trigger point
      
      let currentSection = '';
      for (const link of navLinks) {
        const sectionId = link.href.replace('#', '');
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100; // Navbar height + buffer
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, '#')}
            className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-luxury-charcoal flex items-center gap-2 cursor-pointer"
          >
            <span className="text-luxury-gold">✦</span> LUXE GLOW
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm uppercase tracking-widest transition-colors font-medium relative ${
                  activeSection === link.href.substring(1) 
                    ? 'text-luxury-gold' 
                    : 'text-luxury-charcoal hover:text-luxury-gold'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-luxury-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <Button size="sm" onClick={(e) => scrollToSection(e, '#booking')}>
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-luxury-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxury-ivory flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-luxury-charcoal"
            >
              <X size={28} />
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-serif text-3xl transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? 'text-luxury-gold' 
                    : 'text-luxury-charcoal hover:text-luxury-gold'
                }`}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button onClick={(e) => scrollToSection(e, '#booking')}>
              Book Your Appointment
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;