import Hero from '../sections/Hero';
import { useTranslation } from '../i18n';

const Home = () => {
  const { t } = useTranslation();
  return 
  
  <Hero t={t} />;
};

export default Home;