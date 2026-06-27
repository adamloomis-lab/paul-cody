import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { images } from "@/data/images";
import { site, NAV_LINKS } from "@/data/site";
import { FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon } from "@/components/icons";

const navLinkBase =
  "font-[family-name:var(--font-display)] text-xl uppercase tracking-wider font-semibold transition-colors duration-200";

const socials = [
  { url: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { url: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { url: site.social.youtube, label: "YouTube", Icon: YouTubeIcon },
  { url: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header is transparent over the hero on the homepage only; solid elsewhere.
  const solid = scrolled || menuOpen || location !== "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-[#100d0a]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-2 md:py-3">
        <Link href="/" aria-label="Paul Cody and The Erie Riders, home" className="flex items-center">
          <img src={images.logo} alt="Paul Cody and The Erie Riders" className="h-20 md:h-28 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => {
            const active = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${navLinkBase} ${active ? "text-[#b5482a]" : "text-white/90 hover:text-[#b5482a]"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {socials.map(({ url, label, Icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/80 hover:text-[#b5482a] transition-colors duration-200"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden text-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#100d0a]/98 backdrop-blur-md border-t border-white/10"
        >
          <div className="container py-6 flex flex-col gap-5">
            <Link
              href="/"
              className={`${navLinkBase} text-2xl ${location === "/" ? "text-[#b5482a]" : "text-white/90"}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${navLinkBase} text-2xl ${location === link.href ? "text-[#b5482a]" : "text-white/90"}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-5 pt-2">
              {socials.map(({ url, label, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/80 hover:text-[#b5482a] transition-colors duration-200"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
