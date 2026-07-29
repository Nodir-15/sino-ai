import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const ForBusiness = () => {
  const { i18n } = useTranslation();
  const data = getT(i18n?.language);
  const t = data?.why;

  return (
    <section className="py-20 bg-white border-t border-gray-50 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#3E9E67] font-bold text-[10px] uppercase block mb-6 tracking-widest">• {t?.badge}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B15] mb-8 leading-tight">{t?.title}</h2>
          <button className="bg-[#0D1B15] text-white px-8 py-3 rounded-full font-bold text-sm shadow-md hover:bg-black transition-all">
             {t?.btn || "Подключить"}
          </button>
        </div>
        <div className="space-y-4">
          {t?.items?.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[25px] flex items-start gap-5 border border-gray-100 shadow-sm">
              <div className="text-xl bg-[#f0f7f3] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">✨</div>
              <div>
                <h3 className="text-base font-bold mb-1">{item.t}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;