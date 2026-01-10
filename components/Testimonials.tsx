import React, { useState, useEffect } from 'react';
import Section from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="testimonials" className="bg-luxury-ivory" dark>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 flex justify-center">
          <Quote size={48} className="text-luxury-gold opacity-50" />
        </div>

        <div className="h-[400px] md:h-[300px] relative">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="font-serif text-2xl md:text-4xl italic leading-relaxed mb-8 text-white/90">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={TESTIMONIALS[currentIndex].image} 
                  alt={TESTIMONIALS[currentIndex].name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-luxury-gold"
                />
                <div className="text-left">
                  <p className="font-semibold text-white">{TESTIMONIALS[currentIndex].name}</p>
                  <p className="text-luxury-gold text-xs uppercase tracking-wider">{TESTIMONIALS[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-luxury-gold' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;