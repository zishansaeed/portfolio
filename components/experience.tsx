import { Briefcase, Calendar, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experienceData = [
    {
      position: "Software Engineer Intern",
      company: "Contour Software",
      duration: "June 2022 - September 2022",
      responsibilities: [
        "Developed and maintained web applications using the MERN stack.",
        "Collaborated with senior developers to implement new features and improve existing ones.",
        "Participated in code reviews and contributed to improving development practices.",
        "Gained hands-on experience with agile methodologies and project management tools.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          EXPERIENCE
          <Briefcase className="w-8 h-8 ml-2" />
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <Badge variant="outline" className="mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-1" />
                  {exp.duration}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4 flex items-center">
                <Building className="w-4 h-4 mr-2" />
                {exp.company}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-muted-foreground">
                    {resp}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
