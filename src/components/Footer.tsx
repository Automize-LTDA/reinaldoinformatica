import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'store', sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#loja' || href === '#pc-builder') {
      onNavigate('store', '#loja');
    } else {
      onNavigate('home', href);
    }
  };

  return (
    <footer className="bg-techBlack border-t border-white/5 pt-16 pb-8 text-techGray/60 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-techBlue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-techGreen/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo and Description */}
          <div className="space-y-4">
            <a href="#inicio" onClick={(e) => handleScrollToSection(e, '#inicio')} className="flex items-center group w-fit bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl hover:border-techBlue/30 hover:shadow-[0_0_15px_rgba(0,102,255,0.15)] transition-all duration-300">
              <img 
                src="/logo.png" 
                alt="Reinaldo Informática" 
                className="h-7 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </a>
            <p className="text-sm text-white/50 leading-relaxed mt-4">
              Oferecemos soluções inteligentes em tecnologia. Produtos de alta qualidade, assistência técnica especializada e o melhor suporte para você e sua empresa.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-techBlue text-white hover:text-white flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-white/0"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-techBlue text-white hover:text-white flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-white/0"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#inicio" onClick={(e) => handleScrollToSection(e, '#inicio')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Início
                </a>
              </li>
              <li>
                <a href="#loja" onClick={(e) => handleScrollToSection(e, '#loja')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Loja Virtual
                </a>
              </li>
              <li>
                <a href="#produtos-categorias" onClick={(e) => handleScrollToSection(e, '#produtos-categorias')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollToSection(e, '#servicos')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#pc-builder" onClick={(e) => handleScrollToSection(e, '#pc-builder')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Monte seu PC
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleScrollToSection(e, '#sobre')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Business Info / Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Serviços Comuns</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#servicos" onClick={(e) => handleScrollToSection(e, '#servicos')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Formatação de Computadores
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollToSection(e, '#servicos')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Manutenção de Notebooks
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollToSection(e, '#servicos')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Montagem de PC Gamer
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollToSection(e, '#servicos')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Configuração de Redes
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollToSection(e, '#servicos')} className="hover:text-techBlue hover:translate-x-1 inline-block transition-all duration-200">
                  Upgrade de Componentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Contato e Suporte</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-techBlue shrink-0 mt-0.5" />
                <span className="text-white/70">Av. Principal de Informática, 1000 - Centro, Cidade - UF</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-techBlue shrink-0" />
                <span className="text-white/70">(11) 99999-9999 / (11) 3333-3333</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-techBlue shrink-0" />
                <span className="text-white/70">contato@reinaldoinformatica.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-techBlue shrink-0 mt-0.5" />
                <div className="text-white/70">
                  <span className="block font-semibold">Segunda a Sexta:</span>
                  <span>08:30 às 18:00</span>
                  <span className="block font-semibold mt-1">Sábados:</span>
                  <span>08:30 às 12:00</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Reinaldo Informática. Todos os direitos reservados.</p>
          <div className="flex space-x-6 text-white/40">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
