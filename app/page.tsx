import Navbar from "@/components/nav/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import StackSection from "@/components/stack/StackSection";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import ContactSection from "@/components/contact/ContactSection";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ParticleField from "@/components/ui/ParticleField";

export default function Home() {
  return (
    <>
      {/* Cinematic loader — unmounts after 1.8s */}
      <LoadingScreen />

      {/* Ambient Three.js particle background */}
      <ParticleField />

      {/* Nav is OUTSIDE main so position:fixed is never broken by transforms */}
      <Navbar />

      <main
        className="flex min-h-screen flex-col text-text-lo font-sans selection:bg-accent/30 selection:text-text-hi"
        style={{ position: "relative", zIndex: 1, perspective: "1400px" }}
      >
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <StackSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </>
  );
}
