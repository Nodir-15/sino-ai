import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Team = () => {
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).team;

  const members = [
    { n: "Alisher Akmaljonov", r: "CEO" },
    { n: "Shakhzod Toshboyev", r: "CTO" },
    { n: "Mohlaroy Tolibjonova", r: "CMO" }
  ];

  return (
    <section id="team" className="py-24 bg-white text-center px-6">
      <span className="text-[#3E9E67] font-bold text-xs tracking-widest uppercase mb-6 block">• {t.badge}</span>
      <h2 className="text-5xl font-extrabold mb-16 text-[#0D1B15]">{t.title}</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {members.map((m, i) => (
          <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-50 shadow-sm text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
              <div><h3 className="font-bold">{m.n}</h3><p className="text-[#3E9E67] text-sm font-bold uppercase">{m.r}</p></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; // <-- САМОЕ ВАЖНОЕ