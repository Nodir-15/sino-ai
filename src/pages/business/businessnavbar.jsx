import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const BusinessNavbar = () => {
  const navigate = useNavigate();
  const { lang, setLang } = useTranslation();
  const t = getT(lang).nav;
  const currentLang = (lang || 'uz').split('-')[0];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
      {/* Уменьшен вертикальный отступ с py-5 до py-4 для большей компактности */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
            <img src="./log.webp" alt="logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-2xl font-semibold text-emerald-700 tracking-tight">sino</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium text-[15px]">
          <a href="#market" className="hover:text-emerald-600 transition-colors">{t.market}</a>
          <a href="#why" className="hover:text-emerald-600 transition-colors">{t.business}</a>
          <a href="#team" className="hover:text-emerald-600 transition-colors">{t.team}</a>
        </div>

        {/* Language + Button */}
        <div className="flex items-center gap-3">
          <div className="flex border border-gray-200 rounded-full overflow-hidden text-sm font-medium">
            {['uz', 'ru', 'en'].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 transition-all ${
                  currentLang === l 
                    ? 'bg-emerald-600 text-white' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Кнопка "Стать партнером" — добавлен обработчик onClick для перехода */}
          <button 
            type="button"
            onClick={() => navigate('/partner')}
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-600 transition-all duration-300"
          >
            {t.partnerBtn}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavbar;
