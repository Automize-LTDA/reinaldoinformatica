import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Cpu, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (view: 'home' | 'store', sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleScrollToLoja = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onNavigate('store', '#loja');
  };

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-techBlack">
      {/* Top Gradient Overlay to blend with floating Header */}
      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-techBlack via-techBlack/90 to-transparent pointer-events-none z-0" />
      {/* Decorative Radial Gradients for Neon Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-techBlue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-techGreen/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-techBlue/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-left space-y-8">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Sua loja completa de{' '}
              <span className="text-gradient-blue-green font-extrabold block sm:inline">
                informática e tecnologia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-techGray/75 max-w-2xl leading-relaxed font-sans font-light"
            >
              Peças para PC, teclados, mouses, impressoras, acessórios, suporte técnico e soluções digitais em um só lugar.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={handleScrollToLoja}
                className="flex items-center justify-center gap-2 bg-techBlue hover:bg-[#1a75ff] text-white font-bold py-3.5 px-8 rounded-full text-base shadow-[0_0_20px_rgba(0,102,255,0.3)] transition-all group"
              >
                <span>Ver Produtos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Specs Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 max-w-lg"
            >
              <div>
                <span className="block text-2xl font-extrabold text-white">100%</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">Garantido</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white">Rápido</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">Atendimento</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white">Original</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">Produtos</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic PC/Setup Illustration & Floating Cards */}
          <div className="hidden lg:flex lg:col-span-5 relative mt-12 lg:mt-0 justify-center items-center">
            
            {/* Setup Illustration Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-techBlue/10 to-techGreen/5 border border-white/10 flex items-center justify-center glow-blue"
            >
              {/* Graphic Element */}
              <div className="absolute w-[80%] h-[80%] rounded-full bg-techDarkBlue/40 border border-white/5 flex items-center justify-center">
                <Laptop className="w-32 h-32 text-techBlue opacity-40 animate-pulse-slow" />
              </div>
              
              {/* Spinning glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-techGreen/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-techBlue/30 animate-[spin_40s_linear_infinite_reverse]" />

              <Cpu className="w-16 h-16 text-techGreen absolute drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]" />
            </motion.div>

            {/* Floating Card 1: RTX 4070 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 left-0 sm:-left-6 glassmorphism p-4 rounded-2xl flex items-center gap-3 border border-white/10 shadow-lg shadow-black/40 shrink-0 pointer-events-none"
            >
              <div className="w-10 h-10 rounded-lg bg-techGreen/10 flex items-center justify-center text-techGreen">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-white/40 font-semibold uppercase tracking-wider">Upgrade</span>
                <span className="text-sm font-bold text-white">RTX 4070 Super</span>
              </div>
            </motion.div>

            {/* Floating Card 2: SSD NVMe */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 -left-6 sm:-left-12 glassmorphism p-4 rounded-2xl flex items-center gap-3 border border-white/10 shadow-lg shadow-black/40 shrink-0 pointer-events-none"
            >
              <div className="w-10 h-10 rounded-lg bg-techBlue/10 flex items-center justify-center text-techBlue">
                <Zap className="w-5 h-5 fill-techBlue/10" />
              </div>
              <div>
                <span className="block text-xs text-white/40 font-semibold uppercase tracking-wider">Desempenho</span>
                <span className="text-sm font-bold text-white">SSD NVMe 7000MB/s</span>
              </div>
            </motion.div>

            {/* Floating Card 3: Support */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute right-0 -bottom-4 sm:-right-8 glassmorphism p-4 rounded-2xl flex items-center gap-3 border border-white/10 shadow-lg shadow-black/40 shrink-0 pointer-events-none"
            >
              <div className="w-10 h-10 rounded-lg bg-techGreen/10 flex items-center justify-center text-techGreen">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-white/40 font-semibold uppercase tracking-wider">Suporte 24h</span>
                <span className="text-sm font-bold text-white">Assistência Técnica</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
