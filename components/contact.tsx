import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Phone, Linkedin, Mail, MapPin, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+44 7449 625390",
    href: "tel:+447449625390",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "zishansaeed",
    href: "https://www.linkedin.com/in/zishansaeed/",
  },
  {
    icon: Mail,
    title: "Email",
    value: "zsaeed830@gmail.com",
    href: "mailto:zsaeed830@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Northampton, UK",
    href: "#",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          CONTACT ME
          <MessageSquare className="w-8 h-8 ml-2" />
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-lg text-muted-foreground mb-8">
            Feel free to reach out to me through any of the following channels.
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block"
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
