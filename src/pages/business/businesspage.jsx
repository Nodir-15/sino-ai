import React from 'react';
import BusinessNavbar from "./businessnavbar";
import ForBusinessHero from "./forbusinesshero";
import Market from "./market";
import ForBusiness from "./forbusiness";
import Team from "./team";

const BusinessPage = () => {
  // ТЕСТ ДЛЯ КОНСОЛИ: если в консоли браузера увидишь слово "object", 
  // значит этот файл экспортирован неправильно.
  console.log("Navbar:", typeof BusinessNavbar);
  console.log("Hero:", typeof ForBusinessHero);
  console.log("Market:", typeof Market);

  return (
    <div className="bg-white min-h-screen">
      <BusinessNavbar />
      <main>
        <ForBusinessHero />
        <Market />
        <ForBusiness />
        <Team />
      </main>
    </div>
  );
};

export default BusinessPage;