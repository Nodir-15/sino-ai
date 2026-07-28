import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../components/i18n'; 

// Компонент анимации цифр
const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, endValue, duration]);

  return <span ref={countRef}>{count.toLocaleString('ru-RU')}</span>;
};

export default function Reviews() {
  const { t, lang } = useTranslation();

  // Функция для безопасного получения переводов
  const translate = typeof t === 'function' ? t : (key) => key;
  
  // Получаем список отзывов
  const testimonials = translate('reviews.list') || [];

  return (
    /* ВАЖНО: id="reviews" для прокрутки из Навбара */
    <section id="reviews" className="bg-white py-24 px-4 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Категория (маленький текст сверху) */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {translate('reviews.subtitle')}
        </div>

        {/* Заголовок */}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3 max-w-3xl mx-auto leading-tight">
          {translate('reviews.title')}
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-16">
          {translate('reviews.description')}
        </p>

        {/* Секция статистики */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-emerald-500 tracking-tight mb-2">
              <AnimatedCounter endValue={20000} />+
            </span>
            <span className="text-sm text-gray-400 font-medium">{translate('reviews.usersCount')}</span>
          </div>
          
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-gray-100 py-6 md:py-0">
            <span className="text-4xl md:text-5xl font-bold text-emerald-500 tracking-tight mb-2 flex items-center gap-1">
              4,8 <span className="text-2xl text-amber-400 align-middle">★</span>
            </span>
            <span className="text-sm text-gray-400 font-medium">{translate('reviews.ratingStore')}</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-emerald-500 tracking-tight mb-2">
              1 {translate('reviews.minute')}
            </span>
            <span className="text-sm text-gray-400 font-medium">{translate('reviews.responseTime')}</span>
          </div>
        </div>

        {/* Сетка самих отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {Array.isArray(testimonials) && testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-emerald-50/20 border border-emerald-100/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-100/30 hover:bg-white cursor-pointer"
            >
              <div>
                {/* Звездочки рейтинга */}
                <div className="flex gap-0.5 text-amber-400 text-sm mb-5">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                {/* Основной текст отзыва */}
                <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
                  {item.text}
                </p>
              </div>

              {/* Автор отзыва */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm shrink-0">
                  {item.name ? item.name.charAt(0) : 'U'}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}