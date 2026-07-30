import React, { useState, useEffect } from 'react'; // Добавлен useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "../../components/i18n";
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market"; 
import ForBusiness from "./forbusiness";
import Team from "./team";
import DownloadCta from "./downloadcta";
import PartnerPage from './partnerpage';

const BusinessPage = () => {
  const { lang, setLang } = useTranslation();
  
  // Локальное состояние для открытия/закрытия полноэкранной формы партнера
  const [showPartnerPage, setShowPartnerPage] = useState(false);

  // ГАРАНТИЯ ОТКРЫТИЯ С НАЧАЛА СТРАНИЦЫ: 
  // Этот хук принудительно поднимает страницу на самый верх при первой загрузке для любого пользователя
  useEffect(() => {
    // Делаем мгновенный сброс скролла на самый верх (координаты 0, 0)
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
        <BusinessNavbar 
          lang={lang} 
          setLang={setLang} 
          onPartnerClick={() => setShowPartnerPage(true)} 
        />
      </div>
      
      {/* Основной лендинг страницы бизнеса */}
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
        </motion.section>
      </main>

      <footer className="py-8 border-t border-gray-100 text-center text-gray-400 text-xs font-medium">
        © Sino AI — {new Date().getFullYear()}
      </footer>

      {/* Полноэкранный выезд страницы партнера */}
      <AnimatePresence>
        {showPartnerPage && (
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 190 }}
            className="fixed inset-0 z-50 bg-[#05110B] overflow-y-auto"
          >
            <PartnerPage 
              currentLang={lang} 
              setLang={setLang}
              onClose={() => setShowPartnerPage(false)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BusinessPage;
