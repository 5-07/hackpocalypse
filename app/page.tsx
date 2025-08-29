"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Fonts
import { Press_Start_2P, VT323, Orbitron } from "next/font/google";

const arcade = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const terminal = VT323({ weight: "400", subsets: ["latin"] });
const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

// Workshops
const workshops = [
  {
    title: "Demo Project Workshop",
    desc: "A practical walkthrough on building a hackathon-ready project, helping participants understand structure, flow, and execution.",
    images: ["/images/_DSC3321.webp"],
  },
  {
    title: "Pygame",
    desc: "A fun coding session where students built a simple game using Python’s Pygame library, introducing the basics of game development.",
    images: ["/images/_DSC3306.webp"],
  },
  {
    title: "GitHub",
    desc: "Guided participants on using Git and GitHub for version control, collaboration, and effective project management during the hackathon.",
    images: ["/images/IMG_3381.webp"],
  },
  {
    title: "AI Tools",
    desc: "Introduced participants to modern AI-powered tools that can accelerate development and add smart features to their projects.",
    images: ["/images/_DSC3305.webp"],
  },
  {
    title: "Presentation",
    desc: "Focused on teaching participants how to pitch their projects effectively, covering storytelling, design, and confident delivery.",
    images: ["/images/IMG_3397jpg.jpg"],
  },
];

// Projects
const projects = [
  {
    title: "Zombie Tracker",
    desc: "The world as humanity knew it has changed. A mysterious breach appears, opening the gates of hell, allowing for tenacious zombies to wreak havoc in our world...",
    link: "https://drive.google.com/file/d/1QQx3d1wc-A49IZ5uCtA6_w905cNhZoq7/view",
    images: ["/images/a.jpg"],
  },
  {
    title: "Apocalypse Situation Analysis",
    desc: "In an apocalypse, conventional news and communication channels fail. This project delivers real-time analysis of the crisis...",
    link: "https://drive.google.com/file/d/1otofzxCEsenn2qN6bRIwuyfkrYMkYHOm/view",
    images: ["/images/b.jpg"],
  },
  {
    title: "404 brain not found",
    desc: "A survival dashboard that helps survivors monitor scarce resources like food, water, and fuel.",
    link: "https://www.figma.com/make/QppJoYE34mfzTlfHZ8tAGh",
    images: ["/images/c.jpg"],
  },
  {
    title: "Cyborg and Beast Boy",
    desc: "A mapping and alert app that identifies potential shelters, safe zones, and danger hotspots.",
    link: "#",
    images: ["/placeholder.png"],
  },
  {
    title: "Rebooters",
    desc: "We're creating a game where you collect materials to create a vaccine all while trying to avoid zombies. The game will end when you have successfully created a vaccine or get caught by the zombie more than 3 times. In the end, there will be a leaderboard that will display all player's results with the best results on top.",
    link: "https://app--debug-the-dead-bd717387.base44.app/",
    images: ["/placeholder.png"],
  },
  {
    title: "Survivor",
    desc: "An AI-powered assistant that guides survivors through critical decisions—whether it’s rationing supplies, defending a camp, or planning escape routes—based on coded survival logic.",
    link: "https://afterglow.lovable.app/",
    images: ["/placeholder.png"],
  },
];

