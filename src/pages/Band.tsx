import { Link } from "wouter";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import FadeInSection from "@/components/FadeInSection";
import BandRoster from "@/components/BandRoster";
import { images } from "@/data/images";

export default function Band() {
  return (
    <Layout>
      <Seo
        title="The Band | Paul Cody and The Erie Riders"
        description="Meet Paul Cody and The Erie Riders, the Northeast Ohio players behind the New Beginning album, from bass and drums to violin, harmonica, and vocals."
        path="/band"
      />
      <PageHeader eyebrow="The Band" title="Paul Cody & The Erie Riders" />

      <FadeInSection className="pb-16 md:pb-20">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <img
              src={images.heroWanted}
              alt="Paul Cody"
              className="w-full rounded-lg shadow-2xl border border-white/10 object-cover"
            />
            <div className="space-y-5">
              <p className="text-white/85 text-lg leading-relaxed">
                Paul has been writing, recording, and performing country, folk, and rock music since his teens and has
                led several bands in the Midwest, opening for national acts at outdoor venues with over 20,000
                attendees, as well as at more intimate indoor concert clubs.
              </p>
              <p className="text-white/85 text-lg leading-relaxed">
                With a sound that blends old-school storytelling with '70s southern rock and today's modern country,
                Paul's music grabs you and doesn't let go. His style and voice have been compared to country icons like
                John Denver, Garth Brooks, and Clint Black.
              </p>
              <p className="text-white/85 text-lg leading-relaxed">
                His band, The Erie Riders, is made up of some of the industry's finest. Together they bring those story
                songs to life on stage, taking audiences on a western country-rock journey from the very first note.
              </p>
              <p className="text-white/85 text-lg leading-relaxed">
                Paul's highly anticipated 17-song double album, <em>New Beginning</em>, is now available.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/music"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#b5482a] text-white uppercase tracking-wider rounded-lg hover:bg-[#8f3620] transition-colors font-bold font-[family-name:var(--font-display)]"
                >
                  The Music
                </Link>
                <Link
                  href="/live"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 border border-white/25 text-white uppercase tracking-wider rounded-lg hover:bg-white/20 transition-colors font-bold font-[family-name:var(--font-display)]"
                >
                  Live Dates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <BandRoster />
    </Layout>
  );
}
