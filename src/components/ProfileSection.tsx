import { MapPin, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileSection = () => {
  return (
    <section className="animate-fade-in-up">
      <div className="bg-card rounded-2xl p-8 shadow-elegant border hover-lift">
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-6 ring-4 ring-primary/10"
          />
          <h1 className="text-3xl font-bold mb-2">Your Name Here</h1>
          <p className="text-muted-foreground text-lg mb-3">
            Software Engineer \ Content Creator
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <MapPin className="w-4 h-4" />
            <span>Metro Manila, Philippines</span>
          </div>
          <Badge className="bg-accent mb-4">
            DICT OpenGov Hackathon 2025 Champion
          </Badge>
        </div>

        <div className="flex flex-col gap-3">
          <Button className="w-full" size="lg">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a Call
          </Button>
          <Button variant="outline" className="w-full" size="lg">
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          <Button variant="secondary" className="w-full" size="lg">
            Join My Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
