import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const mainServices = [
    {
        id: 1,
        name: "Extensão Clássica (Fio a Fio)",
        desc: "Efeito rímel natural, leveza e sofisticação.",
        price: "Consultar",
        message: "Olá Laura! Gostaria de saber mais sobre a Extensão Clássica."
    },
    {
        id: 2,
        name: "Volume Híbrido",
        desc: "A mistura perfeita entre o clássico e o volume.",
        price: "Consultar",
        message: "Olá Laura! Poderia me explicar como funciona o Volume Híbrido?"
    },
    {
        id: 3,
        name: "Volume Russo",
        desc: "Olhar marcante, preenchido e glamuroso.",
        price: "Consultar",
        message: "Olá Laura! Tenho interesse no Volume Russo, como é?"
    },
    {
        id: 4,
        name: "Efeitos Personalizados",
        desc: "Wispy, Fada, Sereia, Cisne, Anime (Kim K).",
        price: "Consultar",
        message: "Olá Laura! Quais são os Efeitos Personalizados disponíveis?"
    },
    {
        id: 5,
        name: "Brow Lamination",
        desc: "Sobrancelhas alinhadas e encorpadas (efeito wild).",
        price: "Consultar",
        message: "Olá Laura! Gostaria de entender melhor o Brow Lamination."
    },
    {
        id: 6,
        name: "Design Personalizado",
        desc: "Mapeamento facial para encontrar o formato ideal.",
        price: "Consultar",
        message: "Olá Laura! Quero agendar um Design de Sobrancelhas."
    }
];

const ServicePrices = () => {
    const generateLink = (message) => {
        // NÚMERO CORRIGIDO DA BIO (com 55 do Brasil)
        const phone = "5513974235583";
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">

                <div className="text-center mb-16">
                    <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
                        Investimento
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-3 mb-6">
                        Menu de Procedimentos
                    </h2>
                    <p className="text-gray-500 font-light max-w-lg mx-auto">
                        Trabalhamos com visagismo para entregar o olhar perfeito para você.
                        Clique para consultar valores e disponibilidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mainServices.map((service, index) => (
                        <motion.a
                            key={service.id}
                            href={generateLink(service.message)}
                            target="_blank"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col justify-between bg-brand-light p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-brand-gold/30 cursor-pointer"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors">
                                        {service.name}
                                    </h3>
                                    <Sparkles size={16} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-gray-500 text-sm font-light mb-6">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-brand-dark/5 pt-4 mt-auto">
                                <span className="text-lg font-serif text-brand-gold font-medium">
                                    {service.price}
                                </span>
                                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Tirar Dúvida <ArrowRight size={14} />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">
                        Aceitamos Pix e Cartão de Crédito
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ServicePrices;