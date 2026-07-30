import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Team = () => {
  const { lang } = useTranslation();
  const t = getT(lang).team;

  return (
    <div className="max-w-7xl mx-auto px-6 text-center font-sans text-black">
      <span className="text-[#3E9E67] font-bold text-[10px] uppercase mb-8 block tracking-widest">• {t.badge}</span>
      <h2 className="text-4xl md:text-5xl font-black mb-16 text-[#0D1B15] tracking-tighter">{t.title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.members.map((m, i) => (
  <div key={i} className="bg-white p-8 rounded-[40px] text-left border border-gray-50 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center gap-4 mb-4">
      
      {/* ←←←  ФОТО ЧЛЕНА КОМАНДЫ  ←←← */}
      <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
        <img 
          src={
            i === 0 ? "./ali.webp" :
            i === 1 ? "./sh.webp" :
            i === 2 ? "./mo.webp" :
            i === 3 ? "./ni.webp" :
            i === 4 ? "./lo.webp" :
            "./ja.webp"
          } 
          alt={m.n}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div>
        <h3 className="font-bold text-[#1A2E26] text-base leading-tight">{m.n}</h3>
        <p className="text-[#3E9E67] font-bold text-[10px] uppercase">{m.r}</p>
      </div>
    </div>
  </div>
))}
      </div>
    </div>
  );
};

export default Team;