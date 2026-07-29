import { useState } from "react"; // Добавили это
import { useTranslation } from "./components/i18n";
import Navbar from './components/Navbar';
import Hero from "./sections/Hero";
import Home from "./pages/Home";
import Abilities from "./pages/abilities";
import Trust from "./pages/Trust"; 
import Blog from "./pages/Blog";
import Reviews from "./pages/reviews"; 
import Subscription from "./pages/Subscription";
import Chat from "./components/Chat";
import BusinessPage from "./pages/business/businesspage";

function App() {
  const { t } = useTranslation();
  // Состояние: по умолчанию 'main' (главная страница)
  const [page, setPage] = useState('main');

  return (
    <div className="app-container">
      {/* Передаем функцию setPage в Навбар */}
      <Navbar setPage={setPage} />
      
      {page === 'main' ? (
        <>
          <div id="hero"><Hero t={t} /></div>
          <div id="home"><Home /></div>
          <div id="abilities"><Abilities /></div>
          <Blog />
          <div id="trust"><Trust /></div>
          <div id="reviews"><Reviews /></div>
          <div id="subscription"><Subscription /></div>
          <div id="chat" style={{ padding: '80px 20px', background: '#f8fafc' }}>
            <div style={{ maxWidth: 700, margin: '0 auto' }}><Chat /></div>
          </div>
        </>
      ) : (
        /* Это твой второй лендинг для бизнеса */
        <BusinessPage />
      )}
    </div>
  );
}

export default App;