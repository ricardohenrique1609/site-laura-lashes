import React from 'react';
import { motion } from 'framer-motion';
// Importando a imagem que você colocou na pasta assets
import heroImg from '../assets/hero.jpg';

const Hero = () => {
    return (
        <section className="relative bg-brand-light min-h-screen flex items-center pt-10 md:pt-0 overflow-hidden">

            {/* Círculo decorativo de fundo (Dourado bem clarinho) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 z-10">

                {/* Lado Esquerdo: Textos */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <span className="text-brand-gold tracking-[0.25em] text-xs md:text-sm font-bold uppercase mb-4 block">
                        Lash Designer • Itanhaém
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-brand-dark mb-6 leading-[1.1]">
                        Cílios não são <br /> apenas cílios; <br />
                        <span className="italic text-brand-gold">são a minha arte.</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 font-light max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Realce sua beleza natural com técnicas personalizadas de extensão de cílios e design de sobrancelhas.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="https://wa.me/13974235583"
                            target="_blank"
                            className="bg-brand-dark text-white px-8 py-4 rounded-full hover:bg-brand-gold hover:scale-105 transition-all duration-300 shadow-lg uppercase text-xs tracking-widest font-medium"
                        >
                            Agendar Horário
                        </a>
                        <a
                            href="#servicos"
                            className="px-8 py-4 rounded-full border border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 uppercase text-xs tracking-widest font-medium"
                        >
                            Ver Serviços
                        </a>
                    </div>
                </motion.div>

                {/* Lado Direito: Foto */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center relative"
                >
                    {/* Foto com moldura estilizada */}
                    <div className="relative w-72 h-80 md:w-[450px] md:h-[550px]">
                        {/* Borda deslocada para efeito artístico */}
                        <div className="absolute inset-0 border-2 border-brand-gold translate-x-4 translate-y-4 rounded-t-[10rem] rounded-b-lg"></div>

                        {/* A Imagem em si */}
                        <div className="absolute inset-0 rounded-t-[10rem] rounded-b-lg overflow-hidden shadow-2xl bg-gray-200">
                            <img
                                src={heroImg}
                                alt="Laura Garcia Lash Designer"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;