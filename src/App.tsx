import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

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
      </div>
    </BrowserRouter>
  );
}

export default App;
