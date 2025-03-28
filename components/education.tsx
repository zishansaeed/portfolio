import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Education() {
  const educationData = [
    {
      degree: "Master of Science in Computing",
      institution: "University of Northampton (UoN)",
      location: "Northampton, United Kingdom",
      duration: "2024 - Present",
      achievements: [
        "Studied Databases and data management systems",
        "Completed Visual Object Software Development using Java",
        "Learned Mobile Device Software Development for cross-platform applications",
        "Mastered Internet Programming and web engineering techniques",
      ],
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of Engineering and Technology (UET) Taxila",
      location: "Taxila, Pakistan",
      duration: "2018 - 2022",
      achievements: [
        "Advanced coursework in Software Architecture Design, Requirements Engineering, and Software Verification & Validation",
        "Completed specialized courses in Web Engineering, Mobile Application Development, and Database Systems",
        "Developed expertise in Object-Oriented Programming, Data Structures & Algorithms, and Software Testing",
        "Gained practical experience with Machine Learning, Data Mining, and Artificial Intelligence",
        "Successfully completed a comprehensive Design Project in the final year",
      ],
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          EDUCATION
          <GraduationCap className="w-8 h-8 ml-2" />
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <Badge variant="outline" className="mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-1" />
                  {edu.duration}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {edu.institution}, {edu.location}
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Key Courses & Achievements
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
