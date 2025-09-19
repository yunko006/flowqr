import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

import { ThemeProvider } from "@/components/theme-provider";
import { NavDashboard } from "@/components/nav-dashboard";

export const metadata: Metadata = {
  title: "FlowQR",
  description: "Transformez vos QR codes en workflows",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavDashboard />
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
