import { Logo } from "@/components/Logo";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <Logo />
      {children}
    </div>
  );
}
