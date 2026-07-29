import React from 'react';
import { useTranslation } from "../../components/i18n"; 
import { businessTranslations } from "./translations";

const ForBusinessHero = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'ru';
  
  // Берем тексты именно для блока hero
  const t = businessTranslations[currentLang]?.hero || businessTranslations['ru'].hero;

  return (
    <section className="flex flex-col items-center text-center px-6 pt-20 pb-16 md:pt-32 max-w-6xl mx-auto">
      
      {/* Badge сверху */}
      <span className="text-[#3E9E67] font-bold text-[12px] tracking-[0.2em] mb-8 uppercase animate-fade-in">
        • {t.badge}
      </span>

      {/* Заголовок с градиентом */}
      <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] mb-10 text-[#0D1B15] tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">
          {t.titleGradient}
        </span>{" "}
        {t.titleMain}
      </h1>

      {/* Описание */}
      <p className="text-[#4B5E55] text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
        {t.desc}
      </p>

      {/* Кнопки действия */}
      <div className="flex flex-col sm:flex-row gap-4 mb-14">
        <button className="bg-[#0D1B15] text-white px-10 py-4 rounded-full font-bold text-[15px] hover:bg-black hover:scale-105 transition-all shadow-xl shadow-green-900/10 flex items-center justify-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          {t.btnPartner}
        </button>
        
        <button className="bg-white text-[#0D1B15] px-10 py-4 rounded-full font-bold text-[15px] border border-gray-100 hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {t.btnApp}
        </button>
      </div>

      {/* Блок социального доверия (аватарки) */}
      <div className="flex items-center gap-4 animate-bounce-subtle">
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <img 
              key={i}
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" 
              src={`https://i.pravatar.cc/100?u=sino${i}`} 
              alt="user"
            />
          ))}
        </div>
        <p className="text-[14px] text-gray-500 font-medium">
          {t.socialProof}
        </p>
      </div>

    </section>
  );
};

export default ForBusinessHero;