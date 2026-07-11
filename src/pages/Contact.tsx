import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export function Contact() {
  return (
    <div className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-charcoal mb-6 tracking-tight"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-charcoal/70 text-lg font-light"
          >
            We would love to hear from you. Whether it's a general inquiry or a collaboration idea, our team is ready to connect.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif text-charcoal mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <MapPin className="text-primary mt-1" />
                  <div>
                    <span className="block text-charcoal font-semibold uppercase tracking-widest text-sm mb-1">Studio Address</span>
                    <span className="text-charcoal/70">Shakti Khand 4, Indirapuram<br/>Ghaziabad, UP 201014</span>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1" />
                  <div>
                    <span className="block text-charcoal font-semibold uppercase tracking-widest text-sm mb-1">Phone</span>
                    <span className="text-charcoal/70">+91 7982596271</span>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Mail className="text-primary mt-1" />
                  <div>
                    <span className="block text-charcoal font-semibold uppercase tracking-widest text-sm mb-1">Email</span>
                    <span className="text-charcoal/70">cinemateproductions@gmail.com</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-charcoal mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/cinemateproductions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-12 h-12 border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 rounded-full">
                  <FaInstagram size={20} />
                </a>
                <a href="https://www.facebook.com/people/Cinemate-production/61583747432734/#" target="_blank" rel="noreferrer" className="w-12 h-12 border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 rounded-full">
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 space-y-12"
          >
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-zinc-100 border border-charcoal/5 relative overflow-hidden group rounded-2xl">
              <img 
                src="/photo/Screenshot 2026-07-11 171313.png" 
                alt="Map" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="https://maps.app.goo.gl/EtZ8LKStgN16mMcw6?g_st=ac" target="_blank" rel="noreferrer" className="bg-white/90 backdrop-blur-sm px-6 py-3 border border-charcoal/10 text-charcoal font-serif flex items-center space-x-2 hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer shadow-lg rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>

            {/* General Contact Form */}
            <div className="bg-white/50 backdrop-blur-md p-8 md:p-10 border border-charcoal/10 shadow-xl shadow-black/5 rounded-2xl">
              <h3 className="text-2xl font-serif text-charcoal mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative group">
                    <input type="text" id="name" required className="w-full bg-transparent border-b border-charcoal/20 px-0 py-3 text-charcoal focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" placeholder="Your Name" />
                    <label htmlFor="name" className="absolute left-0 top-3 text-charcoal/50 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-charcoal/50 cursor-text">Your Name</label>
                  </div>
                  <div className="space-y-2 relative group">
                    <input type="email" id="email" required className="w-full bg-transparent border-b border-charcoal/20 px-0 py-3 text-charcoal focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" placeholder="Your Email" />
                    <label htmlFor="email" className="absolute left-0 top-3 text-charcoal/50 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-charcoal/50 cursor-text">Your Email</label>
                  </div>
                </div>
                
                <div className="space-y-2 relative group mt-4">
                  <textarea id="message" rows={4} required className="w-full bg-transparent border-b border-charcoal/20 px-0 py-3 text-charcoal focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none" placeholder="How can we help you?"></textarea>
                  <label htmlFor="message" className="absolute left-0 top-3 text-charcoal/50 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-charcoal/50 cursor-text">How can we help you?</label>
                </div>
                
                <button type="submit" className="flex items-center justify-center px-8 py-4 bg-primary text-white hover:bg-charcoal transition-colors uppercase tracking-widest text-sm font-semibold rounded-md">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
