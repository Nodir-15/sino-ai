import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../i18n"; // Импортируй свой i18n

const BusinessNavbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation(); // Получаем функции перевода

  // Массив доступных языков
  const languages = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ];

  const currentLanguage = i18n.language || 'ru';

  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-[1400px] mx-auto w-full sticky top-0 bg-white/90 backdrop-blur-md z-50">
      {/* Logo */}
      <div 
        className="text-2xl font-bold text-[#3E9E67] cursor-pointer flex items-center gap-2"
        onClick={() => navigate('/')}
      >
        <span className="text-3xl">⊕</span> sino
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10 text-[#4B5E55] font-medium text-[15px]">
        <a href="#market" className="transition-colors duration-300 hover:text-[#3E9E67]">Рынок</a>
        <a href="#hero" className="transition-colors duration-300 hover:text-[#3E9E67]">Для бизнеса</a>
        <a href="#team" className="transition-colors duration-300 hover:text-[#3E9E67]">Команда</a>
      </div>

      {/* Right side Actions */}
      <div className="flex items-center gap-6">
        
        {/* Language Switcher (как на фото) */}
        <div className="flex items-center border border-gray-200 rounded-full overflow-hidden h-9 bg-white">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={`px-4 h-full text-[13px] font-bold transition-all duration-200 ${
                currentLanguage === lang.code
                  ? 'bg-[#00A36C] text-white' // Активный язык (зеленый)
                  : 'bg-transparent text-black hover:bg-gray-50' // Неактивный
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#0D1B15] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-black transition-all shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          Стать партнёром
        </button>
      </div>
    </nav>
  );
};

export default BusinessNavbar;