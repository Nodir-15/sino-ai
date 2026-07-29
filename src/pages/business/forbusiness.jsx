import React from 'react';

const ForBusiness = () => {
  const features = [
    {
      title: "Привлекайте новых клиентов",
      desc: "Расширьте охват и подключитесь к тысячам новых пациентов, ищущих качественные медицинские услуги в вашем регионе.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3E9E67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    },
    {
      title: "Дополнительный доход через подписки",
      desc: "Внедряйте новые модели подписки и пакеты услуг, формируя стабильный и предсказуемый доход для вашего бизнеса.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3E9E67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      )
    },
    {
      title: "AI-помощник для врачей и клиник",
      desc: "Используйте AI-аналитику, чтобы упростить рабочие процессы, повысить качество работы с пациентами и принимать более точные решения.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3E9E67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
      )
    }
  ];

  return (
    <div className="py-24 bg-[#eff4f0]/40">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Левая часть: Текст и Кнопка */}
        <div>
          <span className="text-[#3E9E67] font-bold text-[13px] tracking-[0.2em] mb-6 block uppercase">
            • ДЛЯ БИЗНЕСА
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B15] mb-8 leading-[1.1]">
            Почему клиники, лаборатории и аптеки выбирают Sino AI
          </h2>
          <p className="text-[#4B5E55] text-lg mb-10 leading-relaxed">
            Развивайте свой медицинский бизнес с помощью нашей интегрированной платформы. Улучшайте уход за пациентами, оптимизируйте работу и открывайте новые источники дохода.
          </p>
          
          <button className="bg-[#0D1B15] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-black transition-all shadow-lg shadow-green-900/10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            Подключить клинику
          </button>
        </div>

        {/* Правая часть: Карточки преимуществ */}
        <div className="flex flex-col gap-5">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[32px] shadow-sm flex items-start gap-6 border border-transparent hover:border-green-100 transition-all group"
            >
              <div className="bg-[#f0f7f3] w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0D1B15] mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#4B5E55] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ForBusiness;