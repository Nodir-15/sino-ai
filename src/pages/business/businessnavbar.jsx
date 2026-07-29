import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations"; // ПРАВИЛЬНЫЙ ИМПОРТ

const BusinessNavbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).nav; // Используем getT
  const currentLang = i18n?.language?.split('-')[0] || 'ru';

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex gap-2 cursor-pointer" onClick={() => navigate('/')}>
           <span className="text-[#3E9E67] font-bold text-2xl">sino</span>
        </div>
        <div className="flex gap-4 border rounded-full overflow-hidden">
          {['uz', 'ru', 'en'].map(l => (
            <button key={l} onClick={() => i18n?.changeLanguage(l)} 
              className={`px-3 py-1 text-xs font-bold ${currentLang === l ? 'bg-[#3E9E67] text-white' : 'text-gray-400'}`}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold">
          {t.partnerBtn}
        </button>
      </div>
    </nav>
  );
};

export default BusinessNavbar;