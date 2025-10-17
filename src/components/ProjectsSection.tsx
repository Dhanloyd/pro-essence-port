import { ExternalLink, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "CodeCred",
    description: "Online certifications for programmers",
    url: "codecred.dev",
  },
  {
    name: "BASE404",
    description: "Online coding bootcamp",
    url: "base-404.com",
  },
  {
    name: "DIIN.PH",
    description: "AI-powered wardrobe assistant",
    url: "diin.ph",
  },
  {
    name: "DYNAMIS Workout Tracker",
    description: "AI-powered workout tracker",
    url: "dynamis-app.online",
  },
];

const ProjectsSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant border hover-lift">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Recent Projects</h2>
          </div>
          <Button variant="ghost" size="sm" className="text-primary">
            View All →
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border rounded-xl p-5 hover-lift bg-background/50"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {project.description}
              </p>
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                {project.url}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
