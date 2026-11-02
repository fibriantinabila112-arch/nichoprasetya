import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { PassionSection } from './components/PassionSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CareerGoalsSection } from './components/CareerGoalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2E2E2E] flex flex-col font-sans selection:bg-[#D62828] selection:text-white">
      {/* Sticky Editorial Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* A. Hero Section */}
        <HeroSection />

        {/* B. About Me & Professional Traits */}
        <AboutSection />

        {/* C. Education Timeline */}
        <EducationSection />

        {/* D. Passion & Interest (Dark Grayscale & Red) */}
        <PassionSection />

        {/* E. Experience & Organization Vertical Timeline */}
        <ExperienceSection />

        {/* F. Skills & Tools */}
        <SkillsSection />

        {/* G. Selected Portfolio Grid & Drive Link */}
        <PortfolioSection />

        {/* H. Career Goals */}
        <CareerGoalsSection />

        {/* I. Contact Section */}
        <ContactSection />
      </main>

      {/* J. Footer */}
      <Footer />
    </div>
  );
}

export default App;
