import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations"; // ПРАВИЛЬНЫЙ ИМПОРТ

const ForBusinessHero = () => {
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).hero;

  return (
    <section className="py-24 text-center px-6">
      <span className="text-[#3E9E67] font-bold text-xs mb-6 block uppercase tracking-widest">• {t.badge}</span>
      <h1 className="text-4xl md:text-7xl font-extrabold mb-8 text-black">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-500">{t.titleGradient}</span> {t.titleMain}
      </h1>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">{t.desc}</p>
      <div className="flex justify-center gap-4">
        <button className="bg-black text-white px-8 py-3 rounded-full font-bold">{t.btnPartner}</button>
        <button className="border px-8 py-3 rounded-full font-bold text-black">{t.btnApp}</button>
      </div>
    </section>
  );
};

export default ForBusinessHero;