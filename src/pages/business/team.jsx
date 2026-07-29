import React from 'react';

const Team = () => {
  return (
    <div className="py-24 bg-white text-center border-t border-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-black">Наша команда</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="p-6 border rounded-3xl w-64 shadow-sm">
           <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4"></div>
           <p className="font-bold">Alisher Akmaljonov</p>
           <p className="text-[#3E9E67] text-sm font-bold">CEO</p>
        </div>
        {/* Можно добавить других */}
      </div>
    </div>
  );
};

export default Team;