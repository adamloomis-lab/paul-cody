import { useEffect, useState } from "react";
import { Link } from "wouter";
import { X, ArrowRight, Mail, CalendarCheck } from "lucide-react";
import { images } from "@/data/images";
import { site, NAV_LINKS } from "@/data/site";
import { FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon } from "@/components/icons";

const ALL_LINKS = [{ label: "Home", href: "/" }, ...NAV_LINKS];

const socials = [
  { url: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { url: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { url: site.social.youtube, label: "YouTube", Icon: YouTubeIcon },
  { url: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export interface MobileMenuProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly location: string;
}

// Full-screen, full-tilt mobile navigation. Blurred backdrop fading in plus a
// near-black panel sliding in from the right with a rust glow, staggered
// uppercase route links, and prominent booking CTAs. Body scroll locks while
// open; Esc closes; aria-modal for assistive tech.
export default function MobileMenu({ open, onClose, location }: MobileMenuProps) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const id = requestAnimationFrame(() => setShown(true));
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        cancelAnimationFrame(id);
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
    setShown(false);
    document.body.style.overflow = "";
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-[60]">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`relative ml-auto h-full w-full max-w-sm overflow-y-auto bg-[#100d0a] text-white shadow-[0_0_60px_-10px_rgba(181,72,42,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#b5482a]/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative flex min-h-full flex-col px-7 pb-10 pt-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={onClose} aria-label="Paul Cody and The Erie Riders home">
              <img src={images.logo} alt="Paul Cody and The Erie Riders" className="h-16 w-auto" />
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>

          {/* Trust badge */}
          <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#b5482a] px-3 py-1.5 font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.16em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white motion-safe:animate-pulse" />
            {site.tagline}
          </span>

          {/* Nav links */}
          <nav className="mt-6 flex flex-col">
            {ALL_LINKS.map((link, i) => {
              const active = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between border-b border-white/10 py-4 font-[family-name:var(--font-display)] text-3xl font-semibold uppercase tracking-wide transition-all duration-500 hover:text-[#b5482a] ${
                    active ? "text-[#b5482a]" : "text-white/90"
                  } ${shown ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
                  style={{ transitionDelay: `${120 + i * 60}ms` }}
                >
                  {link.label}
                  <ArrowRight
                    size={20}
                    className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#b5482a]"
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${
              shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${120 + ALL_LINKS.length * 60 + 60}ms` }}
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#b5482a] px-6 py-4 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_-10px_rgba(181,72,42,0.7)] transition-colors hover:bg-[#8f3620]"
            >
              <CalendarCheck size={18} /> Book the Band
            </Link>
            <Link
              href="/music"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white/60 px-6 py-4 font-[family-name:var(--font-display)] text-base font-semibold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white hover:text-[#100d0a]"
            >
              Listen &amp; Watch
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-auto space-y-3 pt-10 font-[family-name:var(--font-body)] text-lg text-white/70">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail size={18} className="shrink-0 text-[#b5482a]" /> Email the band
            </a>
            <div className="flex items-center gap-5 pt-1">
              {socials.map(({ url, label, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 transition-colors hover:text-[#b5482a]"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
