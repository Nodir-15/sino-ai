import { useEffect, useState, useRef } from "react";
import { useTranslation } from '../i18n';

const Obuna = () => {
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      setIsAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAnimated(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "-5% 0px -5% 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Безопасное чтение объекта подписок, чтобы компонент никогда не возвращал null
  const s = t?.subscription || {};
  const basic = s.basic || {
    title: "Basic",
    subtitle: "Для основных медицинских задач",
    price: "36",
    period: "/год",
    button: "Оформить подписку",
    features: [],
    disabledFeatures: []
  };

  const pro = s.pro || {
    title: "Pro",
    subtitle: "Максимальная защита и мониторинг",
    price: "72",
    period: "/год",
    badge: "Рекомендуем",
    button: "Оформить подписку",
    features: []
  };

  const corporate = s.corporate || {
    title: "Корпоративный",
    subtitle: "Для команд и компаний",
    price: "Индивидуально",
    button: "Связаться с нами",
    features: []
  };

  return (
    <div id="obuna" ref={sectionRef} className="bg-white py-20">
      
      {/* Контейнер двусторонней анимации выезда и растворения */}
      <div className={`max-w-6xl mx-auto px-6 text-center transition-all duration-[900ms] ease-out will-change-[transform,opacity] ${
        isAnimated ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"
      }`}>
        
        <p className="text-emerald-600 font-medium tracking-wide mb-4">
          • {s.sectionTitle || "ПОДПИСКА"}
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
          {s.title || "Premium obuna Sino"}
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-3">
          {s.subtitle}
        </p>
        <p className="text-gray-500 mb-16">
          {s.note}
        </p>

        {/* Сетка тарифов */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* Basic */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-left">{basic.title}</h3>
              <p className="text-gray-500 mb-6 text-left">{basic.subtitle}</p>
              
              <div className="mb-8 text-left">
                <span className="text-5xl font-bold">${basic.price}</span>
                <span className="text-gray-500"> {basic.period}</span>
              </div>

              <ul className="space-y-3 mb-10 text-left text-sm">
                {basic.features?.map((item, i) => (
                  <li key={`active-${i}`} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
                {basic.disabledFeatures?.map((item, i) => (
                  <li key={`disabled-${i}`} className="flex items-start gap-3 text-gray-300 line-through decoration-gray-300/40">
                    <span className="text-gray-300 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-medium transition shadow-md shadow-emerald-500/10">
                {basic.button}
              </button>
            </div>
          </div>

          {/* Pro — Рекомендуемый */}
          <div className="relative bg-zinc-950 text-white rounded-3xl p-8 border border-emerald-500 shadow-2xl scale-105 flex flex-col h-full justify-between">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-sm px-6 py-1 rounded-full font-medium whitespace-nowrap">
              {pro.badge || "Tavsiya etiladi"}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-1 mt-4 text-left">{pro.title}</h3>
              <p className="text-zinc-400 mb-6 text-left">{pro.subtitle}</p>
              
              <div className="mb-8 text-left">
                <span className="text-5xl font-bold">${pro.price}</span>
                <span className="text-zinc-400"> {pro.period}</span>
              </div>

              <ul className="space-y-3 mb-10 text-left text-sm">
                {pro.features?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-medium transition shadow-lg shadow-emerald-500/20">
                {pro.button}
              </button>
            </div>
          </div>

          {/* Corporate */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-left">{corporate.title}</h3>
              <p className="text-gray-500 mb-6 text-left">{corporate.subtitle}</p>
              
              <div className="mb-8 text-left">
                <span className="text-4xl font-bold">{corporate.price || "Individual"}</span>
              </div>

              <ul className="space-y-3 mb-10 text-left text-sm">
                {corporate.features?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-medium transition shadow-md shadow-emerald-500/10">
                {corporate.button}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Obuna;
