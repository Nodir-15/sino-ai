import React from 'react';

const BusinessPage = () => {
  // Функция для внутреннего скролла по страницам бизнеса
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f0f9f6]">
      {/* Спец-навбар для раздела Бизнес */}
      <div className="sticky top-[85px] z-40 bg-[#f0f9f6]/80 backdrop-blur-md py-4 border-b border-emerald-100 flex justify-center gap-8">
        <button onClick={() => scrollTo('market')} className="text-gray-600 font-medium hover:text-emerald-600 transition">Рынок</button>
        <button onClick={() => scrollTo('hero-bus')} className="text-emerald-600 font-bold border-b-2 border-emerald-600">Для бизнеса</button>
        <button onClick={() => scrollTo('team')} className="text-gray-600 font-medium hover:text-emerald-600 transition">Команда</button>
      </div>

      {/* СЕКЦИЯ 1: РЫНОК */}
      <div id="market" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-gray-800">Секция: Рынок</h2>
      </div>

      {/* СЕКЦИЯ 2: ДЛЯ БИЗНЕСА (Тот макет что ты скидывал) */}
      <div id="hero-bus" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-emerald-600 font-bold tracking-widest text-[10px] uppercase mb-6">• SINO AI ДЛЯ БИЗНЕСА</p>
        <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
          <span className="text-[#00b976]">Связующее</span> <span className="text-[#c19a5b]">звено</span> между <br /> 
          пациентом и вашим бизнесом
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Мы приводим к вам не случайного клиента из рекламы, а человека в момент осознанной потребности. 
          Клиники, лаборатории и аптеки растут вместе с Sino.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#122b22] text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition shadow-lg flex items-center gap-2">
            <span>🏠</span> Стать партнёром
          </button>
          <button className="bg-white text-black border border-gray-100 px-8 py-4 rounded-2xl font-bold shadow-md hover:bg-gray-50 transition flex items-center gap-2">
            <span>📥</span> Скачать приложение
          </button>
        </div>
      </div>

      {/* СЕКЦИЯ 3: КОМАНДА */}
      <div id="team" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-gray-800">Секция: Команда</h2>
      </div>
    </div>
  );
};

export default BusinessPage;