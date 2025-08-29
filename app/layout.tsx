import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hackpocalypse",
  description: "Survive the zombie outbreak with code — Hackathon showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
