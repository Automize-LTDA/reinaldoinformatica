import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Plus, Minus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import type { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  onCheckout: (whatsappUrl: string, totalPrice: number) => void;
  currentView: 'home' | 'store';
  onNavigate: (view: 'home' | 'store', sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItems,
  updateQuantity,
  removeFromCart,
  onCheckout,
  currentView,
  onNavigate,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor Scroll for Navbar shrink animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Loja', href: '#loja' },
    { label: 'Produtos', href: '#produtos-categorias' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Promoções', href: '#promocoes' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let messageText = 'Olá, tenho interesse nesses produtos:\n\n';
    cartItems.forEach((item, index) => {
      messageText += `${index + 1}. ${item.product.name} - R$ ${item.product.price.toFixed(2).replace('.', ',')} x ${item.quantity}\n`;
    });
    messageText += `\nTotal estimado: R$ ${totalPrice.toFixed(2).replace('.', ',')}`;

    const phoneNumber = '5581999374666';
    const encodedMessage = encodeURIComponent(messageText);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    onCheckout(url, totalPrice);
    setIsCartOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (href === '#loja') {
      onNavigate('store', '#loja');
    } else {
      onNavigate('home', href);
    }
  };

  return (
    <>
      {/* Fixed Header Wrapper */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full">
        {/* Dynamic Margin and Max Width */}
        <div className={`mx-auto transition-all duration-300 ${
          isScrolled 
            ? 'max-w-7xl mt-4 px-4 sm:px-6 lg:px-8' 
            : 'max-w-full mt-0 px-0'
        }`}>
          <div
            className={`relative w-full flex items-center justify-between gap-4 transition-all duration-300 ${
              isScrolled
                ? 'bg-techBlack/60 backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-6 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-techBlue/20'
                : 'bg-transparent border-b border-white/5 rounded-none px-4 sm:px-8 lg:px-12 py-5 shadow-none'
            }`}
          >
            {/* Logo Section */}
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, '#inicio')}
              className="flex items-center group shrink-0"
            >
              <img 
                src="/logo.png" 
                alt="Reinaldo Informática" 
                className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-103" 
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {menuItems.map((item) => {
                const isActive = item.href === '#loja' && currentView === 'store';
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-techBlue bg-techBlue/10 font-bold'
                        : 'text-techGray/75 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions & Search */}
            <div className="flex items-center gap-3 shrink-0">

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5 hover:border-white/10 shadow-sm"
                aria-label="Ver carrinho"
              >
                <ShoppingCart className="w-4 h-4" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-techBlue text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>



              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white lg:hidden transition-all border border-white/5"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 z-[70] w-72 bg-techDarkBlue/95 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div className="space-y-6">
                {/* Drawer Logo */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                  <button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-full hover:bg-white/5 text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav items list */}
                <nav className="flex flex-col space-y-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="text-sm font-bold text-white/80 hover:text-techBlue py-2.5 border-b border-white/5 transition-all block"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>


            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Sidebar Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-[60] bg-black"
            />

            {/* Sidebar panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-md bg-techDarkBlue border-l border-white/10 shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-techBlack/40">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-techBlue" />
                  <h2 className="text-lg font-bold text-white uppercase tracking-wider">Meu Carrinho</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                      <ShoppingCart className="w-8 h-8 text-white/40" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">Seu carrinho está vazio</p>
                      <p className="text-white/60 text-sm mt-1">Adicione produtos da nossa loja para solicitar orçamento.</p>
                    </div>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-4 rounded-xl bg-techBlack/40 border border-white/5 hover:border-white/10 transition-all"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 rounded-lg object-cover shrink-0 bg-white/5"
                      />
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <h4 className="text-sm font-semibold text-white truncate">{item.product.name}</h4>
                          <span className="text-xs text-techGreen font-medium">{item.product.category}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-white/10 rounded-lg bg-techBlack/60 overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 text-sm font-semibold text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="text-right">
                            <span className="block text-sm font-bold text-white">
                              R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 mt-1 ml-auto"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Excluir</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-white/5 bg-techBlack/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 font-medium">Subtotal Estimado</span>
                    <span className="text-2xl font-extrabold text-techGreen">
                      R$ {totalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center gap-2 bg-techBlue hover:bg-[#1a75ff] text-white font-bold py-3.5 px-4 rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.3)] transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Finalizar pelo WhatsApp</span>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
