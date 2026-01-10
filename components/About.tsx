import React from 'react';
import Section from './ui/Section';
import { TEAM } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-luxury-roseGold/10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2">
           <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">About Us</span>
           <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-8 text-luxury-charcoal leading-tight">
             Where Beauty <br/> Meets <span className="italic text-luxury-gold">Mastery</span>
           </h2>
           <p className="text-gray-600 leading-loose mb-6 text-lg">
             For over a decade, Luxe Glow Salon has been the sanctuary for those seeking exceptional beauty experiences. We blend ancient wellness traditions with cutting-edge aesthetic technology.
           </p>
           <p className="text-gray-600 leading-loose mb-8">
             Our partnership with elite brands like Oribe, Sisley, and Kérastase ensures that every treatment is not just a service, but a ritual of restoration.
           </p>
           
           <div className="grid grid-cols-2 gap-8 mt-12">
             <div>
               <h4 className="font-serif text-4xl text-luxury-gold mb-2">10+</h4>
               <p className="text-sm uppercase tracking-wide text-gray-500">Years of Excellence</p>
             </div>
             <div>
               <h4 className="font-serif text-4xl text-luxury-gold mb-2">5k+</h4>
               <p className="text-sm uppercase tracking-wide text-gray-500">Happy Clients</p>
             </div>
           </div>
        </div>

        {/* Image Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
           <motion.div 
             className="space-y-4 mt-8"
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
           >
              <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=600" alt="Salon Product" className="w-full h-64 object-cover rounded-sm shadow-lg" />
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600" alt="Stylist Working" className="w-full h-80 object-cover rounded-sm shadow-lg" />
           </motion.div>
           <motion.div 
             className="space-y-4"
             initial={{ y: -20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
           >
              <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=600" alt="Salon Interior" className="w-full h-80 object-cover rounded-sm shadow-lg" />
              <img src="https://images.unsplash.com/photo-1521590832169-7dad1a9b708c?auto=format&fit=crop&q=80&w=600" alt="Detail Shot" className="w-full h-64 object-cover rounded-sm shadow-lg" />
           </motion.div>
        </div>
      </div>

      {/* Team Snippet */}
      <div className="mt-32">
        <h3 className="font-serif text-3xl text-center mb-16">Meet Our Artisans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative overflow-hidden mb-6 mx-auto w-full aspect-[3/4] max-w-sm">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h4 className="font-serif text-xl">{member.name}</h4>
              <p className="text-luxury-gold text-sm uppercase tracking-wider mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;