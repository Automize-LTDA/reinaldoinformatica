import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Por favor, preencha pelo menos Nome, WhatsApp e Mensagem.');
      return;
    }

    const messageText = `Olá, me chamo ${formData.name}.\n` +
      `WhatsApp: ${formData.phone}\n` +
      `E-mail: ${formData.email || 'Não informado'}\n` +
      `Assunto: ${formData.subject || 'Fale Conosco'}\n\n` +
      `Mensagem:\n${formData.message}`;

    const phoneNumber = '5581999374666';
    const encodedMessage = encodeURIComponent(messageText);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    setIsSent(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setIsSent(false);
    }, 6000);
  };

  return (
    <section id="contato" className="py-24 bg-techBlack relative overflow-hidden">
      {/* Dynamic Glowing Mesh Orbs */}
      <div className="absolute -bottom-20 right-1/4 w-[450px] h-[450px] bg-techBlue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-techGreen/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-techBlue tracking-widest uppercase"
          >
            Fale Conosco
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none"
          >
            Inicie um Contato Rápido
          </motion.p>
          <div className="w-16 h-1 bg-gradient-to-r from-techBlue to-techGreen mx-auto rounded-full" />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-techGray/60 text-sm max-w-xl mx-auto leading-relaxed font-sans font-light"
          >
            Envie uma mensagem direta pelo nosso formulário integrado ao WhatsApp ou utilize nossos canais oficiais listados ao lado.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Form Card (lg:col-span-7) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-techDarkBlue/30 backdrop-blur-xl border border-white/5 hover:border-white/10 p-6 sm:p-10 rounded-[2.5rem] flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
          >
            <div>
              <h3 className="text-base font-bold text-white mb-8 uppercase tracking-wider flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-techBlue/10 flex items-center justify-center text-techBlue shadow-[0_0_15px_rgba(0,102,255,0.15)]">
                  <Send className="w-4 h-4" />
                </span>
                <span>Enviar Mensagem</span>
              </h3>

              <AnimatePresence>
                {isSent && (
                  <motion.div 
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    className="mb-6 p-4 rounded-2xl bg-techGreen/10 border border-techGreen/20 text-techGreen text-xs font-semibold flex items-center gap-3 shadow-[0_0_15px_rgba(0,255,136,0.1)]"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 animate-bounce" />
                    <span>Tudo certo! Redirecionando você para o WhatsApp...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="name" className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Nome Completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full bg-techBlack/50 border border-white/10 hover:border-white/20 rounded-2xl py-3 px-4 text-xs text-white focus:outline-none focus:border-techBlue focus:ring-2 focus:ring-techBlue/10 transition-all duration-300 shadow-inner placeholder-white/25"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="phone" className="text-[10px] font-bold text-white/50 uppercase tracking-wider">WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(81) 99999-9999"
                      className="w-full bg-techBlack/50 border border-white/10 hover:border-white/20 rounded-2xl py-3 px-4 text-xs text-white focus:outline-none focus:border-techBlue focus:ring-2 focus:ring-techBlue/10 transition-all duration-300 shadow-inner placeholder-white/25"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="email" className="text-[10px] font-bold text-white/50 uppercase tracking-wider">E-mail (Opcional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="exemplo@email.com"
                      className="w-full bg-techBlack/50 border border-white/10 hover:border-white/20 rounded-2xl py-3 px-4 text-xs text-white focus:outline-none focus:border-techBlue focus:ring-2 focus:ring-techBlue/10 transition-all duration-300 shadow-inner placeholder-white/25"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="subject" className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Assunto</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Orçamento, suporte, dúvidas..."
                      className="w-full bg-techBlack/50 border border-white/10 hover:border-white/20 rounded-2xl py-3 px-4 text-xs text-white focus:outline-none focus:border-techBlue focus:ring-2 focus:ring-techBlue/10 transition-all duration-300 shadow-inner placeholder-white/25"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2 text-left">
                  <label htmlFor="message" className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o produto, peças ou suporte técnico que necessita..."
                    className="w-full bg-techBlack/50 border border-white/10 hover:border-white/20 rounded-2xl py-3 px-4 text-xs text-white focus:outline-none focus:border-techBlue focus:ring-2 focus:ring-techBlue/10 transition-all duration-300 shadow-inner resize-none placeholder-white/25"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-center gap-2.5 bg-techBlue hover:bg-[#1a75ff] text-white font-bold py-4 px-6 rounded-2xl shadow-[0_0_20px_rgba(0,102,255,0.2)] hover:shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all duration-300 uppercase tracking-wider text-xs cursor-pointer group mt-6"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform duration-300" />
                  <span>Enviar para WhatsApp</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Details Sidebar Card (lg:col-span-5) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Contact Info Widgets Stack */}
            <div className="space-y-4">
              {/* Widget 1: Endereço */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-3xl bg-techDarkBlue/30 backdrop-blur-xl border border-white/5 hover:border-techBlue/30 hover:shadow-[0_5px_20px_rgba(0,102,255,0.08)] flex items-start gap-4 transition-all duration-300 text-left border-l-2 border-l-techBlue"
              >
                <div className="w-10 h-10 rounded-xl bg-techBlue/10 text-techBlue flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,102,255,0.1)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider mb-0.5">Endereço</span>
                  <span className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Av. Principal de Informática, 1000 - Centro, Recife - PE
                  </span>
                </div>
              </motion.div>

              {/* Widget 2: WhatsApp e Telefones */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-3xl bg-techDarkBlue/30 backdrop-blur-xl border border-white/5 hover:border-techGreen/30 hover:shadow-[0_5px_20px_rgba(0,255,136,0.08)] flex items-start gap-4 transition-all duration-300 text-left border-l-2 border-l-techGreen"
              >
                <div className="w-10 h-10 rounded-xl bg-techGreen/10 text-techGreen flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,255,136,0.1)] animate-pulse-slow">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider mb-0.5">Fale Conosco</span>
                  <span className="text-xs sm:text-sm text-white/80 block font-bold hover:text-techGreen transition-colors">(81) 99937-4666 (WhatsApp)</span>
                  <span className="text-xs sm:text-sm text-white/50 block mt-0.5">(81) 3333-3333 (Fixo)</span>
                </div>
              </motion.div>

              {/* Widget 3: E-mail */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-3xl bg-techDarkBlue/30 backdrop-blur-xl border border-white/5 hover:border-techBlue/30 hover:shadow-[0_5px_20px_rgba(0,102,255,0.08)] flex items-start gap-4 transition-all duration-300 text-left border-l-2 border-l-techBlue"
              >
                <div className="w-10 h-10 rounded-xl bg-techBlue/10 text-techBlue flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,102,255,0.1)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider mb-0.5">E-mail corporativo</span>
                  <span className="text-xs sm:text-sm text-white/80 block hover:text-techBlue transition-colors font-medium break-all">
                    contato@reinaldoinformatica.com.br
                  </span>
                </div>
              </motion.div>

              {/* Widget 4: Horários */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-3xl bg-techDarkBlue/30 backdrop-blur-xl border border-white/5 hover:border-techGreen/30 hover:shadow-[0_5px_20px_rgba(0,255,136,0.08)] flex items-start gap-4 transition-all duration-300 text-left border-l-2 border-l-techGreen"
              >
                <div className="w-10 h-10 rounded-xl bg-techGreen/10 text-techGreen flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,255,136,0.1)]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider mb-0.5">Horário de Funcionamento</span>
                  <span className="text-xs sm:text-sm text-white/80 block"><strong className="text-white">Segunda a Sexta:</strong> 08:30 às 18:00</span>
                  <span className="text-xs sm:text-sm text-white/80 block mt-0.5"><strong className="text-white">Sábados:</strong> 08:30 às 12:00</span>
                </div>
              </motion.div>
            </div>

            {/* Social Grid connection quick cards */}
            <div className="bg-techDarkBlue/30 backdrop-blur-xl border border-white/5 p-6 rounded-[2rem] space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider text-left">Conectar nas Redes</span>
              <div className="grid grid-cols-2 gap-3.5">
                {/* Instagram Quick Link */}
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-pink-500/10 hover:border-pink-500/30 text-white rounded-2xl text-xs font-bold transition-all group cursor-pointer"
                >
                  <svg className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/60 transition-colors" />
                </motion.a>

                {/* WhatsApp Quick Chat */}
                <motion.a
                  href="https://wa.me/5581999374666?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-techGreen/5 hover:bg-techGreen/10 border border-techGreen/10 hover:border-techGreen/30 text-white rounded-2xl text-xs font-bold transition-all group cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-techGreen group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/60 transition-colors" />
                </motion.a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
