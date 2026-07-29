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
    <nav className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-[#3E9E67] rounded-full flex items-center justify-center text-white font-bold text-xl">⊕</div>
          <span className="text-xl font-bold text-[#3E9E67]">sino</span>
        </div>

        <div className="hidden md:flex gap-10 text-[#4B5E55] font-medium text-[15px]">
          <a href="#market" className="hover:text-[#3E9E67] transition-colors">{t.market}</a>
          <a href="#why" className="hover:text-[#3E9E67] transition-colors">{t.business}</a>
          <a href="#team" className="hover:text-[#3E9E67] transition-colors">{t.team}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex border border-gray-200 rounded-full overflow-hidden bg-white h-8 shadow-sm">
            {['uz', 'ru', 'en'].map(l => (
              <button key={l} onClick={() => i18n?.changeLanguage(l)}
                className={`px-3 text-[11px] font-bold transition-all ${currentLang === l ? 'bg-[#00A36C] text-white' : 'text-gray-400 hover:bg-gray-50'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="bg-[#0D1B15] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-black transition-all">
            {t.partnerBtn}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavbar;