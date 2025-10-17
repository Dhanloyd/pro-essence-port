import { Users, ExternalLink } from "lucide-react";

const memberships = [
  {
    name: "Analytics & Artificial Intelligence Association of the Philippines (AAAP)",
    url: "https://aaap.ph",
  },
  {
    name: "Philippine Software Industry Association",
    url: "https://psia.org.ph",
  },
  {
    name: "Google Developer Groups Philippines",
    url: "https://gdg.community.dev",
  },
];

const MembershipsSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">A member of</h2>
        </div>
        <div className="space-y-3">
          {memberships.map((membership, index) => (
            <a
              key={index}
              href={membership.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary/50 transition-smooth group"
            >
              <span className="text-sm group-hover:text-primary transition-smooth">
                {membership.name}
              </span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipsSection;
