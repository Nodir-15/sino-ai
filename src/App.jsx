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
import BusinessPage from "./pages/business/businesspage";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* ГЛАВНАЯ СТРАНИЦА */}
          <Route path="/" element={
            <>
              <Navbar /> {/* Старый навбар только здесь */}
              <div id="hero"><Hero t={t} /></div>
              <div id="home"><Home /></div>
              <div id="abilities"><Abilities /></div>
              <Blog />
              <div id="trust"><Trust /></div>
              <div id="reviews"><Reviews /></div>
              <div id="subscription"><Subscription /></div>
              <div id="chat" className="py-20 bg-[#f8fafc]">
                <div className="max-w-[700px] mx-auto"><Chat /></div>
              </div>
            </>
          } />

          {/* СТРАНИЦА БИЗНЕСА */}
          <Route path="/business" element={<BusinessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;