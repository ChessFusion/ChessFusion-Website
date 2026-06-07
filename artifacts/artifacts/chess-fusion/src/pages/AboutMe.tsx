import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Code2, Gamepad2, Layers, Trophy } from "lucide-react";
import dreamarkLogoPath from "@assets/dreamark-logo_1780824425079.png";

const skills = [
  { label: "Game Design", icon: Gamepad2, desc: "Full chess rule engine with custom Fusion mechanic, ranked ELO system, and clan war framework." },
  { label: "System Architecture", icon: Layers, desc: "Firebase Realtime Database for live multiplayer, Firestore for persistent data, minimax AI with ELO calibration." },
  { label: "Mobile Development", icon: Code2, desc: "Built natively for Android using modern mobile development practices, optimized for performance and responsiveness." },
  { label: "Competitive Design", icon: Trophy, desc: "12-tier ranked ladder, blunder simulation for AI, and integrity guard preventing ELO manipulation." },
];

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors font-sans"
            data-testid="link-back-home"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>

        <div className="mb-14 pb-8 border-b border-primary/10">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">The Architect</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white">About Me</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6">
            <div className="aspect-square w-full max-w-sm mx-auto md:mx-0 border border-primary/20 bg-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="absolute top-0 left-0 w-px h-full bg-primary/10" />
              <div className="absolute top-0 right-0 w-px h-full bg-primary/10" />

              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-20 h-20 rounded-full border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
                  <span className="text-3xl text-primary/40 font-display">S</span>
                </div>
                <p className="text-xs tracking-[0.3em] uppercase text-primary/40 font-sans text-center">
                  Photo Coming Soon
                </p>
                <p className="text-xs text-white/20 font-sans text-center leading-relaxed">
                  Sayed Ali Shah — Founder, DreamArk Studio
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <img
                src={dreamarkLogoPath}
                alt="DreamArk Studio"
                className="h-12 object-contain opacity-60"
                data-testid="img-dreamark-logo"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">Sayed Ali Shah</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Founder", "Lead Developer", "Game Designer", "System Architect"].map((role) => (
                  <span
                    key={role}
                    className="text-xs px-3 py-1 border border-primary/20 text-primary/70 tracking-wider font-sans"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-sm text-white/55 leading-relaxed font-sans">
              <p>
                I am the founder and sole developer behind DreamArk Studio — an independent game studio dedicated to crafting premium, intelligent experiences that push the boundaries of mobile strategy gaming.
              </p>
              <p>
                Chess Fusion — Imperial Edition is my flagship project: a mobile strategy game built from the ground up with obsessive attention to strategic depth, competitive integrity, and visual prestige. From the custom Fusion mechanic that reshapes classical chess, to the 12-tier ranked ladder and real-time clan wars — every system was designed, architected, and coded by me.
              </p>
              <p>
                My goal with DreamArk Studio is to prove that a single developer with a clear vision can create a product that rivals studio-level quality — not by cutting corners, but by mastering every layer of the stack.
              </p>
            </div>

            <div className="border border-primary/10 p-5 bg-card">
              <p className="text-primary/50 text-xs tracking-[0.3em] uppercase font-sans mb-2">Studio</p>
              <p className="text-white/70 text-sm font-serif">DreamArk Studio</p>
              <p className="text-white/35 text-xs font-sans mt-1">Phulji, Sindh, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary/40" />
            <span className="text-xs tracking-[0.4em] uppercase text-primary font-sans">What I Built</span>
            <div className="w-12 h-px bg-primary/40" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="p-6 border border-primary/10 bg-card hover:border-primary/30 transition-all duration-400 relative group"
                data-testid={`card-skill-${skill.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="absolute top-0 left-0 w-8 h-0.5 bg-gold-gradient" />
                <skill.icon size={22} className="text-primary/50 mb-4 group-hover:text-primary transition-colors" />
                <h3 className="font-serif text-white mb-3">{skill.label}</h3>
                <p className="text-sm text-white/45 leading-relaxed font-sans">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-primary/15 bg-card p-10 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Contact</p>
          <h3 className="text-2xl font-display font-bold text-white mb-6">Get In Touch</h3>
          <div className="space-y-3 text-sm font-sans">
            <p>
              <span className="text-white/40">Game Support:</span>{" "}
              <a
                href="mailto:support.chessfusion@gmail.com"
                className="text-primary/80 hover:text-primary transition-colors"
                data-testid="link-email-support"
              >
                support.chessfusion@gmail.com
              </a>
            </p>
            <p>
              <span className="text-white/40">Developer / Owner:</span>{" "}
              <a
                href="mailto:owner.chessfusion@gmail.com"
                className="text-primary/80 hover:text-primary transition-colors"
                data-testid="link-email-owner"
              >
                owner.chessfusion@gmail.com
              </a>
            </p>
            <p>
              <span className="text-white/40">Studio Enquiries:</span>{" "}
              <a
                href="mailto:studio.dreamark@gmail.com"
                className="text-primary/80 hover:text-primary transition-colors"
                data-testid="link-email-studio"
              >
                studio.dreamark@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 text-center">
          <p className="text-xs text-white/25 font-sans tracking-widest">
            Chess Fusion — Imperial Edition &nbsp;·&nbsp; DreamArk Studio &nbsp;·&nbsp; 2026
          </p>
        </div>
      </div>
    </main>
  );
}
