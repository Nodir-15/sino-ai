import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusiness = () => {
  const { lang } = useTranslation();
  const t = getT(lang).why;

  return (
    <div className="max-w-6xl mx-auto px-4 font-sans py-12">
      {/* Уменьшены зазоры между колонками с gap-16/24 до gap-12/16 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Левая колонка: уменьшен space-y-10 до space-y-5 */}
        <div className="flex flex-col items-start text-left space-y-5">
          {/* Уменьшен space-y-6 до space-y-3 */}
          <div className="space-y-3">
            {/* Надзаголовок: text-sm/base → text-[11px], убран избыточный mb-6 */}
            <p className="text-emerald-600 font-bold text-[11px] flex items-center gap-1.5 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              {t.badge}
            </p>
            {/* Главный заголовок: text-5xl/6xl/7xl → text-3xl/4xl */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-[#0D1B15]">
              {t.title}
            </h2>
            {/* Описание: text-lg/xl → text-xs/sm, уменьшен max-w */}
            <p className="text-[#4B5E55] text-xs md:text-sm leading-relaxed max-w-sm font-medium">
              {t.desc}
            </p>
          </div>
          {/* Кнопка: уменьшены px, py, text и размер иконки */}
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
            className="bg-[#0D1B15] text-white px-6 py-3 rounded-full font-bold text-xs shadow-xl shadow-green-900/10 transition-all flex items-center gap-2"
          >
            <span className="text-lg">📱</span> {t.btn}
          </motion.button>
        </div>

        {/* Правая колонка с карточками: уменьшен gap-6 до gap-4 */}
        <div className="flex flex-col gap-4 w-full">
          {t.items.map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ x: 6 }} 
              
              className="bg-white p-4 rounded-2xl flex items-start gap-4 shadow-sm border border-gray-100 hover:border-green-100 transition-all group"
            >
              
              {/* Контейнер иконки: w-16 h-16 → w-11 h-11, текст text-3xl → text-xl, скругление → rounded-xl */}
              <div className="bg-[#f0f7f3] w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-xl group-hover:rotate-12 transition-transform">
                 {idx === 0 ? "👥" : idx === 1 ? "💰" : "📊"}
              </div>
              
              {/* Текстовый блок внутри карточки: убран space-y-2 */}
              <div>
                {/* Заголовок карточки: text-xl/2xl → text-sm, font-black → font-bold */}
                <h3 className="text-sm font-bold text-[#0D1B15] tracking-tight mb-1">
                  {item.t}
                </h3>
                {/* Описание карточки: text-base/lg → text-xs */}
                <p className="text-gray-400 text-xs leading-snug font-medium">
                  {item.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForBusiness;
