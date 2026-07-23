import { useEffect, useState, useRef } from "react";
import { useTranslation } from "../components/i18n";

const Imkoniyatlar = () => {
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

  if (!t || !t.opportunities) return null;
  const opp = t.opportunities;

  const c1 = opp.card1 || {};
  const c2 = opp.card2 || {};
  const c3 = opp.card3 || {};
  const c4 = opp.card4 || {};
  const c5 = opp.card5 || {};

  return (
    <div id="imkoniyatlar" ref={sectionRef} className="py-20 px-6">
      <div className={`max-w-5xl mx-auto transition-all duration-[900ms] ease-out will-change-[transform,opacity] ${
        isAnimated ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"
      }`}>
        
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">• {opp.subtitle || "IMKONIYATLAR"}</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight">{opp.title}</h2>
          <p className="text-lg text-gray-500 mt-4">{opp.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-start text-left">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 text-xl">📄</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{c1.title}</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">{c1.desc}</p>
          </div>

          <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-start text-left">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 text-xl">❤️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{c2.title}</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">{c2.desc}</p>
          </div>

          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-start text-left">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 text-xl">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{c3.title}</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">{c3.desc}</p>
          </div>

          <div className="md:col-span-2 bg-[#0b241b] rounded-3xl p-8 shadow-lg flex flex-col justify-between text-white text-left">
            <div>
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 text-xl">🕒</div>
              <h3 className="text-xl font-bold mb-3">{c4.title}</h3>
              <p className="text-emerald-100/70 text-[15px] leading-relaxed mb-6">{c4.desc}</p>
            </div>
            <span className="self-start bg-emerald-600 text-white font-medium text-xs px-4 py-2 rounded-full">{c4.badge}</span>
          </div>

          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-start text-left">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 text-xl">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{c5.title}</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">{c5.desc}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Imkoniyatlar;
