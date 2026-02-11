import HeroHome from "../sections/HeroHome";
import FeaturesSection from "../sections/FeaturesSection";
import IndustriesSection from "../sections/IndustriesSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import Footer from "../sections/Footer";
import FloatingContactButton from "../sections/FloatingContactButton";


export default function HomePage() {
  return (
    <>
      <HeroHome />
      <FeaturesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      {/* Your pages */}
      <Footer />
      <FloatingContactButton />
    </>
  );
}
