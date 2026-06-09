import { Link } from "wouter";
import { images } from "@/data/images";
import { site, NAV_LINKS } from "@/data/site";
import { FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon } from "@/components/icons";

const socials = [
  { url: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { url: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { url: site.social.youtube, label: "YouTube", Icon: YouTubeIcon },
  { url: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0907] border-t border-white/5">
      <div className="container py-12">
        <div className="flex flex-col items-center text-center gap-6">
          <img src={images.logo} alt="Paul Cody and The Erie Riders" className="w-20 h-20" />

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/" className="text-white/70 hover:text-[#b5482a] text-sm uppercase tracking-wider font-[family-name:var(--font-display)] transition-colors">
              Home
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-[#b5482a] text-sm uppercase tracking-wider font-[family-name:var(--font-display)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            {socials.map(({ url, label, Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/70 hover:text-[#b5482a] transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <a href={`mailto:${site.email}`} className="text-white/60 hover:text-[#b5482a] transition-colors">
            {site.email}
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col items-center gap-2 text-center">
          <p className="text-white/40 text-sm font-[family-name:var(--font-display)] uppercase tracking-wider">
            © 2026 Paul Cody. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/accessibility" className="hover:text-white/60 transition-colors">Accessibility</Link>
          </div>
          <p className="text-white/30 text-xs mt-1">
            Website by{" "}
            <a
              href="https://adamloomis.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#b5482a] transition-colors"
            >
              AdamLoomis.online
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
