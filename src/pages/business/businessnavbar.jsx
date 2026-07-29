import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const BusinessNavbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).nav;
  const currentLang = i18n?.language?.split('-')[0] || 'ru';

  return (
    <header className="sticky top-0 z-[999] w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-[#3E9E67] rounded-full flex items-center justify-center text-white">⊕</div>
          <span className="text-xl font-bold text-[#3E9E67]">sino</span>
        </div>

        <div className="hidden md:flex gap-8">
           <a href="#market" className="text-gray-500 hover:text-green-600">{t.market}</a>
           <a href="#hero" className="text-gray-500 hover:text-green-600">{t.business}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex border rounded-full bg-gray-50">
            {['uz', 'ru', 'en'].map(l => (
              <button key={l} onClick={() => i18n?.changeLanguage(l)} 
                className={`px-3 py-1 text-[10px] font-bold rounded-full ${currentLang === l ? 'bg-[#3E9E67] text-white' : 'text-gray-400'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold">{t.partnerBtn}</button>
        </div>
      </div>
    </header>
  );
};

export default BusinessNavbar;