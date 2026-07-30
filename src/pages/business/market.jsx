import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const endNum = parseFloat(end.replace(/[^0-9.]/g, '')) || 0;
    const step = endNum / 120;
    const timer = setInterval(() => {
      start += step;
      if (start >= endNum) {
        setCount(endNum);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end]);

  const format = (val) => {
    if (end.includes('B')) return `$${Math.floor(val)}B+`;
    if (end.includes('M')) return `${Math.floor(val)}M+`;
    if (end.includes('%')) return `${Math.floor(val)}%+`;
    return Math.floor(val);
  };

  return <span ref={ref}>{format(count)}</span>;
};

const Market = () => {
  const { lang } = useTranslation();
  const t = getT(lang).market;

  if (!t) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 text-center font-sans py-12">
      {/* Надзаголовок: text-sm/base → text-[11px], mb-6 → mb-3 */}
      <p className="text-emerald-600 font-bold text-[11px] mb-3 flex items-center justify-center gap-1.5 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        {t.badge}
      </p>
      
      {/* Главный заголовок: text-5xl/6xl/7xl → text-2xl/3xl/4xl, mb-16/20 → mb-10 */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-10 text-[#0D1B15] tracking-tight">
        {t.title}
      </h2>
      
      {/* Сетка со статистикой: gap-12 → gap-4, mb-28 → mb-16 */}
      <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
        {[
          {v: t.s1_v, d: t.s1_d}, 
          {v: t.s2_v, d: t.s2_d}, 
          {v: t.s3_v, d: t.s3_d}
        ].map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            {/* Зеленые цифры: text-5xl/7xl → text-2xl/3xl/4xl, font-black → font-extrabold */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#3E9E67] mb-1 tracking-tight">
              <CountUp end={s.v} />
            </div>
            {/* Подписи под цифрами: text-sm/base → text-[10px]/xs, уменьшен max-w-200px → max-w-[120px] */}
            <p className="text-gray-400 text-[10px] md:text-xs font-semibold max-w-[120px] leading-snug">{s.d}</p>
          </motion.div>
        ))}
      </div>

      {/* Нижний блок гео-локаций: скругление rounded-[40px] → rounded-2xl, отступы p-10/16 → p-6/8 */}
      <div className="bg-[#F8FAF9] rounded-2xl p-6 md:p-8 border border-gray-100">
        {/* Заголовок гео-блока: text-lg → text-sm, mb-10 → mb-6 */}
        <div className="text-sm font-bold mb-6 text-[#0D1B15] flex items-center justify-center gap-2">
          📍 {t.geo}
        </div>
        {/* Сетка стран: gap-5 → gap-3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
           {(t.countries || []).map((c, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: i * 0.05 }}
               className="bg-white p-3 rounded-2xl flex justify-between items-center shadow-sm border border-gray-50"
             >
               {/* Название страны: text-sm → text-xs */}
               <span className="font-bold text-xs text-[#0D1B15]">{c}</span>
               {/* Статус-бейдж: уменьшены паддинги, text-[8px] сохранен */}
               <span className="bg-[#3E9E67] text-white text-[8px] px-2 py-1 rounded-full uppercase font-black tracking-wider shrink-0 ml-2">
                 {t.status}
               </span>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
