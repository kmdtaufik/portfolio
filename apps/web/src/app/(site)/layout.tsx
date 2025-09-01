import Header from "./_components/header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      <main className="flex-grow w-full">{children}</main>
      <footer className="w-full border-t bg-muted/50">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Md Taufik Khan. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
