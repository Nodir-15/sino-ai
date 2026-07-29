import { useTranslation } from './i18n';

const Navbar = ({ setPage }) => {
  const { t, lang, setLang } = useTranslation();

  const scrollToSection = (id) => {
    setPage('main'); // Возвращаемся на главную перед скроллом
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 85, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Лого - при клике возвращает на главную */}
        <div onClick={() => setPage('main')} className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
            <img src="./log.webp" alt="logo" />
          </div>
          <span className="text-2xl font-semibold text-emerald-700">sino</span>
        </div>

        {/* Меню скролла */}
        <div className="hidden lg:flex items-center gap-6 text-gray-700 font-medium mx-auto">
          <button onClick={() => scrollToSection('home')} className="hover:text-emerald-600 transition tracking-tight">Главная</button>
          <button onClick={() => scrollToSection('abilities')} className="hover:text-emerald-600 transition tracking-tight">Возможности</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-emerald-600 transition tracking-tight">Отзывы</button>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Языки и Твоя кнопка */}
        <div className="flex items-center gap-3">
          <div className="flex border border-gray-200 rounded-full overflow-hidden text-sm font-medium">
            {['UZ', 'RU', 'EN'].map(l => (
              <button key={l} onClick={() => setLang(l.toLowerCase())}
                className={`px-3 py-1.5 transition-all ${lang.toUpperCase() === l ? 'bg-emerald-600 text-white' : 'hover:bg-gray-100'}`}>
                {l}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setPage('business')}
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-600 transition-all duration-300 whitespace-nowrap flex items-center gap-2"
          >
            <span>💼</span>
            {lang === 'en' ? 'For Business' : lang === 'ru' ? 'Для бизнеса' : 'Biznes uchun'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;