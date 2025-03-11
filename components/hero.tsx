"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-medium text-muted-foreground">
              Hi, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold">Zeeshan Saeed</h1>
            <div className="text-xl md:text-2xl font-medium">
              and I'm{" "}
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Open Source Contributor",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-primary"
              />
            </div>
            <p className="text-lg text-muted-foreground">
              I'm a software engineer who loves working with web technologies. I
              have experience building web applications using JavaScript,
              ReactJS, NodeJS, and other cool tools.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="https://github.com/zeeshnsaeed" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View on Github
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://www.linkedin.com/in/zeeshnsaeed/"
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  View on LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/hero.png"
                alt="Zeeshan Saeed"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
