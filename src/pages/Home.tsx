import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import FeatureSection from "../components/FeatureSection";
import CategorySection from "../components/CategorySection";
import CourseSection from "../components/CourseSection";
import CareerJourney from "../components/CareerJourney";
import AISection from "../components/AISection";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";

interface LayoutContext {
  openLead: () => void;
}

export default function Home() {
  const { openLead } = useOutletContext<LayoutContext>();

  return (
    <>
      <Hero onLeadClick={openLead} />
      <TrustStrip />
      <FeatureSection />
      <CategorySection />
      <CourseSection />
      <CareerJourney />
      <AISection />
      <Projects />
      <FAQ />
      <CTASection onLeadClick={openLead} />
    </>
  );
}