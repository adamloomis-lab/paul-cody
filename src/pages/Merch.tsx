import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export default function Merch() {
  return (
    <Layout>
      <PageHeader eyebrow="Merch" title="Coming Soon" />

      <section className="pb-24 md:pb-32">
        <div className="container max-w-2xl text-center">
          <div className="p-10 md:p-14 rounded-2xl bg-[#1c1813] border border-white/10">
            <div className="text-6xl mb-6">🤠</div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-4 font-[family-name:var(--font-display)]">
              Merch is on the way
            </h2>
            <p className="text-white/75 text-lg mb-8">
              Shirts, hats, and more are coming soon. In the meantime, the best way to support Paul is to grab the new
              album and follow along on social.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/music"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#b5482a] text-white uppercase tracking-wider rounded-lg hover:bg-[#8f3620] transition-colors font-bold font-[family-name:var(--font-display)]"
              >
                Get the Album
              </Link>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 border border-white/25 text-white uppercase tracking-wider rounded-lg hover:bg-white/20 transition-colors font-bold font-[family-name:var(--font-display)]"
              >
                <FacebookIcon className="w-5 h-5" /> Facebook
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 border border-white/25 text-white uppercase tracking-wider rounded-lg hover:bg-white/20 transition-colors font-bold font-[family-name:var(--font-display)]"
              >
                <InstagramIcon className="w-5 h-5" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
