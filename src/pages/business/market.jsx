import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";
import { motion } from 'framer-motion';

const Market = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).market;

  const stats = [
    { v: 500, s: "B+", d: t.stats[0], p: "$" },
    { v: 100, s: "M+", d: t.stats[1], p: "" },
    { v: 20, s: "%+", d: t.stats[2], p: "" }
  ];

  return (
    <section id="market" ref={ref} className="py-24 bg-white text-center px-6">
      <motion.div initial={{opacity:0}} animate={inView ? {opacity:1} : {}}>
        <span className="text-[#3E9E67] font-bold text-xs tracking-widest uppercase mb-6 block">• {t.badge}</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#0D1B15]">{t.title}</h2>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-6xl font-bold text-[#3E9E67] mb-2">
              {inView ? <CountUp end={s.v} duration={3} prefix={s.p} suffix={s.s} /> : "0"}
            </div>
            <p className="text-gray-400 font-medium">{s.d}</p>
          </div>
        ))}
      </div>

      <motion.div 
        initial={{y: 50, opacity: 0}} 
        animate={inView ? {y: 0, opacity: 1} : {}}
        className="bg-[#F8FAF9] rounded-[40px] p-8 md:p-12 max-w-4xl mx-auto border border-gray-50"
      >
        <div className="font-bold text-lg mb-8 text-[#0D1B15]">📍 {t.geo}</div>
        <div className="grid md:grid-cols-2 gap-4 text-left">
          {['Узбекистан', 'Казахстан', 'Азербайджан', 'Кыргызстан', 'Таджикистан'].map((name, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm hover:shadow-md transition-all">
              <span className="font-bold text-[#1A2E26]">{name}</span>
              <span className="bg-[#3E9E67] text-white text-[10px] px-3 py-1.5 rounded-full uppercase font-bold">{t.status}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Market;