import { BookOpen } from "lucide-react";

const BeyondCodingSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Beyond Coding</h2>
        </div>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture.
          </p>
          <p>
            I share my knowledge through content creation and community building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondCodingSection;
