import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Market = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { i18n } = useTranslation();
  const data = getT(i18n?.language);
  const t = data.market;

  const countries = [
    { n: "Узбекистан", f: "🇺🇿" }, { n: "Казахстан", f: "🇰🇿" }, { n: "Азербайджан", f: "🇦🇿" },
    { n: "Кыргызстан", f: "🇰🇬" }, { n: "Таджикистан", f: "🇹🇯" }, { n: "Турция", f: "🇹🇷" }, { n: "ОАЭ", f: "🇦🇪" }
  ];

  return (
    <section id="market" ref={ref} className="py-24 bg-white text-center px-6 font-sans">
      <span className="text-[#3E9E67] font-bold text-[10px] tracking-widest uppercase mb-6 block">• {t?.badge}</span>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-[#0D1B15] tracking-tight">{t?.title}</h2>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
        {[
          { v: 500, s: "B+", d: t?.stats?.[0], p: "$" },
          { v: 100, s: "M+", d: t?.stats?.[1], p: "" },
          { v: 20, s: "%+", d: t?.stats?.[2], p: "" }
        ].map((s, i) => (
          <div key={i}>
            <div className="text-5xl md:text-6xl font-bold text-[#3E9E67] mb-2">
              {inView ? <CountUp end={s.v} duration={3} prefix={s.p} suffix={s.s} /> : "0"}
            </div>
            <p className="text-gray-400 text-xs font-medium">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAF9] rounded-[40px] p-10 max-w-4xl mx-auto border border-gray-50">
        <div className="font-bold text-base mb-8 text-[#0D1B15]">📍 {t?.geo}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {countries.map((c, i) => (
            <div key={i} className="bg-white p-3 rounded-xl flex justify-between items-center shadow-sm border border-gray-50 hover:shadow-md transition-all">
              <span className="font-bold text-xs">{c.f} {c.n}</span>
              <span className="bg-[#3E9E67] text-white text-[8px] px-2 py-1 rounded-full uppercase font-bold">{t?.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Market;