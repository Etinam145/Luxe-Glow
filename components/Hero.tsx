import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax effects
  // Background moves slower (positive y) to create depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Text moves slightly faster than background but slower than scroll (or fades out)
  // Moving text down a bit as we scroll creates a nice "stay in place" feel before disappearing
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-luxury-charcoal">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Stronger dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        {/* Gradient to darken top (for nav) and bottom edges further */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
        
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover object-center scale-110" 
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 container mx-auto px-6 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-luxury-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-semibold drop-shadow-md">
            Premium Beauty & Wellness
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 drop-shadow-lg leading-tight">
            Awaken Your <br/>
            <span className="italic">Most Radiant Self</span>
          </h1>
          <p className="text-white text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 drop-shadow-md">
            Premium Hair • Skin • Nails • Bridal at Luxe Glow Salon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Button size="lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Your Transformation
             </Button>
             <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-luxury-charcoal backdrop-blur-sm" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
             </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest opacity-80 drop-shadow-md">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent shadow-md" />
      </motion.div>
    </div>
  );
};

export default Hero;