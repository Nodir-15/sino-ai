// businessnavbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const BusinessNavbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  // Получаем переводы через хелпер
  const t = getT(i18n?.language).nav;
  const currentLang = i18n?.language?.split('-')[0] || 'ru';

  const languages = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ];

  const handleLangChange = (code) => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(code);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Логотип */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-[#3E9E67] rounded-full flex items-center justify-center text-white font-bold">⊕</div>
          <span className="text-2xl font-bold text-[#3E9E67]">sino</span>
        </div>

        {/* Языки - Кнопки теперь точно будут нажиматься */}
        <div className="flex items-center border border-gray-200 rounded-full overflow-hidden h-9 bg-white">
          {languages.map((lang) => (
            <button 
              key={lang.code} 
              type="button"
              onClick={() => handleLangChange(lang.code)}
              className={`px-4 h-full text-[12px] font-bold cursor-pointer relative z-50 transition-all ${
                currentLang === lang.code ? 'bg-[#00A36C] text-white' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        {/* Кнопка Стать партнером */}
        <button className="bg-[#0D1B15] text-white px-6 py-2.5 rounded-full text-[14px] font-bold hover:bg-black transition-all">
          {t.partnerBtn}
        </button>
      </div>
    </nav>
  );
};
export default BusinessNavbar;