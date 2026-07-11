import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';

export function ExploreGallery() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const photos = [
    "/photo/Screenshot 2026-07-11 170814.png","/photo/Screenshot 2026-07-11 170827.png","/photo/Screenshot 2026-07-11 170845.png","/photo/Screenshot 2026-07-11 170852.png","/photo/Screenshot 2026-07-11 170902.png","/photo/Screenshot 2026-07-11 170909.png","/photo/Screenshot 2026-07-11 170916.png","/photo/Screenshot 2026-07-11 170927.png","/photo/Screenshot 2026-07-11 170936.png","/photo/Screenshot 2026-07-11 170948.png","/photo/Screenshot 2026-07-11 170958.png","/photo/Screenshot 2026-07-11 171008.png","/photo/Screenshot 2026-07-11 171018.png","/photo/Screenshot 2026-07-11 171026.png","/photo/Screenshot 2026-07-11 171035.png","/photo/Screenshot 2026-07-11 171047.png","/photo/Screenshot 2026-07-11 171102.png","/photo/Screenshot 2026-07-11 171111.png","/photo/Screenshot 2026-07-11 171120.png","/photo/Screenshot 2026-07-11 171128.png","/photo/Screenshot 2026-07-11 171134.png","/photo/Screenshot 2026-07-11 171144.png","/photo/Screenshot 2026-07-11 171152.png","/photo/Screenshot 2026-07-11 171200.png","/photo/Screenshot 2026-07-11 171206.png","/photo/Screenshot 2026-07-11 171214.png","/photo/Screenshot 2026-07-11 171227.png","/photo/Screenshot 2026-07-11 171234.png","/photo/Screenshot 2026-07-11 171248.png","/photo/Screenshot 2026-07-11 171255.png","/photo/Screenshot 2026-07-11 171313.png","/photo/Screenshot 2026-07-11 171320.png","/photo/Screenshot 2026-07-11 171324.png","/photo/Screenshot 2026-07-11 171331.png","/photo/Screenshot 2026-07-11 171346.png","/photo/Screenshot 2026-07-11 171352.png","/photo/Screenshot 2026-07-11 171400.png","/photo/Screenshot 2026-07-11 171406.png","/photo/Screenshot 2026-07-11 171414.png","/photo/Screenshot 2026-07-11 171425.png","/photo/Screenshot 2026-07-11 171431.png","/photo/Screenshot 2026-07-11 171437.png","/photo/Screenshot 2026-07-11 171453.png","/photo/Screenshot 2026-07-11 171516.png","/photo/Screenshot 2026-07-11 171527.png","/photo/Screenshot 2026-07-11 171548.png","/photo/Screenshot 2026-07-11 171559.png","/photo/Screenshot 2026-07-11 171608.png","/photo/Screenshot 2026-07-11 171615.png","/photo/Screenshot 2026-07-11 171626.png","/photo/Screenshot 2026-07-11 171638.png","/photo/Screenshot 2026-07-11 171645.png","/photo/Screenshot 2026-07-11 172537.png","/photo/Screenshot 2026-07-11 172658.png","/photo/Screenshot 2026-07-11 172710.png","/photo/Screenshot 2026-07-11 172720.png","/photo/Screenshot 2026-07-11 172734.png","/photo/Screenshot 2026-07-11 172756.png","/photo/Screenshot 2026-07-11 172802.png"
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6 uppercase tracking-widest text-xs font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif text-white tracking-tight"
            >
              The <span className="text-gold-400 italic">Master Collection</span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light max-w-md"
          >
            A complete archive of our finest moments, capturing love stories in their purest and most grand forms across the globe.
          </motion.p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden rounded-sm"
            >
              <img 
                src={src} 
                alt={`Wedding capture ${index + 1}`} 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
