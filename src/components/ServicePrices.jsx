import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Crown, Star, Eye } from 'lucide-react';

const categories = [
    {
        title: "Extensões & Volumes",
        description: "Técnicas clássicas, volumes e efeitos tradicionais.",
        icon: <Eye className="text-brand-gold" />,
        items: [
            { name: "Fio a Fio (Clássico)", desc: "Leveza e naturalidade absoluta.", msg: "Quero saber sobre o Fio a Fio." },
            { name: "Volume Russo", desc: "Fans artesanais para um olhar marcante.", msg: "Tenho interesse no Volume Russo." },
            { name: "Volume Híbrido", desc: "A mistura perfeita entre clássico e russo.", msg: "Tenho interesse no Volume Híbrido." },
            { name: "Volume Brasileiro", desc: "Formato em Y. Retenção excelente.", msg: "Tenho interesse no Volume Brasileiro." },
            { name: "Volume Egípcio", desc: "Formato em W. Mais volume e sofisticação.", msg: "Tenho interesse no Volume Egípcio." },
            { name: "Volume Glamour 5D", desc: "Densidade máxima com leveza.", msg: "Tenho interesse no Volume Glamour 5D." },
            // MOVIDOS PARA CÁ (Conforme pedido da Laura)
            { name: "Fox Eyes", desc: "Olhar alongado e sedutor.", msg: "Tenho interesse no efeito Fox Eyes." },
            { name: "Efeito Sirena", desc: "O charme do efeito sereia.", msg: "Tenho interesse no Efeito Sirena." },
            { name: "Efeito Delineado", desc: "Simula um delineado perfeito.", msg: "Tenho interesse no Efeito Delineado." },
        ]
    },
    {
        title: "Efeitos Personalizados",
        description: "Tendências exclusivas.",
        icon: <Sparkles className="text-brand-gold" />,
        items: [
            // A LISTA AGORA COMEÇA NO AURA
            { name: "Efeito Aura", desc: "Delicadeza e presença.", msg: "Tenho interesse no Efeito Aura." },
            { name: "Efeito Cisne", desc: "Elegância e curvatura diferenciada.", msg: "Tenho interesse no Efeito Cisne." },
            { name: "Efeito Kim Kardashian", desc: "O famoso visual wispy das celebridades.", msg: "Tenho interesse no Efeito Kim K." },
            { name: "Wet Wispy", desc: "Efeito molhado com textura.", msg: "Tenho interesse no Wet Wispy." },
            { name: "Efeito Anime", desc: "Estilo boneca marcante.", msg: "Tenho interesse no Efeito Anime." },
            { name: "Cílios Marrom", desc: "Brasileiro, Fox e outros na cor marrom.", msg: "Tenho interesse nos Cílios Marrom." },
        ]
    },
    {
        title: "Capping (Durabilidade 30+)",
        description: "Alta retenção. A técnica mais duradoura do studio.",
        highlight: true,
        icon: <Crown className="text-brand-gold" />,
        items: [
            { name: "Mega Brasileiro", desc: "Técnica Capping com fios Y.", msg: "Como funciona o Capping Mega Brasileiro?" },
            { name: "Mega Egípcio", desc: "Técnica Capping com fios W.", msg: "Como funciona o Capping Mega Egípcio?" },
            { name: "Volume 8D", desc: "Super preenchimento e durabilidade.", msg: "Tenho interesse no Volume 8D." },
            { name: "Mega Fox", desc: "Estilo Fox com técnica de retenção.", msg: "Como funciona o Capping Mega Fox?" },
            { name: "Mega Sirena", desc: "Estilo Sirena com técnica de retenção.", msg: "Como funciona o Capping Mega Sirena?" },
            { name: "Mega Delineado", desc: "Estilo Delineado com técnica de retenção.", msg: "Como funciona o Capping Mega Delineado?" },
        ]
    }
];

const ServicePrices = () => {
    const generateLink = (msg) => {
        return `https://wa.me/5513974235583?text=${encodeURIComponent("Olá Laura! " + msg)}`;
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="text-center mb-16">
                    <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">Menu Oficial</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-3 mb-6">Escolha sua transformação</h2>
                    <p className="text-gray-500 font-light max-w-2xl mx-auto">
                        Trabalhamos exclusivamente com as técnicas abaixo. Clique para agendar.
                    </p>
                </div>

                <div className="space-y-20">
                    {categories.map((cat, catIndex) => (
                        <div key={catIndex}>
                            <div className="flex flex-col items-center md:items-start mb-8 border-b border-brand-gold/20 pb-4">
                                <h3 className="text-2xl md:text-3xl font-serif text-brand-dark flex items-center gap-3">
                                    {cat.icon}
                                    {cat.title}
                                </h3>
                                <p className="text-gray-500 text-sm mt-2 font-light ml-1">{cat.description}</p>
                            </div>

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
                                                {cat.highlight ? (
                                                    <Star size={18} className="text-brand-gold fill-brand-gold animate-pulse" />
                                                ) : (
                                                    <Sparkles size={18} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                                )}
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

                <div className="mt-16 text-center border-t border-gray-100 pt-8">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">
                        Aceitamos Pix e Cartão de Crédito
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ServicePrices;