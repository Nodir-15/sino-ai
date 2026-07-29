import { useTranslation } from './i18n';

const Navbar = () => {
  const { t, lang, setLang } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const nav = t.nav || {};

  return (
    // УБРАЛИ border-b, ДОБАВИЛИ shadow-sm
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
            <img src="./log.webp" alt="logo" />
          </div>
          <span className="text-2xl font-semibold text-emerald-700">sino</span>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-6 text-gray-700 font-medium mx-auto">
          <button onClick={() => scrollToSection('home')} className="hover:text-emerald-600 transition cursor-pointer">{nav.home}</button>
          <button onClick={() => scrollToSection('imkoniyatlar')} className="hover:text-emerald-600 transition cursor-pointer">{nav.features}</button>
          <button onClick={() => scrollToSection('blog')} className="hover:text-emerald-600 transition cursor-pointer">{nav.blog}</button>
          <button onClick={() => scrollToSection('trust')} className="hover:text-emerald-600 transition cursor-pointer">{nav.trust}</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-emerald-600 transition cursor-pointer">{lang === 'ru' ? 'Отзывы' : lang === 'uz' ? 'Sharhlar' : 'Reviews'}</button>
          <button onClick={() => scrollToSection('obuna')} className="hover:text-emerald-600 transition cursor-pointer">{nav.subscription}</button>

          {/* ai chat кнопка теперь просто скроллит, если чат открыт */}
          <button 
            onClick={() => scrollToSection('chat-ai')} 
            className="text-emerald-600 font-bold hover:opacity-80 transition cursor-pointer flex items-center gap-1 border-l pl-6 ml-2"
          >
             {lang === 'ru' ? 'ИИ Чат' : 'AI Chat'}
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div className="flex border border-gray-200 rounded-full overflow-hidden text-sm font-medium">
            {['UZ', 'RU', 'EN'].map(l => (
              <button
                key={l}
                onClick={() => setLang(l.toLowerCase())}
                className={`px-3 py-1.5 transition-all ${lang.toUpperCase() === l ? 'bg-emerald-600 text-white' : 'hover:bg-gray-100'}`}
              >
                {l}
              </button>
            ))}
          </div>

         <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-600 transition-all duration-300 whitespace-nowrap flex items-center gap-2">
  <span>💼</span>
  {lang === 'en' ? 'For Business' : lang === 'ru' ? 'Для бизнеса' : 'Biznes uchun'}
</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;