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
    <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 font-sans text-black shadow-sm z-[9999]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* ========== ЛОГО ========== */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          
          {/* ←←←  IMAGE 1 — ЛОГОТИП  ←←← */}
         {/* Logo — точно как на главной */}
<div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
  <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
    <img src="./log.webp" alt="logo" className="w-full h-full object-contain" />
  </div>
  <span className="text-2xl font-semibold text-emerald-700 tracking-tight">sino</span>
</div>

        <div className="hidden md:flex gap-8 text-[#4B5E55] font-medium text-[15px]">
          <a href="#market" className="hover:text-[#3E9E67] transition-colors">{t.market}</a>
          <a href="#why" className="hover:text-[#3E9E67] transition-colors">{t.business}</a>
          <a href="#team" className="hover:text-[#3E9E67] transition-colors">{t.team}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-white h-9 shadow-sm">
            {['uz', 'ru', 'en'].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-4 h-full text-[11px] font-bold transition-all duration-200 ${
                  currentLang === l 
                    ? 'bg-[#00A36C] text-white' 
                    : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button 
            type="button"
            className="bg-[#0D1B15] text-white px-6 py-2.5 rounded-full text-[14px] font-bold shadow-md hover:bg-black transition-all"
          >
            {t.partnerBtn}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavbar;