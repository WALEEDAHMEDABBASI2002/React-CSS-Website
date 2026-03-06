import HeroServices from "../sections/HeroServices";
import BotSolutions from "../sections/BotSolutions";
import DesigningSection from "../sections/DesigningSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import Footer from "../sections/Footer";
import FloatingContactButton from "../sections/FloatingContactButton";


export default function ServicesPage() {
  return (
    <>
      <HeroServices />
      <BotSolutions />
      <DesigningSection />
      <WhyChooseUsSection />
      <Footer />
      <FloatingContactButton />
    </>
  );
}
