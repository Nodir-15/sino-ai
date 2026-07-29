import React from 'react';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market";
import ForBusiness from "./forbusiness";
import Team from "./team";

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
      <footer className="py-10 border-t border-gray-100 text-center text-gray-400">© Sino AI</footer>
    </div>
  );
};

export default BusinessPage;