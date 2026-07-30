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
      className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center font-sans text-black"
    >
      <p className="text-emerald-600 font-medium text-sm md:text-base mb-6 flex items-center justify-center gap-2 tracking-wide uppercase">
  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
  {t.badge}
</p>
      
      {/* Заголовок — размер и стиль как на главной */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black leading-[1.15] mb-6 text-[#0D1B15] tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">
          {t.titleGradient}
        </span>
        <br />
        <span className="text-[#0D1B15]">{t.titleMain}</span>
      </h1>

      <p className="text-[#4B5E55] text-base md:text-lg leading-relaxed max-w-2xl mb-10 font-medium">
        {t.desc}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <button className="bg-[#0D1B15] text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-lg hover:bg-black transition-all">
          {t.btnPartner}
        </button>
        <button className="bg-white text-[#0D1B15] px-8 py-3.5 rounded-full font-bold text-[15px] border border-gray-200 hover:bg-gray-50 transition-all">
          {t.btnApp}
        </button>
      </div>

      {/* Аватары */}
      <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
        <div className="flex -space-x-2">
          {/* IMAGE 2, 3, 4 */}
          <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="./av1.webp" alt="" /></div>
          <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="./av2.webp" alt="" /></div>
          <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="./av3.webp" alt="" /></div>
        </div>
        <p className="text-[12px] text-gray-500 font-medium">{t.socialProof}</p>
      </div>
    </motion.div>
  );
};

export default ForBusinessHero;