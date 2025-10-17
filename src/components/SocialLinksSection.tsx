import { Github, Linkedin, Instagram, Link as LinkIcon } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourprofile",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/yourusername",
  },
];

const SocialLinksSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
        <div className="flex items-center gap-3 mb-6">
          <LinkIcon className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Social Links</h2>
        </div>
        <div className="space-y-3">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium group-hover:text-primary transition-smooth">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
