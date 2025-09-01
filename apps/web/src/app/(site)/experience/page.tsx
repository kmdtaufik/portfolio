import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    startDate: "Jan 2023",
    endDate: "Present",
    description: [
      "Led development of 5+ web applications using Next.js, React, and Node.js, serving 10k+ users",
      "Architected and implemented microservices infrastructure, improving system performance by 40%",
      "Mentored junior developers and conducted code reviews, maintaining 95+ code quality standards",
      "Collaborated with cross-functional teams to deliver projects 20% ahead of schedule",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Digital Innovations Ltd",
    position: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description: [
      "Developed and maintained 8+ client projects using MERN stack technologies",
      "Implemented responsive designs and optimized applications for mobile and desktop",
      "Integrated third-party APIs and payment gateways, increasing client satisfaction by 30%",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "Bootstrap",
    ],
    current: false,
  },
  {
    id: 3,
    company: "StartupHub",
    position: "Frontend Developer",
    location: "Remote",
    type: "Contract",
    startDate: "Jan 2021",
    endDate: "May 2021",
    description: [
      "Built modern, responsive user interfaces for startup's main product",
      "Implemented component library and design system, reducing development time by 25%",
      "Collaborated with designers to ensure pixel-perfect implementation",
      "Optimized application performance and implemented SEO best practices",
    ],
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "JavaScript", "Figma"],
    current: false,
  },
  {
    id: 4,
    company: "FreelanceWork",
    position: "Web Developer",
    location: "Remote",
    type: "Freelance",
    startDate: "Mar 2020",
    endDate: "Dec 2020",
    description: [
      "Delivered 15+ websites and web applications for small to medium businesses",
      "Provided technical consultation and project planning for client requirements",
      "Maintained 100% client satisfaction rate with timely project delivery",
      "Specialized in WordPress, custom PHP applications, and static site generation",
    ],
    technologies: ["PHP", "WordPress", "JavaScript", "HTML/CSS", "MySQL"],
    current: false,
  },
];

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Experience & Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the technologies I've mastered along the
            way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Work Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={exp.id}
                  className="relative hover:shadow-lg transition-all duration-300"
                >
                  {exp.current && (
                    <div className="absolute -top-2 -right-2">
                      <span className="inline-flex items-center rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2.5 py-0.5 text-xs font-semibold">
                        Current
                      </span>
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-foreground">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-muted-foreground/20 px-2.5 py-0.5 text-xs font-semibold">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {exp.startDate} - {exp.endDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>

            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-muted-foreground/20 px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Education */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">
                      Bachelor of Computer Science
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      University of Dhaka
                    </p>
                    <p className="text-sm text-muted-foreground">2018 - 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm">
                      AWS Cloud Practitioner
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Amazon Web Services
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">
                      React Developer Certification
                    </h4>
                    <p className="text-xs text-muted-foreground">Meta</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">
                      Full Stack Web Development
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      freeCodeCamp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
