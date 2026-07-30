import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Team = () => {
  const { lang } = useTranslation();
  const t = getT(lang).team;

  return (
    <div className="max-w-6xl mx-auto px-4 text-center font-sans py-12">
      {/* 1. Маленький аккуратный надзаголовок */}
      <p className="text-emerald-600 font-bold text-[11px] mb-4 flex items-center justify-center gap-1.5 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        {t.badge}
      </p>

      {/* 2. Крупный, очень жирный заголовок по вашему эталону */}
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight mb-12">
        {t.title}
      </h2>

      {/* Сетка участников с оптимизированными зазорами gap-6 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.members.map((m, i) => (
          <div 
            key={i} 
            className="bg-white p-5 rounded-2xl text-left border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all"
          >
            <div className="flex items-center gap-4">
              
              {/* Фото члена команды (увеличено с w-12 h-12 до w-14 h-14 для лучшего баланса с текстом) */}
              <div className="w-14 h-14 bg-gray-100 rounded-full overflow-hidden shrink-0 border border-gray-50">
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
              
              <div className="space-y-0.5">
                {/* Имя участника: text-base → text-sm md:text-base, заменен цвет на text-gray-900 */}
                <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                  {m.n}
                </h3>
                {/* Роль участника */}
                <p className="text-[#3E9E67] font-bold text-[10px] uppercase tracking-wider">
                  {m.r}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
