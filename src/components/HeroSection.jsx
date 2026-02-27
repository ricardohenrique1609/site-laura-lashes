import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import heroImg from '../assets/hero.jpg';
import logoImg from '../assets/logo.png'; // Importando a logo

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] bg-brand-dark overflow-hidden">

            {/* Imagem de Fundo com Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>
                <img src={heroImg} alt="Cílios Perfeitos" className="w-full h-full object-cover opacity-80" />
            </div>

            {/* Conteúdo Principal */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center lg:flex-row items-center lg:justify-between gap-12">

                {/* Texto e Logo (Esquerda) */}
                <div className="lg:w-1/2 text-white space-y-8 mt-10 lg:mt-0">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* LOGO AQUI - Substituindo o texto escrito */}
                        <img
                            src={logoImg}
                            alt="Laura Garcia Lash Designer"
                            className="w-64 md:w-80 lg:w-96 mb-6 drop-shadow-2xl filter brightness-110" // Brilho extra p/ o dourado
                        />

                        {/* Pequeno texto de apoio */}
                        <div className="flex items-center gap-2 text-brand-gold text-sm font-medium tracking-[0.2em] uppercase mb-4 pl-2">
                            <div className="h-[1px] w-8 bg-brand-gold"></div>
                            Exclusividade &amp; Requinte
                        </div>

                        <h2 className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg pl-2 border-l-2 border-brand-gold/30">
                            Realce sua beleza natural com extensão de cílios, design de sobrancelhas e técnicas de visagismo internacional.
                        </h2>
                    </motion.div>

                    {/* Botões */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 pl-2"
                    >
                        <a
                            href="https://wa.me/5513974235583?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                            target="_blank"
                            className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                        >
                            Agendar Horário <ArrowRight size={18} />
                        </a>

                        <a
                            href="#menu"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('service-prices')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="border border-white/30 text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Star size={18} className="text-brand-gold" /> Ver Menu
                        </a>
                    </motion.div>
                </div>

                {/* Elemento Decorativo (Direita - Opcional, mantém limpo para destacar a logo) */}
                <div className="lg:w-1/2 hidden lg:block"></div>
            </div>
        </section>
    );
};

export default HeroSection;