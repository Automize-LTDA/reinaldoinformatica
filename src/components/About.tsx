import React from 'react';
import { Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  
  const stats = [
    {
      id: 'stat-clients',
      value: '+500',
      label: 'Clientes Atendidos',
      description: 'Clientes satisfeitos com nossas soluções e suporte.',
      icon: Users,
    },
    {
      id: 'stat-products',
      value: '+1.000',
      label: 'Produtos Vendidos',
      description: 'Hardware, periféricos e acessórios de qualidade garantida.',
      icon: ShieldCheck,
    },
    {
      id: 'stat-experience',
      value: '+10 Anos',
      label: 'De Experiência',
      description: 'Atuando com seriedade no mercado de tecnologia local.',
      icon: Award,
    },
    {
      id: 'stat-support',
      value: 'Rápido',
      label: 'Atendimento Humanizado',
      description: 'Suporte focado em resolver seus problemas sem complicação.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-techBlack relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-techBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Block: Description */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-xs font-bold text-techBlue tracking-widest uppercase">Sobre a Empresa</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Tradição e Inovação em Serviços de Informática
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-techBlue to-techGreen rounded-full" />
            
            <p className="text-base text-techGray/75 leading-relaxed font-sans font-light">
              A Reinaldo Informática oferece soluções completas em tecnologia, unindo produtos de qualidade, atendimento especializado e suporte técnico confiável. Trabalhamos com peças, periféricos, impressoras, acessórios e serviços para computadores, notebooks e redes.
            </p>
            <p className="text-sm text-techGray/50 leading-relaxed font-sans font-light">
              Nossa missão é aproximar as pessoas da tecnologia de maneira prática e descomplicada, entregando sempre a melhor assessoria antes, durante e após a sua compra. Seja para jogar em alta definição, otimizar sua empresa ou restaurar a performance do seu equipamento, nós temos a solução ideal.
            </p>
          </div>

          {/* Right Block: Image Mockup or Styled Accent */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full aspect-video sm:aspect-square max-w-md rounded-3xl overflow-hidden border border-white/10 glow-blue">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop"
                alt="Equipe técnica Reinaldo Informática"
                className="w-full h-full object-cover filter brightness-90 saturate-50 hover:saturate-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-techBlack via-techBlack/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-techGreen font-extrabold uppercase tracking-widest">Nossa Oficina</span>
                <p className="text-sm font-bold text-white mt-1 leading-snug">Infraestrutura equipada com as melhores ferramentas do mercado para manutenções avançadas.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-techDarkBlue/40 border border-white/5 p-6 rounded-2xl flex flex-col items-start text-left space-y-4 hover:border-techBlue/30 hover:shadow-[0_0_20px_rgba(0,102,255,0.1)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-techBlue/10 text-techBlue flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-3xl font-extrabold text-white leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block text-sm font-bold text-white group-hover:text-techBlue">
                    {stat.label}
                  </span>
                  <span className="block text-xs text-white/40 leading-relaxed font-sans font-light">
                    {stat.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
