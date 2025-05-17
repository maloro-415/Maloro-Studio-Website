
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const Index = () => {
  return (
    <div className="font-sans w-full bg-background text-foreground">
      <NavBar />
      {/* Add top spacer to avoid nav overlap */}
      <div className="h-16" />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
