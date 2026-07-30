import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusiness = () => {
  const { lang } = useTranslation();
  const t = getT(lang).why;

  return (
    <div className="max-w-6xl mx-auto px-4 font-sans py-12">
      {/* Сбалансированная сетка 2-х колонок */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Левая колонка */}
        <div className="flex flex-col items-start text-left space-y-5">
          <div className="space-y-4">
            {/* 1. Маленький аккуратный надзаголовок */}
            <p className="text-emerald-600 font-bold text-[11px] flex items-center gap-1.5 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              {t.badge}
            </p>
            {/* 2. Крупный, очень жирный заголовок (перенесен влево по разметке grid) */}
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight max-w-3xl text-left leading-tight">
  {t.title}
</h2>

            {/* 3. Легкое, аккуратно перенесенное описание */}
            <p className="text-[#4B5E55] text-sm md:text-base leading-relaxed max-w-xl font-medium">
              {t.desc}
            </p>
          </div>
          {/* Кнопка */}
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            className="bg-[#0D1B15] text-white px-8 py-3.5 rounded-full font-bold text-[14px] shadow-xl shadow-green-900/10 transition-all flex items-center gap-2.5"
          >
            <span className="text-xl">📱</span> {t.btn}
          </motion.button>
        </div>

        {/* Правая колонка с карточками */}
        <div className="flex flex-col gap-4 w-full">
          {t.items.map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ x: 6 }} 
              className="bg-white p-5 rounded-2xl flex items-start gap-5 shadow-sm border border-gray-100 hover:border-green-100 transition-all group"
            >
              {/* Контейнер иконки */}
              <div className="bg-[#f0f7f3] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl group-hover:rotate-12 transition-transform">
                 {idx === 0 ? "👥" : idx === 1 ? "💰" : "📊"}
              </div>
              
              <div>
                {/* Заголовок внутри карточки */}
                <h3 className="text-base font-bold text-[#0D1B15] tracking-tight mb-1">
                  {item.t}
                </h3>
                {/* Описание внутри карточки */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">
                  {item.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForBusiness;
