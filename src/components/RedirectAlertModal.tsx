import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface RedirectAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productName?: string;
  totalPrice?: number;
  isCart?: boolean;
}

export const RedirectAlertModal: React.FC<RedirectAlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  productName,
  totalPrice,
  isCart,
}) => {
  if (!isOpen) return null;

  const formatPrice = (value: number) => {
    return value.toFixed(2).replace('.', ',');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md bg-techDarkBlue/95 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl overflow-hidden shadow-2xl z-10 space-y-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Icon Header */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-techGreen/10 flex items-center justify-center text-techGreen glow-green animate-pulse">
              <WhatsAppIcon className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">Redirecionando para o WhatsApp</h3>
              <span className="text-xs text-techGreen font-semibold uppercase tracking-wider">Finalizar Compra</span>
            </div>
          </div>

          {/* Message Text */}
          <div className="text-sm text-white/70 leading-relaxed font-sans font-light space-y-3">
            <p>
              Estamos abrindo uma conversa com o suporte da <strong className="text-white">Reinaldo Informática</strong> para concluir seu pedido.
            </p>
            {isCart ? (
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-white/80">
                <span className="block text-white/50 mb-0.5">Carrinho de Compras</span>
                <span className="font-bold text-techGreen">Total Estimado: R$ {formatPrice(totalPrice || 0)}</span>
              </div>
            ) : (
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-white/80">
                <span className="block text-white/50 mb-0.5">Produto Escolhido</span>
                <span className="font-bold block truncate">{productName}</span>
                {totalPrice && <span className="font-bold text-techGreen block mt-0.5">Valor: R$ {formatPrice(totalPrice)}</span>}
              </div>
            )}
            <p>
              Toda a conversa será guiada por nosso atendente humano para validar compatibilidades e agendar pagamento/entrega.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-white/10 hover:border-white/20 text-xs font-bold text-white hover:bg-white/5 transition-all cursor-pointer text-center"
            >
              Voltar ao Site
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-techGreen hover:bg-[#00e577] text-techBlack font-bold py-3 rounded-xl text-xs shadow-[0_0_15px_rgba(0,255,136,0.2)] hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300 cursor-pointer"
            >
              <span>Ir para o WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
