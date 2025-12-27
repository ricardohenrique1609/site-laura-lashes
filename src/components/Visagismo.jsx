import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Sparkles } from 'lucide-react';

const Visagismo = () => {
    return (
        <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
            {/* Detalhe de fundo dourado */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <div className="flex items-center gap-2 text-brand-gold mb-4">
                        <ScanFace size={24} />
                        <span className="text-sm font-bold tracking-[0.2em] uppercase">Exclusividade</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                        Visagismo <span className="text-brand-gold italic">Avançado</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                        Antes de qualquer procedimento, realizo uma análise completa das características do seu olhar. Avalio o formato dos olhos, eixo de abertura, profundidade e a curvatura natural dos fios.
                    </p>
                    <div className="bg-white/5 p-6 rounded-xl border-l-4 border-brand-gold backdrop-blur-sm">
                        <p className="italic text-gray-200">
                            "Não é apenas sobre colocar cílios. É sobre definir o design ideal que valoriza seus traços únicos e garante um resultado harmônico e personalizado."
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center"
                >
                    {/* Se tiver aquela foto dela segurando a pinça/lupa perto do olho, ficaria linda aqui. 
               Por enquanto, vou usar um ícone ilustrativo grande ou caixa decorativa */}
                    <div className="relative border border-brand-gold/30 p-8 rounded-full w-64 h-64 flex items-center justify-center">
                        <div className="absolute inset-0 border border-brand-gold/10 rounded-full scale-125 animate-pulse"></div>
                        <div className="text-center">
                            <Sparkles size={48} className="text-brand-gold mx-auto mb-2" />
                            <span className="font-serif text-2xl">Olhar<br />Único</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Visagismo;