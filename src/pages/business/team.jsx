import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Team = () => {
  const { lang } = useTranslation();
  const t = getT(lang).team;

  return (
    <div className="max-w-7xl mx-auto px-6 text-center font-sans text-black">
      <p className="text-emerald-600 font-medium text-sm md:text-base mb-6 flex items-center justify-center gap-2 tracking-wide uppercase">
  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
  {t.badge}
</p>
     <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-16 text-[#0D1B15] tracking-tight">
  {t.title}
</h2>
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