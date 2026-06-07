import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import appIconPath from "@assets/app-icon_1780824528481.png";
import PlayStoreIcon from "@/components/PlayStoreIcon";
import { PLAYSTORE_URL, SOCIAL_LINKS } from "@/config";

const navLinks = [
  { label: "Home", href: "/", type: "route" },
  { label: "About Game", href: "#about", type: "anchor" },
  { label: "About Me", href: "/about-me", type: "route" },
  { label: "News", href: SOCIAL_LINKS.facebook, type: "external" },
  { label: "Privacy Policy", href: "/privacy-policy", type: "route" },
  { label: "Account Deletion", href: "/account-deletion", type: "route" },
  { label: "Terms & Conditions", href: "/terms-and-conditions", type: "route" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleAnchorClick(href: string) {
    if (location !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-lg border-b border-primary/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-1 min-h-16 lg:min-h-20 py-2">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={appIconPath}
              alt="Chess Fusion"
              className="w-9 h-9 rounded-lg object-cover group-hover:scale-105 transition-transform"
              data-testid="img-app-icon"
            />
            <span className="font-display text-lg font-bold text-gold-gradient tracking-wider hidden sm:block">
              Chess Fusion
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.type === "external") {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1.5 text-[10px] tracking-widest uppercase text-white/60 hover:text-primary transition-colors font-sans"
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                );
              }
              if (link.type === "anchor") {
                return (
                  <button
                    key={link.label}
                    onClick={() => handleAnchorClick(link.href)}
                    className="px-2 py-1.5 text-[10px] tracking-widest uppercase text-white/60 hover:text-primary transition-colors font-sans cursor-pointer"
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-2 py-1.5 text-[10px] tracking-widest uppercase text-white/60 hover:text-primary transition-colors font-sans"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={PLAYSTORE_URL}
              className="ml-2 flex items-center gap-2 px-4 py-2 bg-gold-gradient text-black text-[10px] font-bold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
              data-testid="button-download-nav"
            >
              <PlayStoreIcon size={13} />
              Download App
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
