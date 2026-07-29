import React from 'react';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Team = () => {
  const { i18n } = useTranslation();
  const data = getT(i18n?.language);
  const t = data?.team;

  const members = [
    { n: "Alisher Akmaljonov", r: "CEO", p: ["8+ лет опыта", "Ex-COO Mutolaa"] },
    { n: "Shakhzod Toshboyev", r: "CTO", p: ["5+ лет разработки", "Ex-EASYBOOKING"] },
    { n: "Mohlaroy Tolibjonova", r: "CMO", p: ["3+ года маркетинга", "LG Electronics"] },
    { n: "Nilufar Abdullayeva", r: "Strategy", p: ["M.S. Analytics", "Ex-Siemens"] },
    { n: "Lobar Abdullaeva", r: "Medical", p: ["PhD-кандидат", "Radiologist"] },
    { n: "Javohir Hoshimov", r: "AI Engineer", p: ["2.5+ года в AI", "Deep Learning"] }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[#3E9E67] font-bold text-[10px] uppercase mb-6 block tracking-widest">• {t?.badge}</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#0D1B15]">{t?.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-[35px] text-left border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-[#1A2E26] text-sm">{m.n}</h3>
                  <p className="text-[#3E9E67] font-bold text-[10px] uppercase">{m.r}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {m.p.map((pt, idx) => (
                  <li key={idx} className="text-[12px] text-gray-400 flex items-start gap-2">
                    <span className="text-[#3E9E67]">•</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;