import React from 'react';
import { motion } from 'framer-motion';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market"; 
import ForBusiness from "./forbusiness";
import Team from "./team";
import DownloadCta from "./downloadcta";

const BusinessPage = () => {
  const reveal = {
    // Уменьшен сдвиг по оси Y с 50 до 20, чтобы анимация в плотном интерфейсе смотрелась аккуратно
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white min-h-screen font-sans selection:bg-green-50 overflow-x-hidden text-black"
    >
      <style>{`
        html { scroll-behavior: smooth; }
        div[id], section[id] { scroll-margin-top: 80px; }
      `}</style>
      
      <BusinessNavbar />
      
      <main className="bg-white">
        {/* Секция 1: Уменьшены отступы pt-16/pb-20 до pt-10/pb-8 */}
        <section id="hero" className="pt-10 pb-8 md:pt-14 md:pb-12">
          <ForBusinessHero />
        </section>

        {/* Секция 2: Изменено с py-24 md:py-32 на py-8 md:py-12 */}
        <motion.section id="market" className="py-8 md:py-12 border-t border-gray-50/50" {...reveal}>
          <Market />
        </motion.section>

        {/* Секция 3: Изменено с py-24 md:py-32 на py-8 md:py-12 */}
        <motion.section id="why" className="py-8 md:py-12 border-t border-gray-50/50" {...reveal}>
          <ForBusiness />
        </motion.section>

        {/* Секция 4: Изменено с py-24 md:py-32 на py-8 md:py-12 */}
        <motion.section id="team" className="py-8 md:py-12 border-t border-gray-50/50" {...reveal}>
          <Team />
        </motion.section>

        {/* Секция 5: Изменено на py-8 md:py-12 для сохранения единого ритма */}
        <motion.section id="download" className="py-8 md:py-12 border-t border-gray-50/50" {...reveal}>
          <DownloadCta />
        </motion.section>
      </main>

      {/* Футер: уменьшен py-12 до py-8 */}
      <footer className="py-8 border-t border-gray-100 text-center text-gray-400 text-xs font-medium">
        © Sino AI — {new Date().getFullYear()}
      </footer>
    </motion.div>
  );
};

export default BusinessPage;
