import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`relative py-20 md:py-32 overflow-hidden ${dark ? 'bg-luxury-charcoal text-white' : 'bg-luxury-ivory text-luxury-charcoal'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;