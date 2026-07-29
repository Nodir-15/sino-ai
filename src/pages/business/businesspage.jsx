import React from 'react';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market"; // Сразу вторым
import ForBusiness from "./forbusiness"; // Третьим
import Team from "./team"; // Четвертым

const BusinessPage = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-green-100">
      <style>{`
        html { scroll-behavior: smooth; }
        section, div[id] { scroll-margin-top: 85px; }
      `}</style>
      
      <BusinessNavbar />
      
      <main className="bg-white">
        <div id="hero"><ForBusinessHero /></div>
        <div id="market"><Market /></div>
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