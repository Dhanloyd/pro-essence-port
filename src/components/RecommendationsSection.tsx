import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    text: "Intelligent software engineer. Bryl takes lead during software development and can handle and manage teams well.",
    author: "Ken Gorro",
    title: "Senior Developer at Fullscale",
  },
  {
    text: "Exceptional technical skills and leadership qualities. A true asset to any development team.",
    author: "Jane Smith",
    title: "CTO at TechCorp",
  },
  {
    text: "Outstanding problem solver with deep expertise in modern web technologies and AI integration.",
    author: "Michael Chen",
    title: "Engineering Manager at Innovate Labs",
  },
];

const RecommendationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRecommendation = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <div className="bg-card rounded-2xl p-8 shadow-elegant border hover-lift">
        <div className="flex items-center gap-3 mb-6">
          <Quote className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Recommendations</h2>
        </div>
        
        <div className="relative min-h-[200px]">
          <div className="space-y-4">
            <p className="text-muted-foreground italic leading-relaxed text-lg">
              "{recommendations[currentIndex].text}"
            </p>
            <div>
              <p className="font-semibold">{recommendations[currentIndex].author}</p>
              <p className="text-sm text-muted-foreground">
                {recommendations[currentIndex].title}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {recommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to recommendation ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevRecommendation}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextRecommendation}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
