import React from 'react';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import ForBusiness from "./forbusiness"; // Импортируем новый раздел
import Market from "./market";
import Team from "./team";

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#1A2E26]">
      <BusinessNavbar />
      
      <main>
        {/* Главный экран */}
        <ForBusinessHero />

        {/* Раздел "Почему выбирают" (который мы только что сделали) */}
        <ForBusiness />

        {/* Раздел Рынок */}
        <section id="market">
          <Market />
        </section>

        {/* Раздел Команда */}
        <section id="team">
          <Team />
        </section>
      </main>

      <footer className="py-10 text-center text-gray-400 border-t border-gray-50">
        © Sino AI
      </footer>
    </div>
  );
};

export default BusinessPage;