"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 h-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex-shrink-0">
        <Link href="/">
          <div className="relative mt-16 w-48 h-24">
            <Image
              src="/images/nav-logo.png"
              alt="Logo"
              width={192}
              height={96}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex absolute md:relative top-20 md:top-0 left-0 right-0 bg-background md:bg-transparent p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
          <li>
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary"
            >
              <Link href="/files/ZeeshanResume.pdf" target="_blank">
                Resume
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
