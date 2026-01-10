import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { X, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <Section id="services" className="bg-white">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">Our Menu</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6 text-luxury-charcoal">Signature Services</h2>
        <div className="w-20 h-1 bg-luxury-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-luxury-ivory h-[500px] overflow-hidden cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
               <div className="mb-4 text-luxury-gold bg-white/10 w-fit p-3 rounded-full backdrop-blur-sm">
                 {service.icon}
               </div>
              <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">{service.description}</p>
              <div className="flex items-center gap-2 text-luxury-gold text-sm font-medium tracking-wide uppercase group-hover:gap-4 transition-all">
                Explore <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold mb-2">
                  {selectedService.priceRange}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl mb-6">{selectedService.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{selectedService.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-serif text-lg mb-4 border-b pb-2">What's Included</h4>
                  <ul className="space-y-3">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                   className="w-full py-4 bg-luxury-charcoal text-white hover:bg-luxury-gold transition-colors uppercase tracking-widest text-sm font-medium"
                   onClick={() => {
                     setSelectedService(null);
                     document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                >
                  Book This Service
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Services;