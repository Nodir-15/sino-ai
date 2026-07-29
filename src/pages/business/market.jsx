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
    <div className="max-w-7xl mx-auto px-6 text-center">
      <span className="text-[#3E9E67] font-bold text-xs tracking-[0.3em] uppercase mb-8 block">• {t.badge}</span>
      <h2 className="text-4xl md:text-6xl font-extrabold mb-24 text-[#0D1B15] tracking-tight leading-tight">{t.title}</h2>
      
      {/* Большие цифры */}
      <div className="grid md:grid-cols-3 gap-16 mb-32">
        {[
          { v: t.s1_v, d: t.s1_d },
          { v: t.s2_v, d: t.s2_d },
          { v: t.s3_v, d: t.s3_d }
        ].map((s, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} transition={{type: "spring"}}>
            <div className="text-6xl md:text-8xl font-black text-[#3E9E67] mb-4 tracking-tighter">{s.v}</div>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-[250px] mx-auto leading-relaxed">{s.d}</p>
          </motion.div>
        ))}
      </div>

      {/* Карточки стран крупнее */}
      <div className="bg-[#F8FAF9] rounded-[50px] p-10 md:p-20 border border-gray-100 shadow-sm">
        <div className="text-2xl font-bold mb-12 text-[#0D1B15] flex items-center justify-center gap-3">
          <span className="text-3xl">📍</span> {t.geo}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-3xl flex justify-between items-center shadow-sm border border-gray-100 transition-shadow hover:shadow-md"
            >
              <span className="font-bold text-lg md:text-xl flex items-center gap-3">
                <span className="text-3xl">{c.f}</span> {c.n}
              </span>
              <span className="bg-[#3E9E67] text-white text-[10px] px-4 py-2 rounded-full uppercase font-black tracking-widest">{t.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;