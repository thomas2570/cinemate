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
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-tight"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg font-light"
          >
            A curated suite of photography and cinematography services designed to capture every dimension of your celebration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
              className="group bg-zinc-950 border border-white/5 overflow-hidden hover:border-gold-400/50 transition-colors duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <Link to="/book" className="inline-flex items-center text-gold-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {showAll ? null : (
          <div className="mt-12 flex justify-end">
            <button onClick={() => setShowAll(true)} className="text-white hover:text-gold-400 transition-colors flex items-center uppercase tracking-widest text-sm font-semibold border-b border-transparent hover:border-gold-400 pb-1 cursor-pointer">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