export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-green-400">
          {/* CRT + Neon Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,0,0.25)_1px,transparent_1px)] [background-size:20px_20px] animate-pulse opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.4)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30 bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px]" />


      {/* Floating Pixel Elements */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400 text-xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {i % 2 === 0 ? "✦" : i % 3 === 0 ? "➤" : "◉"}
        </motion.div>
      ))}

      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl backdrop-blur-xl bg-black/70 border border-green-400/40 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
        <nav
          className={`${arcade.className} flex gap-5 sm:gap-8 text-xs sm:text-sm text-green-400 justify-center`}
        >
          <Link href="#workshops">WORKSHOPS</Link>
          <Link href="#projects">PROJECTS</Link>
          <Link href="#winners">WINNERS</Link>
          <Link href="#team">TEAM</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center space-y-6 px-4">
        <h1
          className={`${arcade.className} text-4xl sm:text-6xl md:text-7xl text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]`}
        >
          HACKPOCALYPSE
        </h1>
        <p
          className={`${terminal.className} text-base sm:text-lg md:text-xl text-green-400 max-w-xl leading-relaxed`}
        >
          <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-green-400 pr-2">
            A 2-day survival hackathon. Code to outpace the swarm.
          </span>
        </p>
      </section>

      {/* Workshops */}
      <section
        id="workshops"
        className="relative z-10 py-24 px-6 max-w-6xl mx-auto text-center"
      >
        <h2
          className={`${orbitron.className} text-3xl sm:text-4xl text-purple-400 mb-8`}
        >
          Workshops
        </h2>
        <p className="text-green-300 max-w-2xl mx-auto mb-12">
          Guided sessions to level up your hacking skills. Learn from experts in
          AI, security, and game dev while surviving the chaos.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((ws, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-black/60 border border-green-400/20 shadow-[0_0_12px_rgba(34,197,94,0.3)]"
            >
              <Image
                src={ws.images[0]}
                alt={ws.title}
                width={400}
                height={240}
                className="rounded mb-3 border border-purple-400/40 object-cover"
              />
              <h3
                className={`${arcade.className} text-lg text-purple-300 mb-2`}
              >
                {ws.title}
              </h3>
              <p className={`${terminal.className} text-sm text-green-200`}>
                {ws.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 py-24 px-6 max-w-6xl mx-auto text-center"
      >
        <h2
          className={`${orbitron.className} text-3xl sm:text-4xl text-purple-400 mb-8`}
        >
          Projects
        </h2>
        <p className="text-green-300 max-w-2xl mx-auto mb-12">
          Teams built wild prototypes to fight the outbreak. From AI-driven
          defense systems to blockchain-based survival credits.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-black/60 border border-purple-400/30 shadow-[0_0_12px_rgba(168,85,247,0.4)] block"
            >
              <Image
                src={proj.images[0]}
                alt={proj.title}
                width={400}
                height={240}
                className="rounded mb-3 border border-green-400/40 object-cover"
              />
              <h3
                className={`${arcade.className} text-lg text-green-300 mb-2`}
              >
                {proj.title}
              </h3>
              <p className={`${terminal.className} text-sm text-green-200`}>
                {proj.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Winners */}
      <section
        id="winners"
        className="relative z-10 py-24 px-6 max-w-6xl mx-auto text-center"
      >
        <h2
          className={`${orbitron.className} text-3xl sm:text-4xl text-pink-400 mb-8`}
        >
          Winners
        </h2>
        <p className="text-green-300 max-w-2xl mx-auto mb-12">
          The bravest hackers who pushed through and delivered
          game-changing projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["/images/IMG_3661.webp", "/images/IMG_3665.webp", "/images/IMG_3667.webp"].map(
            (src, i) => (
              <div key={i} className="aspect-[4/3] w-full relative">
                <Image
                  src={src}
                  alt={`Winner ${i + 1}`}
                  fill
                  className="rounded border-2 border-pink-400 object-cover"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="relative z-10 py-24 px-6 max-w-4xl mx-auto text-center"
      >
        <h2
          className={`${orbitron.className} text-3xl sm:text-4xl text-purple-400 mb-8`}
        >
          Meet the Organizers
        </h2>
        <p className="text-green-300 max-w-2xl mx-auto mb-12">
          The crew behind Hackpocalypse — ensuring the undead stay outside while
          you hack inside.
        </p>
        <a
          href="https://cedarcodes.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${arcade.className} inline-flex items-center justify-center bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition shadow-[0_0_12px_rgba(0,255,0,0.6)]`}
        >
          Visit Cedar Codes Society →
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 px-6 text-center border-t border-green-400/20 bg-black/70">
        <p className={`${terminal.className} text-green-400`}>
          © 2025 Hackpocalypse.Cedar Codes
        </p>
      </footer>
    </main>
  );
}
