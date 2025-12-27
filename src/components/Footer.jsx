import React from 'react';
import { MapPin, CreditCard, Instagram, Clock } from 'lucide-react';
import logoImg from '../assets/logo.png'; // Importando a logo

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-brand-gold/10 overflow-hidden relative">
            {/* Luz de fundo suave */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row gap-16 mb-12 items-center justify-between">

                    {/* 1. LADO ESQUERDO (CELULAR COM MAPA AO VIVO) */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-start perspective-1000 relative z-10">
                        <div className="relative w-[280px] h-[580px] bg-black rounded-[45px] shadow-2xl border-[3px] border-[#E5D3B3] ring-1 ring-black/50 overflow-hidden">

                            {/* Dynamic Island */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 pointer-events-none"></div>

                            {/* TELA COM MAPA (IFRAME) */}
                            <div className="w-full h-full bg-gray-100 relative rounded-[40px] overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.755498428867!2d-46.79375892386866!3d-24.074900578500216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d6435032df49%3A0xc0022370c655075c!2sR.%20Telmo%20Diz%2C%20246%20-%20Vila%20S%C3%A3o%20Paulo%2C%20Itanha%C3%A9m%20-%20SP%2C%2011740-000!5e0!3m2!1spt-BR!2sbr!4v1708976451234!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "grayscale(20%) sepia(10%) contrast(1.1)" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full object-cover"
                                ></iframe>

                                {/* Barra inferior iOS */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/40 rounded-full z-20 pointer-events-none backdrop-blur-sm"></div>
                            </div>

                            {/* Brilho metálico na borda */}
                            <div className="absolute inset-0 rounded-[42px] border border-white/10 pointer-events-none z-30"></div>
                        </div>
                    </div>

                    {/* 2. LADO DIREITO (LOGO E INFOS) */}
                    <div className="lg:w-1/2 space-y-10 relative z-10 lg:pl-12">
                        <div>
                            {/* AQUI ESTÁ A LOGO NO LUGAR DO NOME */}
                            <img src={logoImg} alt="Laura Garcia" className="w-48 mb-6 filter brightness-110" />

                            <p className="text-gray-400 text-sm leading-relaxed max-w-md font-light">
                                Especialista em realçar sua beleza natural através de técnicas avançadas de Visagismo e Extensão de Cílios.
                            </p>
                        </div>

                        <div className="flex gap-6 text-sm">
                            <a href="https://instagram.com/lauragarcialashes" target="_blank" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                                <Instagram size={18} className="text-brand-gold" /> @lauragarcialashes
                            </a>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Clock size={18} className="text-brand-gold" /> Hora marcada
                            </div>
                        </div>

                        {/* Box do Endereço */}
                        <div className="pl-6 border-l-2 border-brand-gold/30">
                            <h3 className="text-lg font-serif text-white mb-1">Nosso Endereço</h3>
                            <p className="text-gray-300 font-light">Rua Telmo Diz, 246</p>
                            <p className="text-sm text-gray-500">Vila São Paulo • Itanhaém - SP</p>

                            <div className="mt-4 flex items-center gap-2 text-xs text-brand-gold uppercase tracking-widest">
                                <MapPin size={14} />
                                <span className="opacity-80">Fácil localização</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-sm font-serif text-white flex items-center gap-2">
                                <CreditCard className="text-brand-gold" size={16} /> Pagamento
                            </h3>
                            <p className="text-gray-500 text-xs font-light">Pix, Dinheiro, Débito e Crédito (até 2x).</p>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 flex justify-center text-[10px] uppercase tracking-[0.2em] text-gray-600">
                    <p>© 2025 Laura Garcia Lashes</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;