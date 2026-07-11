import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const allAlbums = [
    { title: 'Sarah & James', location: 'Lake Como, Italy', img: '/photo/Screenshot 2026-07-11 171206.png', type: 'Photos' },
    { title: 'Emma & Michael', location: 'Paris, France', img: '/photo/Screenshot 2026-07-11 171214.png', type: 'Film' },
    { title: 'Olivia & David', location: 'Santorini, Greece', img: '/photo/Screenshot 2026-07-11 171227.png', type: 'Photos' },
    { title: 'Sophia & Daniel', location: 'Amalfi Coast, Italy', img: '/photo/Screenshot 2026-07-11 171234.png', type: 'Film' },
    { title: 'Mia & Lucas', location: 'New York, USA', img: '/photo/Screenshot 2026-07-11 171248.png', type: 'Photos' },
    { title: 'Isabella & Ethan', location: 'Kyoto, Japan', img: '/photo/Screenshot 2026-07-11 171255.png', type: 'Photos' },
  ];
  
  const albums = showAll ? allAlbums : allAlbums.slice(0, 3);

  return (
    <div className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-tight"
          >
            Albums & Films
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg font-light"
          >
            Explore our complete collections. From breathtaking destination weddings to intimate local celebrations, every story is a unique cinematic journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
              className="group cursor-pointer relative h-96 overflow-hidden"
            >
              <img 
                src={album.img} 
                alt={album.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              
              <div className="absolute top-6 left-6 flex space-x-2">
                <span className="bg-gold-400/90 text-black text-xs font-semibold uppercase tracking-widest px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {album.type}
                </span>
              </div>

              {album.type === 'Film' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <Play className="text-white w-6 h-6 ml-1" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {showAll ? null : (
          <div className="mt-20 text-center">
            <button onClick={() => setShowAll(true)} className="px-10 py-4 bg-transparent border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-widest text-sm font-semibold rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer">
              View All Photos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
