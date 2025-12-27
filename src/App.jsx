import React from 'react';
import Hero from './components/HeroSection'; // Lembre que mudamos o nome
import Visagismo from './components/Visagismo'; // <--- NOVO
import Services from './components/Services';
import ServicePrices from './components/ServicePrices';
import Gallery from './components/Gallery';
import Accessories from './components/Accessories';
import Reviews from './components/Reviews';
import WhatsAppBtn from './components/WhatsAppBtn';
import Footer from './components/Footer'; // <--- NOVO

function App() {
  return (
    <div className="font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-white">
      <Hero />
      <Visagismo />      {/* Seção Nova de Visagismo */}
      <Services />       {/* Ícones Explicativos */}
      <ServicePrices />  {/* Lista Completa (Brasileiro, Capping, etc) */}
      <Gallery />
      <Accessories />
      <Reviews />
      <Footer />         {/* Rodapé com Endereço e Pagamento */}
      <WhatsAppBtn />
    </div>
  );
}

export default App;