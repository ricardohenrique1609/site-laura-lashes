import React from 'react';
import { motion } from 'framer-motion';
// Importando as imagens (A antiga + as 3 novas)
import actionImg from '../assets/action.jpg';   // Laura fazendo cílios
import productsImg from '../assets/products.jpg'; // Produtos Cherry
import brushesImg from '../assets/brushes.jpg';   // Pincéis organizados
import decorImg from '../assets/decor.jpg';       // Espelhos decorativos

const Gallery = () => {
    const photoAnim = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Texto Descritivo */}
                    <div className="lg:w-2/5 mb-8 lg:mb-0">
                        <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            Nosso Padrão
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
                            Materiais de elite e <span className="italic text-brand-gold">cuidado em cada detalhe.</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
                            Não é apenas sobre cílios, é sobre a experiência. Utilizamos exclusivamente a linha premium <strong>Cherry Lash</strong> e materiais descartáveis rigorosamente organizados para garantir sua saúde e segurança.
                        </p>

                        {/* Pequenos destaques */}
                        <div className="flex gap-6 text-sm text-brand-dark font-medium tracking-wider uppercase">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div> Biossegurança
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div> Linha Cherry
                            </div>
                        </div>
                    </div>

                    {/* Mosaico de 4 Fotos (Grid 2x2) */}
                    <div className="lg:w-3/5 grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">

                        {/* Foto 1: Laura Trabalhando (Ação) */}
                        <motion.div variants={photoAnim} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative overflow-hidden rounded-2xl shadow-lg border border-brand-gold/20 group">
                            <img src={actionImg} alt="Aplicação de Cílios" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>

                        {/* Foto 2: Produtos Cherry (Qualidade) */}
                        <motion.div variants={photoAnim} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative overflow-hidden rounded-2xl shadow-lg border border-brand-gold/20 group">
                            <img src={productsImg} alt="Produtos Cherry Lash" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>

                        {/* Foto 3: Decoração (Estética) */}
                        <motion.div variants={photoAnim} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative overflow-hidden rounded-2xl shadow-lg border border-brand-gold/20 group">
                            <img src={decorImg} alt="Decoração Studio" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>

                        {/* Foto 4: Pincéis (Higiene) */}
                        <motion.div variants={photoAnim} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative overflow-hidden rounded-2xl shadow-lg border border-brand-gold/20 group">
                            <img src={brushesImg} alt="Materiais Descartáveis" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;