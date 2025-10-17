import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Huawei Developer Expert",
    organization: "Huawei",
  },
  {
    title: "Generative AI Leader",
    organization: "Google",
  },
  {
    title: "Software Engineering",
    organization: "TestDome",
  },
  {
    title: "Generative AI Professional",
    organization: "Oracle",
  },
];

const CertificationsSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant border hover-lift">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Recent Certifications</h2>
          </div>
          <Button variant="ghost" size="sm" className="text-primary">
            View All →
          </Button>
        </div>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-smooth group"
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-smooth" />
              <div>
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {cert.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
