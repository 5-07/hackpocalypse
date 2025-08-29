import type { Metadata } from "next";
import { Press_Start_2P, VT323, Orbitron } from "next/font/google";
import "./globals.css";

// Google Fonts (loaded with next/font for performance)
const arcade = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-arcade",
});
const terminal = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

// Metadata for SEO / social
export const metadata: Metadata = {
  title: "Hackpocalypse",
  description:
    "Hackpocalypse — a survival-themed hackathon. Projects, workshops, winners, and organizers. Hosted by Cedar Codes Society.",
  keywords: ["Hackathon", "Hackpocalypse", "Cedar Codes", "Projects", "Workshops"],
  authors: [{ name: "Cedar Codes Society" }],
  openGraph: {
    title: "Hackpocalypse",
    description:
      "A 2-day survival hackathon. Code to outpace the swarm. View projects, workshops, and winners.",
    url: "https://your-vercel-domain.vercel.app",
    siteName: "Hackpocalypse",
    images: [
      {
        url: "/images/og-preview.png", // add this file to public/images
        width: 1200,
        height: 630,
        alt: "Hackpocalypse Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackpocalypse",
    description: "A 2-day survival hackathon. Code to outpace the swarm.",
    images: ["/images/og-preview.png"],
  },
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${arcade.variable} ${terminal.variable} ${orbitron.variable}`}
    >
      <body className="antialiased bg-black text-green-400">{children}</body>
    </html>
  );
}
