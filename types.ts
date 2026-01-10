// Fix: Import React to resolve 'Cannot find namespace React' error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  image: string;
  icon?: React.ReactNode;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}