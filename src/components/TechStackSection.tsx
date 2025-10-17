import { Badge } from "@/components/ui/badge";

const techStack = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  Backend: ["Node.js", "PHP", "Python", "Express"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL"],
  "AI/ML Tools": ["TensorFlow", "OpenAI API", "LangChain"],
  "DevOps & Cloud": ["Docker", "AWS", "Vercel"],
  Other: ["Git", "Supabase", "Firebase"],
};

const TechStackSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant border hover-lift">
        <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
        <div className="space-y-6">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 transition-smooth hover:bg-primary hover:text-primary-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
