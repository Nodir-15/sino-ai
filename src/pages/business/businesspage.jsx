import React from 'react';
import { motion } from 'framer-motion';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market"; 
import ForBusiness from "./forbusiness";
import Team from "./team";

const BusinessPage = () => {
  const reveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-50 overflow-x-hidden text-black">
      <style>{`
        html { scroll-behavior: smooth; }
        div[id] { scroll-margin-top: 100px; }
      `}</style>
      
      <BusinessNavbar />
      
      <main className="bg-white">
        <section id="hero" className="py-20 md:py-32"><ForBusinessHero /></section>
        <motion.section id="market" className="py-32 md:py-48 border-t border-gray-50" {...reveal}><Market /></motion.section>
        <motion.section id="why" className="py-32 md:py-48 border-t border-gray-50" {...reveal}><ForBusiness /></motion.section>
        <motion.section id="team" className="py-32 md:py-48 border-t border-gray-50" {...reveal}><Team /></motion.section>
      </main>

      <footer className="py-16 border-t border-gray-100 text-center text-gray-400 text-sm">
        © Sino AI — {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default BusinessPage;