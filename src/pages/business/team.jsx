import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { i18n } = useTranslation();
  const t = getT(i18n?.language).team;

  const team = [
    { n: "Alisher Akmaljonov", r: "CEO", p: ["8+ лет опыта", "Ex-COO Mutolaa"] },
    { n: "Shakhzod Toshboyev", r: "CTO", p: ["5+ лет разработки", "Ex-EASYBOOKING"] },
    { n: "Mohlaroy Tolibjonova", r: "CMO", p: ["3+ года маркетинга", "LG Electronics"] },
    { n: "Nilufar Abdullayeva", r: "Strategy", p: ["M.S. Analytics", "Ex-Siemens"] },
    { n: "Lobar Abdullaeva", r: "Medical", p: ["PhD-кандидат", "ESR/ESOR member"] },
    { n: "Javohir Hoshimov", r: "AI Engineer", p: ["2.5+ года в AI", "Deep Learning"] }
  ];

  return (
    <section id="team" ref={ref} className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[#3E9E67] font-bold text-xs uppercase mb-6 block tracking-widest">• {t?.badge}</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-[#0D1B15]">{t?.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[40px] text-left border border-gray-50 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div><h3 className="font-bold text-[#1A2E26]">{m.n}</h3><p className="text-[#3E9E67] font-bold text-xs uppercase">{m.r}</p></div>
              </div>
              <ul className="space-y-1.5">{m.p.map((pt, idx) => <li key={idx} className="text-sm text-gray-400 flex items-start gap-2"><span className="text-[#3E9E67]">•</span> {pt}</li>)}</ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;