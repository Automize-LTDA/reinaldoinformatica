import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Promotions } from './components/Promotions';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { PcBuilder } from './components/PcBuilder';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RedirectAlertModal } from './components/RedirectAlertModal';
import type { Product, CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Navigation State
  const [currentView, setCurrentView] = useState<'home' | 'store'>('home');

  // Modals state
  const [selectedProductDetails, setSelectedProductDetails] = useState<Product | null>(null);
  const [redirectModalInfo, setRedirectModalInfo] = useState<{
    isOpen: boolean;
    whatsappUrl: string;
    productName?: string;
    totalPrice?: number;
    isCart?: boolean;
  }>({
    isOpen: false,
    whatsappUrl: '',
  });

  // Central Navigation & Scroll Handler
  const handleNavigate = (view: 'home' | 'store', sectionId?: string) => {
    setCurrentView(view);
    if (sectionId) {
      setTimeout(() => {
        const target = document.querySelector(sectionId);
        if (target) {
          const offset = 90; // height of floating header + spacing
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = target.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100); // Wait for react rendering cycle
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const handleBuyNow = (product: Product) => {
    // Check if product is already in cart, if not, add it
    const alreadyInCart = cartItems.some((item) => item.product.id === product.id);
    if (!alreadyInCart) {
      handleAddToCart(product);
    }

    const messageText = `Olá, tenho interesse no produto:\n- ${product.name} (R$ ${product.price.toFixed(2).replace('.', ',')})`;
    const phoneNumber = '5581999374666';
    const encodedMessage = encodeURIComponent(messageText);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open redirection notice instead of directly opening WhatsApp
    setRedirectModalInfo({
      isOpen: true,
      whatsappUrl: url,
      productName: product.name,
      totalPrice: product.price,
      isCart: false,
    });
  };

  return (
    <div className="min-h-screen bg-techBlack text-white flex flex-col justify-between selection:bg-techBlue/30 selection:text-white">
      {/* Shared Header Navigation */}
      <Header
        cartItems={cartItems}
        updateQuantity={handleUpdateQuantity}
        removeFromCart={handleRemoveFromCart}
        currentView={currentView}
        onNavigate={handleNavigate}
        onCheckout={(url, totalPrice) => {
          setRedirectModalInfo({
            isOpen: true,
            whatsappUrl: url,
            totalPrice: totalPrice,
            isCart: true,
          });
        }}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* 1. Hero */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. Categorias */}
            <Categories
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onNavigate={handleNavigate}
            />

            {/* 3. Ofertas Imperdíveis / Promoções */}
            <Promotions
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              onOpenDetails={(p) => setSelectedProductDetails(p)}
            />

            {/* 5. Serviços */}
            <Services />

            {/* 6. Monte seu PC */}
            <PcBuilder />

            {/* 7. Sobre a Empresa */}
            <About />

            {/* 8. Depoimentos */}
            <Testimonials />

            {/* 9. Contato */}
            <Contact />
          </>
        ) : (
          <div className="pt-24 sm:pt-28">
            {/* 4. Loja de Produtos */}
            <Products
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              onOpenDetails={(p) => setSelectedProductDetails(p)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onGoBack={() => handleNavigate('home')}
            />
          </div>
        )}
      </main>

      {/* Footer & Floating CTAs */}
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />

      {/* Product Details Modal */}
      <ProductDetailModal
        product={selectedProductDetails}
        onClose={() => setSelectedProductDetails(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* WhatsApp Redirect Confirmation Modal */}
      <RedirectAlertModal
        isOpen={redirectModalInfo.isOpen}
        onClose={() => setRedirectModalInfo({ isOpen: false, whatsappUrl: '' })}
        onConfirm={() => {
          window.open(redirectModalInfo.whatsappUrl, '_blank');
        }}
        productName={redirectModalInfo.productName}
        totalPrice={redirectModalInfo.totalPrice}
        isCart={redirectModalInfo.isCart}
      />
    </div>
  );
}

export default App;
