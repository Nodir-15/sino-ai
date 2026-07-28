import { useTranslation } from "./components/i18n";
import Navbar from './components/Navbar';
import Hero from "./sections/Hero";
import Home from "./pages/Home";
import Abilities from "./pages/abilities";
import Trust from "./pages/Trust"; 
import Blog from "./pages/Blog";
import Reviews from "./pages/reviews"; 
import Subscription from "./pages/Subscription";
import Chat from "./components/Chat";   // ← добавили

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      {/* navigation bar */}
      <Navbar />
      
      {/* Section 1: Main Screen */}
      <div id="hero">
        <Hero t={t} />
      </div>
      
      {/* Section 2: About Us / Home   */}
      <div id="home">
        <Home />
      </div>
      
      {/* Section 3: Opportunities */}
      <div id="abilities">
        <Abilities />
      </div>

      {/* Section 4: Blog */}
      <Blog />
      
      {/* Section 5: Doctors and Trust */}
      <div id="trust">
        <Trust />
      </div>

      {/* Section 6: Reviews */}
      <div id="reviews">
        <Reviews />
      </div>

      {/* Section 7: Subscription */}
      <div id="subscription">
        <Subscription />
      </div>

      {/* Section 8: Chat (последняя секция) */}
      <div id="chat" style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: 40, 
            fontSize: 28,
            fontWeight: 600
          }}>
            {t('chat.title')}
          </h2>
          <Chat />
        </div>
      </div>
      
    </div>
  );
}

export default App;