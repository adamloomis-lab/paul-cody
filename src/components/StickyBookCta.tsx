import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { CalendarCheck } from "lucide-react";

// Desktop-only floating "Book the Band" pill. Scroll-reveals once the visitor
// passes the hero, with a rust gradient, ring, glow, sheen sweep on hover, and
// an icon nudge. Hidden on /contact (the form is already there). Mobile uses
// the elevated MobileActionBar capsule instead.
export default function StickyBookCta() {
  const [show, setShow] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  if (location === "/contact") return null;

  return (
    <Link
      href="/contact"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`sheen group hidden lg:flex fixed bottom-7 right-7 z-40 items-center gap-2 rounded-full bg-gradient-to-br from-[#c5562f] to-[#8f3620] px-7 py-4 font-[family-name:var(--font-display)] text-base uppercase tracking-widest font-bold text-white shadow-[0_18px_45px_-12px_rgba(181,72,42,0.7)] ring-1 ring-white/20 transition-all duration-300 hover:shadow-[0_22px_55px_-10px_rgba(181,72,42,0.9)] ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <CalendarCheck size={18} className="transition-transform duration-300 group-hover:scale-110" />
      Book the Band
    </Link>
  );
}
