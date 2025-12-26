import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        id: 1,
        text: "O cílios está intacto ainda, eu adorei! Realmente por falta de costume achei que estranharia, mas com tantos elogios parece que você não precisa nem de maquiagem. Simplesmente apaixonada!",
        author: "Cliente Satisfeita",
        tag: "Retenção Incrível"
    },
    {
        id: 2,
        text: "Diva, eu adorei! Você seguiu exatamente a anatomia do meu olho. Isso valorizou demais, ficou exatamente como eu queria.",
        author: "Cliente VIP",
        tag: "Visagismo"
    },
    {
        id: 3,
        text: "Ficou absolutamente lindo! Os cílios estão perfeitos, com volume e comprimentos ideais. Eu me senti uma rainha! Obrigada por exaltar minha autoestima.",
        author: "Cliente Feliz",
        tag: "Autoestima"
    }
];

const Reviews = () => {
    return (
        <section className="py-20 bg-brand-light relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">
                        Elas amaram, <br /> você também vai.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gold/10 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-brand-gold/20" size={40} />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                                "{review.text}"
                            </p>
                            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                                <span className="font-serif font-bold text-brand-dark">{review.author}</span>
                                <span className="text-xs bg-brand-light px-2 py-1 rounded text-brand-dark font-medium uppercase tracking-wider">
                                    {review.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://wa.me/5513991700734" className="text-brand-gold border-b border-brand-gold pb-1 text-sm font-bold uppercase tracking-widest hover:text-brand-dark hover:border-brand-dark transition-all">
                        Ver mais feedbacks no Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;