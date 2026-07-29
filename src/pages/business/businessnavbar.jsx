import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../components/i18n";
import { businessTranslations } from "./translations";

const BusinessNavbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n?.language || 'ru';
  const t = businessTranslations[currentLang]?.nav || businessTranslations['ru'].nav;

  const languages = [{ code: 'uz', label: 'UZ' }, { code: 'ru', label: 'RU' }, { code: 'en', label: 'EN' }];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-[#3E9E67] rounded-full flex items-center justify-center text-white font-bold">⊕</div>
          <span className="text-2xl font-bold text-[#3E9E67]">sino</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['market', 'hero', 'team'].map((id, i) => (
            <a key={i} href={`#${id}`} className="text-[15px] font-medium text-[#4B5E55] hover:text-[#3E9E67] transition-colors">
              {t[id] || t.business}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden h-9 bg-white">
            {languages.map((lang) => (
              <button key={lang.code} onClick={() => i18n?.changeLanguage(lang.code)}
                className={`px-4 h-full text-[12px] font-bold transition-all ${currentLang === lang.code ? 'bg-[#00A36C] text-white' : 'text-gray-500 hover:bg-gray-50'}`}>
                {lang.label}
              </button>
            ))}
          </div>
          <button className="bg-[#0D1B15] text-white px-6 py-2.5 rounded-full text-[14px] font-bold hover:bg-black transition-all shadow-lg shadow-green-900/10">
            {t.partnerBtn}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default BusinessNavbar;