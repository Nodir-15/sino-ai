import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Alisher Akmaljonov",
      role: "Основатель и CEO",
      img: "https://i.pravatar.cc/150?u=a1",
      points: ["8+ лет в управлении проектами (Gov & UN)", "Ex-COO «Mutolaa»", "Выпускник Skolkovo"]
    },
    {
      name: "Shakhzod Toshboyev",
      role: "CTO",
      img: "https://i.pravatar.cc/150?u=a2",
      points: ["5+ лет в мобильной разработке", "Ex-EASYBOOKING, FinGroup, TASHBAS"]
    },
    {
      name: "Mohlaroy Tolibjonova",
      role: "CMO",
      img: "https://i.pravatar.cc/150?u=a3",
      points: ["3+ года в маркетинге", "Ex-маркетинг-менеджер LG Electronics"]
    },
    {
      name: "Nilufar Abdullayeva",
      role: "Директор по стратегическому развитию",
      img: "https://i.pravatar.cc/150?u=a4",
      points: ["Магистр наук (M.S.) в области бизнес-аналитики", "Ex-Siemens, Mercer University, PDP University"]
    },
    {
      name: "Lobar Abdullaeva",
      role: "Медицинский советник",
      img: "https://i.pravatar.cc/150?u=a5",
      points: ["PhD-кандидат, врач-радиолог", "Член ESR, ESOR, ESMO"]
    },
    {
      name: "Javohir Hoshimov",
      role: "AI-инженер",
      img: "https://i.pravatar.cc/150?u=a6",
      points: ["2.5+ года в AI, ML и Deep Learning", "Ex-Aisha, Ex-Realsoft AI"]
    }
  ];

  return (
    <div className="py-24 bg-[#eff4f0]/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[#3E9E67] font-bold text-xs tracking-widest uppercase mb-6 block">• КОМАНДА</span>
        <h2 className="text-5xl font-extrabold text-[#1A2E26] mb-6">Команда, которая создаёт Sino</h2>
        <p className="text-[#4B5E55] text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Эксперты в медицине, AI и продукте — с опытом в государственных, международных и технологических проектах.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-[40px] text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img src={m.img} alt={m.name} className="w-16 h-16 rounded-full object-cover shadow-sm" />
                <div>
                  <h3 className="font-bold text-[#1A2E26] text-lg leading-tight">{m.name}</h3>
                  <p className="text-[#3E9E67] font-bold text-sm">{m.role}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {m.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#4B5E55] leading-tight">
                    <span className="text-[#3E9E67] mt-1">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;