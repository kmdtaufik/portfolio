import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IconBrandGithub,
  IconExternalLink,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
} from "@tabler/icons-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and optimized performance.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/kmdtaufik/portfolio",
    liveUrl: "https://portfolio-example.com",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory management, and order processing capabilities.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/kmdtaufik/ecommerce-dashboard",
    liveUrl: "https://dashboard-example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
    image: "/api/placeholder/400/250",
    technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    githubUrl: "https://github.com/kmdtaufik/task-manager",
    liveUrl: "https://taskmanager-example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Weather API", "Maps SDK"],
    githubUrl: "https://github.com/kmdtaufik/weather-app",
    liveUrl: "https://weather-example.com",
    featured: false,
  },
];

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "next.js":
      return <IconBrandNextjs className="w-4 h-4" />;
    case "react":
      return <IconBrandReact className="w-4 h-4" />;
    case "typescript":
      return <IconBrandTypescript className="w-4 h-4" />;
    case "tailwind css":
      return <IconBrandTailwind className="w-4 h-4" />;
    default:
      return null;
  }
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in
            full-stack development, UI/UX design, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Project Screenshot
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm">
                          <IconBrandGithub className="w-4 h-4" />
                        </Button>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm">
                          <IconExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-xs font-medium"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-blue-600 rounded-full"></div>
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm">
                          <IconBrandGithub className="w-4 h-4" />
                        </Button>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm">
                          <IconExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-card rounded-2xl border">
          <h3 className="text-2xl font-bold mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new opportunities and exciting
            projects.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="mailto:your.email@example.com">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/experience">View Experience</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
