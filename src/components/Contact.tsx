import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
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

    // Format text message for WhatsApp
    const messageText = `Olá, me chamo ${formData.name}.\n` +
      `WhatsApp: ${formData.phone}\n` +
      `E-mail: ${formData.email || 'Não informado'}\n` +
      `Assunto: ${formData.subject || 'Fale Conosco'}\n\n` +
      `Mensagem:\n${formData.message}`;

    const phoneNumber = '5581999374666';
    const encodedMessage = encodeURIComponent(messageText);
    
    // Redirect
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
    }, 5000);
  };

  return (
    <section id="contato" className="py-20 bg-techBlack relative overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-techBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-techBlue tracking-widest uppercase">Fale Conosco</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Entre em Contato
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-techBlue to-techGreen mx-auto rounded-full" />
          <p className="text-techGray/60 text-sm max-w-xl mx-auto leading-relaxed">
            Tem dúvidas sobre nossos produtos ou deseja agendar um serviço? Envie uma mensagem pelo formulário ou entre em contato pelos canais oficiais.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Form Card (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-techDarkBlue/40 border border-white/5 p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-techBlue" />
              <span>Envie uma Mensagem</span>
            </h3>

            {isSent && (
              <div className="mb-6 p-4 rounded-xl bg-techGreen/10 border border-techGreen/20 text-techGreen text-sm flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5" />
                <span>Mensagem formatada com sucesso! Redirecionando para o WhatsApp...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-xs font-bold text-white/60 uppercase tracking-wide">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-techBlack/60 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-techBlue"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="phone" className="text-xs font-bold text-white/60 uppercase tracking-wide">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-techBlack/60 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-techBlue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="text-xs font-bold text-white/60 uppercase tracking-wide">E-mail (Opcional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemplo@email.com"
                    className="w-full bg-techBlack/60 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-techBlue"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="subject" className="text-xs font-bold text-white/60 uppercase tracking-wide">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Dúvida, orçamento, elogio..."
                    className="w-full bg-techBlack/60 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-techBlue"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="message" className="text-xs font-bold text-white/60 uppercase tracking-wide">Sua Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreva detalhadamente o que você precisa..."
                  className="w-full bg-techBlack/60 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-techBlue resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-techBlue hover:bg-[#1a75ff] text-white font-bold py-3.5 px-4 rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.2)] hover:shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all duration-300 uppercase tracking-wider text-xs cursor-pointer mt-4"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Details Sidebar Card (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-techDarkBlue/40 border border-white/5 p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Informações de Contato</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-techBlue/10 text-techBlue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/40 font-bold uppercase tracking-wider">Endereço</span>
                    <span className="text-sm text-white/80">Av. Principal de Informática, 1000 - Centro, Cidade - UF</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-techGreen/10 text-techGreen flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/40 font-bold uppercase tracking-wider">Telefone e WhatsApp</span>
                    <span className="text-sm text-white/80 block">(11) 99999-9999</span>
                    <span className="text-sm text-white/80 block">(11) 3333-3333</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-techBlue/10 text-techBlue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/40 font-bold uppercase tracking-wider">E-mail corporativo</span>
                    <span className="text-sm text-white/80">contato@reinaldoinformatica.com.br</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-techGreen/10 text-techGreen flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/40 font-bold uppercase tracking-wider">Horário de Funcionamento</span>
                    <span className="text-sm text-white/80 block"><strong className="text-white">Segunda a Sexta:</strong> 08:30 às 18:00</span>
                    <span className="text-sm text-white/80 block"><strong className="text-white">Sábados:</strong> 08:30 às 12:00</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Connect */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <span className="block text-xs text-white/40 font-bold uppercase tracking-wider">Siga nossas Redes</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-techBlue text-white hover:text-white rounded-xl text-xs font-bold transition-all border border-white/5 hover:border-white/0"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
