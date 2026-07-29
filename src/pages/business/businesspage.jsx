import React from 'react';
import BusinessNavbar from './businessnavbar';
import ForBusinessHero from './forbusinesshero';
import Market from './market';
import Team from './team';

const BusinessPage = ({ setPage }) => {
  return (
    // bg-[#eff4f0] — тот самый светлый оттенок с фото
    <div className="min-h-screen bg-[#eff4f0] text-[#1A2E26] font-sans selection:bg-green-200">
      <BusinessNavbar setPage={setPage} />
      
      <main>
        {/* Каждая секция имеет свой ID для скролла */}
        <section id="hero">
          <ForBusinessHero />
        </section>

        <section id="market" className="min-h-screen py-20">
          <Market />
        </section>

        <section id="team" className="min-h-screen py-20">
          <Team />
        </section>
      </main>
    </div>
  );
};

export default BusinessPage;