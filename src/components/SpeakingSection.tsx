import { Mic, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpeakingSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant border hover-lift">
        <div className="flex items-center gap-3 mb-6">
          <Mic className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Speaking</h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Available for speaking at events about software development and emerging technologies.
          </p>
          <Button className="w-full" size="lg">
            <Calendar className="w-4 h-4 mr-2" />
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
