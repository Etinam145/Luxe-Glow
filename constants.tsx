import { Service, Testimonial, GalleryItem, TeamMember } from './types';
import { Scissors, Sparkles, Gem, Palette, Sun, Heart } from 'lucide-react';
import React from 'react';

export const SERVICES: Service[] = [
  {
    id: 'hair',
    title: 'Hair Couture',
    description: 'Expert cuts, bespoke coloring, and restorative treatments tailored to your unique style.',
    priceRange: '$80 - $350',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    icon: <Scissors className="w-6 h-6" />,
    details: ['Precision Cutting', 'Balayage & Ombre', 'Keratin Treatments', 'Bridal Styling']
  },
  {
    id: 'facials',
    title: 'Glow Facials',
    description: 'Rejuvenating skin therapies using premium Sisley & Biologique Recherche products.',
    priceRange: '$120 - $400',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000',
    icon: <Sparkles className="w-6 h-6" />,
    details: ['Hydrafacial', 'Anti-Aging LED', 'Deep Pore Cleansing', 'Gold Mask Therapy']
  },
  {
    id: 'nails',
    title: 'Luxury Nails',
    description: 'Meticulous manicures and pedicures featuring gel couture and hand massages.',
    priceRange: '$40 - $120',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1000',
    icon: <Gem className="w-6 h-6" />,
    details: ['Gel Manicure', 'Spa Pedicure', 'Nail Artistry', 'Paraffin Dip']
  },
  {
    id: 'makeup',
    title: 'Makeup Artistry',
    description: 'Professional application for events, bridals, or editorial looks.',
    priceRange: '$100 - $250',
    image: 'https://images.unsplash.com/photo-1487412947132-26c25fc496a7?auto=format&fit=crop&q=80&w=1000',
    icon: <Palette className="w-6 h-6" />,
    details: ['Bridal Makeup', 'Event Glam', 'Makeup Lessons', 'Airbrushing']
  },
  {
    id: 'waxing',
    title: 'Waxing & Brows',
    description: 'Gentle hair removal and precision brow sculpting for a polished look.',
    priceRange: '$30 - $100',
    image: 'https://images.unsplash.com/photo-1588097281146-2437dc292723?auto=format&fit=crop&q=80&w=1000',
    icon: <Sun className="w-6 h-6" />,
    details: ['Brow Lamination', 'Full Body Waxing', 'Lash Tinting', 'Microblading']
  },
  {
    id: 'bridal',
    title: 'Bridal Packages',
    description: 'Comprehensive beauty journeys for brides and wedding parties.',
    priceRange: 'Custom',
    image: 'https://images.unsplash.com/photo-1595867296495-23c344445690?auto=format&fit=crop&q=80&w=1000',
    icon: <Heart className="w-6 h-6" />,
    details: ['Trial Sessions', 'On-Location Services', 'Bridal Party Packages', 'Champagne Service']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rossi',
    role: 'Fashion Editor',
    quote: "The only place I trust with my hair. The atmosphere is pure luxury and the results are consistently stunning.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Loyal Client',
    quote: "From the moment you walk in, you feel like royalty. The Gold Facial is an absolute must-try!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Entrepreneur',
    quote: "Impeccable service and attention to detail. A true sanctuary in the middle of the city.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', alt: 'Salon Interior', category: 'Interior' },
  { id: '2', src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', alt: 'Makeup Application', category: 'Makeup' },
  { id: '3', src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800', alt: 'Hair Styling', category: 'Hair' },
  { id: '4', src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800', alt: 'Facial Treatment', category: 'Skin' },
  { id: '5', src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800', alt: 'Manicure Detail', category: 'Nails' },
  { id: '6', src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800', alt: 'Relaxation Area', category: 'Interior' },
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Victoria St. Clair', role: 'Founder & Master Stylist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Julian Reed', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Sophia Loren', role: 'Lead Esthetician', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' }
];