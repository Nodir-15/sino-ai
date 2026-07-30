import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusiness = () => {
  const { lang } = useTranslation();
  const t = getT(lang).why;                       // ← обязательно

  return (
    <div className="max-w-7xl mx-auto px-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="flex flex-col items-start text-left space-y-10">
          <div className="space-y-6">
            <span className="text-[#3E9E67] font-bold text-xs tracking-[0.3em] uppercase block">• {t.badge}</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0D1B15] leading-[1.1] tracking-tighter">{t.title}</h2>
            <p className="text-[#4B5E55] text-lg md:text-xl leading-relaxed max-w-xl font-medium">{t.desc}</p>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#0D1B15] text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-green-900/20 transition-all flex items-center gap-3">
            <span className="text-2xl">📱</span> {t.btn}
          </motion.button>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {t.items.map((item, idx) => (
            <motion.div key={idx} whileHover={{ x: 10 }} className="bg-white p-8 md:p-10 rounded-[40px] flex items-start gap-8 shadow-sm border border-gray-100 hover:border-green-100 transition-all group">
              <div className="bg-[#f0f7f3] w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-3xl group-hover:rotate-12 transition-transform">
                 {idx === 0 ? "👥" : idx === 1 ? "💰" : "📊"}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-black text-[#0D1B15] tracking-tight">{item.t}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForBusiness;