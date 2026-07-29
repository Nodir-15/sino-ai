import React from 'react';

const Market = () => {
  const countries = [
    { name: "Узбекистан", flag: "🇺🇿", status: "запущено" },
    { name: "Кыргызстан", flag: "🇰🇬", status: "запущено" },
    { name: "Казахстан", flag: "🇰🇿", status: "запущено" },
    { name: "Таджикистан", flag: "🇹🇯", status: "запущено" },
    { name: "Азербайджан", flag: "🇦🇿", status: "запущено" },
  ];

  return (
    <div className="py-24 bg-[#eff4f0]/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-[#3E9E67] font-bold text-xs tracking-widest uppercase mb-6 block">• ГЛОБАЛЬНЫЙ РЫНОК</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A2E26] mb-8 leading-tight">
          Большой рынок — и понятный путь роста
        </h2>
        <p className="text-[#4B5E55] text-lg max-w-3xl mx-auto mb-16">
          Цифровое здоровье — один из самых быстрорастущих рынков мира. Мы начинаем с Узбекистана и расширяемся по региону.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <div className="text-5xl font-extrabold text-[#3E9E67] mb-2">$500B+</div>
            <p className="text-sm text-[#4B5E55] leading-relaxed">мировой рынок цифрового здоровья к 2030 году</p>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-[#3E9E67] mb-2">100M+</div>
            <p className="text-sm text-[#4B5E55] leading-relaxed">население целевого региона — Центральная Азия и Кавказ</p>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-[#3E9E67] mb-2">20%+</div>
            <p className="text-sm text-[#4B5E55] leading-relaxed">среднегодовой рост рынка цифрового здоровья</p>
          </div>
        </div>

        {/* Countries Card */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-10 font-bold text-lg">
             <span className="text-green-600 text-xl">📍</span> География запуска и расширения
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {countries.map((c, i) => (
              <div key={i} className="flex items-center justify-between bg-[#F8FAF9] p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.flag}</span>
                  <span className="font-bold text-[#1A2E26]">{c.name}</span>
                </div>
                <span className="bg-[#3E9E67] text-white text-[10px] uppercase px-3 py-1.5 rounded-full font-bold">
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;