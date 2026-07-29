import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const team = [
    { n: "Alisher Akmaljonov", r: "CEO", p: ["8+ лет опыта", "Ex-COO Mutolaa"] },
    { n: "Shakhzod Toshboyev", r: "CTO", p: ["5+ лет разработки", "Ex-EASYBOOKING"] },
    { n: "Mohlaroy Tolibjonova", r: "CMO", p: ["3+ года маркетинга", "Ex-LG Electronics"] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 } // Каскад: каждый ребенок через 0.3 сек
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="team" ref={ref} className="py-24 bg-[#eff4f0]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            <span className="text-[#3E9E67] font-bold text-xs tracking-widest uppercase mb-6 block">• КОМАНДА</span>
            <h2 className="text-5xl font-extrabold mb-16 text-[#0D1B15]">Команда, которая создаёт Sino</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map((m, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-white p-8 rounded-[40px] text-left shadow-sm hover:shadow-xl transition-shadow border border-transparent hover:border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-full overflow-hidden border-2 border-[#3E9E67]/20"></div>
                <div><h3 className="font-bold text-lg">{m.n}</h3><p className="text-[#3E9E67] font-bold text-sm">{m.r}</p></div>
              </div>
              <ul className="space-y-2">{m.p.map((pt, idx) => <li key={idx} className="text-sm text-gray-500 flex items-center gap-2"><span className="text-green-500">•</span> {pt}</li>)}</ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;