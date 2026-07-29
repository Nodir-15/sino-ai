import React from 'react';
import { motion } from 'framer-motion';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import ForBusiness from "./forbusiness";
import Market from "./market";
import Team from "./team";

const BusinessPage = () => {
  const scrollAnim = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-white">
      <BusinessNavbar />
      
      <main className="bg-white">
        <ForBusinessHero />

        <motion.div {...scrollAnim}>
          <ForBusiness />
        </motion.div>

        <motion.div {...scrollAnim}>
          <Market />
        </motion.div>

        <motion.div {...scrollAnim}>
          <Team />
        </motion.div>
      </main>

      <footer className="py-12 bg-white border-t border-gray-100 text-center text-gray-400">
        © Sino AI — {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default BusinessPage;