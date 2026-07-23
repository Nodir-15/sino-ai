import { useEffect, useState, useRef } from "react";
import { useTranslation } from "../components/i18n";

const Trust = () => {
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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

  if (!t || !t.trust) return null;
  const tr = t.trust;

  const c1 = tr.card1 || tr.stat1 || {};
  const c2 = tr.card2 || tr.stat2 || {};
  const c3 = tr.card3 || tr.stat3 || {};
  const c4 = tr.card4 || tr.stat4 || {};

  return (
    <div id="trust" ref={sectionRef} className="py-20 px-6">
      <div className={`max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 transition-all duration-[900ms] ease-out will-change-[transform,opacity] ${
        isAnimated ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"
      }`}>
        
        <div className="w-full md:w-1/2 shrink-0">
          <div className="relative rounded-[32px] overflow-hidden shadow-md bg-white border border-gray-100 aspect-[4/3] flex items-center justify-center text-gray-300">
            <span className="text-4xl"><img src="./doct.webp" alt="" /></span>
            <div className="absolute inset-0 bg-emerald-950/5 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-left">
          <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3">• {tr.subtitle}</p>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">{tr.title}</h2>
          <p className="text-lg font-bold text-emerald-950/80 mb-8 leading-relaxed">{tr.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-start">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-3 text-base">🩺</div>
              <h3 className="text-[15px] font-extrabold text-gray-900 mb-1">{c1.title || c1.num}</h3>
              <p className="text-gray-500 text-xs leading-normal">{c1.desc || c1.label}</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-start">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-3 text-base">🛡️</div>
              <h3 className="text-[15px] font-extrabold text-gray-900 mb-1">{c2.title || c2.num}</h3>
              <p className="text-gray-500 text-xs leading-normal">{c2.desc || c2.label}</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-start">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-3 text-base">🌐</div>
              <h3 className="text-[15px] font-extrabold text-gray-900 mb-1">{c3.title || c3.num}</h3>
              <p className="text-gray-500 text-xs leading-normal">{c3.desc || c3.label}</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-start">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-3 text-base">🔒</div>
              <h3 className="text-[15px] font-extrabold text-gray-900 mb-1">{c4.title || c4.num}</h3>
              <p className="text-gray-500 text-xs leading-normal">{c4.desc || c4.label}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Trust;
