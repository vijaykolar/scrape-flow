import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { DesktopSidebar } from "@/components/Sidebar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen ">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 p-y container h-[50px]">
          Scrape Flow
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
