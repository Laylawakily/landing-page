import HomeHeroSection from "./HomeHeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import ShowCaseSection from "./showcaseSection/ShowCaseSection";
import WorkShowcase from "./WorkShowcase/WorkShowcase";

export default function HomeMain() {
  return (
    <div className="bg-gradient-to-r pb-32 from-charcoalBlack via-gray-800 to-black text-white relative">
      <HomeHeroSection />
      <ShowCaseSection />
      <ServicesSection />
      <WorkShowcase />
    </div>
  );
}
