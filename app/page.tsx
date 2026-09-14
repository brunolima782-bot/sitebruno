import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import SpecializationSection from "@/components/SpecializationSection";
import HowItWorks from "@/components/HowItWorks";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <SpecializationSection />
        <HowItWorks />
        <PerformanceDashboard />
        <ResultsSection />
        <AboutSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
