import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

// 1. Принимаем onPartnerClick как входящий параметр (пропс)
const ForBusinessHero = ({ onPartnerClick }) => {
  const { lang } = useTranslation();
  const t = getT(lang).hero;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center font-sans text-black py-12"
    >
      {/* Надзаголовок */}
      <p className="text-emerald-600 font-bold text-[11px] mb-4 flex items-center justify-center gap-1.5 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        {t.badge}
      </p>
      
      {/* Главный заголовок */}
      <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5 text-[#0D1B15] tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">
          {t.titleGradient}
        </span>
        <br />
        <span className="text-[#0D1B15]">{t.titleMain}</span>
      </h1>

      {/* Описание */}
      <p className="text-[#4B5E55] text-sm md:text-base leading-relaxed max-w-2xl mb-8 font-medium">
        {t.desc}
      </p>

      {/* Кнопки */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        {/* 2. Добавляем onClick={onPartnerClick} для кнопки стать партнером */}
        <button 
          onClick={onPartnerClick}
          className="bg-[#0D1B15] text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-lg hover:bg-black transition-all cursor-pointer"
        >
          {t.btnPartner}
        </button>
        
        {/* Кнопка скачать приложение (скролл вниз) */}
        <button 
          onClick={() => document.getElementById('downloadcta')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-[#0D1B15] px-8 py-3.5 rounded-full font-bold text-[15px] border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer"
        > 
          {t.btnApp} 
        </button>
      </div>

      {/* Аватары */}
      <div className="flex items-center gap-2.5 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
        <div className="flex -space-x-1.5">
          <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="./av1.webp" alt="" /></div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="./av2.webp" alt="" /></div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="./av3.webp" alt="" /></div>
        </div>
        <p className="text-[12px] text-gray-500 font-medium">{t.socialProof}</p>
      </div>
    </motion.div>
  );
};

export default ForBusinessHero;
