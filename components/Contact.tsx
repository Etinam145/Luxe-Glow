import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="booking" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Booking Form */}
        <div className="lg:w-3/5 p-8 md:p-12 bg-luxury-ivory border border-luxury-roseGold/20 shadow-xl shadow-rose-100/50">
          <div className="mb-10">
            <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">Reservations</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 text-luxury-charcoal">Book Your Appointment</h2>
            <p className="text-gray-500 mt-4">Complete the form below and our concierge will confirm your slot.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">First Name</label>
                <input type="text" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Last Name</label>
                <input type="text" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Phone</label>
                <input type="tel" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Email</label>
                <input type="email" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="jane@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Service</label>
                <select className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-luxury-gold transition-colors text-gray-700">
                  <option>Hair Couture</option>
                  <option>Glow Facial</option>
                  <option>Luxury Manicure</option>
                  <option>Bridal Consultation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Preferred Date</label>
                <input type="date" className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-luxury-gold transition-colors text-gray-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Special Requests</label>
              <textarea className="w-full bg-white border-b border-gray-300 p-3 focus:outline-none focus:border-luxury-gold transition-colors h-24 resize-none" placeholder="Tell us about any specific needs or preferences..."></textarea>
            </div>

            <Button size="lg" className="w-full mt-4">
              Request Booking
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:w-2/5 space-y-12 py-8">
          <div>
            <h3 className="font-serif text-2xl mb-6 text-luxury-charcoal">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-luxury-gold mt-1" />
                <div>
                  <p className="font-medium text-luxury-charcoal">Luxe Glow Salon</p>
                  <p className="text-gray-500">123 Fashion Avenue, Suite 400<br/>New York, NY 10012</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-luxury-gold" />
                <a href="tel:+15551234567" className="text-gray-500 hover:text-luxury-gold transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-luxury-gold" />
                <a href="mailto:concierge@luxeglow.com" className="text-gray-500 hover:text-luxury-gold transition-colors">concierge@luxeglow.com</a>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="font-serif text-2xl mb-6 text-luxury-charcoal">Opening Hours</h3>
             <ul className="space-y-3 text-gray-500">
               <li className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                 <span>Monday - Friday</span>
                 <span>9:00 AM - 8:00 PM</span>
               </li>
               <li className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                 <span>Saturday</span>
                 <span>10:00 AM - 6:00 PM</span>
               </li>
               <li className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                 <span>Sunday</span>
                 <span>Closed</span>
               </li>
             </ul>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;