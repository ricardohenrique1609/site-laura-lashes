import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles, Wand2 } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Extensão de Cílios",
        desc: "Técnicas Clássico, Híbrido e Volume Russo. Aplicação segura fio a fio para um olhar marcante.",
        icon: <Eye className="text-brand-gold" size={32} />,
    },
    {
        id: 2,
        title: "Efeitos Personalizados",
        desc: "Tendências exclusivas: Wispy, Fada, Sereia, Cisne e Anime. Um design único desenhado para você.",
        icon: <Wand2 className="text-brand-gold" size={32} />,
    },
    {
        id: 3,
        title: "Brow Lamination",
        desc: "Sobrancelhas alinhadas, volumosas e preenchidas. O design ideal para harmonizar seu rosto.",
        icon: <Sparkles className="text-brand-gold" size={32} />,
    }
];

const Services = () => {
    return (
        <section id="servicos" className="py-20 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
                        Menu de Procedimentos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mt-3">
                        Escolha sua transformação
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group p-8 rounded-2xl bg-brand-light border border-transparent hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 text-center"
                        >
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-serif mb-4 text-brand-dark">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {service.desc}
                            </p>
                            {/* NÚMERO CORRIGIDO AQUI EMBAIXO: final 5583 */}
                            <a href="https://wa.me/5513974235583" className="text-brand-gold text-xs font-bold uppercase tracking-widest border-b border-brand-gold/30 pb-1 hover:border-brand-gold transition-colors">
                                Saiba mais
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;