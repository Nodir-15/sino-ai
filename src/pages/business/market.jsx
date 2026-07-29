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
    <section id="market" className="py-24 bg-white text-center px-6 font-sans overflow-hidden">
      {/* Анимация появления заголовка */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#3E9E67] font-bold text-[10px] tracking-widest uppercase mb-6 block">• {t.badge}</span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-[#0D1B15]">{t.title}</h2>
      </motion.div>
      
      {/* Анимация карточек с цифрами */}
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
        {[
          { v: t.s1_v, d: t.s1_d },
          { v: t.s2_v, d: t.s2_d },
          { v: t.s3_v, d: t.s3_d }
        ].map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="text-5xl md:text-6xl font-bold text-[#3E9E67] mb-2">{s.v}</div>
            <p className="text-gray-400 text-xs font-medium">{s.d}</p>
          </motion.div>
        ))}
      </div>

      {/* Анимация блока со странами */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#F8FAF9] rounded-[40px] p-10 max-w-4xl mx-auto border border-gray-50"
      >
        <div className="font-bold text-base mb-8 text-[#0D1B15]">📍 {t.geo}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {countries.map((c, i) => (
            <div key={i} className="bg-white p-3 rounded-xl flex justify-between items-center shadow-sm border border-gray-50">
              <span className="font-bold text-xs">{c.f} {c.n}</span>
              <span className="bg-[#3E9E67] text-white text-[8px] px-2 py-1 rounded-full uppercase font-bold text-center">{t.status}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Market;