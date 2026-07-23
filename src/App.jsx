import { useTranslation } from "./i18n";
import Navbar from './components/Navbar';
import Hero from "./sections/Hero";
import Home from "./pages/Home";
import Imkoniyatlar from "./pages/Imkoniyatlar";
import Trust from "./pages/Trust"; 
import Blog from "./pages/Blog";
import Reviews from "./pages/reviews"; // Импортируем новый компонент
import Obuna from "./pages/Obuna";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      {/* Навигационная панель */}
      <Navbar />
      
      {/* Секция 1: Главный экран */}
      <div id="hero">
        <Hero t={t} />
      </div>
      
      {/* Секция 2: О нас / Главная */}
      <div id="home">
        <Home />
      </div>
      
      {/* Секция 3: Возможности */}
      <div id="imkoniyatlar">
        <Imkoniyatlar />
      </div>

      {/* Секция 4: Блог */}
      <Blog />
      
      {/* Секция 5: Врачи и доверие */}
      <div id="trust">
        <Trust />
      </div>

     {/* Секция 6: Отзывы */}
<div id="reviews">
  <Reviews />
</div>

      {/* Секция 6: Подписка */}
      <div id="obuna">
        <Obuna />
      </div>
      
    </div>
  );
}

export default App;
