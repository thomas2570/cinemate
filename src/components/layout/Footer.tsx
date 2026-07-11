import { Link, useLocation } from 'react-router';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export function Footer() {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif tracking-widest uppercase flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-white">
                <img src="/photo/Screenshot 2026-07-11 172537.png" alt="Logo" className="w-full h-full object-cover scale-[1.65] translate-x-[2px] object-center" />
              </div>
              <span>Cine Mate</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Capturing eternal moments with a cinematic and luxurious touch. Your wedding story, beautifully told.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold-400 font-serif mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="text-gray-400 hover:text-white transition-colors block">Gallery</Link></li>
              <li><Link to="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-400 hover:text-white transition-colors block">Services</Link></li>
              <li><Link to="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-400 hover:text-white transition-colors block">Our Story</Link></li>
              <li><Link to="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-400 hover:text-white transition-colors block">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-serif mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-400 shrink-0 mt-0.5" />
                <span>Shakti Khand 4, Indirapuram<br/>Ghaziabad, UP 201014</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-400 shrink-0" />
                <span>+91 7982596271</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-400 shrink-0" />
                <span>cinemateproductions@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-serif mb-6 uppercase tracking-widest text-sm">Follow Us</h4>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://instagram.com/cinemateproductions" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.facebook.com/people/Cinemate-production/61583747432734/#" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-colors">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cinemate Productions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
