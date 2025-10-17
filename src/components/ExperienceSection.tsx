const experiences = [
  {
    title: "Principal AI Engineer",
    company: "Standard Chartered",
    year: "2025",
    description: "Leading AI initiatives and developing enterprise AI solutions.",
  },
  {
    title: "AI Ops Engineer",
    company: "Centre of Excellence for GenAI, Cambridge",
    year: "2025",
    description: "Implementing generative AI operations and workflows.",
  },
  {
    title: "Senior Full-Stack Developer",
    company: "Core Technology, Cambridge",
    year: "2024",
    description: "Building scalable web applications and leading development teams.",
  },
  {
    title: "Software Engineering Lead",
    company: "PocketDevs",
    year: "2022",
    description: "Managing software development projects and mentoring developers.",
  },
  {
    title: "Lead Application Developer",
    company: "Bluewind Asia",
    year: "2021",
    description: "Developing enterprise applications and optimizing systems.",
  },
  {
    title: "Software Engineer",
    company: "GCM",
    year: "2020",
    description: "Full-stack development and system architecture.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant border hover-lift">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.year}</span>
                </div>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
