import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusinessHero = () => {
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).hero;

  return (
    <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 max-w-5xl mx-auto font-sans bg-white">
      {/* Badge поменьше */}
      <span className="text-[#3E9E67] font-bold text-[10px] tracking-[0.2em] mb-6 uppercase">
        • {t.badge}
      </span>

      {/* Заголовок теперь компактнее: text-3xl md:text-5xl */}
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-[#0D1B15] tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">
          {t.titleGradient}
        </span>{" "}
        {t.titleMain}
      </h1>

      <p className="text-[#4B5E55] text-sm md:text-base leading-relaxed max-w-2xl mb-10">
        {t.desc}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <button className="bg-[#0D1B15] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-green-900/10">
          {t.partnerBtn}
        </button>
        <button className="bg-white text-[#0D1B15] px-8 py-3 rounded-full font-bold text-sm border border-gray-100">
          {t.btnApp}
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {[1,2,3].map(i => <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-100" />)}
        </div>
        <p className="text-[12px] text-gray-400 font-medium">{t.socialProof}</p>
      </div>
    </section>
  );
};

export default ForBusinessHero;