import React, { useState } from 'react';
import Section from './ui/Section';
import { GALLERY_ITEMS } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="gallery">
      <div className="text-center mb-16">
        <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">Portfolio</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 text-luxury-charcoal">Visual Transformations</h2>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid relative group cursor-zoom-in overflow-hidden"
            onClick={() => setSelectedImage(item.src)}
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif text-lg italic">{item.category}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-luxury-gold transition-colors">
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Gallery;