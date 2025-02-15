"use client";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { DesktopSidebar } from "@/components/Sidebar";
import { BreadcrumbHeader } from "@/components/BreadcrumbHeader";
import { ToggleThemeMode } from "@/components/ToggleThemeMode";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen ">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 p-y container h-[50px]">
          <BreadcrumbHeader />
          <div className="flex items-center space-x-3">
            <ToggleThemeMode />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex container py-6 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
