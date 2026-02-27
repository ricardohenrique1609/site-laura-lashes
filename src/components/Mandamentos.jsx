import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import mandamentosImg from '../assets/mandamentos-rotated.png';
import obrigadaImg from '../assets/obrigada-rotated.png';

const mandamentos = [
    { num: "01", title: "Não molharás por 24h", desc: "Evite água, suor e umidade nos cílios nas primeiras 24 horas após a aplicação." },
    { num: "02", title: "Não coçarás ou puxarás", desc: "Não coçar, esfregar ou puxar os fios — isso causa queda precoce." },
    { num: "03", title: "Não usarás rímel", desc: "Não use máscara para cílios nos fios. Se necessário, aplique apenas na ponta." },
    { num: "04", title: "Evitarás vapores", desc: "Sauna, banho quente prolongado e vapor excessivo enfraquecem a cola." },
    { num: "05", title: "Não usarás demaquilantes", desc: "Evite removedores com óleo ou demaquilantes próximos à linha dos cílios." },
    { num: "06", title: "Lavarás com shampoo de bebê", desc: "Use shampoo de bebê neutro para higienizar os cílios suavemente." },
    { num: "07", title: "Pentearás diariamente", desc: "Use a escovinha fornecida pela Laura para pentear os fios pela manhã e após o banho." },
    { num: "08", title: "Enxugarás o rosto delicadamente", desc: "Bata suavemente com a toalha — nunca esfregue o rosto próximo aos olhos." },
    { num: "09", title: "Não dormirás com o rosto no travesseiro", desc: "Durma de lado ou de costas para preservar o formato e a durabilidade dos fios." },
    { num: "10", title: "Farás as manutenções regularmente", desc: "Agende a manutenção a cada 21-30 dias para manter o preenchimento e a beleza do olhar." },
];

const Mandamentos = () => {
    const [open, setOpen] = useState(null);

    return (
        <section className="bg-brand-dark text-white relative overflow-hidden">
            {/* Decoração de fundo */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            {/* ─── Bloco principal: Accordion + Card portrait ─── */}
            <div className="container mx-auto px-6 max-w-6xl relative z-10 pt-20 pb-14">

                {/* Cabeçalho */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-2 text-brand-gold mb-4">
                        <ShieldCheck size={20} />
                        <span className="text-xs font-bold tracking-[0.25em] uppercase">Cuidados Essenciais</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        Os 10 Mandamentos<br />
                        <span className="text-brand-gold italic">das Cilhudas</span>
                    </h2>
                    <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto">
                        Siga estas orientações para garantir a durabilidade e a beleza dos seus cílios por mais tempo.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Accordion — esquerda */}
                    <div className="lg:w-3/5 w-full space-y-2">
                        {mandamentos.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03] backdrop-blur-sm"
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-brand-gold font-serif text-base font-bold w-7 shrink-0">{item.num}</span>
                                        <span className="font-medium text-white text-sm">{item.title}</span>
                                    </div>
                                    <ChevronDown
                                        size={15}
                                        className={`text-brand-gold shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {open === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.22 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 pb-4 text-sm text-gray-400 font-light border-t border-white/5 pt-3 ml-11">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Card mandamentos (portrait) — direita */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-2/5 w-full lg:sticky lg:top-8"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(197,160,89,0.15)] border border-brand-gold/20">
                            <img
                                src={mandamentosImg}
                                alt="Os 10 Mandamentos das Cilhudas"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* ─── Banner obrigada — full width ─── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full relative"
            >
                {/* Linha decorativa acima */}
                <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-6"></div>

                <div className="container mx-auto px-6 max-w-6xl py-10">
                    <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(197,160,89,0.1)] border border-brand-gold/20">
                        <img
                            src={obrigadaImg}
                            alt="Obrigada por confiar no meu trabalho"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Mandamentos;
