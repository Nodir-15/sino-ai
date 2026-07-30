import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom'; // Импортируем хук для отслеживания URL
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market"; 
import ForBusiness from "./forbusiness";
import Team from "./team";
import DownloadCta from "./downloadcta";
import PartnerPage from './PartnerPage';

const BusinessPage = () => {
  const location = useLocation();
  const [isPartnerRoute, setIsPartnerRoute] = useState(false);

  // Отслеживаем изменение URL в браузере
  useEffect(() => {
    if (location.pathname === '/partner') {
      setIsPartnerRoute(true);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавный скролл вверх при открытии формы
    } else {
      setIsPartnerRoute(false);
    }
  }, [location.pathname]);

  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  // Если URL равен "/partner", рендерим только страницу партнёрства
  if (isPartnerRoute) {
    return <PartnerPage />;
  }

  // В остальных случаях рендерим стандартную страницу бизнеса
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white min-h-screen font-sans selection:bg-green-50 overflow-x-hidden text-black"
    >
      <style>{`
        html { scroll-behavior: smooth; }
        div[id], section[id] { scroll-margin-top: 100px; }
      `}</style>
      
      {/* Обертка для навбара */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <BusinessNavbar />
      </div>
      
      {/* Основной контент бизнес-страницы */}
      <main className="bg-white pt-20">
        <section id="hero" className="pt-10 pb-8 md:pt-14 md:pb-12">
          <ForBusinessHero />
        </section>

        <motion.section id="market" className="py-8 md:py-12 border-t border-gray-50/50" {...reveal}>
          <Market />
        </motion.section>

        <motion.section id="why" className="py-8 md:py-12 border-t border-gray-50/50" {...reveal}>
          <ForBusiness />
        </motion.section>

        <motion.section id="team" className="py-8 md:py-12 border-t border-gray-50/50" {...reveal}>
          <Team />
        </motion.section>

        <motion.section id="download" className="py-8 md:py-12 border-t border-gray-50/50" {...reveal}>
          <DownloadCta />
        </motion.section>
      </main>

      <footer className="py-8 border-t border-gray-100 text-center text-gray-400 text-xs font-medium">
        © Sino AI — {new Date().getFullYear()}
      </footer>
    </motion.div>
  );
};

export default BusinessPage;
