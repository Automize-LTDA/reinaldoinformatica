import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';

interface CategoriesProps {
  onSelectCategory: (categoryName: string) => void;
  selectedCategory: string | null;
  onNavigate: (view: 'home' | 'store', sectionId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory, selectedCategory, onNavigate }) => {
  
  // Dynamic Icon Resolver Component
  const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.HelpCircle className={className} />;
    return <IconComponent className={className} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  const handleCategoryClick = (categoryName: string) => {
    // Toggle selection or select
    if (selectedCategory === categoryName) {
      onSelectCategory(''); // Reset filter
    } else {
      onSelectCategory(categoryName);
    }

    // Switch to store view
    onNavigate('store', '#loja');
  };

  return (
    <section id="produtos-categorias" className="py-20 bg-techBlack relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-techBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-techBlue tracking-widest uppercase">Navegue por Departamento</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorias de Equipamentos e Acessórios
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-techBlue to-techGreen mx-auto rounded-full" />
          <p className="text-techGray/60 text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Selecione uma categoria para filtrar nossa loja e encontrar o produto que você precisa com mais facilidade.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <motion.button
                key={cat.id}
                variants={itemVariants}
                onClick={() => handleCategoryClick(cat.name)}
                className={`flex flex-col items-center text-center p-5 rounded-2xl border transition-all duration-300 group select-none cursor-pointer focus:outline-none w-full ${
                  isSelected
                    ? 'bg-techBlue/25 border-techBlue shadow-[0_0_20px_rgba(0,102,255,0.3)]'
                    : 'bg-techDarkBlue/40 border-white/5 hover:border-techBlue/40 hover:bg-techDarkBlue/80 hover:shadow-[0_0_15px_rgba(0,102,255,0.1)]'
                }`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon Circle */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isSelected
                      ? 'bg-techBlue text-white glow-blue'
                      : 'bg-white/5 text-techGray group-hover:bg-techBlue/10 group-hover:text-techBlue'
                  }`}
                >
                  <DynamicIcon name={cat.icon} className="w-6 h-6" />
                </div>

                {/* Name */}
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide leading-tight line-clamp-1 mb-1">
                  {cat.name}
                </span>
                
                {/* Short Description */}
                <span className="text-[10px] text-white/40 line-clamp-2 mt-0.5 group-hover:text-white/60 transition-colors leading-normal font-sans font-light">
                  {cat.description}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
