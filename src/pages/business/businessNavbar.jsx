import { Link } from "react-router-dom";

const BusinessNavbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#f0f9f6] py-5 px-10 flex items-center justify-between shadow-sm">
      <Link to="/" className="text-2xl font-bold text-emerald-700">sino</Link>
      
      <div className="flex gap-8 text-gray-600 font-medium">
        <button onClick={() => scrollTo('market')} className="hover:text-emerald-600">Рынок</button>
        <button onClick={() => scrollTo('for-business')} className="hover:text-emerald-600">Для бизнеса</button>
        <button onClick={() => scrollTo('team')} className="hover:text-emerald-600">Команда</button>
      </div>

      <button className="bg-[#122b22] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-black transition">
        Стать партнёром
      </button>
    </nav>
  );
};

export default BusinessNavbar;