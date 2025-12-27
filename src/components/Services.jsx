import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Crown, Star } from 'lucide-react';

const categories = [
    {
        title: "Extensões Clássicas & Volumes",
        items: [
            { name: "Fio a Fio (Clássico)", desc: "Leveza e naturalidade absoluta.", msg: "Quero saber sobre o Fio a Fio." },
            { name: "Volume Brasileiro", desc: "Formato em Y. Retenção excelente e efeito preenchido.", msg: "Tenho interesse no Volume Brasileiro." },
            { name: "Volume Egípcio", desc: "Formato em W. Mais volume e sofisticação.", msg: "Tenho interesse no Volume Egípcio." },
            { name: "Volume Russo", desc: "Fans artesanais para um olhar marcante e glamuroso.", msg: "Tenho interesse no Volume Russo." },
            { name: "Volume Híbrido", desc: "A mistura perfeita entre clássico e russo.", msg: "Tenho interesse no Volume Híbrido." },
            { name: "Volume Glamour 5D", desc: "Densidade máxima com leveza.", msg: "Tenho interesse no Volume Glamour 5D." },
        ]
    },
    {
        title: "Capping (Durabilidade 30+ dias)",
        highlight: true,
        items: [
            { name: "Mega Brasileiro", desc: "Técnica avançada de Capping com fios Y.", msg: "Como funciona o Capping Mega Brasileiro?" },
            { name: "Mega Egípcio", desc: "Técnica avançada de Capping com fios W.", msg: "Como funciona o Capping Mega Egípcio?" },
            { name: "Volume 8D", desc: "Super preenchimento com alta durabilidade.", msg: "Tenho interesse no Volume 8D." },
        ]
    }
];

const ServicePrices = () => {
    const generateLink = (msg) => {
        return `https://wa.me/5513974235583?text=${encodeURIComponent("Olá Laura! " + msg)}`;
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">

                <div className="text-center mb-16">
                    <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">Menu Exclusivo</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-3 mb-6">Escolha sua transformação</h2>
                    <p className="text-gray-500 font-light">Técnicas modernas para todos os estilos. Clique para consultar valores.</p>
                </div>

                <div className="space-y-16">
                    {categories.map((cat, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-2xl font-serif text-brand-dark mb-8 flex items-center gap-3 justify-center md:justify-start">
                                {cat.highlight && <Crown className="text-brand-gold" />}
                                {cat.title}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cat.items.map((service, index) => (
                                    <motion.a
                                        key={index}
                                        href={generateLink(service.msg)}
                                        target="_blank"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`group flex flex-col justify-between p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 border cursor-pointer ${cat.highlight
                                                ? "bg-brand-dark text-white border-brand-gold/30 hover:border-brand-gold hover:shadow-brand-gold/20 hover:shadow-xl"
                                                : "bg-brand-light text-brand-dark border-transparent hover:border-brand-gold/30 hover:shadow-xl"
                                            }`}
                                    >
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className={`text-xl font-serif transition-colors ${cat.highlight ? "text-brand-gold" : "text-brand-dark group-hover:text-brand-gold"}`}>
                                                    {service.name}
                                                </h4>
                                                {cat.highlight && <Star size={16} className="text-brand-gold fill-brand-gold animate-pulse" />}
                                            </div>
                                            <p className={`text-sm font-light mb-6 ${cat.highlight ? "text-gray-400" : "text-gray-500"}`}>
                                                {service.desc}
                                            </p>
                                        </div>

                                        <div className={`flex items-center justify-between pt-4 mt-auto border-t ${cat.highlight ? "border-white/10" : "border-brand-dark/5"}`}>
                                            <span className="text-lg font-serif font-medium opacity-80">Consultar</span>
                                            <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Agendar <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicePrices;