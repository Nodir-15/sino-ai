import React from 'react';

const Market = () => {
  const stats = [ { v: "$500B+", d: "рынок к 2030" }, { v: "100M+", d: "население региона" }, { v: "20%+", d: "рост рынка" } ];
  return (
    <section id="market" className="py-24 bg-white text-center">
      <span className="text-[#3E9E67] font-bold text-xs tracking-widest uppercase mb-6 block">• ГЛОБАЛЬНЫЙ РЫНОК</span>
      <h2 className="text-5xl font-extrabold mb-16">Большой рынок — и понятный путь</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
        {stats.map((s, i) => <div key={i}><div className="text-5xl font-bold text-[#3E9E67] mb-2">{s.v}</div><p className="text-gray-500">{s.d}</p></div>)}
      </div>
      <div className="bg-[#F8FAF9] rounded-[40px] p-10 max-w-4xl mx-auto border border-gray-50">
        <div className="font-bold text-lg mb-8">📍 География запуска</div>
        <div className="grid md:grid-cols-2 gap-4">
           {['Узбекистан', 'Казахстан', 'Азербайджан', 'Кыргызстан'].map((c, i) => (
             <div key={i} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm">
               <span className="font-bold">{c}</span>
               <span className="bg-[#3E9E67] text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold">запущено</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
export default Market;