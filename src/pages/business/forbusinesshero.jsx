import React from 'react';

const ForBusinessHero = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 pt-20 pb-10 md:pt-32 max-w-5xl mx-auto">
      {/* Badge */}
      <span className="text-[#3E9E67] font-bold text-xs tracking-[0.2em] mb-8 uppercase">
        • SINO AI ДЛЯ БИЗНЕСА
      </span>

      {/* Заголовок с градиентом */}
      <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6BB173] via-[#D8B45B] to-[#E5AB50]">
          Связующее звено
        </span>{" "}
        между пациентом и вашим бизнесом
      </h1>

      {/* Описание */}
      <p className="text-[#4B5E55] text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
        Мы приводим к вам не случайного клиента из рекламы, а человека в момент осознанной потребности — когда он понял свой риск, получил анализы или ищет врача. Клиники, лаборатории, аптеки и страховые компании растут вместе с Sino.
      </p>

      {/* Кнопки */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <button className="bg-[#0D1B15] text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-all flex items-center justify-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          Стать партнёром
        </button>
        <button className="bg-white text-[#0D1B15] px-8 py-4 rounded-full font-semibold border border-gray-100 hover:shadow-md transition-all flex items-center justify-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Скачать приложение
        </button>
      </div>

      {/* Social Proof */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt=""/>
          <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=2" alt=""/>
          <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt=""/>
        </div>
        <p className="text-sm text-gray-500 font-medium">
          20 000+ человек заботятся о здоровье с Sino
        </p>
      </div>
    </div>
  );
};

export default ForBusinessHero;