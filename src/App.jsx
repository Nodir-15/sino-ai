import { useTranslation } from "./components/i18n";
import Navbar from './components/Navbar';
import Hero from "./sections/Hero";
import Home from "./pages/Home";
import Abilities from "./pages/abilities";
import Trust from "./pages/Trust"; 
import Blog from "./pages/Blog";
import Reviews from "./pages/reviews"; 
import Subscription from "./pages/Subscription";

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

      {/* Section 6: Subscription */}
      <div id="subscription">
        <Subscription />
      </div>
      
    </div>
  );
}

export default App;
