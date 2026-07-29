import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import BusinessPage from "./pages/BusinessPage"; // Создадим этот файл ниже

// Создаем отдельный компонент для Лендинга (все твои секции)
const Landing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="hero"><Hero t={t} /></div>
      <div id="home"><Home /></div>
      <div id="abilities"><Abilities /></div>
      <Blog />
      <div id="trust"><Trust /></div>
      <div id="reviews"><Reviews /></div>
      <div id="subscription"><Subscription /></div>
      <div id="chat" style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <Chat />
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Главная страница со скроллом */}
          <Route path="/" element={<Landing />} />
          
          {/* Отдельная страница для бизнеса */}
          <Route path="/business" element={<BusinessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;