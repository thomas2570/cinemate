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
            className="w-full h-full object-cover object-center opacity-70"
          >
            <source src="/photo/Video Project 1.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay to ensure text is readable, fading to ivory at bottom */}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white mb-6 tracking-tight leading-tight"
          >
            Premium Wedding<br />
            <span className="text-gold-400 italic">Photography & Films.</span>
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
              to="/book"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground hover:bg-charcoal transition-all duration-500 uppercase tracking-[0.2em] text-xs font-semibold rounded-full shadow-xl hover:shadow-2xl"
            >
              Book Your Wedding
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/20 to-primary"></div>
        <div className="container mx-auto max-w-5xl text-center mt-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-charcoal mb-10 leading-tight"
          >
            Your Wedding, <span className="text-primary italic">Documented Flawlessly</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-charcoal/70 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto"
          >
            We are a professional wedding photography and cinematography agency dedicated to capturing the true essence of your big day. With an expert team, top-tier equipment, and a passion for perfection, we deliver breathtaking photos and cinematic films that you will cherish for a lifetime.
          </motion.p>
        </div>
      </section>

    </div>
  );
}
