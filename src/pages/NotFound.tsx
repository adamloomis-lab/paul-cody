import { Link } from "wouter";
import { images } from "@/data/images";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#14110d] px-4">
      <div className="text-center max-w-lg">
        <img src={images.logo} alt="Paul Cody and The Erie Riders" className="w-24 h-24 mx-auto mb-6" />
        <h1 className="text-6xl md:text-7xl font-bold text-[#b5482a] uppercase tracking-tight font-[family-name:var(--font-display)]">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white uppercase tracking-wide mt-2 mb-4 font-[family-name:var(--font-display)]">
          Page Not Found
        </h2>
        <p className="text-white/60 mb-8">Looks like this one's off the setlist. Let's get you back home.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#b5482a] text-white uppercase tracking-wider rounded hover:bg-[#8f3620] transition-colors duration-200 font-bold font-[family-name:var(--font-display)]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
