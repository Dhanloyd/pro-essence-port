import { Award, Users, Youtube, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "DICT OpenGov Hackathon 2025 Champion",
    description: "Won the national government hackathon competition",
  },
  {
    icon: Award,
    title: "PH100 Innovators List",
    description: "Recognized as one of the top 100 innovators in the Philippines",
  },
  {
    icon: Users,
    title: "Built a Community of 200,000+ Developers",
    description: "Created and grew a thriving developer community",
  },
  {
    icon: Youtube,
    title: "Content Creator",
    description: "Sharing knowledge through YouTube and LinkedIn",
  },
];

const AchievementsSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
        <h2 className="text-2xl font-bold mb-6">Achievements</h2>
        <div className="grid gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
