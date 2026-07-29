import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Market = () => {
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).market;

  const countries = [
    { n: "Узбекистан", f: "🇺🇿" }, { n: "Казахстан", f: "🇰🇿" }, { n: "Азербайджан", f: "🇦🇿" },
    { n: "Кыргызстан", f: "🇰🇬" }, { n: "Таджикистан", f: "🇹🇯" }, { n: "Турция", f: "🇹🇷" }, { n: "ОАЭ", f: "🇦🇪" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 text-center font-sans text-black">
      <span className="text-[#3E9E67] font-bold text-[10px] tracking-[0.3em] uppercase mb-8 block">• {t.badge}</span>
      <h2 className="text-4xl md:text-5xl font-black mb-20 text-[#0D1B15] tracking-tighter leading-tight">{t.title}</h2>
      
      <div className="grid md:grid-cols-3 gap-12 mb-28">
        {[{v: t.s1_v, d: t.s1_d}, {v: t.s2_v, d: t.s2_d}, {v: t.s3_v, d: t.s3_d}].map((s, i) => (
          <div key={i}>
            <div className="text-6xl md:text-7xl font-black text-[#3E9E67] mb-3 tracking-tighter">{s.v}</div>
            <p className="text-gray-500 text-base md:text-lg font-bold max-w-[220px] mx-auto leading-snug">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAF9] rounded-[40px] p-10 md:p-16 border border-gray-100">
        <div className="text-xl font-bold mb-10 text-[#0D1B15] flex items-center justify-center gap-3">
          <span className="text-2xl">📍</span> {t.geo}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {countries.map((c, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-5 rounded-2xl flex justify-between items-center shadow-sm border border-gray-50">
              <span className="font-bold text-base flex items-center gap-3"><span className="text-2xl">{c.f}</span> {c.n}</span>
              <span className="bg-[#3E9E67] text-white text-[9px] px-3 py-1.5 rounded-full uppercase font-black tracking-widest">{t.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Market;