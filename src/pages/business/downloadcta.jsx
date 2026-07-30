import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const DownloadCta = () => {
  const navigate = useNavigate();
  const { lang } = useTranslation();
  const t = getT(lang).download;

  const containerRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true
    });
  };

  const handleMouseLeave = () => {
    setCursor(prev => ({ ...prev, visible: false }));
  };

  if (!t) return null;

  return (
    // Добавлен id="downloadcta" для работы smooth scroll
    <div id="downloadcta" className="max-w-6xl mx-auto px-4 py-12 scroll-mt-6">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-[#0D2B1F] rounded-2xl px-6 py-12 md:px-12 text-center overflow-hidden"
      >
        {/* Белый кружок за курсором */}
        <div
          className="pointer-events-none absolute w-40 h-40 rounded-full bg-white/20 blur-2xl transition-opacity duration-300"
          style={{
            left: cursor.x - 80,
            top: cursor.y - 80,
            opacity: cursor.visible ? 1 : 0,
          }}
        />

        <button 
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-10 text-sm"
        >
          ←
        </button>

        {/* Заголовок переписан строго под ваш новый эталон (font-black text-4xl md:text-5xl) */}
        <h2 className="relative z-10 text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight mb-5 whitespace-pre-line">
          {t.title}
        </h2>

        {/* Описание адаптировано под базовый читаемый размер text-sm md:text-base */}
        <p className="relative z-10 text-white/70 text-sm md:text-base max-w-xl mx-auto mb-8 whitespace-pre-line font-medium">
          {t.desc}
        </p>

        {/* Блок с кнопками магазинов */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-3.5 justify-center mb-8">
          <a 
            href="https://apps.apple.com/uz/app/sino-ai/id6753293302" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-[1.03] transition min-w-[190px] justify-center shadow-md"
          >
            <svg className="w-5 h-5 fill-black shrink-0" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z"/>
            </svg>
            <div className="text-left">
              <div className="text-[9px] opacity-70 leading-none mb-0.5">{t.appStoreTop}</div>
              <div className="text-xs font-bold leading-tight">{t.appStoreBottom}</div>
            </div>
          </a>

          <a 
            href="https://play.google.com/store/apps/details?id=ai.sinoai.mobile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-[1.03] transition min-w-[190px] justify-center shadow-md"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M3.18 23.71c-.24-.13-.4-.36-.4-.63V.92c0-.27.16-.5.4-.63l11.35 11.71L3.18 23.71z"/>
              <path fill="#FBBC04" d="M16.53 16.24l-2.99-2.99 2.99-2.99 3.55 1.96c.7.39.7 1.37 0 1.76l-3.55 1.96z"/>
              <path fill="#4285F4" d="M3.18.29l11.35 11.71 2.99-2.99L5.07.13C4.37-.26 3.42.13 3.18.29z"/>
              <path fill="#34A853" d="M3.18 23.71c.24.16 1.19.55 1.89.16l12.45-6.88-2.99-2.99L3.18 23.71z"/>
            </svg>
            <div className="text-left">
              <div className="text-[9px] opacity-70 leading-none mb-0.5">{t.googleTop}</div>
              <div className="text-xs font-bold leading-tight">{t.googleBottom}</div>
            </div>
          </a>
        </div>

        {/* Сноска снизу */}
        <p className="relative z-10 text-white/40 text-xs font-medium">
          {t.users}
        </p>
      </div>
    </div>
  );
};

export default DownloadCta;
