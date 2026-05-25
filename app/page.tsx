import Navbar from "@/components/nav/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import StackSection from "@/components/stack/StackSection";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bg text-text-lo font-sans selection:bg-accent/30 selection:text-text-hi">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
