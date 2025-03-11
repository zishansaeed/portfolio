import Image from "next/image";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          ABOUT ME
          <User className="w-8 h-8 ml-2" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-TOVa2xwf4hyiPy9bikOfaqyFRmAZ3s.png"
                alt="Developer illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm a Software Engineer with a degree from the prestigious{" "}
              <span className="font-semibold">
                University of Engineering and Technology (UET) Taxila
              </span>
              . I'm a skilled developer who loves tackling challenges and
              finding creative solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              I completed a MERN stack internship from Contour Software.{" "}
              <span className="font-semibold">Contour Software</span> is a
              subsidiary of Constellation Software, and a rapidly growing global
              software development company with offices in Pakistan and clients
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
