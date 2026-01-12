import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import Button from './ui/Button';
import { MapPin, Phone, Mail, Instagram, Facebook, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  notes: string;
}

interface FormErrors {
  [key: string]: string;
}

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: 'Hair Couture',
    date: '',
    notes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        service: 'Hair Couture',
        date: '',
        notes: ''
    });
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", placeholder, error }) => (
    <div className="space-y-2">
      <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold flex justify-between">
        {label}
        {error && <span className="text-red-500 normal-case flex items-center gap-1"><AlertCircle size={10} /> {error}</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name as keyof FormData]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full bg-white border-b-2 p-4 text-base focus:outline-none transition-colors ${
          error ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-luxury-gold'
        }`}
      />
    </div>
  );

  return (
    <Section id="booking" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Booking Form Area */}
        <div className="lg:w-3/5 relative min-h-[600px]">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-12 bg-luxury-ivory border border-luxury-roseGold/20 shadow-xl shadow-rose-100/50 h-full"
              >
                <div className="mb-10">
                  <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">Reservations</span>
                  <h2 className="font-serif text-3xl md:text-4xl mt-2 text-luxury-charcoal">Book Your Appointment</h2>
                  <p className="text-gray-500 mt-4">Complete the form below and our concierge will confirm your slot.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="First Name" name="firstName" placeholder="Jane" error={errors.firstName} />
                    <InputField label="Last Name" name="lastName" placeholder="Doe" error={errors.lastName} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" error={errors.phone} />
                    <InputField label="Email" name="email" type="email" placeholder="jane@example.com" error={errors.email} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Service</label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-white border-b-2 border-gray-200 p-4 text-base focus:outline-none focus:border-luxury-gold transition-colors text-gray-700 appearance-none rounded-none"
                        >
                          <option>Hair Couture</option>
                          <option>Glow Facial</option>
                          <option>Luxury Manicure</option>
                          <option>Makeup Artistry</option>
                          <option>Waxing & Brows</option>
                          <option>Bridal Consultation</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                      </div>
                    </div>
                    <InputField label="Preferred Date" name="date" type="date" error={errors.date} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Special Requests</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full bg-white border-b-2 border-gray-200 p-4 text-base focus:outline-none focus:border-luxury-gold transition-colors h-24 resize-none"
                      placeholder="Tell us about any specific needs or preferences..."
                    />
                  </div>

                  <Button size="lg" className="w-full mt-4" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={18} /> Processing Request
                      </span>
                    ) : (
                      "Request Booking"
                    )}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 md:p-12 bg-white border border-luxury-gold/30 shadow-2xl h-full flex flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </motion.div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-luxury-charcoal mb-4">Request Received</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md">
                  Thank you for choosing Luxe Glow. Our concierge has received your request and will contact you shortly to confirm your appointment.
                </p>
                
                <div className="p-6 bg-luxury-ivory w-full max-w-sm mb-8 rounded-sm border border-luxury-roseGold/20">
                    <h4 className="uppercase tracking-widest text-xs font-semibold text-luxury-gold mb-4">Next Steps</h4>
                    <ul className="text-left space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-3">
                            <span className="bg-luxury-gold/20 text-luxury-gold rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                            <span>We will review your requested time slot.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-luxury-gold/20 text-luxury-gold rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                            <span>You will receive a confirmation call or email within 2 hours.</span>
                        </li>
                    </ul>
                </div>

                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Make Another Request
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Info */}
        <div className="lg:w-2/5 space-y-12 py-8">
          <div>
            <h3 className="font-serif text-2xl mb-6 text-luxury-charcoal">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-luxury-ivory flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium text-luxury-charcoal">Luxe Glow Salon</p>
                  <p className="text-gray-500">123 Fashion Avenue, Suite 400<br/>New York, NY 10012</p>
                </div>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-10 h-10 rounded-full bg-luxury-ivory flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <a href="tel:+15551234567" className="text-gray-500 hover:text-luxury-gold transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-10 h-10 rounded-full bg-luxury-ivory flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
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
            <a href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;