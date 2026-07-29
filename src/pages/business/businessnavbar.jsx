import React from 'react';

const BusinessNavbar = ({ setPage }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-[1400px] mx-auto w-full">
      {/* Logo */}
      <div 
        className="text-2xl font-bold text-[#3E9E67] cursor-pointer flex items-center gap-2"
        onClick={() => setPage('main')}
      >
        <span className="text-3xl">⊕</span> sino
      </div>

      {/* Links (Anchor links for scroll) */}
      <div className="hidden md:flex items-center gap-10 text-[#4B5E55] font-medium">
        <a href="#market" className="hover:text-black transition-colors">Рынок</a>
        <a href="#hero" className="hover:text-black transition-colors border-b-2 border-green-500 pb-1">Для бизнеса</a>
        <a href="#team" className="hover:text-black transition-colors">Команда</a>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="bg-white/50 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
          🌐 RU <span className="text-[10px]">▼</span>
        </button>
        <button className="bg-[#0D1B15] text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2">
          <span className="text-lg">⌂</span> Стать партнёром
        </button>
      </div>
    </nav>
  );
};

export default BusinessNavbar;