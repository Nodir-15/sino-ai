import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Market = () => {
  const { i18n } = useTranslation();
  const data = getT(i18n?.language);
  const t = data.market;

  return (
    <div id="market" className="py-24 bg-white text-center relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-[#3E9E67] font-bold text-xs uppercase mb-6 block tracking-widest">• {t?.badge}</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#0D1B15]">{t?.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="p-4"><div className="text-5xl font-bold text-[#3E9E67] mb-2">$500B+</div><p className="text-gray-400">{t?.stats?.[0]}</p></div>
          <div className="p-4"><div className="text-5xl font-bold text-[#3E9E67] mb-2">100M+</div><p className="text-gray-400">{t?.stats?.[1]}</p></div>
          <div className="p-4"><div className="text-5xl font-bold text-[#3E9E67] mb-2">20%+</div><p className="text-gray-400">{t?.stats?.[2]}</p></div>
        </div>

        <div className="bg-[#F8FAF9] rounded-[40px] p-10 border border-gray-100">
          <p className="font-bold mb-8">📍 {t?.geo}</p>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-white p-4 rounded-xl flex justify-between shadow-sm"><span>Узбекистан</span><span className="text-[#3E9E67] font-bold">{t?.status}</span></div>
            <div className="bg-white p-4 rounded-xl flex justify-between shadow-sm"><span>Казахстан</span><span className="text-[#3E9E67] font-bold">{t?.status}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;