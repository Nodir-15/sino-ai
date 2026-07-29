import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const BusinessNavbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).nav;
  const currentLang = i18n?.language?.split('-')[0] || 'ru';

  const languages = [{ c: 'uz', l: 'UZ' }, { c: 'ru', l: 'RU' }, { c: 'en', l: 'EN' }];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/90 backdrop-blur-md border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-[#3E9E67] rounded-full flex items-center justify-center text-white font-bold">⊕</div>
          <span className="text-2xl font-bold text-[#3E9E67]">sino</span>
        </div>

        <div className="hidden md:flex gap-10">
          <a href="#market" className="text-[15px] font-medium text-gray-500 hover:text-[#3E9E67]">{t.market}</a>
          <a href="#hero" className="text-[15px] font-medium text-gray-500 hover:text-[#3E9E67]">{t.business}</a>
          <a href="#team" className="text-[15px] font-medium text-gray-500 hover:text-[#3E9E67]">{t.team}</a>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex border border-gray-200 rounded-full overflow-hidden bg-white">
            {languages.map((l) => (
              <button key={l.c} onClick={() => i18n?.changeLanguage(l.c)}
                className={`px-4 py-1.5 text-xs font-bold transition-all ${currentLang === l.c ? 'bg-[#00A36C] text-white' : 'text-gray-400 hover:bg-gray-50'}`}>
                {l.l}
              </button>
            ))}
          </div>
          <button className="bg-[#0D1B15] text-white px-6 py-2.5 rounded-full text-sm font-bold">{t.partnerBtn}</button>
        </div>
      </div>
    </nav>
  );
};
export default BusinessNavbar;