import React from 'react';
import Hero from './components/HeroSection';
import Services from './components/Services'; // Essa mantém a explicação visual (ícones)
import ServicePrices from './components/ServicePrices'; // <--- A NOVA TABELA AQUI
import Gallery from './components/Gallery';
import Accessories from './components/Accessories';
import Reviews from './components/Reviews';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  return (
    <div className="font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-white">
      <Hero />
      <Services />       {/* Explica o que é cada coisa (educativo) */}
      <Gallery />        {/* Mostra que o lugar é chique */}
      <ServicePrices />  {/* Mostra o preço dos serviços (venda) */}
      <Accessories />    {/* Venda extra de produtinhos */}
      <Reviews />        {/* Prova que é bom */}

      <footer className="bg-brand-dark text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-brand-gold mb-6">Laura Garcia</h2>
          <p className="text-gray-400 text-xs tracking-widest uppercase mb-8">
            Itanhaém • São Paulo
          </p>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © 2025 Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppBtn />
    </div>
  );
}

export default App;