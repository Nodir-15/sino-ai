import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const BusinessNavbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const data = getT(i18n?.language);
  const t = data.nav;
  const currentLang = i18n?.language?.split('-')[0] || 'ru';

  const handleLanguageChange = (langCode) => {
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(langCode);
    }
  };

  return (
    // z-[9999] чтобы навбар был выше всего на свете
    <nav className="sticky top-0 z-[9999] w-full bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 font-sans text-black">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Логотип */}
        <div 
          className="flex items-center gap-2 cursor-pointer relative z-[10000]" 
          onClick={() => navigate('/')}
        >
          <div className="w-8 h-8 bg-[#3E9E67] rounded-full flex items-center justify-center text-white font-bold text-xl">⊕</div>
          <span className="text-xl font-bold text-[#3E9E67]">sino</span>
        </div>

        {/* Ссылки (Размер 15px как на главной) */}
        <div className="hidden md:flex gap-8 text-[#4B5E55] font-medium text-[15px]">
          <a href="#market" className="hover:text-[#3E9E67] transition-colors cursor-pointer">Рынок</a>
          <a href="#why" className="hover:text-[#3E9E67] transition-colors cursor-pointer">Для бизнеса</a>
          <a href="#team" className="hover:text-[#3E9E67] transition-colors cursor-pointer">Команда</a>
        </div>

        {/* Кнопки и Языки */}
        <div className="flex items-center gap-4 relative z-[10000]">
          
          {/* Переключатель языков */}
          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-white h-9 shadow-sm">
            {['uz', 'ru', 'en'].map((l) => (
              <button
                key={l}
                type="button" // Чтобы браузер понимал, что это кнопка
                onClick={() => handleLanguageChange(l)}
                className={`px-4 h-full text-[11px] font-bold transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  currentLang === l 
                    ? 'bg-[#00A36C] text-white shadow-inner' 
                    : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Кнопка действия */}
          <button 
            type="button"
            className="bg-[#0D1B15] text-white px-6 py-2.5 rounded-full text-[14px] font-bold shadow-md hover:bg-black transition-all cursor-pointer"
          >
            {t.partnerBtn}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavbar;