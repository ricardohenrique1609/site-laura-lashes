import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Necessaire G",
        desc: "Espaçosa, prática e estilosa — perfeita pra levar tudo com você!",
        price: "R$ 29,80",
        message: "Olá Laura! Tenho interesse na Necessaire G."
    },
    {
        id: 2,
        name: "Necessaire M",
        desc: "Compacta e charmosa, ideal pro dia a dia.",
        price: "R$ 18,00",
        message: "Olá Laura! Tenho interesse na Necessaire M."
    },
    {
        id: 3,
        name: "Porta Joias G",
        desc: "Organização com elegância. Cabe tudo!",
        price: "R$ 29,80",
        message: "Olá Laura! Tenho interesse no Porta Joias G."
    },
    {
        id: 4,
        name: "Porta Joia P",
        desc: "Delicado, prático e cheio de charme.",
        price: "R$ 22,00",
        message: "Olá Laura! Tenho interesse no Porta Joia P."
    },
    {
        id: 5,
        name: "Kit de Pincéis",
        desc: "Seus pincéis dos sonhos por um preço incrível.",
        price: "R$ 11,99",
        message: "Olá Laura! Tenho interesse no Kit de Pincéis."
    }
];

const Accessories = () => {
    // Função que gera o link do WhatsApp
    const generateLink = (message) => {
        const phone = "5513991700734";
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phone}?text=${encodedMessage}`;
    };

    return (
        <section className="py-20 bg-[#FDFBF7]"> {/* Fundo Creme igual da imagem */}
            <div className="container mx-auto px-6 max-w-3xl">

                {/* Cabeçalho igual ao do Story */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-2 tracking-wide">
                        TABELA DE VALORES
                    </h2>
                    <p className="text-brand-dark italic font-serif text-xl">
                        A beleza está nos detalhes!
                    </p>
                </div>

                {/* Lista de Produtos */}
                <div className="space-y-6">
                    {products.map((item, index) => (
                        <motion.a
                            key={item.id}
                            href={generateLink(item.message)}
                            target="_blank"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="block group bg-white p-6 rounded-xl shadow-sm border border-brand-gold/20 hover:border-brand-gold hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                                <div>
                                    <h3 className="text-xl font-serif text-brand-gold uppercase tracking-widest mb-1 group-hover:text-brand-dark transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm italic font-light">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                    <span className="text-2xl font-serif text-brand-dark font-medium">
                                        {item.price}
                                    </span>
                                    <div className="bg-brand-gold text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        <ShoppingBag size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Rodapé da tabela */}
                <div className="text-center mt-12 text-brand-gold text-xs font-bold tracking-[0.2em] uppercase opacity-70">
                    Todas as cores têm o mesmo valor
                </div>

            </div>
        </section>
    );
};

export default Accessories;