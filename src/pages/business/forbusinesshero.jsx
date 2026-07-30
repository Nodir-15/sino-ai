import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusinessHero = () => {
  const { lang } = useTranslation();
  const t = getT(lang).hero;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center font-sans text-black py-8"
    >
      {/* Надзаголовок: text-sm/base → text-[11px], mb-6 → mb-3 */}
      <p className="text-emerald-600 font-bold text-[11px] mb-3 flex items-center justify-center gap-1.5 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        {t.badge}
      </p>
      
      {/* Заголовок: убраны огромные 6xl/7xl классы, заменены на text-2xl/3xl/4xl, mb-6 → mb-4 */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-[#0D1B15] tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">
          {t.titleGradient}
        </span>
        <br />
        <span className="text-[#0D1B15]">{t.titleMain}</span>
      </h1>

      {/* Описание: text-base/lg → text-xs/sm, уменьшен max-w, mb-10 → mb-6 */}
      <p className="text-[#4B5E55] text-xs md:text-sm leading-relaxed max-w-xl mb-6 font-medium">
        {t.desc}
      </p>

      {/* Кнопки: mb-12 → mb-8 */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <button className="bg-[#0D1B15] text-white px-6 py-3 rounded-full font-bold text-[13px] shadow-lg hover:bg-black transition-all">
          {t.btnPartner}
        </button>
        <button 
          onClick={() => document.getElementById('downloadcta')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-[#0D1B15] px-6 py-3 rounded-full font-bold text-[13px] border border-gray-200 hover:bg-gray-50 transition-all"
        > 
          {t.btnApp} 
        </button>
      </div>

      {/* Аватары */}
      <div className="flex items-center gap-2.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
        <div className="flex -space-x-1.5">
          <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="./av1.webp" alt="" /></div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="./av2.webp" alt="" /></div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="./av3.webp" alt="" /></div>
        </div>
        <p className="text-[11px] text-gray-500 font-medium">{t.socialProof}</p>
      </div>
    </motion.div>
  );
};

export default ForBusinessHero;
