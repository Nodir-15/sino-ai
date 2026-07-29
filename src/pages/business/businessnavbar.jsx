import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../components/i18n"; // Путь к твоему i18n
import { businessTranslations } from "./translations"; // Твои переводы для бизнеса

const BusinessNavbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  // Определяем текущий язык и берем нужные слова
  const currentLang = i18n.language || 'ru';
  const t = businessTranslations[currentLang]?.nav || businessTranslations['ru'].nav;

  const languages = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO - ведет на главную */}
        <div 
          className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
          onClick={() => navigate('/')}
        >
          <div className="w-8 h-8 bg-[#3E9E67] rounded-full flex items-center justify-center text-white font-bold">
            ⊕
          </div>
          <span className="text-2xl font-bold text-[#3E9E67] tracking-tight">sino</span>
        </div>

        {/* MENU LINKS - скролл по ID */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#market" className="text-[15px] font-medium text-[#4B5E55] transition-colors hover:text-[#3E9E67]">
            {t.market}
          </a>
          <a href="#hero" className="text-[15px] font-medium text-[#4B5E55] transition-colors hover:text-[#3E9E67]">
            {t.business}
          </a>
          <a href="#team" className="text-[15px] font-medium text-[#4B5E55] transition-colors hover:text-[#3E9E67]">
            {t.team}
          </a>
        </div>

        {/* ACTIONS: Lang Switcher & Button */}
        <div className="flex items-center gap-5">
          
          {/* LANGUAGE SWITCHER (как на фото) */}
          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden h-9 bg-white shadow-sm">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`px-4 h-full text-[12px] font-bold transition-all duration-300 ${
                  currentLang === lang.code
                    ? 'bg-[#00A36C] text-white shadow-inner'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* BUTTON - Стать партнером */}
          <button className="bg-[#0D1B15] text-white px-6 py-2.5 rounded-full text-[14px] font-bold flex items-center gap-2 hover:bg-black hover:scale-105 transition-all active:scale-95 shadow-lg shadow-green-900/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            {t.partnerBtn}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default BusinessNavbar;