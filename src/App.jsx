import React from 'react';
import Hero from './components/HeroSection';
import Visagismo from './components/Visagismo';
import ServicePrices from './components/ServicePrices';
import Gallery from './components/Gallery';
import Mandamentos from './components/Mandamentos';
import Reviews from './components/Reviews';
import WhatsAppBtn from './components/WhatsAppBtn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-white">
      <Hero />
      <Visagismo />
      <ServicePrices />
      <Gallery />
      <Mandamentos />
      <Reviews />
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;