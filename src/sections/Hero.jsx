import { useEffect, useState, useRef } from "react";

const Hero = ({ t }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Элемент анимируется, как только пересекает любую границу экрана
        setIsAnimated(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "-5% 0px -5% 0px" }
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div id="home" ref={domRef} className="bg-transparent pt-24 pb-40">
      <section className="flex items-center relative z-10">
        <div className={`max-w-4xl mx-auto text-center px-6 py-12 transition-all duration-[900ms] ease-out will-change-[transform,opacity] ${
          isAnimated 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-12 scale-[0.98]"
        }`}>
          
          <p className="text-emerald-600 font-medium mb-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            {t.hero.subtitle}
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            {t.hero.title1}<br />
            <span className="bg-gradient-to-r from-emerald-500 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            {t.hero.description}
          </p>

          <button className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-10 py-4 rounded-3xl text-lg font-medium flex items-center gap-3 mx-auto mb-12">
            🛡️ {t.hero.cta}
          </button>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/uz/app/sino-ai/id6753293302" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition min-w-[260px] text-left border border-zinc-800">
              <svg className="w-7 h-7 fill-white shrink-0" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z"/></svg>
              <div>
                <div className="text-xs opacity-75">{t.hero.download}</div>
                <div className="text-xl font-semibold leading-tight">{t.hero.appStore}</div>
              </div>
            </a>

            <a href="https://play.google.com/store/apps/details?id=ai.sinoai.mobile" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition min-w-[260px] text-left border border-zinc-800">
              <svg className="w-7 h-7 fill-white shrink-0" viewBox="0 0 24 24"><path d="M17.523 15.3414C17.1354 15.3414 16.821 15.027 16.821 14.6394C16.821 14.2518 17.1354 13.9374 17.523 13.9374C17.9106 13.9374 18.225 14.2518 18.225 14.6394C18.225 15.027 17.9106 15.3414 17.523 15.3414ZM6.477 15.3414C6.0894 15.3414 5.775 15.027 5.775 14.6394C5.775 14.2518 6.0894 13.9374 6.477 13.9374C6.8646 13.9374 7.179 14.2518 7.179 14.6394C7.179 15.027 6.8646 15.3414 6.477 15.3414ZM17.91 10.3734L19.734 7.2114C19.866 6.9834 19.788 6.6924 19.56 6.5604C19.332 6.4284 19.041 6.5064 18.909 6.7344L17.049 9.9574C15.54 9.2724 13.854 8.8854 12 8.8854C10.146 8.8854 8.46 9.2724 6.951 9.9574L5.091 6.7344C4.959 6.5064 4.268 6.4284 4.04 6.5604C3.812 6.6924 3.734 6.9834 3.866 7.2114L5.69 10.3734C2.373 12.1974 0.126 15.6264 0 19.6434H24C23.874 15.6264 21.627 12.1974 17.91 10.3734Z"/></svg>
              <div>
                <div className="text-xs opacity-75">{t.hero.available}</div>
                <div className="text-xl font-semibold leading-tight">{t.hero.googlePlay}</div>
              </div>
            </a>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Hero;
