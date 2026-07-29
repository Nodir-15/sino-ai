import React from 'react';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import ForBusiness from "./forbusiness";
import Market from "./market";
import Team from "./team";

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <BusinessNavbar />
      <main>
        <ForBusinessHero />
        <ForBusiness />
        <Market />
        <Team />
      </main>
      <footer className="py-12 border-t border-gray-50 text-center text-gray-400">© Sino AI</footer>
    </div>
  );
};
export default BusinessPage;