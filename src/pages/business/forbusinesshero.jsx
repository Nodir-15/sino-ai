import React from 'react';
import { useTranslation } from "../../components/i18n";
import { businessTranslations } from "./translations";

const ForBusinessHero = () => {
  const { i18n } = useTranslation();
  const t = businessTranslations[i18n?.language || 'ru']?.hero || businessTranslations['ru'].hero;

  return (
    <section id="hero" className="flex flex-col items-center text-center px-6 pt-20 pb-16 md:pt-32 max-w-6xl mx-auto bg-white">
      <span className="text-[#3E9E67] font-bold text-[12px] tracking-[0.2em] mb-8 uppercase">• {t.badge}</span>
      <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] mb-10 text-[#0D1B15]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">{t.titleGradient}</span> {t.titleMain}
      </h1>
      <p className="text-[#4B5E55] text-lg md:text-xl leading-relaxed max-w-3xl mb-12">{t.desc}</p>
      <div className="flex flex-col sm:flex-row gap-4 mb-14">
        <button className="bg-[#0D1B15] text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all shadow-xl shadow-green-900/10">{t.btnPartner}</button>
        <button className="bg-white text-[#0D1B15] px-10 py-4 rounded-full font-bold border border-gray-100 hover:shadow-lg transition-all">{t.btnApp}</button>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          {[1,2,3].map(i => <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${i}`} alt=""/>)}
        </div>
        <p className="text-[14px] text-gray-500 font-medium">{t.socialProof}</p>
      </div>
    </section>
  );
};
export default ForBusinessHero;