import React from 'react';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market";
import ForBusiness from "./forbusiness";
import Team from "./team";

const BusinessPage = () => {
  // Проверка всех компонентов
  console.log("Navbar:", typeof BusinessNavbar);
  console.log("Hero:", typeof ForBusinessHero);
  console.log("Market:", typeof Market);
  console.log("ForBusiness:", typeof ForBusiness);
  console.log("Team:", typeof Team);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100">
      <style>{`
        html { scroll-behavior: smooth; }
        section, div[id] { scroll-margin-top: 80px; }
      `}</style>
      
      <BusinessNavbar />
      
      <main className="bg-white">
        {/* 1. Hero */}
        <div id="hero"><ForBusinessHero /></div>
        
        {/* 2. Market (Теперь сразу вторым) */}
        <div id="market"><Market /></div>
        
        {/* 3. Для бизнеса (Why Choose) */}
        <div id="why"><ForBusiness /></div>
        
        {/* 4. Team */}
        <div id="team"><Team /></div>
      </main>

      <footer className="py-12 border-t border-gray-50 text-center text-gray-300 text-xs">
        © Sino AI — 2024
      </footer>
    </div>
  );
};

export default BusinessPage;