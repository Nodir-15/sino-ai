import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusinessHero = () => {
  const { i18n } = useTranslation();
  const data = getT(i18n?.language); // Берем весь объект языка

  return (
    <section className="flex flex-col items-center text-center px-6 pt-20 pb-16 max-w-5xl mx-auto bg-white font-sans">
      {/* Используем безопасный доступ через ?. к каждому ключу */}
      <span className="text-[#3E9E67] font-bold text-[10px] tracking-[0.2em] mb-8 uppercase">
        • {data?.hero?.badge || "SINO AI"}
      </span>
      
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8 text-[#0D1B15] tracking-tight font-sans">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">
          {data?.hero?.titleGradient || ""}
        </span>{" "}
        {data?.hero?.titleMain || ""}
      </h1>

      <p className="text-[#4B5E55] text-sm md:text-base leading-relaxed max-w-2xl mb-10 font-sans">
        {data?.hero?.desc || ""}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <button className="bg-[#0D1B15] text-white px-10 py-3 rounded-full font-bold text-sm">
          {data?.hero?.btnPartner || "..."}
        </button>
        <button className="bg-white text-[#0D1B15] px-10 py-3 rounded-full font-bold text-sm border border-gray-100">
          {data?.hero?.btnApp || "..."}
        </button>
      </div>
    </section>
  );
};

export default ForBusinessHero;