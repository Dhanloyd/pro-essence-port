import { MapPin, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileSection = () => {
  return (
    <section className="animate-fade-in-up">
      <div className="bg-card rounded-2xl p-8 shadow-elegant border hover-lift">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/10 flex-shrink-0"
          />
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Name Here</h1>
              <p className="text-muted-foreground text-lg mb-2">
                Software Engineer \ Content Creator
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Metro Manila, Philippines</span>
              </div>
            </div>
            <Badge className="bg-accent inline-block">
              DICT OpenGov Hackathon 2025 Champion
            </Badge>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button variant="secondary" size="lg">
                Join My Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
