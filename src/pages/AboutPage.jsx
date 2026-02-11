import HeroAbout from "../sections/HeroAbout";
import MissionSection from "../sections/MissionSection";
import OurDifferenceSection from "../sections/OurDifferenceSection";
import GlobalTrustSection from "../sections/GlobalTrustSection";
import Footer from "../sections/Footer";
import FloatingContactButton from "../sections/FloatingContactButton";

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <MissionSection />
      <OurDifferenceSection />
      <GlobalTrustSection />
      <Footer />
      <FloatingContactButton />
    </>
  );
}
