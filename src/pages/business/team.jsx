import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const team = [
    { n: "Alisher Akmaljonov", r: "CEO" },
    { n: "Shakhzod Toshboyev", r: "CTO" },
    { n: "Mohlaroy Tolibjonova", r: "CMO" },
    { n: "Nilufar Abdullayeva", r: "Strategy" },
    { n: "Lobar Abdullaeva", r: "Medical" },
    { n: "Javohir Hoshimov", r: "AI Engineer" }
  ];

  return (
    <section id="team" ref={ref} className="py-24 bg-white text-center font-sans">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-[#0D1B15]">Команда Sino</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {team.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="p-8 border border-gray-100 rounded-[40px] text-left shadow-sm"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full mb-4"></div>
            <h3 className="font-bold text-lg">{m.n}</h3>
            <p className="text-[#3E9E67] font-bold text-xs uppercase">{m.r}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;