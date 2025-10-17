import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import BeyondCodingSection from "@/components/BeyondCodingSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import MembershipsSection from "@/components/MembershipsSection";
import SpeakingSection from "@/components/SpeakingSection";
import SocialLinksSection from "@/components/SocialLinksSection";
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
            <BeyondCodingSection />
            <TechStackSection />
            <ProjectsSection />
            <CertificationsSection />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ExperienceSection />
            <AchievementsSection />
            <RecommendationsSection />
            <MembershipsSection />
            <SpeakingSection />
            <SocialLinksSection />
            <ContactSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
