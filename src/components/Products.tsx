import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, RefreshCw, ArrowLeft, Wrench, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { ProductCard } from './ProductCard';
import { PcBuilder } from './PcBuilder';
import type { Product } from '../types';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  onOpenDetails: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  onGoBack: () => void;
}

export const Products: React.FC<ProductsProps> = ({
  onAddToCart,
  onBuyNow,
  onOpenDetails,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onGoBack,
}) => {
  // Tab State
  const [activeTab, setActiveTab] = useState<'catalog' | 'pc-builder'>('catalog');

  // Filter States
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [onlyPromotions, setOnlyPromotions] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured'); // featured, price-asc, price-desc, discount, rating
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  // Auto detect maximum price in data to calibrate the range slider
  const absoluteMaxPrice = useMemo(() => {
    return Math.max(...products.map((p) => p.price), 5000);
  }, []);

  useEffect(() => {
    setMaxPrice(absoluteMaxPrice);
  }, [absoluteMaxPrice]);

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setMaxPrice(absoluteMaxPrice);
    setOnlyInStock(false);
    setOnlyPromotions(false);
    setSortBy('featured');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Name Search
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase();
          const matchesName = product.name.toLowerCase().includes(query);
          const matchesDesc = product.description.toLowerCase().includes(query);
          const matchesCat = product.category.toLowerCase().includes(query);
          if (!matchesName && !matchesDesc && !matchesCat) return false;
        }

        // Category Filter
        if (selectedCategory && selectedCategory !== '') {
          if (product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return false;
          }
        }

        // Max Price Filter
        if (product.price > maxPrice) {
          return false;
        }

        // In Stock Filter
        if (onlyInStock && !product.inStock) {
          return false;
        }

        // Promotions Filter
        if (onlyPromotions && !product.isPromotion) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          return a.price - b.price;
        }
        if (sortBy === 'price-desc') {
          return b.price - a.price;
        }
        if (sortBy === 'discount') {
          return (b.discount || 0) - (a.discount || 0);
        }
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }
        // Default / Featured
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [searchQuery, selectedCategory, maxPrice, onlyInStock, onlyPromotions, sortBy]);

  return (
    <section id="loja" className="pt-2 pb-20 bg-techDarkBlue/20 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-techGreen/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <div className="flex items-center mb-6">
          <button
            onClick={onGoBack}
            className="flex items-center gap-2 text-xs font-bold text-techBlue hover:text-white transition-colors cursor-pointer group bg-white/5 border border-white/5 hover:border-white/10 px-3.5 py-1.5 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Voltar para a Home</span>
          </button>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs font-bold text-techBlue tracking-widest uppercase">Loja Completa</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nossos Equipamentos e Peças
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-techBlue to-techGreen mx-auto rounded-full" />
          <p className="text-techGray/60 text-sm max-w-xl mx-auto leading-relaxed">
            Navegue pelos produtos e monte seu carrinho. Nossos preços são imbatíveis e facilitamos o pagamento e retirada.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-techBlack/60 border border-white/10 p-1.5 rounded-full flex items-center gap-1">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'catalog'
                  ? 'bg-techBlue text-white shadow-lg shadow-techBlue/25'
                  : 'text-techGray/60 hover:text-white'
              }`}
            >
              Catálogo de Produtos
            </button>
            <button
              onClick={() => setActiveTab('pc-builder')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'pc-builder'
                  ? 'bg-techBlue text-white shadow-lg shadow-techBlue/25'
                  : 'text-techGray/60 hover:text-white'
              }`}
            >
              Monte seu PC Gamer
            </button>
          </div>
        </div>

        {activeTab === 'catalog' ? (
          <>
            {/* Search, Filter Bar (Header) */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-techDarkBlue/40 p-4 rounded-2xl border border-white/5">
              {/* Left search */}
              <div className="flex items-center relative w-full md:max-w-md">
                <input
                  type="text"
                  placeholder="Pesquisar por nome, marca ou descrição..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-techBlack/60 border border-white/10 rounded-xl py-2.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-techBlue"
                />
                <Search className="absolute right-3 w-4 h-4 text-white/40" />
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-sm font-semibold transition-all lg:hidden"
                >
                  <SlidersHorizontal className="w-4 h-4 text-techBlue" />
                  <span>Filtros</span>
                </button>

                <div className="flex items-center gap-2 shrink-0">
                  <ArrowUpDown className="w-4 h-4 text-techBlue" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-techBlack/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-techBlue cursor-pointer"
                  >
                    <option value="featured">Mais relevantes</option>
                    <option value="price-asc">Menor preço</option>
                    <option value="price-desc">Maior preço</option>
                    <option value="discount">Maior desconto</option>
                    <option value="rating">Melhores avaliações</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Catalog Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Desktop Filter Sidebar (lg:col-span-3) */}
              <div className={`lg:col-span-3 space-y-6 lg:block ${showMobileFilters ? 'block' : 'hidden'}`}>
                <div className="bg-techDarkBlue/40 border border-white/5 p-6 rounded-2xl space-y-6 sticky top-24">
                  
                  {/* Sidebar Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-techBlue" />
                      <span>Filtros de Busca</span>
                    </span>
                    <button
                      onClick={handleResetFilters}
                      className="text-xs text-techBlue hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Limpar</span>
                    </button>
                  </div>

                  {/* Categories Filter List */}
                  <div className="space-y-3">
                    <span className="block text-xs font-bold text-white/60 uppercase tracking-wide">Categorias</span>
                    <div className="flex flex-col space-y-1.5 max-h-48 overflow-y-auto pr-2">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`w-full text-left text-sm py-1.5 px-2.5 rounded-lg shrink-0 transition-all ${
                          selectedCategory === null
                            ? 'bg-techBlue/25 text-techBlue font-bold'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        Ver Todas
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.name)}
                          className={`w-full text-left text-sm py-1.5 px-2.5 rounded-lg truncate shrink-0 transition-all ${
                            selectedCategory === cat.name
                              ? 'bg-techBlue/25 text-techBlue font-bold'
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white/60 uppercase tracking-wide">Preço Máximo</span>
                      <span className="text-sm font-bold text-techGreen">
                        R$ {maxPrice.toFixed(0).replace('.', ',')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={absoluteMaxPrice}
                      step="50"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full accent-techBlue bg-techBlack/60 rounded-lg h-1.5 cursor-pointer"
                    />
                    <div className="flex items-center justify-between text-[10px] text-white/40 font-semibold">
                      <span>R$ 0</span>
                      <span>R$ {absoluteMaxPrice.toFixed(0)}</span>
                    </div>
                  </div>

                  {/* Availability Toggles */}
                  <div className="space-y-3 pt-2">
                    <span className="block text-xs font-bold text-white/60 uppercase tracking-wide">Disponibilidade</span>
                    
                    <label className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={onlyInStock}
                        onChange={(e) => setOnlyInStock(e.target.checked)}
                        className="w-4 h-4 rounded bg-techBlack/60 border-white/10 text-techBlue focus:ring-techBlue"
                      />
                      <span>Apenas em estoque</span>
                    </label>

                    <label className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={onlyPromotions}
                        onChange={(e) => setOnlyPromotions(e.target.checked)}
                        className="w-4 h-4 rounded bg-techBlack/60 border-white/10 text-techBlue focus:ring-techBlue"
                      />
                      <span>Ofertas & Promoções</span>
                    </label>
                  </div>

                  {/* PC Builder Promo Card */}
                  <div className="pt-4 border-t border-white/5">
                    <div
                      onClick={() => setActiveTab('pc-builder')}
                      className="p-4 rounded-2xl bg-gradient-to-tr from-techBlue/20 to-techGreen/5 border border-techBlue/20 hover:border-techBlue/40 cursor-pointer transition-all group text-left space-y-3"
                    >
                      <div className="w-9 h-9 rounded-xl bg-techBlue/10 text-techBlue flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Wrench className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Monte seu Setup</h4>
                        <p className="text-[11px] text-techGray/60 mt-1 leading-relaxed">
                          Monte seu computador gamer ou de escritório peça por peça e simule o preço em tempo real.
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-techBlue font-bold group-hover:text-white transition-colors">
                        <span>Acessar Simulador</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Product Grid Area (lg:col-span-9) */}
              <div className="lg:col-span-9">
                {filteredProducts.length === 0 ? (
                  <div className="bg-techDarkBlue/40 border border-white/5 rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4">
                    <SlidersHorizontal className="w-12 h-12 text-white/20" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Nenhum produto encontrado</h3>
                      <p className="text-sm text-white/50 mt-1">
                        Não encontramos resultados com as especificações ou filtros selecionados. Tente ajustar os filtros ou redefinir a busca.
                      </p>
                    </div>
                    <button
                      onClick={handleResetFilters}
                      className="bg-techBlue hover:bg-[#1a75ff] text-white font-bold py-2.5 px-6 rounded-full text-xs shadow-md transition-all uppercase tracking-wider"
                    >
                      Resetar Filtros
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                        onBuyNow={onBuyNow}
                        onOpenDetails={onOpenDetails}
                      />
                    ))}
                  </div>
                )}
              </div>

            </div>
          </>
        ) : (
          <PcBuilder />
        )}

      </div>
    </section>
  );
};
