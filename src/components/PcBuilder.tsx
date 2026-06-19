import React, { useState, useMemo } from 'react';
import { RotateCcw, AlertCircle, Wrench, CheckCircle } from 'lucide-react';
import { pcParts } from '../data/products';
import type { BuildPart } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

export const PcBuilder: React.FC = () => {
  // Simulator State: stores selected part object for each slot
  const [selections, setSelections] = useState<Record<string, BuildPart>>({
    Processador: pcParts.Processador[0],
    'Placa-mãe': pcParts['Placa-mãe'][0],
    'Memória RAM': pcParts['Memória RAM'][0],
    SSD: pcParts.SSD[0],
    Fonte: pcParts.Fonte[0],
    Gabinete: pcParts.Gabinete[0],
    'Placa de vídeo': pcParts['Placa de vídeo'][0],
    Monitor: pcParts.Monitor[0],
  });

  // Reset Simulator to first items
  const handleReset = () => {
    setSelections({
      Processador: pcParts.Processador[0],
      'Placa-mãe': pcParts['Placa-mãe'][0],
      'Memória RAM': pcParts['Memória RAM'][0],
      SSD: pcParts.SSD[0],
      Fonte: pcParts.Fonte[0],
      Gabinete: pcParts.Gabinete[0],
      'Placa de vídeo': pcParts['Placa de vídeo'][0],
      Monitor: pcParts.Monitor[0],
    });
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return Object.values(selections).reduce((acc, part) => acc + part.price, 0);
  }, [selections]);

  // Recommendation Heuristics Engine
  const recommendedProfile = useMemo(() => {
    const cpu = selections.Processador.id;
    const gpu = selections['Placa de vídeo'].id;
    const ram = selections['Memória RAM'].id;

    // High End Configuration
    if (gpu === 'part-gpu-rtx4070' || cpu === 'part-cpu-i7' || ram === 'part-ram-32g') {
      return {
        label: 'Gamer Ultra / Profissional',
        desc: 'Configuração de altíssimo nível, ideal para rodar jogos pesados em 4K, edição de vídeo profissional e renderização 3D.',
        badgeColor: 'bg-red-950/40 text-red-400 border-red-500/25',
      };
    }
    // Medium Gaming Configuration
    if (gpu === 'part-gpu-rtx4060' || gpu === 'part-gpu-rtx3060') {
      return {
        label: 'Gamer Intermediário / Streaming',
        desc: 'Excelente custo-benefício! Ideal para jogar lançamentos em Full HD no Ultra e realizar streaming com ótima fluidez.',
        badgeColor: 'bg-techBlue/10 text-techBlue border-techBlue/25',
      };
    }
    // Entry Gaming / Design Configuration
    if (gpu === 'part-gpu-rtx3050') {
      return {
        label: 'Gamer de Entrada / Design Gráfico',
        desc: 'Configuração ideal para jogos competitivos leves (VALORANT, CS, LoL) e softwares de design como Photoshop e Corel.',
        badgeColor: 'bg-purple-950/40 text-purple-400 border-purple-500/25',
      };
    }
    // Office / Multi-tasking Configuration
    if (cpu === 'part-cpu-r5' || cpu === 'part-cpu-i5') {
      return {
        label: 'Trabalho Avançado / Multitarefa',
        desc: 'Rápido e responsivo! Excelente para escritório moderno, programação, abas ilimitadas e produtividade sem travamentos.',
        badgeColor: 'bg-techGreen/5 text-techGreen border-techGreen/10',
      };
    }
    // Basic Configuration
    return {
      label: 'Estudo & Home Office',
      desc: 'Ideal para pesquisas na internet, assistir videoaulas, redigir documentos, planilhas e assistir streams de vídeo.',
      badgeColor: 'bg-white/5 text-white/70 border-white/10',
    };
  }, [selections]);

  const handleSendBuildQuote = () => {
    let messageText = 'Olá! Montei um computador personalizado no simulador do site e gostaria de um orçamento:\n\n';
    
    Object.entries(selections).forEach(([category, part]) => {
      messageText += `- ${category}: ${part.name} (R$ ${part.price.toFixed(2).replace('.', ',')})\n`;
    });
    
    messageText += `\nUso recomendado: ${recommendedProfile.label}\n`;
    messageText += `Valor estimado: R$ ${totalPrice.toFixed(2).replace('.', ',')}`;

    const phoneNumber = '5581999374666';
    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleSelectChange = (category: string, partId: string) => {
    const selectedPart = pcParts[category].find((p) => p.id === partId);
    if (selectedPart) {
      setSelections((prev) => ({
        ...prev,
        [category]: selectedPart,
      }));
    }
  };

  return (
    <div className="w-full relative">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-techBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-techBlue tracking-widest uppercase">Monte seu Setup</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Monte seu PC Ideal
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-techBlue to-techGreen mx-auto rounded-full" />
          <p className="text-techGray/60 text-sm max-w-xl mx-auto leading-relaxed">
            Simule o valor estimado do seu novo computador selecionando os componentes abaixo. A escolha ideal para o seu uso!
          </p>
        </div>

        {/* Builder Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Component Selectors Area (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-techDarkBlue/40 border border-white/5 p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-5 h-5 text-techBlue" />
                <span>Escolha os Componentes</span>
              </span>
              <button
                onClick={handleReset}
                className="text-xs text-techBlue hover:text-white flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>

            {/* Selects Grid */}
            <div className="space-y-4">
              {Object.keys(pcParts).map((category) => (
                <div
                  key={category}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-techBlack/40 border border-white/5 hover:border-white/10 transition-all"
                >
                  {/* Category Label */}
                  <div className="sm:w-1/4">
                    <span className="block text-sm font-bold text-white tracking-wide">{category}</span>
                  </div>

                  {/* Dropdown Options */}
                  <div className="flex-1">
                    <select
                      value={selections[category].id}
                      onChange={(e) => handleSelectChange(category, e.target.value)}
                      className="w-full bg-techBlack/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-techBlue focus:ring-1 focus:ring-techBlue cursor-pointer"
                    >
                      {pcParts[category].map((part) => (
                        <option key={part.id} value={part.id}>
                          {part.name} - R$ {part.price.toFixed(2).replace('.', ',')}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Badge */}
                  <div className="sm:w-1/6 text-right shrink-0">
                    <span className="text-sm font-extrabold text-techGreen">
                      R$ {selections[category].price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Summary (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-techDarkBlue/40 border border-white/5 p-6 rounded-3xl space-y-6 sticky top-24 shadow-xl">
              
              {/* Recommendation Analysis Box */}
              <div className="space-y-4">
                <span className="block text-xs font-bold text-white/50 uppercase tracking-wide">Tipo de Uso Recomendado</span>
                <div className={`p-4 rounded-2xl border ${recommendedProfile.badgeColor}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-extrabold tracking-wide uppercase leading-none">
                      {recommendedProfile.label}
                    </span>
                  </div>
                  <p className="text-xs opacity-75 font-sans leading-relaxed">
                    {recommendedProfile.desc}
                  </p>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="space-y-2 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-white/60">
                  <span className="text-xs uppercase tracking-wider font-semibold">Configuração Estimada</span>
                  <span className="text-xs">8 Componentes</span>
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-sm font-bold text-white">Total Estimado</span>
                  <span className="text-3xl font-black text-techGreen">
                    R$ {totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* Notice */}
              <div className="flex gap-2 p-3.5 rounded-xl bg-white/5 border border-white/5 text-[10px] text-white/40 leading-relaxed font-sans font-light">
                <AlertCircle className="w-4 h-4 text-techBlue shrink-0" />
                <span>Os preços são estimados e sujeitos a alteração. Fale com um técnico para validar compatibilidade física de soquetes e gargalo de barramentos.</span>
              </div>

              {/* Send Quote button */}
              <button
                onClick={handleSendBuildQuote}
                className="w-full flex items-center justify-center gap-2 bg-techBlue hover:bg-[#1a75ff] text-white font-bold py-3.5 px-4 rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.3)] transition-all duration-300 uppercase tracking-wider text-xs cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Pedir Orçamento no WhatsApp</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
