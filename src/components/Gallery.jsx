import React from 'react';
import { motion } from 'framer-motion';
import studioImg from '../assets/studio.jpg';
import actionImg from '../assets/action.jpg';
import materialsImg from '../assets/materials.jpg';

const Gallery = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="md:w-1/2">
                        <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-2 block">
                            O Espaço
                        </span>
                        <h2 className="text-4xl font-serif text-brand-dark mb-6">
                            Conforto e materiais de <span className="italic text-brand-gold">alta performance.</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Cada detalhe do studio foi pensado para o seu relaxamento. Trabalhamos exclusivamente com fios de seda e materiais premium (Cherry) para garantir durabilidade e saúde aos seus fios naturais.
                        </p>
                    </div>

                    {/* Mosaico de Fotos */}
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <img src={studioImg} alt="Studio Laura Garcia" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                            <img src={materialsImg} alt="Materiais Premium" className="rounded-2xl shadow-lg w-full h-40 object-cover" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="pt-8"
                        >
                            <img src={actionImg} alt="Aplicação de Cílios" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;