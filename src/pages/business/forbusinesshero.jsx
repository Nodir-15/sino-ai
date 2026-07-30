import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusinessHero = () => {
  const { lang } = useTranslation();
  const t = getT(lang).hero;                     // ← обязательно

  return (
    <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center font-sans text-black">
      <span className="text-[#3E9E67] font-bold text-[10px] tracking-[0.3em] mb-8 uppercase block">• {t.badge}</span>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 text-[#0D1B15] tracking-tighter">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">
          {t.titleGradient}
        </span><br />
        {t.titleMain}
      </h1>

      <p className="text-[#4B5E55] text-lg md:text-xl leading-relaxed max-w-3xl mb-12 font-medium">
        {t.desc}
      </p>

      <div className="flex flex-col sm:flex-row gap-5 mb-14">
        <button className="bg-[#0D1B15] text-white px-10 py-4 rounded-full font-bold text-base shadow-xl shadow-green-900/10 hover:bg-black transition-all">
          {t.btnPartner}
        </button>
        <button className="bg-white text-[#0D1B15] px-10 py-4 rounded-full font-bold text-base border border-gray-200">
          {t.btnApp}
        </button>
      </div>

      <div className="flex items-center gap-4 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-100">
        <div className="flex -space-x-3">
          {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />)}
        </div>
        <p className="text-[13px] text-gray-500 font-bold">{t.socialProof}</p>
      </div>
    </div>
  );
};

export default ForBusinessHero;