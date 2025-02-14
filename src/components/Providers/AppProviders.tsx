"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="sytem" enableSystem>
      {children}
    </ThemeProvider>
  );
};
