import { Link, useLocation } from "wouter";
import { Music, CalendarCheck } from "lucide-react";

// High-end floating action bar (mobile only): an elevated, blurred dark capsule
// standing off the screen edge, with a glassy "Listen" link and a glowing rust
// "Book the Band" button that routes to the booking form. Hidden on /contact.
export default function MobileActionBar() {
  const [location] = useLocation();
  if (location === "/contact") return null;

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 px-3 lg:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2 rounded-2xl border border-white/10 bg-[#100d0a]/85 p-2 shadow-[0_14px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <Link
          href="/music"
          aria-label="Listen to Paul Cody"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 py-3.5 font-[family-name:var(--font-display)] text-sm uppercase tracking-widest font-semibold text-white transition-all active:scale-95"
        >
          <Music size={18} className="text-[#d4774f]" /> Listen
        </Link>
        <Link
          href="/contact"
          className="group relative flex flex-[1.4] items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#b5482a] py-3.5 font-[family-name:var(--font-display)] text-sm uppercase tracking-widest font-bold text-white shadow-[0_10px_30px_-8px_rgba(181,72,42,0.7)] motion-safe:animate-glow-pulse transition-all active:scale-95"
        >
          <span
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md group-hover:[animation:sheen_0.9s_ease]"
            aria-hidden="true"
          />
          <CalendarCheck size={18} /> Book the Band
        </Link>
      </div>
    </nav>
  );
}
