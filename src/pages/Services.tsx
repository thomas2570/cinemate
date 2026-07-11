import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const allServices = [
    {
      title: 'Pre Wedding Shoot',
      description: 'A romantic cinematic session capturing your chemistry before the big day.',
      img: '/photo/Screenshot 2026-07-11 170902.png',
    },
    {
      title: 'Wedding Day Coverage',
      description: 'Comprehensive, unobtrusive documentation of your entire celebration.',
      img: '/photo/Screenshot 2026-07-11 170909.png',
    },
    {
      title: 'Wedding Cinematography',
      description: 'A masterpiece short film documenting the essence of your love story.',
      img: '/photo/Screenshot 2026-07-11 171018.png',
    },
    {
      title: 'Mehendi Ceremony',
      description: 'Intricate details and emotional candid shots with friends and family.',
      img: '/photo/Screenshot 2026-07-11 170927.png',
    },
    {
      title: 'Sangeet Ceremony',
      description: 'Dynamic, high-energy coverage of your musical performances and dances.',
      img: '/photo/Screenshot 2026-07-11 170936.png',
    },
    {
      title: 'Reception',
      description: 'Elegant evening portraits, speeches, and the grand finale of your wedding.',
      img: '/photo/Screenshot 2026-07-11 170948.png',
    },
    {
      title: 'Bridal Portraits',
      description: 'Stunning editorial-style portraits highlighting the bride\'s beauty and attire.',
      img: '/photo/Screenshot 2026-07-11 170958.png',
    },
    {
      title: 'Couple Portraits',
      description: 'Intimate and timeless photographs of just the two of you.',
      img: '/photo/Screenshot 2026-07-11 171008.png',
    },
    {
      title: 'Drone Coverage',
      description: 'Breathtaking aerial views of your venue and outdoor celebrations.',
      img: '/photo/Screenshot 2026-07-11 171026.png',
    }
  ];

  const services = showAll ? allServices : allServices.slice(0, 3);


  return (
    <div className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tighter leading-none"
              >
                Our<br/><span className="text-gold-400 italic font-light">Services</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-400 text-lg font-light leading-relaxed"
              >
                A curated suite of photography and cinematography services designed to capture every dimension of your celebration.
              </motion.p>
              
              {showAll ? null : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 hidden lg:block"
                >
                  <button onClick={() => setShowAll(true)} className="group flex items-center gap-4 text-white hover:text-gold-400 transition-colors uppercase tracking-[0.2em] text-xs font-semibold cursor-pointer">
                    <span className="w-12 h-px bg-white/30 group-hover:bg-gold-400 transition-colors duration-500"></span>
                    View All Services
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Scrolling Cards */}
          <div className="lg:w-2/3 space-y-12 md:space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-3xl">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mb-6 font-light">
                      {service.description}
                    </p>
                    <Link to="/book" className="inline-flex items-center text-white hover:text-gold-400 transition-colors text-xs uppercase tracking-[0.2em] font-semibold group/link">
                      Explore <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {showAll ? null : (
          <div className="mt-16 flex justify-center lg:hidden">
            <button onClick={() => setShowAll(true)} className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center uppercase tracking-[0.2em] text-xs font-semibold cursor-pointer">
              View All Services <ArrowRight className="ml-3 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
