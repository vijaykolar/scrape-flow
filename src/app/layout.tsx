import { AppProviders } from "@/components/Providers/AppProviders";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl="/sign-in"
      appearance={{
        elements: {
          formButtonPrimary: "bg-primary hover:bg-primary/80 !shadow-none ",
          // buttonArrowIcon
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "font-sans  min-h-screen antialiased",
            openSans.variable
          )}
        >
          <AppProviders>{children}</AppProviders>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
