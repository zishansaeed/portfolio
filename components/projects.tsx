"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Eatsy",
    description:
      "Eatsy is a modern food delivery platform that offers a diverse range of delicious and healthy meal options. Built with a focus on user experience, it features an intuitive interface for browsing recipes, ordering food, and tracking deliveries.",
    image: "/images/project1.png",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    reverse: false,
    id: "project1",
  },
  {
    title: "Ebook Store",
    description:
      "EbookStore is an online store where you can buy books. EbookStore often offer a wide range of genres and categories, including fiction, non-fiction, educational, and self-help books.",
    image: "/images/project2.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    reverse: true,
    id: "project2",
  },
];

export function Projects() {
  // Use refs instead of state for direct DOM manipulation similar to the original code
  const project1Ref = useRef<HTMLImageElement>(null);
  const project2Ref = useRef<HTMLImageElement>(null);

  // Handle mouse events for project 1
  const handleMouseEnterProject1 = () => {
    if (project1Ref.current) {
      project1Ref.current.style.transform = "translateY(-70%)";
      project1Ref.current.style.transition = "transform 6s ease-in-out";
    }
  };

  const handleMouseLeaveProject1 = () => {
    if (project1Ref.current) {
      project1Ref.current.style.transform = "translateY(0%)";
      project1Ref.current.style.transition = "transform 6s ease-in-out";
    }
  };

  // Handle mouse events for project 2
  const handleMouseEnterProject2 = () => {
    if (project2Ref.current) {
      project2Ref.current.style.transform = "translateY(-75.5%)";
      project2Ref.current.style.transition = "transform 6s ease-in-out";
    }
  };

  const handleMouseLeaveProject2 = () => {
    if (project2Ref.current) {
      project2Ref.current.style.transform = "translateY(0%)";
      project2Ref.current.style.transition = "transform 6s ease-in-out";
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          PROJECTS
          <FolderGit2 className="w-8 h-8 ml-2" />
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`p-6 flex flex-col ${
                project.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              <div
                className="w-full md:w-1/2 relative overflow-hidden rounded-lg"
                style={{ height: "300px" }}
                onMouseEnter={
                  index === 0
                    ? handleMouseEnterProject1
                    : handleMouseEnterProject2
                }
                onMouseLeave={
                  index === 0
                    ? handleMouseLeaveProject1
                    : handleMouseLeaveProject2
                }
              >
                <div className="w-full h-auto" style={{ position: "relative" }}>
                  <img
                    ref={index === 0 ? project1Ref : project2Ref}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      objectPosition: "top",
                      transform: "translateY(0%)",
                      transition: "transform 6s ease-in-out",
                    }}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
