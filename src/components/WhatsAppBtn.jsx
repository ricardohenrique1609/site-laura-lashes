import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppBtn = () => {
    return (
        <motion.a
            href="https://wa.me/5513991700734"
            target="_blank"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }} // Só aparece depois de 1seg
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:brightness-110 transition-all group"
        >
            <MessageCircle size={24} fill="white" className="group-hover:rotate-12 transition-transform" />
            {/* Texto some em telas muito pequenas pra não atrapalhar, aparece em maiores */}
            <span className="font-semibold text-sm">Agendar</span>

            {/* Efeito de 'Pulse' para chamar atenção */}
            <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-0 animate-ping"></span>
        </motion.a>
    );
};

export default WhatsAppBtn;