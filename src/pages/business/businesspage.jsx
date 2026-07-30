import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "../../components/i18n"; // 1. ДОБАВИЛИ ИМПОРТ ХУКА
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market"; 
import ForBusiness from "./forbusiness";
import Team from "./team";
import DownloadCta from "./downloadcta";
import PartnerPage from './partnerpage';

const BusinessPage = () => {
  const { lang } = useTranslation(); // 2. ДОБАВИЛИ ИНИЦИАЛИЗАЦИЮ ПЕРЕМЕННОЙ LANG
  
  // Локальное состояние для открытия/закрытия страницы партнера
  const [showPartnerPage, setShowPartnerPage] = useState(false);

  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-50 overflow-x-hidden text-black relative">
      <style>{`
        html { scroll-behavior: smooth; }
        div[id], section[id] { scroll-margin-top: 100px; }
      `}</style>
      
      {/* Навбар с фиксацией вверху */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <BusinessNavbar onPartnerClick={() => setShowPartnerPage(true)} />
      </div>
      
      {/* Основной контент страницы бизнеса */}
      <main className="bg-white pt-20">
        <section id="hero" className="pt-10 pb-8 md:pt-14 md:pb-12">
          <ForBusinessHero onPartnerClick={() => setShowPartnerPage(true)} />
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
        </section>
      </main>

      <footer className="py-8 border-t border-gray-100 text-center text-gray-400 text-xs font-medium">
        © Sino AI — {new Date().getFullYear()}
      </footer>

      <AnimatePresence>
        {showPartnerPage && (
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 190 }}
            className="fixed inset-0 z-50 bg-[#05110B] overflow-y-auto"
          >
            {/* Теперь переменная lang здесь успешно передается и не вызывает ошибку */}
            <PartnerPage 
              currentLang={lang} 
              onClose={() => setShowPartnerPage(false)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BusinessPage;
