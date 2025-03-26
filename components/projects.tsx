"use client";

import { useState } from "react";
import Image from "next/image";
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
  },
  {
    title: "Ebook Store",
    description:
      "EbookStore is an online store where you can buy books. EbookStore often offer a wide range of genres and categories, including fiction, non-fiction, educational, and self-help books.",
    image: "/images/project2.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    reverse: true,
  },
];

export function Projects() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

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
              <div className="flex-1 relative overflow-hidden rounded-lg h-[300px]">
                <div
                  className="relative w-full h-[1000px]"
                  style={{
                    transform:
                      hoveredImage === index
                        ? "translateY(-70%)"
                        : "translateY(0)",
                    transition: "transform 6s ease-in-out",
                  }}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4">
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
