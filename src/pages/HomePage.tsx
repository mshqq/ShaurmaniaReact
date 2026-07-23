import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SliderSection from '../components/sections/SliderSection/SliderSection';
import FeaturesSection from '../components/sections/FeatureSection/FeaturesSection';
import MenuSection from '../components/sections/MenuSection';
import AboutSection from '../components/sections/AboutSection';
import FormSection from '../components/sections/FormSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <SliderSection />
      <FeaturesSection />
      <MenuSection />
      <AboutSection />
      <FormSection />
      <Footer />
    </>
  );
}
