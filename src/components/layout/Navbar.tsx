import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sectionIds = ['home', 'gallery', 'services', 'about', 'contact'];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center ${
        isScrolled ? 'pt-4 px-4' : 'pt-8 px-6'
      }`}
    >
      <div className={`w-full max-w-6xl transition-all duration-700 rounded-full px-6 md:px-10 flex items-center justify-between ${
        isScrolled ? 'bg-ivory/95 backdrop-blur-md shadow-xl shadow-black/5 py-3' : 'bg-transparent py-2'
      }`}>
        <Link to="/" className={`text-xl md:text-2xl font-serif font-bold tracking-widest uppercase z-50 flex items-center gap-3 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
          <img src="/photo/Screenshot 2026-07-11 172537.png" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
          <span>Cine Mate</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={`/#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                location.pathname === '/' && activeSection === link.id
                  ? (isScrolled ? 'text-gold-500' : 'text-white')
                  : (isScrolled ? 'text-charcoal/70 hover:text-charcoal' : 'text-white/80 hover:text-white')
              }`}
            >
              {link.name}
              {location.pathname === '/' && activeSection === link.id && (
                <motion.div layoutId="nav-indicator" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold-400" />
              )}
              <div className={`absolute -bottom-2 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${isScrolled ? 'bg-charcoal/30' : 'bg-white/50'}`} />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 ${isScrolled ? 'text-charcoal' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={`/#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-2xl font-serif transition-colors ${
                  location.pathname === '/' && activeSection === link.id
                    ? 'text-gold-400'
                    : 'text-white hover:text-gold-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
