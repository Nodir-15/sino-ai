import React from 'react';

const BusinessPage = () => {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-[#f0f9f6]">
      {/* Свой Навбар для бизнеса */}
      <div className="sticky top-[81px] z-40 bg-white/80 backdrop-blur-md py-4 flex justify-center gap-8 border-b border-emerald-100">
        <button onClick={() => scroll('market')} className="text-gray-600 font-medium hover:text-emerald-600 transition">Рынок</button>
        <button onClick={() => scroll('for-bus')} className="text-emerald-600 font-bold border-b-2 border-emerald-600">Для бизнеса</button>
        <button onClick={() => scroll('team')} className="text-gray-600 font-medium hover:text-emerald-600 transition">Команда</button>
      </div>

      {/* 1. Секция РЫНОК */}
      <div id="market" className="h-screen flex items-center justify-center bg-white text-gray-300 italic">
        <h2 className="text-4xl font-bold italic">Секция: Рынок</h2>
      </div>

      {/* 2. Секция ДЛЯ БИЗНЕСА (Макет со скрина) */}
      <div id="for-bus" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#f0f9f6]">
         <p className="text-emerald-600 font-bold text-[10px] tracking-widest uppercase mb-6">• SINO AI ДЛЯ БИЗНЕСА</p>
         <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
            <span className="text-emerald-500">Связующее</span> <span className="text-[#c19a5b]">звено</span> <br /> между пациентом и бизнесом
         </h1>
         <p className="text-gray-500 text-lg max-w-3xl mb-10 leading-relaxed">
           Мы приводим к вам не случайного клиента из рекламы, а человека в момент осознанной потребности...
         </p>
         <div className="flex gap-4">
            <button className="bg-[#122b22] text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition shadow-lg flex items-center gap-2">
               <span>🏠</span> Стать партнёром
            </button>
            <button className="bg-white border px-8 py-4 rounded-2xl font-bold shadow-md hover:bg-gray-50 transition">
               Скачать приложение
            </button>
         </div>
      </div>

      {/* 3. Секция КОМАНДА */}
      <div id="team" className="h-screen flex items-center justify-center bg-white text-gray-300 italic">
        <h2 className="text-4xl font-bold italic">Секция: Команда</h2>
      </div>
    </div>
  );
};

export default BusinessPage;