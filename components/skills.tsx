"use client";
import { Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: "🌐",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "SASS",
        "Redux",
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "RESTful APIs"],
    },
    {
      category: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools & Others",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Docker",
        "CI/CD",
        "Agile/Scrum",
      ],
    },
    {
      category: "Soft Skills",
      icon: "🤝",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Time Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          SKILLS
          <Code2 className="w-8 h-8 ml-2" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-sm py-1 px-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
