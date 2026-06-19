import React, { useState, useEffect } from 'react';
import { Clock, ShoppingCart, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import type { Product } from '../types';

interface PromotionsProps {
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  onOpenDetails: (product: Product) => void;
}

export const Promotions: React.FC<PromotionsProps> = ({ onAddToCart, onBuyNow, onOpenDetails }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Calculate time remaining until midnight
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      const difference = midnight.getTime() - now.getTime();
      
      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / 1000 / 60) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filter promo products and find the featured "Oferta do Dia"
  const promoProducts = products.filter((p) => p.isPromotion && p.inStock);
  const featuredOffer = products.find((p) => p.id === 'prod-rtx4070-promo') || promoProducts[0];
  const sideOffers = promoProducts.filter((p) => p.id !== featuredOffer.id).slice(0, 3);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const formatPrice = (value: number) => {
    return value.toFixed(2).replace('.', ',');
  };

  return (
    <section id="promocoes" className="py-20 bg-techBlack relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-techGreen/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-techBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Countdown */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left">
            <h2 className="text-xs font-bold text-techGreen tracking-widest uppercase">Plantão de Descontos</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ofertas Imperdíveis
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-techGreen to-techBlue rounded-full" />
          </div>

          {/* Countdown Clock UI */}
          <div className="flex items-center gap-4 bg-techDarkBlue/50 border border-white/10 px-6 py-3.5 rounded-2xl w-fit glow-green">
            <div className="flex items-center gap-2 text-techGreen text-sm font-semibold uppercase tracking-wider">
              <Clock className="w-5 h-5 animate-pulse" />
              <span>Acaba em:</span>
            </div>
            
            <div className="flex items-center gap-1.5 font-sans font-extrabold text-lg text-white">
              <span className="bg-techBlack/80 px-3 py-1.5 rounded-lg border border-white/5 min-w-10 text-center">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-techGreen animate-pulse">:</span>
              <span className="bg-techBlack/80 px-3 py-1.5 rounded-lg border border-white/5 min-w-10 text-center">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-techGreen animate-pulse">:</span>
              <span className="bg-techBlack/80 px-3 py-1.5 rounded-lg border border-white/5 min-w-10 text-center">
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
          </div>
        </div>

        {/* Offers Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Spotlight Oferta do Dia Card (lg:col-span-7) */}
          <div className="lg:col-span-7">
            {featuredOffer && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => onOpenDetails(featuredOffer)}
                className="relative rounded-3xl overflow-hidden border border-techGreen/30 bg-gradient-to-br from-techDarkBlue/80 to-techBlack p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 shadow-[0_0_40px_rgba(0,255,136,0.1)] group cursor-pointer select-none"
              >
                {/* Visual Label Tag */}
                <span className="absolute top-4 left-4 bg-techGreen text-techBlack text-xs font-black px-4 py-1.5 rounded-full flex items-center gap-1 uppercase tracking-wider z-10 shadow-[0_0_15px_rgba(0,255,136,0.4)]">
                  <Zap className="w-3.5 h-3.5 fill-techBlack" />
                  <span>Oferta do Dia</span>
                </span>

                {/* Left Card: Image & Rating */}
                <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-64 rounded-2xl overflow-hidden bg-techDarkBlue/40 relative shrink-0">
                  <img
                    src={featuredOffer.image}
                    alt={featuredOffer.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {featuredOffer.discount && (
                    <span className="absolute bottom-4 right-4 bg-red-600 text-white font-extrabold text-sm px-3.5 py-1.5 rounded-xl">
                      -{featuredOffer.discount}%
                    </span>
                  )}
                </div>

                {/* Right Card: Spec & Description */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <span className="text-xs font-bold text-white/80">{featuredOffer.rating} (Avaliação)</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-techGreen transition-colors">
                      {featuredOffer.name}
                    </h3>
                    
                    <p className="text-sm text-white/60 leading-relaxed font-sans font-light">
                      {featuredOffer.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex items-baseline gap-3">
                      <span className="text-sm text-white/40 line-through">
                        R$ {formatPrice(featuredOffer.oldPrice || 0)}
                      </span>
                      <span className="text-3xl font-black text-techGreen">
                        R$ {formatPrice(featuredOffer.price)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(featuredOffer);
                        }}
                        className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-bold py-3 rounded-xl border border-white/10 hover:border-techGreen/40 text-sm transition-all cursor-pointer"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>+ Carrinho</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBuyNow(featuredOffer);
                        }}
                        className="flex items-center justify-center gap-1.5 bg-techGreen hover:bg-[#00e577] text-techBlack font-bold py-3 rounded-xl text-sm shadow-[0_0_15px_rgba(0,255,136,0.2)] hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300 cursor-pointer"
                      >
                        <span>Comprar Agora</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Side Promotional List (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            {sideOffers.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => onOpenDetails(product)}
                className="flex gap-4 p-4 rounded-2xl bg-techDarkBlue/40 border border-white/5 hover:border-techBlue/20 hover:bg-techDarkBlue/60 transition-all duration-300 group cursor-pointer select-none"
              >
                {/* Thumb */}
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-techDarkBlue/20 shrink-0 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-techGreen text-techBlack font-extrabold text-[9px] px-1.5 py-0.5 rounded-md">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-1">
                    <span className="text-[10px] text-techGreen font-bold uppercase tracking-wider">{product.category}</span>
                    <h4 className="text-sm font-bold text-white group-hover:text-techBlue truncate transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] text-white/30 line-through">
                        R$ {formatPrice(product.oldPrice || 0)}
                      </span>
                      <span className="text-base font-extrabold text-white">
                        R$ {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-techBlue text-[11px] font-bold text-white hover:bg-techBlue/10 transition-all cursor-pointer"
                    >
                      + Carrinho
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBuyNow(product);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-techBlue hover:bg-[#1a75ff] text-white text-[11px] font-bold shadow-sm transition-all cursor-pointer"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
