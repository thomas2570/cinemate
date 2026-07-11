import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AnimatePresence, motion } from 'framer-motion';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { ExploreGallery } from './pages/ExploreGallery';
import { Contact } from './pages/Contact';
import { Book } from './pages/Book';

// Placeholder Pages

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col w-full"
              >
                <section id="home"><Home /></section>
                <section id="gallery"><Gallery /></section>
                <section id="services"><Services /></section>
                <section id="about"><About /></section>
                <section id="contact"><Contact /></section>
              </motion.div>
            } />
            <Route path="/book" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Book />
              </motion.div>
            } />
            <Route path="/explore" element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <ExploreGallery />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
