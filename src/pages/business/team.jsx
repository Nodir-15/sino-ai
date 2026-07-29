import React from 'react';

const Team = () => {
  const team = [
    { n: "Alisher Akmaljonov", r: "CEO", p: ["8+ лет опыта", "Ex-COO Mutolaa"] },
    { n: "Shakhzod Toshboyev", r: "CTO", p: ["5+ лет разработки", "Ex-EASYBOOKING"] },
    { n: "Mohlaroy Tolibjonova", r: "CMO", p: ["3+ года маркетинга", "Ex-LG Electronics"] }
  ];
  return (
    <section id="team" className="py-24 bg-[#eff4f0]/40">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[#3E9E67] font-bold text-xs tracking-widest uppercase mb-6 block">• КОМАНДА</span>
        <h2 className="text-5xl font-extrabold mb-16">Команда, которая создаёт Sino</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-[40px] text-left shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden"></div>
                <div><h3 className="font-bold">{m.n}</h3><p className="text-[#3E9E67] font-bold text-sm">{m.r}</p></div>
              </div>
              <ul className="space-y-2">{m.p.map((pt, idx) => <li key={idx} className="text-sm text-gray-500">• {pt}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;