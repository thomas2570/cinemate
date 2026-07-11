import { motion } from 'framer-motion';

export function About() {
  const faqs = [
    {
      q: "Do you travel for destination weddings?",
      a: "Absolutely. We love capturing love stories around the globe. Our team is available for travel worldwide, and we have custom collections specifically designed for destination weddings."
    },
    {
      q: "How many images will we receive?",
      a: "For a full wedding day (8-10 hours), you can expect to receive between 600-800 fully edited, high-resolution images. We focus on quality over quantity, ensuring every image is a piece of art."
    },
    {
      q: "What is your photography style?",
      a: "Our style is a blend of fine-art editorial and cinematic photojournalism. We direct you gently for stunning portraits while remaining unobtrusive to capture raw, candid moments throughout the day."
    },
    {
      q: "How long does it take to receive our photos?",
      a: "You will receive a sneak peek of 20-30 images within 48 hours of your wedding. The complete, fully edited gallery will be delivered within 6-8 weeks."
    }
  ];

  const testimonials = [
    {
      name: "Priya & Rahul",
      text: "Choosing Cinemate Productions was the best decision we made for our wedding. The photos are absolutely stunning. They perfectly captured the vibrant energy and grandeur of our big day.",
      location: "Udaipur, Rajasthan"
    },
    {
      name: "Ananya & Rohan",
      text: "Their cinematic approach left us speechless. The team was so professional and made us feel entirely at ease amidst the wedding chaos. Our wedding film is a masterpiece we will cherish forever.",
      location: "Goa, India"
    }
  ];

  return (
    <div className="bg-background py-20 lg:py-32">
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
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-400/30 rounded-3xl -z-10 hidden md:block transition-transform duration-700 hover:translate-x-2 hover:translate-y-2"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-semibold tracking-widest text-gold-400 uppercase mb-4">Our Story</h2>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Capturing Love Stories Since 8+ Years.</h1>
            <div className="space-y-6 text-gray-400 font-light text-lg">
              <p>
                Cinemate Productions was born from a singular vision: to treat wedding photography not just as a service, but as an art form. We believe that an Indian wedding is a vibrant tapestry of culture, emotions, and timeless rituals that deserve to be preserved with cinematic elegance.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-center gap-3">💍 <span className="font-medium tracking-wide">500+ Weddings Covered</span></li>
                <li className="flex items-center gap-3">🎥 <span className="font-medium tracking-wide">Wedding | Pre-Wedding | Cinematic Films | All Kinds of Photography</span></li>
                <li className="flex items-center gap-3">✨ <span className="font-medium tracking-wide">Turning Moments into Memories</span></li>
                <li className="flex items-center gap-3">📍 <span className="font-medium tracking-wide">Available for Destinations & Events</span></li>
              </ul>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">8+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">500+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Weddings</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">PAN India</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Reach</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 mb-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Client Love</h2>
            <p className="text-gold-400 tracking-widest uppercase text-sm">Words from our couples</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 50, damping: 20, delay: idx * 0.2 }}
                className="relative p-10 md:p-14 border border-white/5 bg-white/[0.02] rounded-3xl hover:bg-white/[0.05] transition-colors duration-500 group"
              >
                <div className="text-8xl text-gold-400/10 absolute top-4 left-6 font-serif group-hover:text-gold-400/20 transition-colors duration-500">"</div>
                <p className="text-gray-300 text-lg italic leading-relaxed mb-8 relative z-10">"{t.text}"</p>
                <div>
                  <h4 className="text-white font-serif text-xl">{t.name}</h4>
                  <p className="text-gold-400 text-sm tracking-widest uppercase">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our process.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: idx * 0.1 }}
              className="border border-white/10 p-8 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-gold-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-serif text-white mb-3">{faq.q}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
