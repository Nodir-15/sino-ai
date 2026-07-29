import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Market = () => {
  const { i18n } = useTranslation();
  const data = getT(i18n?.language);
  const t = data?.market; // Используем знак ?

  if (!t) return null; // Если данных нет, не рендерим ничего (защита от краша)

  return (
    <div className="max-w-7xl mx-auto px-6 text-center font-sans">
      <span className="text-[#3E9E67] font-bold text-[10px] tracking-[0.3em] uppercase mb-8 block">• {t.badge}</span>
      <h2 className="text-3xl md:text-5xl font-black mb-20 text-[#0D1B15] tracking-tight leading-tight">
        {t.title}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-12 mb-28">
        {[
          {v: t.s1_v, d: t.s1_d}, 
          {v: t.s2_v, d: t.s2_d}, 
          {v: t.s3_v, d: t.s3_d}
        ].map((s, i) => (
          <div key={i}>
            <div className="text-5xl md:text-7xl font-black text-[#3E9E67] mb-3 tracking-tighter">{s.v}</div>
            <p className="text-gray-500 text-sm md:text-base font-bold max-w-[200px] mx-auto leading-snug">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAF9] rounded-[40px] p-10 md:p-16 border border-gray-100">
        <div className="text-lg font-bold mb-10 text-[#0D1B15] flex items-center justify-center gap-3">
          📍 {t.geo}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
           {/* Список стран */}
           {['Узбекистан 🇺🇿', 'Казахстан 🇰🇿', 'Азербайджан 🇦🇿', 'Кыргызстан 🇰🇬', 'Таджикистан 🇹🇯', 'Турция 🇹🇷', 'ОАЭ 🇦🇪'].map((c, i) => (
             <div key={i} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm border border-gray-50">
               <span className="font-bold text-sm">{c}</span>
               <span className="bg-[#3E9E67] text-white text-[8px] px-3 py-1.5 rounded-full uppercase font-black">{t.status}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Market;