import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya & Rahul",
      text: "Choosing Cinemate Productions was the best decision we made for our wedding. The photos are absolutely stunning. They perfectly captured the vibrant energy and grandeur of our big day.",
      location: "Udaipur, Rajasthan",
      bgImg: "/photo/Screenshot 2026-07-11 171206.png"
    },
    {
      name: "Ananya & Rohan",
      text: "Their cinematic approach left us speechless. The team was so professional and made us feel entirely at ease amidst the wedding chaos. Our wedding film is a masterpiece we will cherish forever.",
      location: "Goa, India",
      bgImg: "/photo/Screenshot 2026-07-11 171227.png"
    },
    {
      name: "Meera & Vikram",
      text: "From the pre-wedding shoot to the final reception, every moment was captured flawlessly. We felt like movie stars!",
      location: "Jaipur, Rajasthan",
      bgImg: "/photo/Screenshot 2026-07-11 171248.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const processSteps = [
    { title: "Inquiry", desc: "Share your vision and wedding details with us." },
    { title: "Consultation", desc: "We meet to plan aesthetics, schedule, and styling." },
    { title: "The Shoot", desc: "Relax and enjoy your day while we capture the magic." },
    { title: "Delivery", desc: "Receive your beautifully curated gallery and film." }
  ];

  return (
    <div className="bg-background pt-32 pb-20 lg:pb-32">
      {/* Story Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative h-[600px] w-full">
              <img 
                src="/photo/Screenshot 2026-07-11 171035.png" 
                alt="Photographer" 
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-3xl -z-10 hidden md:block transition-transform duration-700 hover:translate-x-2 hover:translate-y-2"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Our Story</h2>
            <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-8">Capturing Love Stories Since 8+ Years.</h1>
            <div className="space-y-6 text-charcoal/80 font-light text-lg">
              <p>
                Cinemate Productions was born from a singular vision: to treat wedding photography not just as a service, but as an art form. We believe that an Indian wedding is a vibrant tapestry of culture, emotions, and timeless rituals that deserve to be preserved with cinematic elegance.
              </p>
              <ul className="space-y-4 text-charcoal font-medium">
                <li className="flex items-center gap-3">💍 <span>500+ Weddings Covered</span></li>
                <li className="flex items-center gap-3">🎥 <span>Wedding | Pre-Wedding | Cinematic Films</span></li>
                <li className="flex items-center gap-3">✨ <span>Turning Moments into Memories</span></li>
                <li className="flex items-center gap-3">📍 <span>Available for Destinations & Events</span></li>
              </ul>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-charcoal/10">
              <div>
                <h4 className="text-3xl font-serif text-charcoal mb-2">8+</h4>
                <p className="text-sm text-primary uppercase tracking-widest">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-charcoal mb-2">500+</h4>
                <p className="text-sm text-primary uppercase tracking-widest">Weddings</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-charcoal mb-2">Global</h4>
                <p className="text-sm text-primary uppercase tracking-widest">Reach</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white/50 border-y border-charcoal/5 mb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Our Process</h2>
            <p className="text-primary tracking-widest uppercase text-sm">How we work together</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-charcoal/10 z-0"></div>
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-4 mb-12 md:mb-0"
              >
                <div className="w-24 h-24 rounded-full bg-background border border-charcoal/10 flex items-center justify-center text-3xl font-serif text-primary shadow-sm mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-3">{step.title}</h3>
                <p className="text-charcoal/70 font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mb-32">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img src={testimonials[currentTestimonial].bgImg} className="w-full h-full object-cover opacity-80" alt="Background" />
            <div className="absolute inset-0 bg-charcoal/80"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl text-primary/40 font-serif mb-6">"</div>
              <p className="text-white text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
                {testimonials[currentTestimonial].text}
              </p>
              <h4 className="text-white font-serif text-2xl">{testimonials[currentTestimonial].name}</h4>
              <p className="text-primary text-sm tracking-widest uppercase mt-2">{testimonials[currentTestimonial].location}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
