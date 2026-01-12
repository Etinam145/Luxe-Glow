import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import Tooltip from './ui/Tooltip';
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
            className="group relative bg-luxury-ivory h-[500px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
            onClick={() => setSelectedService(service)}
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
               <div className="mb-4 text-luxury-gold bg-white/10 w-fit p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                 <Tooltip content={`View ${service.title} Details`}>
                    {service.icon}
                 </Tooltip>
               </div>
              <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">{service.description}</p>
              
              <div className="flex justify-between items-end border-t border-white/20 pt-4">
                <span className="text-luxury-gold font-medium">{service.priceRange}</span>
                <div className="flex items-center gap-2 text-white text-xs font-medium tracking-wide uppercase group-hover:translate-x-1 transition-transform">
                  Details <ArrowRight size={14} />
                </div>
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
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row rounded-sm"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors text-luxury-charcoal shadow-sm"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 bg-luxury-ivory rounded-full text-luxury-gold">
                    {selectedService.icon}
                  </span>
                  <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">
                    {selectedService.priceRange}
                  </span>
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl mb-6 text-luxury-charcoal">{selectedService.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{selectedService.description}</p>
                
                <div className="mb-8 p-6 bg-luxury-ivory rounded-sm">
                  <h4 className="font-serif text-lg mb-4 border-b border-luxury-roseGold/20 pb-2 text-luxury-charcoal">What's Included</h4>
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
                   className="w-full py-4 bg-luxury-charcoal text-white hover:bg-luxury-gold transition-colors uppercase tracking-widest text-sm font-medium shadow-lg hover:shadow-xl"
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