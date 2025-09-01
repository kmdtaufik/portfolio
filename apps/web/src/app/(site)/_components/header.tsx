"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../../../components/mode-toggle";
import { cn } from "../../../lib/utils";
import MobileMenu from "../../../components/user-menu";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    // { to: "/experience", label: "Experience" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-transparent/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-opacity"
          >
            {/* <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              TK
            </div> */}
            <span className="hidden sm:inline-block">khanmdtaufik</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  href={to}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground/80 relative",
                    isActive ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {label}
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <ModeToggle />
            {/* Mobile menu button */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
