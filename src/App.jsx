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
import BusinessPage from "./pages/business/businesspage"; // Проверь путь!

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero"><Hero t={t} /></div>
              <div id="home"><Home /></div>
              <div id="abilities"><Abilities /></div>
              <div id="blog"><Blog /></div> {/* Добавь id сюда */}
              <div id="trust"><Trust /></div>
              <div id="reviews"><Reviews /></div>
              <div id="subscription"><Subscription /></div>
              <div id="chat" style={{ padding: '80px 20px', background: '#f8fafc' }}>
                 <Chat />
              </div>
            </>
          } />

          <Route path="/business" element={<Businesspage />} />
        </Routes>
      </div>
    </Router>
  );
}
//fix
export default App;