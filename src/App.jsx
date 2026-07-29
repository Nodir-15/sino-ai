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

// Импортируй именно BusinessPage (с большой буквы, как в названии файла)
import BusinessPage from "./pages/business/businesspage"; 

function App() {
  const { t } = useTranslation();
  // 'main' для обычного лендинга, 'business' для бизнес-лендинга
  const [page, setPage] = useState('main');

  return (
    <div className="app-container">
      
      {page === 'main' ? (
        <>
          {/* Навбар для главной страницы */}
          <Navbar setPage={setPage} />
          
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
        /* На странице бизнеса будет свой BusinessNavbar внутри компонента BusinessPage */
        /* Передаем setPage, чтобы из бизнес-страницы можно было вернуться на главную */
        <BusinessPage setPage={setPage} />
      )}
    </div>
  );
}

export default App;