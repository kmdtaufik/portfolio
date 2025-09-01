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
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
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

        {/* Tech Stack Section */}
        <div className="mt-16 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Tech Stack</h2>
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

        {/* Featured Projects Section */}
        <div className="mt-20 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
                  A modern, responsive portfolio website built with Next.js and
                  Tailwind CSS
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

            {/* <Card className="group hover:shadow-xl transition-all duration-300 border hover:border-blue-200 dark:hover:border-blue-800">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-t-lg flex items-center justify-center">
                <IconBrandNodejs className="size-12 text-muted-foreground" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  E-Commerce API
                  <div className="flex gap-1">
                    <Link
                      href="https://github.com/kmdtaufik"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-1 hover:bg-muted rounded">
                        <IconBrandGithub className="size-4" />
                      </button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <button className="p-1 hover:bg-muted rounded">
                        <IconExternalLink className="size-4" />
                      </button>
                    </Link>
                  </div>
                </CardTitle>
                <CardDescription>
                  RESTful API for e-commerce platform with authentication and
                  payment processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-muted rounded text-xs">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-muted rounded text-xs">
                    Express
                  </span>
                  <span className="px-2 py-1 bg-muted rounded text-xs">
                    MongoDB
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border hover:border-blue-200 dark:hover:border-blue-800 md:col-span-2 lg:col-span-1">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-t-lg flex items-center justify-center">
                <IconBrandMongodb className="size-12 text-muted-foreground" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  Task Manager
                  <div className="flex gap-1">
                    <Link
                      href="https://github.com/kmdtaufik"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-1 hover:bg-muted rounded">
                        <IconBrandGithub className="size-4" />
                      </button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <button className="p-1 hover:bg-muted rounded">
                        <IconExternalLink className="size-4" />
                      </button>
                    </Link>
                  </div>
                </CardTitle>
                <CardDescription>
                  Collaborative task management app with real-time updates and
                  team features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-muted rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-muted rounded text-xs">
                    Socket.io
                  </span>
                  <span className="px-2 py-1 bg-muted rounded text-xs">
                    Prisma
                  </span>
                </div>
              </CardContent>
            </Card> */}
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
    </div>
  );
}
