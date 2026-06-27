import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieNotice from "@/components/CookieNotice";
import MobileActionBar from "@/components/MobileActionBar";
import StickyBookCta from "@/components/StickyBookCta";

// Shared chrome for every routed page. `bare` skips the top padding so the
// homepage hero can sit flush under the transparent header.
export default function Layout({ children, bare = false }: { children: ReactNode; bare?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#14110d] pb-24 lg:pb-0">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:text-gray-900">Skip to content</a>
      <Header />
      <main id="main-content" className={`flex-1 ${bare ? "" : "pt-24 md:pt-32"}`}>{children}</main>
      <Footer />
      <CookieNotice />
      <MobileActionBar />
      <StickyBookCta />
    </div>
  );
}
