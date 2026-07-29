import React from 'react';
// Импортируем дочерние компоненты как DEFAULT (без фигурных скобок)
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market";
import Team from "./team";

const BusinessPage = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <BusinessNavbar />
      <main>
        <ForBusinessHero />
        <Market />
        <Team />
      </main>
      <footer className="py-10 border-t text-center text-gray-400">© Sino AI</footer>
    </div>
  );
};

export default BusinessPage;