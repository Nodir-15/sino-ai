import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusinessHero = () => {
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).hero;

  return (
    <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
      <motion.span 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-[#3E9E67] font-bold text-xs tracking-[0.3em] mb-10 uppercase block"
      >
        • {t.badge}
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-10 text-[#0D1B15] tracking-tighter"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">
          {t.titleGradient}
        </span><br />
        {t.titleMain}
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-[#4B5E55] text-lg md:text-2xl leading-relaxed max-w-4xl mb-14 font-medium"
      >
        {t.desc}
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-6 mb-16"
      >
        <button className="bg-[#0D1B15] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-black hover:scale-105 transition-all shadow-2xl shadow-green-900/20 active:scale-95">
          {t.btnPartner}
        </button>
        <button className="bg-white text-[#0D1B15] px-12 py-5 rounded-full font-bold text-lg border-2 border-gray-100 hover:border-[#3E9E67] transition-all active:scale-95">
          {t.btnApp}
        </button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-5 bg-gray-50 px-6 py-3 rounded-full">
        <div className="flex -space-x-3">
          {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-300" />)}
        </div>
        <p className="text-sm md:text-base text-gray-500 font-bold">{t.socialProof}</p>
      </motion.div>
    </div>
  );
};

export default ForBusinessHero;