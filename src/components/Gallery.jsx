import React from 'react';
import { motion } from 'framer-motion';
// Importando as 4 fotos
import studioImg from '../assets/studio.jpg'; // Ring light/Maca
import materialsImg from '../assets/materials.jpg'; // Caixinhas Cherry
import actionImg from '../assets/action.jpg'; // Aplicando cílios
import receptionImg from '../assets/reception.jpg'; // NOVA FOTO: Cadeiras rosa

const Gallery = () => {
    // Configuração da animação das fotos
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
                            O Espaço
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
                            Conforto, estética e <span className="italic text-brand-gold">materiais premium.</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
                            Um ambiente pensado para o seu relaxamento total. Trabalhamos exclusivamente com fios tecnológicos e a linha premium Cherry para garantir saúde, leveza e durabilidade incomparáveis.
                        </p>

                        {/* Pequenos destaques */}
                        <div className="flex gap-6 text-sm text-brand-dark font-medium tracking-wider uppercase">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div> Biossegurança
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div> Climatizado
                            </div>
                        </div>
                    </div>

                    {/* Mosaico de 4 Fotos (Grid 2x2) */}
                    <div className="lg:w-3/5 grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
                        <motion.div variants={photoAnim} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative overflow-hidden rounded-2xl shadow-lg border border-brand-gold/20 group">
                            <img src={receptionImg} alt="Recepção Studio Laura Garcia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>

                        <motion.div variants={photoAnim} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative overflow-hidden rounded-2xl shadow-lg border border-brand-gold/20 group">
                            <img src={materialsImg} alt="Materiais Premium Cherry" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>

                        <motion.div variants={photoAnim} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative overflow-hidden rounded-2xl shadow-lg border border-brand-gold/20 group">
                            <img src={actionImg} alt="Aplicação de Cílios" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>

                        <motion.div variants={photoAnim} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative overflow-hidden rounded-2xl shadow-lg border border-brand-gold/20 group">
                            <img src={studioImg} alt="Área de Atendimento" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;