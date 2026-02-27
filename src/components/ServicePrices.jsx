import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Crown, Star, Eye } from 'lucide-react';

const categories = [
    {
        id: 'classicos',
        title: "Clássicos & Volumes",
        description: "Técnicas tradicionais e volumes para todos os gostos.",
        icon: <Eye size={18} />,
        items: [
            { name: "Fio a Fio (Clássico)", desc: "Leveza e naturalidade absoluta.", msg: "Quero saber sobre o Fio a Fio." },
            { name: "Volume Russo", desc: "Fans artesanais para um olhar marcante.", msg: "Tenho interesse no Volume Russo." },
            { name: "Volume Híbrido", desc: "A mistura perfeita entre clássico e russo.", msg: "Tenho interesse no Volume Híbrido." },
            { name: "Volume Brasileiro", desc: "Formato em Y. Retenção excelente.", msg: "Tenho interesse no Volume Brasileiro." },
            { name: "Volume Egípcio", desc: "Formato em W. Mais volume e sofisticação.", msg: "Tenho interesse no Volume Egípcio." },
            { name: "Volume Glamour 5D", desc: "Densidade máxima com leveza.", msg: "Tenho interesse no Volume Glamour 5D." },
            { name: "Fox Eyes", desc: "Olhar alongado e sedutor.", msg: "Tenho interesse no efeito Fox Eyes." },
            { name: "Efeito Sirena", desc: "O charme do efeito sereia.", msg: "Tenho interesse no Efeito Sirena." },
            { name: "Efeito Delineado", desc: "Simula um delineado perfeito.", msg: "Tenho interesse no Efeito Delineado." },
        ]
    },
    {
        id: 'personalizados',
        title: "Efeitos Personalizados",
        description: "Tendências exclusivas e artísticas.",
        icon: <Sparkles size={18} />,
        items: [
            { name: "Efeito Aura", desc: "Delicadeza e presença.", msg: "Tenho interesse no Efeito Aura." },
            { name: "Efeito Cisne", desc: "Elegância e curvatura diferenciada.", msg: "Tenho interesse no Efeito Cisne." },
            { name: "Efeito Kim Kardashian", desc: "O famoso visual wispy das celebridades.", msg: "Tenho interesse no Efeito Kim K." },
            { name: "Wet Wispy", desc: "Efeito molhado com textura.", msg: "Tenho interesse no Wet Wispy." },
            { name: "Efeito Anime", desc: "Estilo boneca marcante.", msg: "Tenho interesse no Efeito Anime." },
            { name: "Cílios Marrom", desc: "Brasileiro, Fox e outros na cor marrom.", msg: "Tenho interesse nos Cílios Marrom." },
        ]
    },
    {
        id: 'capping',
        title: "Capping (30+ Dias)",
        description: "Alta retenção e durabilidade máxima.",
        highlight: true,
        icon: <Crown size={18} />,
        items: [
            { name: "Mega Brasileiro", desc: "Técnica Capping com fios Y.", msg: "Como funciona o Capping Mega Brasileiro?" },
            { name: "Mega Egípcio", desc: "Técnica Capping com fios W.", msg: "Como funciona o Capping Mega Egípcio?" },
            { name: "Volume 8D", desc: "Super preenchimento e durabilidade.", msg: "Tenho interesse no Volume 8D." },
            { name: "Mega Fox", desc: "Estilo Fox com técnica de retenção.", msg: "Como funciona o Capping Mega Fox?" },
            { name: "Mega Sirena", desc: "Estilo Sirena com técnica de retenção.", msg: "Como funciona o Capping Mega Sirena?" },
            { name: "Mega Delineado", desc: "Estilo Delineado com técnica de retenção.", msg: "Como funciona o Capping Mega Delineado?" },
        ]
    },
    {
        id: 'sobrancelhas',
        title: "Sobrancelhas",
        description: "Design, henna e tratamentos para sobrancelhas impecáveis.",
        icon: <Sparkles size={18} />,
        items: [
            { name: "Design de Sobrancelha", desc: "Modelagem personalizada respeitando o formato do seu rosto.", msg: "Quero saber sobre o Design de Sobrancelha." },
            { name: "Design com Henna", desc: "Design completo + coloração natural com duração de até 20 dias.", msg: "Tenho interesse no Design com Henna." },
            { name: "Henna Árabe", desc: "Coloração intensa e duradoura com acabamento perfeito.", msg: "Tenho interesse na Henna Árabe." },
            { name: "Brow Lamination", desc: "Fios penteados, alinhados e volumosos — efeito duradouro.", msg: "Quero saber sobre Brow Lamination." },
            { name: "Laminação + Design", desc: "Combo completo: laminação com design personalizado.", msg: "Tenho interesse em Laminação + Design." },
            { name: "Sobrancelha Fio a Fio", desc: "Definição milimétrica para um olhar marcante e natural.", msg: "Tenho interesse em Sobrancelha Fio a Fio." },
        ]
    }
];

const ServicePrices = () => {
    const [activeTab, setActiveTab] = useState(0); // 0 = Primeira categoria ativa

    const generateLink = (msg) => {
        return `https://wa.me/5513974235583?text=${encodeURIComponent("Olá Laura! " + msg)}`;
    };

    return (
        <section className="py-20 bg-white" id="menu">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="text-center mb-10">
                    <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">Menu Oficial</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-3 mb-4">Escolha sua transformação</h2>
                    <p className="text-gray-500 font-light max-w-2xl mx-auto">
                        Navegue pelas categorias abaixo para encontrar o estilo ideal para você.
                    </p>
                </div>

                {/* --- NAVEGAÇÃO EM ABAS (TABS) --- */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-100 pb-4">
                    {categories.map((cat, index) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(index)}
                            className={`relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${activeTab === index
                                    ? "bg-brand-dark text-brand-gold shadow-lg scale-105"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                }`}
                        >
                            {cat.icon}
                            {cat.title}
                            {/* Indicador visual se for Capping (Destaque) */}
                            {cat.highlight && activeTab !== index && (
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* --- CONTEÚDO DA ABA ATIVA --- */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Descrição da Categoria */}
                            <div className="text-center mb-8">
                                <p className="text-gray-500 italic font-light">{categories[activeTab].description}</p>
                            </div>

                            {/* Grid de Serviços */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categories[activeTab].items.map((service, index) => (
                                    <a
                                        key={index}
                                        href={generateLink(service.msg)}
                                        target="_blank"
                                        className={`group flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${categories[activeTab].highlight
                                                ? "bg-brand-dark text-white border-brand-gold/30 hover:border-brand-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                                                : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30"
                                            }`}
                                    >
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className={`text-lg font-serif ${categories[activeTab].highlight ? "text-brand-gold" : "text-brand-dark"}`}>
                                                    {service.name}
                                                </h4>
                                                {categories[activeTab].highlight && (
                                                    <Star size={16} className="text-brand-gold fill-brand-gold animate-pulse" />
                                                )}
                                            </div>
                                            <p className={`text-sm font-light mb-4 ${categories[activeTab].highlight ? "text-gray-400" : "text-gray-500"}`}>
                                                {service.desc}
                                            </p>
                                        </div>

                                        <div className={`flex items-center justify-between pt-4 mt-auto border-t ${categories[activeTab].highlight ? "border-white/10" : "border-gray-100"}`}>
                                            <span className="text-sm font-medium opacity-80">Consultar</span>
                                            <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${categories[activeTab].highlight
                                                    ? "bg-brand-gold text-brand-dark group-hover:bg-white"
                                                    : "bg-brand-dark text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark"
                                                }`}>
                                                Agendar <ArrowRight size={12} />
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
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