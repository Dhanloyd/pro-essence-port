const AboutSection = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a full-stack software engineer specializing in developing solutions with JavaScript, Python, and PHP. I work on projects including modern web applications, mobile apps, SEO, digital marketing, and code tutorials.
          </p>
          <p>
            I've helped startups and MSMEs grow and streamline their processes through software solutions and built a community of developers sharing knowledge and mentorship.
          </p>
          <p>
            Recently, I've been diving into artificial intelligence — integrating AI tools and techniques into modern apps, developing AI-powered solutions, and leveraging generative AI to optimize workflows and deliver cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
