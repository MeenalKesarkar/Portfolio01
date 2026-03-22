import { Navbar } from "../components/Navbar";
import { StormNightBackground  } from "../components/StormNightBackground ";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { TestimonialSection } from "../components/Testimonial";

export const Home = () => {
  return (
<div className="min-h-screen text-foreground overflow-x-hidden">  
      {/* Theme Toggle */}
      {/* Background Effects */}
    <StormNightBackground  />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialSection />
        <ContactSection />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
