import { useEffect, useState } from "react";
import { Link } from "wouter";

const KEY = "pc_cookie_consent";

export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* private mode — just show */
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-[90] bg-[#1c1813] border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      <div className="container py-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <p className="text-white/70 text-sm text-center sm:text-left">
          This site uses cookies to improve your experience. By continuing, you agree to our{" "}
          <Link href="/privacy" className="text-[#b5482a] hover:underline">Privacy Policy</Link>.
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 px-6 py-2 bg-[#b5482a] text-white text-sm uppercase tracking-wider rounded hover:bg-[#8f3620] transition-colors font-bold font-[family-name:var(--font-display)]"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
