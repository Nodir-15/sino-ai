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
      {/* 1. Маленький аккуратный надзаголовок */}
      <p className="text-emerald-600 font-bold text-[11px] mb-4 flex items-center justify-center gap-1.5 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        {t.badge}
      </p>
      
      {/* 2. Крупный, очень жирный заголовок по центру */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-12 text-[#0D1B15] tracking-tight max-w-4xl mx-auto">
        {t.title}
      </h2>
      
      {/* Сетка со статистикой (3 колонки всегда в ряд, как на макете) */}
      <div className="grid grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
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
            {/* Крупные, аккуратные цифры */}
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#3E9E67] mb-2 tracking-tight">
              <CountUp end={s.v} />
            </div>
            {/* Описание под цифрами */}
            <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-[140px] mx-auto leading-snug">{s.d}</p>
          </motion.div>
        ))}
      </div>

      {/* Гео-блок */}
      <div className="bg-[#F8FAF9] rounded-2xl p-6 md:p-8 border border-gray-100">
        <div className="text-sm font-bold mb-6 text-[#0D1B15] flex items-center justify-center gap-2">
          📍 {t.geo}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
           {(t.countries || []).map((c, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: i * 0.05 }}
               className="bg-white p-3.5 rounded-xl flex justify-between items-center shadow-sm border border-gray-50"
             >
               <span className="font-bold text-xs text-[#0D1B15]">{c}</span>
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
