import AboutSection from "@/components/homepage/AboutSection";
import ContactSection from "@/components/homepage/ContactSection";
import HeroSection from "@/components/homepage/HeroSection";
import PortfolioSection from "@/components/homepage/PortfolioSection";
import ServicesSection from "@/components/homepage/ServicesSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}

