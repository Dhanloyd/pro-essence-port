import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      <Header />
      
      <main className="container py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            <ProfileSection />
            <AboutSection />
            <TechStackSection />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ExperienceSection />
            <AchievementsSection />
            <ContactSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
