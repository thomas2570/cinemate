import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CalendarHeart } from 'lucide-react';
import { Link } from 'react-router';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { ExploreGallery } from './pages/ExploreGallery';
import { Contact } from './pages/Contact';
import { Book } from './pages/Book';

// Placeholder Pages

function App() {
  return (
    <BrowserRouter>
      <div className="dark bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col w-full">
                <section id="home"><Home /></section>
                <section id="gallery"><Gallery /></section>
                <section id="services"><Services /></section>
                <section id="about"><About /></section>
                <section id="contact"><Contact /></section>
              </div>
            } />
            <Route path="/book" element={<Book />} />
            <Route path="/explore" element={<ExploreGallery />} />
          </Routes>
        </main>
        <Footer />
        {/* Floating Book Now Button */}
        <Link
          to="/book"
          className="fixed bottom-6 right-6 z-50 bg-gold-400 text-black px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-white transition-all duration-300 hover:scale-105"
        >
          <CalendarHeart size={20} />
          <span className="font-semibold uppercase tracking-widest text-xs hidden md:inline-block">Book Now</span>
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
