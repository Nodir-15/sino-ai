import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations"; // ПРАВИЛЬНЫЙ ИМПОРТ

const Market = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).market;

  return (
    <div ref={ref} className="py-24 bg-white text-center px-6">
      <span className="text-[#3E9E67] font-bold text-xs uppercase mb-6 block tracking-widest">• {t.badge}</span>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-black">{t.title}</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {[500, 100, 20].map((val, i) => (
          <div key={i}>
            <div className="text-5xl font-bold text-[#3E9E67] mb-2">
              {inView ? <CountUp end={val} duration={2} /> : 0}
              {i === 0 ? 'B+' : i === 1 ? 'M+' : '%+'}
            </div>
            <p className="text-gray-400 font-medium">{t.stats[i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;