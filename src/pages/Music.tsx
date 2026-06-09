import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import FadeInSection from "@/components/FadeInSection";
import { images } from "@/data/images";
import { site } from "@/data/site";

const tracks = [
  { name: "New Beginning", note: "Title track" },
  { name: "Raise a Glass", note: "Featured single — live version included" },
  { name: "Thank You Mom", note: "Closing track" },
];

export default function Music() {
  const { album, email } = site;
  return (
    <Layout>
      <PageHeader eyebrow="Out Now" title="New Beginning" subtitle={`A ${album.descriptor} from Paul Cody and The Erie Riders.`} />

      <FadeInSection className="pb-20 md:pb-28">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-4 bg-[#b5482a]/15 blur-2xl rounded-2xl" />
              <img
                src={images.album}
                alt="New Beginning album cover"
                className="relative w-full rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-white/85 text-lg leading-relaxed">
                  Paul Cody leaves nothing on the table, baring his soul in the tradition of old country and '70s
                  southern rock icons, but also like today's modern country storytellers like Chris Stapleton and Luke
                  Combs. His voice is all his own, but will likely remind you at times of John Denver and Glen Campbell,
                  and at others of Johnny Cash or Glenn Frey with the harmonies of The Eagles.
                </p>
                <p className="text-white/85 text-lg leading-relaxed mt-4">
                  With so many styles and characters in these story songs, you'll be transported on a western
                  country-rock journey from the title track, <em>New Beginning</em>, all the way to the ethereal ending
                  song, <em>Thank You Mom</em>.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#b5482a]/10 border border-[#b5482a]/30">
                <p className="text-white/90">
                  <span className="font-bold text-[#e8a06a] uppercase tracking-wide font-[family-name:var(--font-display)]">
                    Giving back:
                  </span>{" "}
                  Half of all profits go to veterans charities.
                </p>
              </div>

              {/* Buy / Stream */}
              <div>
                <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4 font-[family-name:var(--font-display)]">
                  Get the Album
                </h2>
                <div className="space-y-3">
                  <a
                    href={album.bandcamp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 bg-[#1c1813] border border-white/10 rounded-lg hover:border-[#b5482a]/50 transition-all group"
                  >
                    <span className="text-white font-semibold">
                      Bandcamp <span className="text-white/50 text-sm">— album, lyrics & artwork, or single songs</span>
                    </span>
                    <span className="text-[#b5482a] group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a
                    href={album.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 bg-[#1c1813] border border-white/10 rounded-lg hover:border-[#b5482a]/50 transition-all group"
                  >
                    <span className="text-white font-semibold">
                      Amazon Music <span className="text-white/50 text-sm">— stream & buy</span>
                    </span>
                    <span className="text-[#b5482a] group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <div className="px-5 py-4 bg-[#1c1813] border border-white/10 rounded-lg">
                    <span className="text-white font-semibold">
                      iTunes / Apple Music <span className="text-white/50 text-sm">— {album.itunesSearch}</span>
                    </span>
                  </div>
                  <a
                    href={`mailto:${email}?subject=Signed CD — New Beginning`}
                    className="flex items-center justify-between px-5 py-4 bg-[#b5482a]/10 border border-[#b5482a]/30 rounded-lg hover:bg-[#b5482a]/20 transition-all group"
                  >
                    <span className="text-white font-semibold">
                      Signed physical CD — {album.signedCdPrice}{" "}
                      <span className="text-white/50 text-sm">— email to order</span>
                    </span>
                    <span className="text-[#b5482a] group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>

              {/* Track highlights */}
              <div>
                <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4 font-[family-name:var(--font-display)]">
                  Track Highlights
                </h2>
                <ul className="space-y-2">
                  {tracks.map((t) => (
                    <li key={t.name} className="flex items-baseline gap-3 text-white/85">
                      <span className="text-[#b5482a]">♪</span>
                      <span>
                        <span className="font-semibold text-white">{t.name}</span>
                        <span className="text-white/50 text-sm"> — {t.note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </Layout>
  );
}
