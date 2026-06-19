import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Check, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  onOpenDetails,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (value: number) => {
    return value.toFixed(2).replace('.', ',');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpenDetails(product)}
      className="flex flex-col bg-techDarkBlue/40 border border-white/5 hover:border-techBlue/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,102,255,0.15)] relative group cursor-pointer select-none"
    >
      {/* Discount Badge */}
      {product.discount && product.discount > 0 && (
        <span className="absolute top-4 left-4 z-10 bg-techGreen text-techBlack text-xs font-extrabold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,255,136,0.3)]">
          -{product.discount}% OFF
        </span>
      )}

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-techBlack/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-red-500 hover:bg-techBlack/60 transition-all duration-300 cursor-pointer"
        aria-label="Adicionar aos favoritos"
      >
        <Heart
          className={`w-4 h-4 transition-all ${isFavorite ? 'fill-red-500 text-red-500 scale-110' : ''}`}
        />
      </button>

      {/* Product Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-techDarkBlue/20">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-techBlack/80 backdrop-blur-xs flex items-center justify-center p-4">
            <span className="flex items-center gap-1.5 text-red-400 font-bold uppercase tracking-wider text-xs bg-red-950/40 border border-red-500/25 px-4 py-2 rounded-full">
              <AlertTriangle className="w-4 h-4" />
              <span>Esgotado</span>
            </span>
          </div>
        )}
      </div>

      {/* Details Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        
        {/* Category & Rating */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-techGreen font-semibold uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-yellow-400 bg-yellow-400/5 px-2 py-0.5 rounded-full border border-yellow-400/10">
              <Star className="w-3 h-3 fill-yellow-400" />
              <span className="text-[10px] font-bold text-white/80">{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-sm font-bold text-white group-hover:text-techBlue line-clamp-2 transition-colors min-h-10 leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-white/50 line-clamp-2 leading-relaxed font-sans font-light">
            {product.description}
          </p>
        </div>

        {/* Pricing & Stocks */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="flex items-baseline justify-between mb-2">
            <div className="flex flex-col">
              {product.oldPrice && (
                <span className="text-xs text-white/30 line-through">
                  R$ {formatPrice(product.oldPrice)}
                </span>
              )}
              <span className="text-lg font-extrabold text-white">
                R$ {formatPrice(product.price)}
              </span>
            </div>
            
            {/* Stock indicator badge */}
            {product.inStock && (
              <span className="flex items-center gap-1 text-[10px] font-semibold text-techGreen bg-techGreen/5 px-2 py-0.5 rounded-full border border-techGreen/10 uppercase tracking-wide">
                <Check className="w-3 h-3" />
                <span>Em estoque</span>
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            
            {/* Add to Cart button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              disabled={!product.inStock}
              className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border ${
                product.inStock
                  ? 'bg-transparent border-white/10 hover:border-techBlue text-white hover:bg-techBlue/10 cursor-pointer'
                  : 'bg-transparent border-white/5 text-white/20 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>+ Carrinho</span>
            </button>

            {/* Buy Now button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBuyNow(product);
              }}
              disabled={!product.inStock}
              className={`flex items-center justify-center py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                product.inStock
                  ? 'bg-techBlue hover:bg-[#1a75ff] text-white shadow-[0_0_12px_rgba(0,102,255,0.2)] hover:shadow-[0_0_18px_rgba(0,102,255,0.4)] cursor-pointer'
                  : 'bg-white/5 text-white/20 cursor-not-allowed'
              }`}
            >
              <span>Comprar</span>
            </button>

          </div>
        </div>

      </div>
    </motion.div>
  );
};
