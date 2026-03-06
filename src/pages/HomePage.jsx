import HeroHome from "../sections/HeroHome";
import FeaturesSection from "../sections/FeaturesSection";
import DesigningSection from "../sections/DesigningSection";
import GraphicDesignSection from "../sections/DesigningServices";
import IndustriesSection from "../sections/IndustriesSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import Footer from "../sections/Footer";
import FloatingContactButton from "../sections/FloatingContactButton";


export default function HomePage() {
  return (
    <>
      <HeroHome />
      <FeaturesSection />
      <DesigningSection />
      <GraphicDesignSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <Footer />
      <FloatingContactButton />
    </>
  );
}
