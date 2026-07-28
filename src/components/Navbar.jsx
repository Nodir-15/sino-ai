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

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl"><img src="./log.webp" alt="" /></div>
          <span className="text-2xl font-semibold text-emerald-700">sino</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium mx-auto">
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-emerald-600 transition cursor-pointer"
          >
            {t.nav.home}
          </button>
          
          <button 
            onClick={() => scrollToSection('imkoniyatlar')} 
            className="hover:text-emerald-600 transition cursor-pointer"
          >
            {t.nav.features}
          </button>

          <button 
            onClick={() => scrollToSection('blog')} 
            className="hover:text-emerald-600 transition cursor-pointer"
          >
            {t.nav.blog}
          </button>

          <button 
            onClick={() => scrollToSection('trust')} 
            className="hover:text-emerald-600 transition cursor-pointer"
          >
            {t.nav.trust}
          </button>


        


          <button 
            onClick={() => scrollToSection('obuna')} 
            className="hover:text-emerald-600 transition cursor-pointer"
          >
            {t.nav.subscription}
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex border border-gray-200 rounded-full overflow-hidden text-sm font-medium">
            {['UZ', 'RU', 'EN'].map(l => (
              <button
                key={l}
                onClick={() => setLang(l.toLowerCase())}
                className={`px-4 py-1.5 transition-all ${lang.toUpperCase() === l ? 'bg-emerald-600 text-white' : 'hover:bg-gray-100'}`}
              >
                {l}
              </button>
            ))}
          </div>

          <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50 transition text-xl">
            ↓
          </button>

          <button className="bg-black text-white px-6 py-2.5 rounded-3xl text-sm font-medium hover:bg-gray-900 transition">
            💼 {lang === 'en' ? 'For Business' : lang === 'ru' ? 'Для бизнеса' : 'Biznes uchun'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;