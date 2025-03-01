import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Linkedin,
  Twitter,
} from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    image: "/team/sarah-chen.jpg",
    bio: "With over 20 years of experience in technology and digital transformation, Sarah leads our company's vision and strategy.",
    social: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    image: "/team/michael-rodriguez.jpg",
    bio: "A pioneer in AI and automation, Michael oversees our technical strategy and innovation initiatives.",
    social: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      twitter: "https://twitter.com/mrodriguez",
    },
  },
  {
    name: "Emily Watson",
    role: "Head of Digital Transformation",
    image: "/team/emily-watson.jpg",
    bio: "Emily brings 15 years of consulting experience, helping organizations navigate their digital journey.",
    social: {
      linkedin: "https://linkedin.com/in/emilywatson",
      twitter: "https://twitter.com/emilywatson",
    },
  },
  {
    name: "David Kim",
    role: "Chief Innovation Officer",
    image: "/team/david-kim.jpg",
    bio: "David leads our innovation lab, focusing on emerging technologies and future trends.",
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
      twitter: "https://twitter.com/davidkim",
    },
  },
];

export default function Team() {
  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">Our Leadership Team</h1>

          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Meet the visionaries and experts leading our mission to transform businesses 
            through innovative digital solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-lg p-6 border"
              >
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex gap-4">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about digital 
              transformation and innovation. Check out our current openings.
            </p>
            <Button asChild size="lg">
              <Link href="/careers">View Career Opportunities</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
