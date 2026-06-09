import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieNotice from "@/components/CookieNotice";

// Shared chrome for every routed page. `bare` skips the top padding so the
// homepage hero can sit flush under the transparent header.
export default function Layout({ children, bare = false }: { children: ReactNode; bare?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#14110d]">
      <Header />
      <main className={`flex-1 ${bare ? "" : "pt-20 md:pt-24"}`}>{children}</main>
      <Footer />
      <CookieNotice />
    </div>
  );
}
