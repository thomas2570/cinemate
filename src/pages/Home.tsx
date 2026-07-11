import { motion } from 'framer-motion';
import { Link } from 'react-router';

export function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center opacity-40"
          >
            <source src="/photo/Video Project 1.mp4" type="video/mp4" />
          </video>
          {/* Enhanced Gradient Overlay for better text readability and premium feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 tracking-tighter leading-[0.9]"
          >
            Premium Wedding<br />
            <span className="text-gold-400 italic font-light">Photography & Films.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light tracking-wide"
          >
            Capturing your grandest moments with uncompromised quality. 
            <br className="hidden md:block" /> A complete wedding photography and cinematography agency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/explore"
              className="inline-block px-10 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 uppercase tracking-[0.2em] text-xs font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Explore Gallery
            </Link>
            <Link 
              to="/book"
              className="inline-block px-10 py-4 bg-gold-400 border border-gold-400 text-black hover:bg-white hover:border-white transition-all duration-500 uppercase tracking-[0.2em] text-xs font-semibold rounded-full shadow-[0_0_20px_rgba(226,194,122,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-gold-400/50"></div>
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight"
          >
            Your Wedding, <span className="text-gold-400 italic">Documented Flawlessly</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto"
          >
            We are a professional wedding photography and cinematography agency dedicated to capturing the true essence of your big day. With an expert team, top-tier equipment, and a passion for perfection, we deliver breathtaking photos and cinematic films that you will cherish for a lifetime.
          </motion.p>
        </div>
      </section>

    </div>
  );
}
