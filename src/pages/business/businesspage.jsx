import React from 'react';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market"; // Вторым
import ForBusiness from "./forbusiness"; // Третьим
import Team from "./team"; // Четвертым

const BusinessPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <BusinessNavbar />
      <main>
        <ForBusinessHero />
        <Market />
        <ForBusiness />
        <Team />
      </main>
      <footer className="py-12 border-t border-gray-50 text-center text-gray-300">© Sino AI</footer>
    </div>
  );
};
export default BusinessPage;