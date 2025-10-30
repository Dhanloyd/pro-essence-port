import { MapPin, Calendar, Mail, BadgeCheck, ChevronDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileSection = () => {
  return (
    <section className="animate-fade-in-up">
      <div className="bg-card rounded-2xl p-8 shadow-elegant border hover-lift">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover flex-shrink-0"
          />
          <div className="flex-1 space-y-4 w-full">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">Your Name Here</h1>
                <BadgeCheck className="w-6 h-6 text-blue-500 fill-blue-500" />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span>Metro Manila, Philippines</span>
              </div>
              <p className="text-muted-foreground text-lg">
                Software Engineer \ Content Creator
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                🏆 DICT OpenGov Hackathon 2025 Champion
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="sm:flex-1">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg" className="sm:flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline" size="lg" className="sm:flex-1">
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
