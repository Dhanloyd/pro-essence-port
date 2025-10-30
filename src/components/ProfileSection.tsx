import { MapPin, Calendar, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileSection = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/your-link", "_blank");
  };

  const handleSendEmail = () => {
    window.location.href = "mailto:setrojas445@gmail.com";
  };

  const handleVisitCommunity = () => {
    window.open("https://your-community-link.com", "_blank");
  };

  return (
    <section className="animate-fade-in-up">
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant border hover-lift">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl object-cover flex-shrink-0"
          />
          <div className="flex-1 space-y-4 w-full">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Your Name Here</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span>Metro Manila, Philippines</span>
              </div>
              <p className="text-muted-foreground text-base md:text-lg">
                Software Engineer \ Content Creator
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className="w-full sm:flex-1"
                onClick={handleScheduleCall}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:flex-1"
                onClick={handleSendEmail}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:flex-1"
                onClick={handleVisitCommunity}
              >
                <Users className="w-4 h-4 mr-2" />
                Visit my community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
