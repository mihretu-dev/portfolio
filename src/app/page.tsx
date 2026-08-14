import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";
import DisciplinesSection from "@/components/DisciplinesSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">

      {/* Ambient Radial Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(241,245,249,0.8)_0%,rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_20%,#0f172a_0%,#020617_100%)] opacity-90 transition-colors duration-300" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 dark:bg-slate-900/30 blur-3xl pointer-events-none rounded-full" />
      </div>

      <Header />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 md:pb-24 space-y-24 md:space-y-32">
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <DisciplinesSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
