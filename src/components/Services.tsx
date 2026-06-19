import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

export const Services: React.FC = () => {
  
  // Dynamic Icon Resolver Component
  const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.Wrench className={className} />;
    return <IconComponent className={className} />;
  };

  const handleRequestServiceQuote = (serviceTitle: string) => {
    const message = `Olá! Vim pelo site da Reinaldo Informática e gostaria de solicitar um orçamento para o serviço de: ${serviceTitle}.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5581999374666';
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  return (
    <section id="servicos" className="py-20 bg-techDarkBlue/20 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-techBlue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-techGreen/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-techBlue tracking-widest uppercase">Assistência Técnica</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nossos Serviços Especializados
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-techBlue to-techGreen mx-auto rounded-full" />
          <p className="text-techGray/60 text-sm max-w-xl mx-auto leading-relaxed">
            Seu computador ou notebook está travando, lento ou com problemas? Nossos técnicos altamente capacitados resolvem tudo rapidamente.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-techDarkBlue/40 border border-white/5 hover:border-techBlue/30 shadow-md hover:shadow-[0_0_25px_rgba(0,102,255,0.1)] transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-white/5 text-techBlue flex items-center justify-center group-hover:bg-techBlue/15 group-hover:text-techBlue transition-all duration-300">
                  <DynamicIcon name={svc.icon} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-techBlue transition-colors">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed font-sans font-light">
                  {svc.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  onClick={() => handleRequestServiceQuote(svc.title)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:border-techGreen hover:bg-techGreen/5 text-xs font-bold text-white hover:text-techGreen transition-all duration-300 cursor-pointer"
                >
                  <Icons.MessageSquare className="w-3.5 h-3.5" />
                  <span>Solicitar Orçamento</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
