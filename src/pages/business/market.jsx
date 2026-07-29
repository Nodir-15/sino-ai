import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "../../components/i18n";
import { getT } from "./translations";

const Market = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { i18n } = useTranslation();
  const data = getT(i18n?.language);

  return (
    <section id="market" ref={ref} className="py-24 bg-white text-center px-6 font-sans">
      <span className="text-[#3E9E67] font-bold text-xs uppercase mb-6 block tracking-widest">
        • {data?.market?.badge || "MARKET"}
      </span>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-[#0D1B15] font-sans">
        {data?.market?.title || ""}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
        {[
          { v: 500, s: "B+", d: data?.market?.stats?.[0], p: "$" },
          { v: 100, s: "M+", d: data?.market?.stats?.[1], p: "" },
          { v: 20, s: "%+", d: data?.market?.stats?.[2], p: "" }
        ].map((s, i) => (
          <div key={i}>
            <div className="text-5xl font-bold text-[#3E9E67] mb-2 font-sans">
              {inView ? <CountUp end={s.v} duration={2.5} prefix={s.p} suffix={s.s} /> : "0"}
            </div>
            <p className="text-gray-400 text-xs font-medium font-sans">{s.d || ""}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Market;