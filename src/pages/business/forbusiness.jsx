import React from 'react';

const ForBusiness = () => {
  const items = [
    { t: "Привлекайте новых клиентов", d: "Расширьте охват и подключитесь к тысячам новых пациентов.", i: "👥" },
    { t: "Дополнительный доход", d: "Внедряйте новые модели подписки и пакеты услуг.", i: "💰" },
    { t: "AI-помощник", d: "Используйте AI-аналитику для упрощения процессов.", i: "📊" }
  ];
  return (
    <div className="py-24 bg-[#eff4f0]/40">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#3E9E67] font-bold text-xs tracking-widest uppercase mb-6 block">• ДЛЯ БИЗНЕСА</span>
          <h2 className="text-5xl font-extrabold text-[#0D1B15] mb-8 leading-tight">Почему клиники и аптеки выбирают Sino AI</h2>
          <button className="bg-[#0D1B15] text-white px-8 py-4 rounded-full font-bold hover:bg-black">Подключить клинику</button>
        </div>
        <div className="space-y-5">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] flex items-start gap-6 shadow-sm border border-transparent hover:border-green-100 transition-all">
              <div className="bg-[#f0f7f3] w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0">{item.i}</div>
              <div><h3 className="text-xl font-bold mb-2">{item.t}</h3><p className="text-sm text-gray-500 leading-relaxed">{item.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ForBusiness;