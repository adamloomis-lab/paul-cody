import { useEffect, useState } from "react";
import { Link } from "wouter";

const KEY = "cookie-consent";

export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (!localStorage.getItem(KEY)) setShow(true);
      } catch {
        /* private mode — just show */
        setShow(true);
      }
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const respond = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, choice);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[90] bg-[#1c1813] border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]"
    >
      <div className="container py-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <p className="text-white/70 text-sm text-center sm:text-left">
          This site uses cookies to keep things running smoothly. We never sell your data.{" "}
          <Link href="/privacy" className="text-[#b5482a] hover:underline">Privacy Policy</Link>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => respond("declined")}
            className="px-5 py-2 border border-white/20 text-white/60 text-sm uppercase tracking-wider rounded hover:border-white/40 hover:text-white/80 transition-colors font-bold font-[family-name:var(--font-display)]"
          >
            No Thanks
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="px-6 py-2 bg-[#b5482a] text-white text-sm uppercase tracking-wider rounded hover:bg-[#8f3620] transition-colors font-bold font-[family-name:var(--font-display)]"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
