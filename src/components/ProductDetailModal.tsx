import React from 'react';
import { X, Star, ShoppingCart, Check, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../types';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  const formatPrice = (value: number) => {
    return value.toFixed(2).replace('.', ',');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-3xl bg-techDarkBlue/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-techBlack/60 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-auto bg-techDarkBlue/45 relative min-h-[250px] md:min-h-[400px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover absolute inset-0"
            />
            {product.discount && product.discount > 0 && (
              <span className="absolute top-4 left-4 bg-techGreen text-techBlack text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-[0_0_10px_rgba(0,255,136,0.3)]">
                -{product.discount}% OFF
              </span>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-techBlack/80 backdrop-blur-xs flex items-center justify-center p-4">
                <span className="flex items-center gap-1.5 text-red-400 font-bold uppercase tracking-wider text-xs bg-red-950/40 border border-red-500/25 px-4 py-2.5 rounded-full">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Esgotado</span>
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Info details */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category and Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-techGreen font-bold uppercase tracking-widest">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-yellow-400 bg-yellow-400/5 px-2.5 py-1 rounded-full border border-yellow-400/10 text-xs">
                  <Star className="w-3.5 h-3.5 fill-yellow-400" />
                  <span className="font-bold text-white/90">{product.rating}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {product.name}
              </h2>

              {/* Description */}
              <p className="text-sm text-white/70 leading-relaxed font-sans font-light">
                {product.description}
              </p>

              {/* Features List */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Check className="w-4 h-4 text-techGreen shrink-0" />
                  <span>Garantia oficial de 12 meses</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Check className="w-4 h-4 text-techGreen shrink-0" />
                  <span>Produto 100% Original com Nota Fiscal</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Check className="w-4 h-4 text-techGreen shrink-0" />
                  <span>Suporte e assistência técnica local</span>
                </div>
              </div>
            </div>

            {/* Pricing and Actions */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-baseline gap-3">
                {product.oldPrice && (
                  <span className="text-sm text-white/40 line-through">
                    R$ {formatPrice(product.oldPrice)}
                  </span>
                )}
                <span className="text-3xl font-black text-white">
                  R$ {formatPrice(product.price)}
                </span>
                {product.inStock && (
                  <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-techGreen bg-techGreen/5 px-2 py-0.5 rounded-full border border-techGreen/10 uppercase tracking-wide">
                    <Check className="w-3 h-3" />
                    <span>Em estoque</span>
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  disabled={!product.inStock}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all duration-300 border ${
                    product.inStock
                      ? 'bg-transparent border-white/10 hover:border-techBlue text-white hover:bg-techBlue/10 cursor-pointer'
                      : 'bg-transparent border-white/5 text-white/20 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>+ Carrinho</span>
                </button>
                <button
                  onClick={() => {
                    onBuyNow(product);
                    onClose();
                  }}
                  disabled={!product.inStock}
                  className={`flex items-center justify-center py-3 rounded-xl text-xs font-bold transition-all duration-300 ${
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
      </div>
  );
};
