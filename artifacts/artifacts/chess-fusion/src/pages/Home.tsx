import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronDown, Star, Users, Swords, Trophy, Bot, Palette, Globe, Shield, Loader2 } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { useReviews } from "@/hooks/use-reviews";
import { PLAYSTORE_URL, SOCIAL_LINKS, GAME_VERSION } from "@/config";
import PlayStoreIcon from "@/components/PlayStoreIcon";
import heroBannerPath from "@assets/hero-banner_1780824425075.png";
import dreamarkLogoPath from "@assets/dreamark-logo_1780824425079.png";
import gameScreenPath from "@assets/game-screen_1780824579265.png";
import backgroundPath from "@assets/background_1780824480551.png";
import bottomCinematicPath from "@assets/bottom_cinematic_1780830926952.png";
import instagramLogoPath from "@assets/instagram_logo.png";
import xLogoPath from "@assets/x_logo.png";
import tiktokLogoPath from "@assets/tiktok_logo.png";

function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 justify-center mb-6">
      <div className="w-12 h-px bg-primary/40" />
      <span className="text-xs tracking-[0.4em] uppercase text-primary font-sans">{children}</span>
      <div className="w-12 h-px bg-primary/40" />
    </div>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src={heroBannerPath}
          alt="Chess Fusion – Imperial Edition"
          className="w-full h-full object-cover object-center scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/60 to-[#0a0a0a]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 w-full px-4">
        <a
          href={PLAYSTORE_URL}
          className="flex items-center gap-2 px-10 py-4 bg-gold-gradient text-black text-sm font-bold tracking-widest uppercase rounded-sm hover:opacity-90 active:scale-95 transition-all"
          data-testid="button-hero-download"
        >
          <PlayStoreIcon size={16} />
          Download App
        </a>

        <div className="flex items-center gap-3">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-primary/30 text-primary/80 text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-primary/10 hover:border-primary/60 transition-all"
            data-testid="button-hero-facebook"
            aria-label="Facebook"
          >
            <FaFacebook size={15} />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-primary/30 text-primary/80 text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-primary/10 hover:border-primary/60 transition-all"
            data-testid="button-hero-instagram"
            aria-label="Instagram"
          >
            <img src={instagramLogoPath} alt="Instagram" className="w-4 h-4 object-contain rounded-full" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-primary/30 text-primary/80 text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-primary/10 hover:border-primary/60 transition-all"
            data-testid="button-hero-tiktok"
            aria-label="TikTok"
          >
            <img src={tiktokLogoPath} alt="TikTok" className="w-4 h-4 object-contain rounded-sm" />
            <span className="hidden sm:inline">TikTok</span>
          </a>
          <a
            href={SOCIAL_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-primary/30 text-primary/80 text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-primary/10 hover:border-primary/60 transition-all"
            data-testid="button-hero-x"
            aria-label="X (Twitter)"
          >
            <img src={xLogoPath} alt="X" className="w-4 h-4 object-contain rounded-sm" />
            <span className="hidden sm:inline">X</span>
          </a>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 border border-primary/30 text-primary/80 text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-primary/10 hover:border-primary/60 transition-all"
            data-testid="button-hero-youtube"
            aria-label="YouTube"
          >
            <FaYoutube size={15} />
            <span className="hidden sm:inline">YouTube</span>
          </a>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <span className="text-[10px] tracking-[0.45em] uppercase text-white/30 font-sans">Scroll To Explore</span>
        <ChevronDown size={18} className="text-primary/50" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const blocks = [
    {
      label: "Introduction",
      heading: "Not Ordinary Chess",
      text: "Chess Fusion — Imperial Edition is a mobile strategy game built on the foundation of classical chess, elevated by one game-changing innovation: Fusion. All the rules, all the depth — with a new tactical layer that transforms how you attack, defend, and dominate.",
    },
    {
      label: "Core Concept",
      heading: "Merge. Forge. Conquer.",
      text: "Combine two adjacent same-colored pieces into a single hybrid unit that inherits both movement abilities. This costs one Fusion Credit, available after 8 moves — giving the board time to develop before the power shift begins.",
    },
    {
      label: "Strategic Identity",
      heading: "Cinematic Imperial Aesthetic",
      text: "Wrapped in a richly atmospheric imperial world: deep obsidian boards, metallic gold typography, and a library of stunning themed piece sets. Every match feels cinematic. Every victory feels earned.",
    },
  ];

  return (
    <section id="about" className="py-28 px-4 bg-[#060606]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-20">
          <SectionLabel>About The Game</SectionLabel>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
            What Is <span className="text-gold-gradient">Chess Fusion?</span>
          </h2>
        </FadeInSection>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 border border-primary/10 bg-card hover:border-primary/30 transition-all duration-500"
              data-testid={`card-about-${i}`}
            >
              <div className="absolute top-0 left-0 w-8 h-0.5 bg-gold-gradient" />
              <p className="text-xs tracking-[0.35em] uppercase text-primary mb-4 font-sans">{block.label}</p>
              <h3 className="text-xl font-serif text-white mb-4">{block.heading}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans">{block.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const fusions = [
  {
    pieces: "♞ Knight + Rook ♜",
    name: "Iron Chancellor",
    symbol: "⚜",
    description: "Combines the knight's L-jump with the rook's unlimited straight slides — supremely mobile and devastatingly powerful.",
    tag: "Mobility + Range",
    color: "from-amber-900/30 to-yellow-900/10",
  },
  {
    pieces: "♝ Bishop + Rook ♜",
    name: "Grand Queen",
    symbol: "♛",
    description: "Moves in all 8 directions without limit — surpasses a standard queen in flexibility and dominates every diagonal and file.",
    tag: "Omnidirectional",
    color: "from-yellow-800/30 to-amber-900/10",
  },
  {
    pieces: "♞ Knight + Pawn ♟",
    name: "Lancer",
    symbol: "⚔",
    description: "Retains the knight's L-jump plus a forward step — a versatile, lightning-fast advanced attacker that opens new assault lines.",
    tag: "Speed + Versatility",
    color: "from-stone-700/30 to-amber-900/10",
  },
];

function FusionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const sectionRef = useRef(null);
  const { scrollYProgress: fusionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(fusionProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={sectionRef} className="py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute inset-0 w-full" style={{ y: bgY, height: "112%", top: "-6%" }}>
          <img src={backgroundPath} alt="" className="w-full h-full object-cover opacity-15" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-20">
          <SectionLabel>Signature Mechanic</SectionLabel>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
            The <span className="text-gold-gradient">Fusion</span> Mechanic
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed font-sans tracking-wide">
            Forge hybrid warriors. Command the board. Merge two adjacent pieces into a single unit of combined power.
          </p>
        </FadeInSection>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {fusions.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, x: i === 0 ? -60 : i === 2 ? 60 : 0, y: i === 1 ? 40 : 0 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`relative p-8 bg-gradient-to-b ${f.color} border border-primary/20 hover:border-primary/50 transition-all duration-500 group`}
              data-testid={`card-fusion-${i}`}
            >
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-60" />

              <div className="text-5xl mb-6 opacity-60 font-serif">{f.symbol}</div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary/70 mb-3 font-sans">{f.pieces}</p>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{f.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans mb-6">{f.description}</p>
              <div className="inline-block px-3 py-1 border border-primary/30 text-xs tracking-widest uppercase text-primary/70 font-sans">
                {f.tag}
              </div>
            </motion.div>
          ))}
        </div>

        <FadeInSection delay={0.4} className="mt-12 text-center">
          <p className="text-xs tracking-widest text-white/30 uppercase font-sans">
            New players receive a <span className="text-primary">10-fusion free trial</span> · Earn more by winning
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

