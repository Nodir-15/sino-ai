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
    <div className="max-w-7xl mx-auto px-6 text-center font-sans">
      <span className="text-[#3E9E67] font-bold text-[10px] tracking-[0.3em] uppercase mb-8 block">• {t.badge}</span>
      <h2 className="text-3xl md:text-5xl font-black mb-20 text-[#0D1B15] tracking-tight leading-tight">
        {t.title}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-12 mb-28">
        {[
          {v: t.s1_v, d: t.s1_d}, 
          {v: t.s2_v, d: t.s2_d}, 
          {v: t.s3_v, d: t.s3_d}
        ].map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="text-5xl md:text-7xl font-black text-[#3E9E67] mb-3 tracking-tighter">
              <CountUp end={s.v} />
            </div>
            <p className="text-gray-500 text-sm md:text-base font-bold max-w-[200px] mx-auto leading-snug">{s.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#F8FAF9] rounded-[40px] p-10 md:p-16 border border-gray-100">
        <div className="text-lg font-bold mb-10 text-[#0D1B15] flex items-center justify-center gap-3">
          📍 {t.geo}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
           {(t.countries || []).map((c, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: i * 0.05 }}
               className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm border border-gray-50"
             >
               <span className="font-bold text-sm">{c}</span>
               <span className="bg-[#3E9E67] text-white text-[8px] px-3 py-1.5 rounded-full uppercase font-black">{t.status}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Market;