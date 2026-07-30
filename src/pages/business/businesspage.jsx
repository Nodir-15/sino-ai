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
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: "easeOut" }
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
        div[id] { scroll-margin-top: 100px; }
      `}</style>
      
      <BusinessNavbar />
      
      <main className="bg-white">
        <section id="hero" className="pt-16 pb-20 md:pt-24 md:pb-28">
          <ForBusinessHero />
        </section>

        <motion.section id="market" className="py-24 md:py-32 border-t border-gray-50" {...reveal}>
          <Market />
        </motion.section>

        <motion.section id="why" className="py-24 md:py-32 border-t border-gray-50" {...reveal}>
          <ForBusiness />
        </motion.section>

        <motion.section id="team" className="py-24 md:py-32 border-t border-gray-50" {...reveal}>
          <Team />
        </motion.section>
        <motion.section id="download" className="border-t border-gray-50" {...reveal}>
  <DownloadCta />
</motion.section>
      </main>

      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        © Sino AI — {new Date().getFullYear()}
      </footer>
    </motion.div>
  );
};

export default BusinessPage;