const gameModes = [
  { icon: Users, label: "Pass & Play", desc: "Two players, one device. No internet required.", tag: "Local" },
  { icon: Bot, label: "VS AI", desc: "ELO-scaled CPU opponent. Configurable from beginner to master depth.", tag: "Practice" },
  { icon: Globe, label: "Ranked Multiplayer", desc: "Real-time global matchmaking. Your ELO. Your legacy.", tag: "Online" },
  { icon: Swords, label: "Clan Challenges", desc: "Issue live duels to rival clan members. Results count.", tag: "Social" },
  { icon: Shield, label: "Clan Wars", desc: "Organized team battles. Clans war for supremacy.", tag: "Competitive" },
];

const timeControls = [
  { label: "Bullet", time: "1:30", icon: "⚡" },
  { label: "Blitz", time: "3:00", icon: "🔥" },
  { label: "Rapid", time: "5:00", icon: "⚔️" },
  { label: "Classic", time: "10:00", icon: "🏰" },
  { label: "Long", time: "15:00", icon: "👑" },
];

function GameModesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-4 bg-[#060606]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-20">
          <SectionLabel>How You Play</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white">
            Game <span className="text-gold-gradient">Modes</span>
          </h2>
        </FadeInSection>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {gameModes.map((mode, i) => (
            <motion.div
              key={mode.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 border border-primary/10 bg-card hover:border-primary/30 transition-all duration-400 group"
              data-testid={`card-mode-${i}`}
            >
              <div className="flex items-start justify-between mb-4">
                <mode.icon size={24} className="text-primary/60 group-hover:text-primary transition-colors" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary/50 border border-primary/20 px-2 py-0.5 font-sans">
                  {mode.tag}
                </span>
              </div>
              <h3 className="text-lg font-serif text-white mb-2">{mode.label}</h3>
              <p className="text-sm text-white/45 leading-relaxed font-sans">{mode.desc}</p>
            </motion.div>
          ))}
        </div>

        <FadeInSection className="border border-primary/10 p-8">
          <p className="text-center text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans">Time Controls</p>
          <div className="flex flex-wrap justify-center gap-4">
            {timeControls.map((tc) => (
              <div
                key={tc.label}
                className="flex flex-col items-center gap-1 px-6 py-4 border border-primary/10 hover:border-primary/30 transition-all"
                data-testid={`badge-time-${tc.label.toLowerCase()}`}
              >
                <span className="text-lg">{tc.icon}</span>
                <span className="text-sm font-serif text-white">{tc.label}</span>
                <span className="text-xs font-mono text-primary">{tc.time}</span>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  const [selected, setSelected] = useState(0);
  const screenshots = [
    { src: gameScreenPath, caption: "Command the Board" },
    { src: gameScreenPath, caption: "Ranked Matchmaking" },
    { src: gameScreenPath, caption: "Fusion in Action" },
    { src: gameScreenPath, caption: "Clan Wars Arena" },
    { src: gameScreenPath, caption: "Imperial Store" },
    { src: gameScreenPath, caption: "Grand Master Path" },
  ];

  return (
    <section className="py-28 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <SectionLabel>Gameplay</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white">
            Gameplay <span className="text-gold-gradient">Showcase</span>
          </h2>
          <p className="mt-4 text-white/40 text-sm font-sans tracking-wide">A glimpse of the imperial battlefield</p>
        </FadeInSection>

        <FadeInSection>
          <div className="relative overflow-hidden mb-6 border border-primary/20">
            <motion.img
              key={selected}
              src={screenshots[selected].src}
              alt={screenshots[selected].caption}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full object-cover"
              style={{ maxHeight: "520px", objectPosition: "top" }}
              data-testid="img-showcase-main"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-xs tracking-[0.35em] uppercase text-primary/80 font-sans">
                {screenshots[selected].caption}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`relative overflow-hidden border transition-all duration-300 ${
                  selected === i ? "border-primary" : "border-primary/10 opacity-50 hover:opacity-80"
                }`}
                data-testid={`button-screenshot-${i}`}
              >
                <img src={s.src} alt={s.caption} className="w-full h-16 object-cover object-top" />
                {i >= 1 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-[8px] text-white/50 tracking-widest">SOON</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Globe,
    title: "Real-Time Multiplayer",
    desc: "Face opponents worldwide with ELO-matched real-time gameplay via Firebase.",
  },
  {
    icon: Swords,
    title: "Fusion System",
    desc: "Merge pieces. Forge hybrid warriors. Reshape the battlefield.",
  },
  {
    icon: Trophy,
    title: "12 Ranked Leagues",
    desc: "From Bronze III to Grand Master — a prestigious 12-tier skill ladder.",
  },
  {
    icon: Shield,
    title: "Clan Wars",
    desc: "Lead your Great House to victory in organized team competitions.",
  },
  {
    icon: Bot,
    title: "AI Battles",
    desc: "ELO-calibrated minimax AI with blunder simulation for every skill level.",
  },
  {
    icon: Palette,
    title: "Cosmetic Store",
    desc: "Board themes, piece sets, and Fusion Passes — express your imperial style.",
  },
];

function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-4 bg-[#060606]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-20">
          <SectionLabel>What's Inside</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white">
            Premium <span className="text-gold-gradient">Features</span>
          </h2>
        </FadeInSection>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 border border-primary/10 bg-card hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              data-testid={`card-feature-${i}`}
            >
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <f.icon
                size={28}
                className="text-primary/40 group-hover:text-primary mb-6 transition-colors duration-300"
              />
              <h3 className="text-lg font-serif text-white mb-3">{f.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed font-sans">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const leagues = [
  { name: "Bronze III", elo: "0+", color: "#cd7f32", tier: "bronze" },
  { name: "Bronze II", elo: "200+", color: "#cd7f32", tier: "bronze" },
  { name: "Bronze I", elo: "400+", color: "#cd7f32", tier: "bronze" },
  { name: "Silver III", elo: "600+", color: "#c0c0c0", tier: "silver" },
  { name: "Silver II", elo: "800+", color: "#c0c0c0", tier: "silver" },
  { name: "Silver I", elo: "1,000+", color: "#c0c0c0", tier: "silver" },
  { name: "Gold III", elo: "1,200+", color: "#FFD700", tier: "gold" },
  { name: "Gold II", elo: "1,400+", color: "#FFD700", tier: "gold" },
  { name: "Gold I", elo: "1,600+", color: "#FFD700", tier: "gold" },
  { name: "Platinum", elo: "1,800+", color: "#E5E4E2", tier: "platinum" },
  { name: "Diamond", elo: "2,000+", color: "#b9f2ff", tier: "diamond" },
  { name: "Grand Master", elo: "2,200+", color: "#BF953F", tier: "master" },
];

function RankedSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0800] to-black opacity-80" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeInSection className="text-center mb-20">
          <SectionLabel>Climb The Ranks</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            12 Leagues. <span className="text-gold-gradient">One Champion.</span>
          </h2>
          <p className="text-white/40 text-sm font-sans tracking-wide">
            Every player begins at ELO 800. Where will you end?
          </p>
        </FadeInSection>

        <div ref={ref} className="flex flex-col gap-2 max-w-md mx-auto">
          {[...leagues].reverse().map((league, i) => {
            const delay = i * 0.07;
            const isMaster = league.tier === "master";
            return (
              <motion.div
                key={league.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center justify-between px-5 py-3 border transition-all duration-300 ${
                  isMaster
                    ? "border-primary/50 bg-primary/5"
                    : "border-white/5 bg-white/2 hover:border-white/10"
                }`}
                data-testid={`badge-league-${league.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: league.color, boxShadow: `0 0 8px ${league.color}60` }}
                  />
                  <span
                    className={`text-sm font-serif ${isMaster ? "text-gold-gradient" : "text-white/70"}`}
                  >
                    {isMaster && "♛ "}
                    {league.name}
                  </span>
                </div>
                <span className="text-xs font-mono" style={{ color: `${league.color}99` }}>
                  {league.elo}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CreatorSection() {
  return (
    <section id="creator" className="py-28 px-4 bg-[#060606]">
      <div className="max-w-5xl mx-auto">
        <FadeInSection className="text-center mb-20">
          <SectionLabel>About The Creator</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white">
            Meet the <span className="text-gold-gradient">Architect</span>
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto bg-black border border-primary/20 flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
                <img
                  src={dreamarkLogoPath}
                  alt="DreamArk Studio"
                  className="w-full h-full object-contain opacity-90"
                  data-testid="img-dreamark-logo"
                />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">The Mind Behind The Game</p>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">Sayed Ali Shah</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                {["Founder", "Lead Developer", "Game Designer", "System Architect"].map((role) => (
                  <span
                    key={role}
                    className="text-xs px-3 py-1 border border-primary/20 text-primary/70 tracking-wider font-sans"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="text-white/50 text-sm leading-relaxed font-sans mb-6">
                Founder of DreamArk Studio — an independent game studio dedicated to building premium, intelligent experiences. Chess Fusion — Imperial Edition is the studio's flagship title, crafted with obsessive attention to strategic depth, competitive integrity, and visual prestige.
              </p>
              <div className="border border-primary/10 p-5 bg-card">
                <p className="text-primary/50 text-xs tracking-[0.3em] uppercase font-sans mb-2">Coming Soon</p>
                <p className="text-white/40 text-sm font-sans italic">
                  "Full Developer Story — The journey from vision to Grand Master battlefield."
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

const socials = [
  {
    name: "Facebook",
    handle: "@ChessFusion",
    url: SOCIAL_LINKS.facebook,
    desc: "News hub, updates & announcements",
    icon: <FaFacebook size={28} className="text-white" />,
    bg: "bg-[#1877F2]",
    testid: "link-social-facebook",
  },
  {
    name: "Instagram",
    handle: "@chessfusion_official",
    url: SOCIAL_LINKS.instagram,
    desc: "Behind the scenes & visual content",
    icon: <img src={instagramLogoPath} alt="Instagram" className="w-8 h-8 object-contain rounded-full" />,
    bg: "bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]",
    testid: "link-social-instagram",
  },
  {
    name: "TikTok",
    handle: "@chess.fusion",
    url: SOCIAL_LINKS.tiktok,
    desc: "Short clips, plays & highlights",
    icon: <img src={tiktokLogoPath} alt="TikTok" className="w-8 h-8 object-contain rounded-lg" />,
    bg: "bg-black",
    testid: "link-social-tiktok",
  },
  {
    name: "X (Twitter)",
    handle: "@ChessFusion",
    url: SOCIAL_LINKS.x,
    desc: "Live commentary & game threads",
    icon: <img src={xLogoPath} alt="X" className="w-8 h-8 object-contain rounded-xl" />,
    bg: "bg-black",
    testid: "link-social-x",
  },
  {
    name: "YouTube",
    handle: "@ChessFusionOfficial",
    url: SOCIAL_LINKS.youtube,
    desc: "Trailers, gameplay & dev logs",
    icon: <FaYoutube size={28} className="text-white" />,
    bg: "bg-[#FF0000]",
    testid: "link-social-youtube",
  },
];

function CommunitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={backgroundPath} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-black/92" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <SectionLabel>Community Hub</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Join The <span className="text-gold-gradient">Imperial Community</span>
          </h2>
          <p className="text-white/40 text-sm font-sans tracking-wide max-w-xl mx-auto">
            Follow across platforms. Stay ahead of every update, battle report, and move.
          </p>
        </FadeInSection>

        <div ref={ref} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center text-center p-8 border border-primary/10 bg-card hover:border-primary/40 transition-all duration-500 overflow-hidden"
              data-testid={social.testid}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/0 transition-all duration-500" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-0 group-hover:opacity-60 transition-all duration-500" />

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${social.bg} shadow-lg group-hover:scale-110 transition-transform duration-400 overflow-hidden`}>
                {social.icon}
              </div>

              <p className="text-[10px] tracking-[0.35em] uppercase text-primary/60 mb-1.5 font-sans">{social.name}</p>
              <p className="text-sm font-serif text-white mb-3 group-hover:text-gold-gradient transition-all duration-300">{social.handle}</p>
              <p className="text-xs text-white/35 leading-relaxed font-sans">{social.desc}</p>

              <div className="mt-5 flex items-center gap-1.5 text-xs text-primary/50 group-hover:text-primary transition-colors duration-300 font-sans tracking-widest uppercase">
                <span>Follow</span>
                <span className="text-[10px] group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        <FadeInSection delay={0.5} className="mt-12 text-center">
          <p className="text-xs tracking-widest text-white/20 uppercase font-sans">
            One game. One community. Many battlefields.
          </p>
          <p className="text-[10px] tracking-[0.3em] text-primary/30 uppercase font-sans mt-3">
            Current Version: v{GAME_VERSION}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const { reviews, loading, error, addReview } = useReviews();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating || !comment.trim() || submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      await addReview({ name: name.trim() || "Anonymous Strategist", rating, comment: comment.trim() });
      setRating(0);
      setName("");
      setComment("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }

  return (
    <section className="py-28 px-4 bg-[#060606]">
      <div className="max-w-4xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <SectionLabel>Player Reviews</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            The Imperial <span className="text-gold-gradient">Guestbook</span>
          </h2>
          <p className="text-white/40 text-sm font-sans tracking-wide">
            Your voice matters. Leave your mark on the board.
          </p>
        </FadeInSection>

        <FadeInSection>
          <form
            onSubmit={handleSubmit}
            className="border border-primary/20 bg-card p-8 sm:p-12 relative mb-12"
            data-testid="form-review"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <div className="absolute top-0 left-0 w-px h-full bg-primary/10" />
            <div className="absolute top-0 right-0 w-px h-full bg-primary/10" />

            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-8 font-sans text-center">
              Leave Your Mark
            </p>

            <div className="flex flex-col items-center mb-8 gap-3">
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-all duration-200 hover:scale-110"
                    data-testid={`button-star-${s}`}
                    aria-label={`Rate ${s} stars`}
                  >
                    <Star
                      size={32}
                      className={`transition-colors duration-200 ${
                        s <= (hoverRating || rating)
                          ? "text-primary fill-primary"
                          : "text-white/15"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-xs text-white/35 tracking-[0.2em] italic font-sans">
                Your one review would mean the world to us
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                  className="w-full bg-transparent border border-primary/15 focus:border-primary/50 outline-none px-5 py-3.5 text-sm text-white placeholder-white/25 transition-colors font-sans"
                  data-testid="input-review-name"
                />
              </div>
              <div>
                <textarea
                  placeholder="Share your experience on the board... What did Chess Fusion mean to you?"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  rows={5}
                  maxLength={500}
                  className="w-full bg-transparent border border-primary/15 focus:border-primary/50 outline-none px-5 py-4 text-sm text-white placeholder-white/25 transition-colors resize-none font-sans"
                  data-testid="textarea-review-comment"
                />
                <p className="text-right text-xs text-white/20 mt-1">{comment.length}/500</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={!rating || !comment.trim() || submitting}
              className="mt-8 w-full py-4 bg-gold-gradient text-black text-sm font-bold tracking-widest uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              data-testid="button-submit-review"
            >
              {submitting ? (
                <><Loader2 size={15} className="animate-spin" /> Submitting…</>
              ) : submitted ? "Review Submitted ✓" : "Submit Review"}
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-xs text-primary mt-4 tracking-widest"
              >
                Thank you. Your mark has been made.
              </motion.p>
            )}
            {submitError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-xs text-red-400 mt-4 tracking-widest"
              >
                {submitError}
              </motion.p>
            )}
          </form>
        </FadeInSection>

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 size={28} className="animate-spin text-primary/50" />
          </div>
        )}
        {error && !loading && (
          <p className="text-center text-xs text-red-400 tracking-widest py-8">{error}</p>
        )}
        {!loading && reviews.length > 0 && (
          <div className="space-y-4">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-primary/10 bg-card p-6 relative"
                data-testid={`card-review-${review.id}`}
              >
                <div className="absolute top-0 left-0 w-8 h-0.5 bg-gold-gradient" />
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-serif text-white text-sm">{review.name}</p>
                    <p className="text-xs text-white/30 font-sans mt-0.5">{formatDate(review.createdAt)}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={13}
                        className={s <= review.rating ? "text-primary fill-primary" : "text-white/15"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/55 leading-relaxed font-sans">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CtaSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#060606]">
      <div
        className="w-16 h-px mx-auto"
        style={{ background: "linear-gradient(to right, transparent, hsl(43 65% 52% / 0.3), transparent)" }}
      />

      <div className="relative w-full overflow-hidden" style={{ maxHeight: "70vh", minHeight: "320px" }}>
        <motion.div
          className="absolute inset-0 w-full"
          style={{ y: imgY, height: "120%", top: "-10%" }}
        >
          <img
            src={bottomCinematicPath}
            alt="Chess Fusion – Imperial battlefield"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-transparent" style={{ height: "30%" }} />
      </div>

      <div className="relative z-10 px-4 pb-28 pt-0 max-w-3xl mx-auto text-center -mt-24">
        <FadeInSection>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Ready To Join<br />
            <span className="text-gold-gradient">The Battlefield?</span>
          </h2>
          <p className="text-white/50 text-sm tracking-widest uppercase font-sans mb-12">
            Master Strategy &nbsp;·&nbsp; Forge Powerful Fusions &nbsp;·&nbsp; Climb The Ranks
          </p>
          <a
            href={PLAYSTORE_URL}
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold-gradient text-black text-sm font-bold tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all"
            data-testid="button-cta-download"
          >
            <PlayStoreIcon size={18} />
            Download App
          </a>
          <div
            className="w-16 h-px mx-auto mt-12"
            style={{ background: "linear-gradient(to right, transparent, hsl(43 65% 52%), transparent)" }}
          />
        </FadeInSection>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FusionSection />
      <GameModesSection />
      <ShowcaseSection />
      <FeaturesSection />
      <RankedSection />
      <CommunitySection />
      <ReviewsSection />
      <CtaSection />
    </main>
  );
}
