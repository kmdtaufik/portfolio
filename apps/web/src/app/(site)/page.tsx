import { buttonVariants } from "@/components/ui/button";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandTypescript,
  IconExternalLink,
  IconCode,
  IconServer,
  IconDeviceMobile,
  IconDatabase,
  IconBrush,
  IconBug,
  IconMail,
  IconPhone,
  IconMapPin,
  IconDownload,
  IconStar,
  IconUsers,
  IconClock,
  IconTrophy,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/avatar.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import easyLms from "@/public/easy-lms-mokup.png";

export default function Home() {
  const services = [
    {
      icon: IconCode,
      title: "Frontend Development",
      description:
        "Creating responsive, modern web applications with React, Next.js, and TypeScript",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: IconServer,
      title: "Backend Development",
      description:
        "Building scalable APIs and server-side applications with Node.js and modern frameworks",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    // {
    //   icon: IconDeviceMobile,
    //   title: "Mobile Development",
    //   description:
    //     "Developing cross-platform mobile apps with React Native and modern mobile technologies",
    //   technologies: ["React Native", "Expo", "Mobile UI/UX"],
    // },
    {
      icon: IconDatabase,
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries for better performance",
      technologies: ["MongoDB", "PostgreSQL", "Prisma"],
    },
    {
      icon: IconBrush,
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces and seamless user experiences",
      technologies: ["Figma", "Responsive Design"],
    },
    {
      icon: IconBug,
      title: "Testing & Debugging",
      description:
        "Ensuring code quality through comprehensive testing and debugging practices",
      technologies: [],
    },
  ];

  const stats = [
    {
      icon: IconTrophy,
      number: "3+",
      label: "Projects Completed",
      description: "Successfully delivered projects",
    },
    // {
    //   icon: IconUsers,
    //   number: "30+",
    //   label: "Happy Clients",
    //   description: "Satisfied customers worldwide",
    // },
    {
      icon: IconClock,
      number: "1",
      label: "Years Experience",
      description: "In web development",
    },
    {
      icon: IconCode,
      number: "12+",
      label: "Technologies",
      description: "Mastered and actively using",
    },
  ];

  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "CEO, TechStart",
  //     avatar: "/testimonial-1.jpg",
  //     content:
  //       "Taufik delivered an exceptional website for our startup. His attention to detail and technical expertise exceeded our expectations.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Product Manager, InnovateCorp",
  //     avatar: "/testimonial-2.jpg",
  //     content:
  //       "Working with Taufik was a pleasure. He understood our requirements perfectly and delivered a robust solution on time.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Emily Rodriguez",
  //     role: "Founder, DesignHub",
  //     avatar: "/testimonial-3.jpg",
  //     content:
  //       "Taufik's full-stack development skills helped us build a scalable platform. Highly recommended for any complex project.",
  //     rating: 5,
  //   },
  // ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Text Area */}
            <div className="flex-1 max-w-lg space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Full Stack Developer 👋
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi, I'm{" "}
                  <span className="font-semibold text-foreground">
                    Md Taufik Khan
                  </span>
                  . A passionate Full stack developer from{" "}
                  <span className="font-semibold text-foreground">
                    Dhaka, Bangladesh
                  </span>{" "}
                  📍
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center lg:justify-start">
                <Link
                  href="https://www.linkedin.com/in/khanmdtaufik/"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin className="size-5 mr-2" />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/kmdtaufik"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub className="size-5 mr-2" />
                  GitHub
                </Link>
                <Link
                  href="/"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconDownload className="size-5 mr-2" />
                  Resume
                </Link>
              </div>
            </div>

            {/* Image Area */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <Image
                  src={avatar}
                  alt="Taufik - Full Stack Developer"
                  width={320}
                  height={320}
                  className="relative rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 aspect-square object-cover border-4 border-background hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <stat.icon className="size-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Tech Stack
              </h2>
              <p className="text-muted-foreground">Technologies I work with</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-card rounded-2xl border shadow-lg">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-background hover:bg-muted transition-colors">
                <IconBrandNextjs className="size-8 text-foreground" />
                <span className="font-medium text-sm">Next.js</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-background hover:bg-muted transition-colors">
                <IconBrandTailwind className="size-8 text-cyan-500" />
                <span className="font-medium text-sm">Tailwind</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-background hover:bg-muted transition-colors">
                <IconBrandMongodb className="size-8 text-green-500" />
                <span className="font-medium text-sm">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-background hover:bg-muted transition-colors">
                <IconBrandNodejs className="size-8 text-green-600" />
                <span className="font-medium text-sm">Node.js</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-background hover:bg-muted transition-colors">
                <IconBrandTypescript className="size-8 text-blue-600" />
                <span className="font-medium text-sm">TypeScript</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-background hover:bg-muted transition-colors">
                <div className="size-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-full h-full"
                  >
                    <path
                      fill="#f27107"
                      d="M128 96L162.9 491.8L319.5 544L477.1 491.8L512 96L128 96zM436.2 223.9L252.4 223.9L256.5 273.3L432.1 273.3L418.5 421.7L320.6 448.7L320.6 449L319.5 449L220.8 421.7L214.8 345.9L262.5 345.9L266 384L319.5 398.5L373.2 384L379.2 321.8L212.3 321.8L199.5 176.2L440.6 176.2L436.2 223.9z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-sm">HTML5</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-background hover:bg-muted transition-colors">
                <div className="size-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-full h-full"
                  >
                    <path
                      fill="#2da2fb"
                      d="M128 96L162.9 491.8L320 544L477.1 491.8L512 96L128 96zM441.1 176L436.3 223.3L321 272.6L320.7 272.7L432.2 272.7L419.4 419.3L321.2 448L222.4 418.8L216 344.9L264.9 344.9L268.1 383.2L320.7 396.5L375.4 381.1L379.1 319.5L212.8 319L212.8 318.9L212.6 319L209 272.7L321.1 226L327.6 223.3L204.7 223.3L198.9 176L441.1 176z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-sm">CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">Services</h2>
              <p className="text-muted-foreground">What I can do for you</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/20"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <service.icon className="size-6" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted rounded text-xs"
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
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border hover:border-blue-200 dark:hover:border-blue-800">
                <Image
                  src={easyLms}
                  alt="Easy LMS."
                  width={600}
                  height={400}
                  className="object-cover aspect-video rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg">
                    Easy LMS.{" "}
                  </CardTitle>
                  <div className="flex gap-1">
                    <Link
                      href="https://github.com/kmdtaufik/easy-lms-frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-1 hover:bg-muted rounded">
                        <IconBrandGithub className="size-4" />
                      </button>
                    </Link>
                    <Link
                      href="https://easy-lms-frontend.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-1 hover:bg-muted rounded">
                        <IconExternalLink className="size-4" />
                      </button>
                    </Link>
                  </div>
                  <CardDescription>
                    A modern learning management system with course creation and
                    student tracking features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-muted rounded text-xs">
                      Next.js
                    </span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">
                      Tailwind
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link
                href="/projects"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                })}
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Testimonials
              </h2>
              <p className="text-muted-foreground">What clients say about me</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <IconStar
                          key={i}
                          className="size-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Get In Touch
              </h2>
              <p className="text-muted-foreground">
                Ready to work together? Let's discuss your project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <IconMail className="size-5 text-primary" />
                      <span>khanmdtaufik@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconPhone className="size-5 text-primary" />
                      <span>+880 1234567890</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconMapPin className="size-5 text-primary" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold mb-3">Follow Me</h4>
                    <div className="flex gap-3">
                      <Link
                        href="https://www.linkedin.com/in/khanmdtaufik/"
                        className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconBrandLinkedin className="size-5" />
                      </Link>
                      <Link
                        href="https://github.com/kmdtaufik"
                        className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconBrandGithub className="size-5" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h3 className="text-lg font-semibold mb-4">Send Message</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <textarea
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                      Send Message
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
