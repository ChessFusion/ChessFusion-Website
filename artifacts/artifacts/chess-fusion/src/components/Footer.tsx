import { Link } from "wouter";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import instagramLogoPath from "@assets/instagram_logo.png";
import xLogoPath from "@assets/x_logo.png";
import tiktokLogoPath from "@assets/tiktok_logo.png";
import { GAME_VERSION, SOCIAL_LINKS } from "@/config";

const footerLinks = [
  { label: "Home", href: "/", type: "route" },
  { label: "About Game", href: "#about", type: "anchor" },
  { label: "About Me", href: "/about-me", type: "route" },
  { label: "News", href: SOCIAL_LINKS.facebook, type: "external" },
  { label: "Privacy Policy", href: "/privacy-policy", type: "route" },
  { label: "Account Deletion", href: "/account-deletion", type: "route" },
  { label: "Terms & Conditions", href: "/terms-and-conditions", type: "route" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: SOCIAL_LINKS.facebook,
    icon: <FaFacebook size={18} className="text-white/70" />,
    testid: "link-footer-facebook",
  },
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: <img src={instagramLogoPath} alt="Instagram" className="w-5 h-5 object-contain rounded-full" />,
    testid: "link-footer-instagram",
  },
  {
    label: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    icon: <img src={tiktokLogoPath} alt="TikTok" className="w-5 h-5 object-contain rounded-md" />,
    testid: "link-footer-tiktok",
  },
  {
    label: "X",
    href: SOCIAL_LINKS.x,
    icon: <img src={xLogoPath} alt="X" className="w-5 h-5 object-contain rounded-lg" />,
    testid: "link-footer-x",
  },
  {
    label: "YouTube",
    href: SOCIAL_LINKS.youtube,
    icon: <FaYoutube size={18} className="text-white/70" />,
    testid: "link-footer-youtube",
  },
];

export default function Footer() {
  function handleAnchorClick(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="bg-black border-t border-primary/10 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="font-display text-2xl text-gold-gradient tracking-widest mb-1">CHESS FUSION</h3>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase">Imperial Edition</p>
          </div>

          <div
            className="w-16 h-px"
            style={{ background: "linear-gradient(to right, transparent, hsl(43 65% 52%), transparent)" }}
          />

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3" aria-label="Footer navigation">
            {footerLinks.map((link) => {
              const cls = "text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors";
              if (link.type === "external") {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
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
                    className={cls}
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cls}
                  data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-primary/15 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 overflow-hidden"
                data-testid={s.testid}
                aria-label={`Chess Fusion on ${s.label}`}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div
            className="w-16 h-px"
            style={{ background: "linear-gradient(to right, transparent, hsl(43 65% 52% / 0.3), transparent)" }}
          />

          <div className="text-center">
            <p className="text-xs text-white/25 tracking-widest">
              &copy; {new Date().getFullYear()} Chess Fusion &ndash; Imperial Edition
            </p>
            <p className="text-xs text-white/20 tracking-widest mt-1">DreamArk Studio</p>
            <p className="text-[10px] text-primary/30 tracking-[0.3em] uppercase mt-2">
              v{GAME_VERSION}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
