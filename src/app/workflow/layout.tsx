import { Logo } from "@/components/Logo";
import { ToggleThemeMode } from "@/components/ToggleThemeMode";
import { Separator } from "@/components/ui/separator";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      {children}

      <Separator />
      <footer className="flex justify-between items-center p-2">
        <Logo iconSize={16} fontSize="text-xl" />
        <ToggleThemeMode />
      </footer>
    </div>
  );
};

export default Layout;
