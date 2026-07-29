import { useState } from "react";
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
import BusinessPage from "./pages/Business/BusinessPage"; // Создай эту папку и файл

function App() {
  const { t } = useTranslation();
  // По умолчанию 'main'. Когда нажмем кнопку, станет 'business'
  const [page, setPage] = useState('main'); 

  return (
    <div className="app-container">
      {/* Передаем функцию смены страницы в Навбар */}
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
        <BusinessPage />
      )}
    </div>
  );
}

export default App;