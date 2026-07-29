import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusiness = () => {
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).why;

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#3E9E67] font-bold text-xs uppercase block mb-6">• {t.badge}</span>
          <h2 className="text-5xl font-extrabold text-[#0D1B15] mb-8">{t.title}</h2>
          <button className="bg-[#0D1B15] text-white px-8 py-4 rounded-full font-bold">{t.btn}</button>
        </div>
        <div className="space-y-6">
          {t.items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] flex items-start gap-6 shadow-sm">
              <div className="text-2xl bg-[#f0f7f3] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">✨</div>
              <div><h3 className="text-xl font-bold mb-2">{item.t}</h3><p className="text-gray-400 text-sm leading-relaxed">{item.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;