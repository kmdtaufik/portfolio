import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  IconBrandNextjs,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { Link } from "lucide-react";

export function ProjectCard() {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border hover:border-blue-200 dark:hover:border-blue-800">
      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-lg flex items-center justify-center">
        <IconBrandNextjs className="size-12 text-muted-foreground" />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg">
          Portfolio Website
          <div className="flex gap-1">
            <Link href="https://github.com/kmdtaufik/portfolio" target="_blank">
              <button className="p-1 hover:bg-muted rounded">
                <IconBrandGithub className="size-4" />
              </button>
            </Link>
            <Link href="#" target="_blank">
              <button className="p-1 hover:bg-muted rounded">
                <IconExternalLink className="size-4" />
              </button>
            </Link>
          </div>
        </CardTitle>
        <CardDescription>
          A modern, responsive portfolio website built with Next.js and Tailwind
          CSS
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          <span className="px-2 py-1 bg-muted rounded text-xs">Next.js</span>
          <span className="px-2 py-1 bg-muted rounded text-xs">TypeScript</span>
          <span className="px-2 py-1 bg-muted rounded text-xs">Tailwind</span>
        </div>
      </CardContent>
    </Card>
  );
}
