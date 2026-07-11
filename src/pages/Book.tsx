import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export function Book() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-background pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        
        <AnimatePresence>
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center py-24 glass rounded-2xl border border-gold-400/30"
            >
              <CheckCircle className="w-24 h-24 text-gold-400 mx-auto mb-8" />
              <h2 className="text-4xl font-serif text-white mb-4">Request Received</h2>
              <p className="text-gray-400 text-lg">
                Thank you for considering Cinemate Productions for your special day. We have received your booking request and our team will be in touch with you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-12 px-8 py-3 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black transition-colors uppercase tracking-widest text-sm font-semibold"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              {/* Left Column - Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-5/12"
              >
                <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
                  Let's Create Your Perfect Story.
                </h1>
                <p className="text-gray-400 text-lg font-light mb-12">
                  We take on a limited number of weddings each year to ensure the highest quality of service and artistic dedication. Reach out to secure your date.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-gold-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-1">Email</h4>
                      <p className="text-gray-400">cinemateproductions@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-gold-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-1">Phone</h4>
                      <p className="text-gray-400">+91 7982596271</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-gold-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-1">Studio Address</h4>
                      <p className="text-gray-400">Shakti Khand 4, Indirapuram<br/>Ghaziabad, UP 201014</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-gold-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-1">Working Hours</h4>
                      <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Booking Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-7/12"
              >
                <div className="glass p-8 md:p-12 rounded-xl border-white/10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2 relative group">
                        <input type="text" id="name" required className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors peer placeholder-transparent" placeholder="Your Name" />
                        <label htmlFor="name" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-gray-400 cursor-text">Your Name *</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 relative group">
                        <input type="email" id="email" required className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors peer placeholder-transparent" placeholder="Email Address" />
                        <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-gray-400 cursor-text">Email Address *</label>
                      </div>
                      <div className="space-y-2 relative group">
                        <input type="tel" id="phone" required className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors peer placeholder-transparent" placeholder="Phone Number" />
                        <label htmlFor="phone" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-gray-400 cursor-text">Phone Number *</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 relative">
                        <label className="text-xs text-gray-500 mb-1 block">Event Date *</label>
                        <input type="date" required className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors" />
                      </div>
                      <div className="space-y-2 relative">
                        <label className="text-xs text-gray-500 mb-1 block">Event Type *</label>
                        <select required className="w-full bg-zinc-900 border-b border-white/20 px-2 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors">
                          <option value="Engagement">Engagement</option>
                          <option value="Haldi">Haldi</option>
                          <option value="Mehendi">Mehendi</option>
                          <option value="Sangeet">Sangeet</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Reception">Reception</option>
                          <option value="Complete Wedding Package">Complete Wedding Package</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 relative group">
                        <input type="text" id="venue" required className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors peer placeholder-transparent" placeholder="Wedding Venue" />
                        <label htmlFor="venue" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-gray-400 cursor-text">Wedding Venue *</label>
                      </div>
                      <div className="space-y-2 relative group">
                        <input type="text" id="city" required className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors peer placeholder-transparent" placeholder="City" />
                        <label htmlFor="city" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-gray-400 cursor-text">City *</label>
                      </div>
                    </div>

                    <div className="space-y-2 relative group mt-4">
                      <textarea id="message" rows={4} required className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors peer placeholder-transparent resize-none" placeholder="Tell us about your wedding..."></textarea>
                      <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-gray-400 cursor-text">Tell us about your wedding... *</label>
                    </div>

                    <button type="submit" className="w-full bg-gold-400 text-black py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors duration-300 mt-8">
                      Request Booking
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
