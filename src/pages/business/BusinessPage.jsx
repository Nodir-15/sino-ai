import React from 'react';

const BusinessPage = () => {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-[#f0f9f6]">
      {/* Под-меню для Бизнеса */}
      <div className="sticky top-[81px] z-40 bg-white/80 backdrop-blur-md py-4 flex justify-center gap-8 border-b border-emerald-100">
        <button onClick={() => scroll('market')} className="text-gray-600 font-medium hover:text-emerald-600">Рынок</button>
        <button onClick={() => scroll('for-bus')} className="text-emerald-600 font-bold border-b-2 border-emerald-600">Для бизнеса</button>
        <button onClick={() => scroll('team')} className="text-gray-600 font-medium hover:text-emerald-600">Команда</button>
      </div>

      {/* 1. Секция РЫНОК */}
      <div id="market" className="h-screen flex items-center justify-center bg-white italic text-gray-400">Секция: Рынок</div>

      {/* 2. Секция ДЛЯ БИЗНЕСА (твой макет) */}
      <div id="for-bus" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
         <p className="text-emerald-600 font-bold text-xs mb-6">• SINO AI ДЛЯ БИЗНЕСА</p>
         <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
            <span className="text-emerald-500">Связующее</span> <span className="text-[#c19a5b]">звено</span> <br /> между пациентом и бизнесом
         </h1>
         <div className="flex gap-4">
            <button className="bg-[#122b22] text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition shadow-lg">Стать партнёром</button>
            <button className="bg-white border px-8 py-4 rounded-2xl font-bold shadow-md">Скачать приложение</button>
         </div>
      </div>

      {/* 3. Секция КОМАНДА */}
      <div id="team" className="h-screen flex items-center justify-center bg-white italic text-gray-400">Секция: Команда</div>
    </div>
  );
};

export default BusinessPage;