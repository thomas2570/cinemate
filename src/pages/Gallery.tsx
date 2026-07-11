import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Link } from 'react-router';

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allAlbums = [
    { title: 'Sarah & James', location: 'Lake Como, Italy', img: '/photo/Screenshot 2026-07-11 171206.png', type: 'Photos', height: 'h-96' },
    { title: 'Emma & Michael', location: 'Paris, France', img: '/photo/Screenshot 2026-07-11 171214.png', type: 'Film', height: 'h-[500px]' },
    { title: 'Olivia & David', location: 'Santorini, Greece', img: '/photo/Screenshot 2026-07-11 171227.png', type: 'Photos', height: 'h-80' },
    { title: 'Sophia & Daniel', location: 'Amalfi Coast, Italy', img: '/photo/Screenshot 2026-07-11 171234.png', type: 'Film', height: 'h-[600px]' },
    { title: 'Mia & Lucas', location: 'New York, USA', img: '/photo/Screenshot 2026-07-11 171248.png', type: 'Photos', height: 'h-[450px]' },
    { title: 'Isabella & Ethan', location: 'Kyoto, Japan', img: '/photo/Screenshot 2026-07-11 171255.png', type: 'Photos', height: 'h-96' },
  ];
  
  const filteredAlbums = filter === 'All' ? allAlbums : allAlbums.filter(a => a.type === filter);
  const categories = ['All', 'Photos', 'Film'];

  return (
    <div className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16 mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-charcoal mb-6 tracking-tight"
          >
            Portfolio <span className="text-primary italic">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-charcoal/70 text-lg font-light"
          >
            Explore our complete collections. From breathtaking destination weddings to intimate local celebrations.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2 rounded-full uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300 ${
                filter === c 
                  ? 'bg-charcoal text-white' 
                  : 'bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredAlbums.slice(0, 3).map((album, index) => (
              <motion.div 
                layout
                key={album.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedImage(album.img)}
                className={`group cursor-pointer relative ${album.height} w-full overflow-hidden rounded-2xl break-inside-avoid`}
              >
                <img 
                  src={album.img} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                


                {album.type === 'Film' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-black/30 backdrop-blur-sm">
                      <Play className="text-white w-6 h-6 ml-1" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Link to="/explore" className="px-8 py-4 rounded-full border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300 flex items-center uppercase tracking-[0.2em] text-xs font-semibold cursor-pointer">
            View All Photos
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
