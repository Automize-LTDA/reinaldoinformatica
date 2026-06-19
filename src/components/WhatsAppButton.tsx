import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5581999374666'; // Default mockup phone number
  const message = 'Olá, vim pelo site da Reinaldo Informática e gostaria de saber mais sobre produtos e serviços.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-techGreen text-techBlack rounded-full shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:bg-[#00e577] transition-colors duration-300 cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Fale no WhatsApp"
    >
      <span className="absolute w-full h-full rounded-full bg-techGreen opacity-40 animate-ping z-[-1]" />
      <WhatsAppIcon className="w-7 h-7 fill-techBlack" />
    </motion.a>
  );
};
