import React from 'react';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market";
import ForBusiness from "./forbusiness";
import Team from "./team";

const BusinessPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100">
      {/* Плавный скролл и отступ, чтобы шапка не закрывала заголовок */}
      <style>{`
        html { scroll-behavior: smooth; }
        section, div[id] { scroll-margin-top: 85px; }
      `}</style>
      
      <BusinessNavbar />
      
      <main className="bg-white">
        <div id="hero"><ForBusinessHero /></div>
        <div id="market"><Market /></div>
        
        {/* Присвоили id="why", чтобы ссылка "Для бизнеса" работала */}
        <div id="why"><ForBusiness /></div>
        
        <div id="team"><Team /></div>
      </main>

      <footer className="py-10 border-t border-gray-50 text-center text-gray-300 text-xs">
        © Sino AI — {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default BusinessPage;