// market.jsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Market = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { i18n } = useTranslation();
  
  // Безопасное получение текстов
  const data = getT(i18n?.language);
  const t = data.market || data.ru.market; // Fallback на случай ошибки в структуре

  const stats = [
    { v: 500, s: "B+", d: t.stats?.[0] || "", p: "$" },
    { v: 100, s: "M+", d: t.stats?.[1] || "", p: "" },
    { v: 20, s: "%+", d: t.stats?.[2] || "", p: "" }
  ];

  return (
    <section id="market" ref={ref} className="py-24 bg-white text-center relative z-10">
      <span className="text-[#3E9E67] font-bold text-xs tracking-widest uppercase mb-6 block">• {t.badge}</span>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#0D1B15]">{t.title}</h2>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
        {stats.map((s, i) => (
          <div key={i} className="min-h-[100px]"> {/* Резервируем место, чтобы не прыгало */}
            <div className="text-6xl font-bold text-[#3E9E67] mb-2">
              {inView ? <CountUp end={s.v} duration={2} prefix={s.p} suffix={s.s} /> : "0"}
            </div>
            <p className="text-gray-500 font-medium">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Market;