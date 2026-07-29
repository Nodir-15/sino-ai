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

  const languages = [{ c: 'uz', l: 'UZ' }, { c: 'ru', l: 'RU' }, { c: 'en', l: 'EN' }];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-[#3E9E67] rounded-full flex items-center justify-center text-white font-bold">⊕</div>
          <span className="text-xl font-bold text-[#3E9E67] font-sans">sino</span>
        </div>

        <div className="hidden md:flex gap-8 text-[#4B5E55] font-medium text-[15px] font-sans">
          <a href="#market" className="hover:text-[#3E9E67] transition-colors">{t.market}</a>
          <a href="#why" className="hover:text-[#3E9E67] transition-colors">{t.business}</a>
          <a href="#team" className="hover:text-[#3E9E67] transition-colors">{t.team}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex border border-gray-200 rounded-full overflow-hidden bg-white h-8 shadow-sm">
            {languages.map(l => (
              <button key={l.c} onClick={() => i18n?.changeLanguage(l.c)}
                className={`px-3 text-[11px] font-bold transition-all ${currentLang === l.c ? 'bg-[#00A36C] text-white' : 'text-gray-400 hover:bg-gray-50'}`}>
                {l.l}
              </button>
            ))}
          </div>
          <button className="bg-[#0D1B15] text-white px-5 py-2 rounded-full text-sm font-bold font-sans shadow-md active:scale-95 transition-all">
            {t.partnerBtn}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavbar;