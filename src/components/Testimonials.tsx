import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-techDarkBlue/20 relative overflow-hidden">
      {/* Background visual glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-techGreen/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-techGreen tracking-widest uppercase">Quem Compra Aprova</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Depoimentos de Nossos Clientes
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-techGreen to-techBlue mx-auto rounded-full" />
          <p className="text-techGray/60 text-sm max-w-xl mx-auto leading-relaxed">
            A satisfação do cliente é o nosso maior objetivo. Veja a opinião de quem já realizou manutenções ou comprou produtos conosco.
          </p>
        </div>

        {/* Testimonials Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-techDarkBlue/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-techBlue/30 hover:shadow-[0_0_20px_rgba(0,102,255,0.08)] transition-all duration-300 relative group"
            >
              {/* Quote Mark in background */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/[0.03] group-hover:text-techBlue/[0.05] transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < test.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/10'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment quote text */}
                <p className="text-sm text-white/70 italic leading-relaxed font-sans font-light">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5 relative z-10">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0 bg-white/5"
                />
                <div>
                  <span className="block text-sm font-bold text-white leading-tight">{test.name}</span>
                  <span className="text-[10px] text-techGreen font-semibold uppercase tracking-wider">
                    {test.role || 'Cliente'}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
