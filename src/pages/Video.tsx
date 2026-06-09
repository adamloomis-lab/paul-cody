import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import FadeInSection from "@/components/FadeInSection";
import { images, videos } from "@/data/images";
import { youtubeIds, youtubeChannel } from "@/data/videos";

export default function Video() {
  return (
    <Layout>
      <Seo
        title="Videos | Paul Cody and The Erie Riders"
        description="Music videos and live performances from Paul Cody and The Erie Riders, including the One Man One Guitar single and clips from the New Beginning album."
        path="/video"
      />
      <PageHeader eyebrow="Video" title="Watch" subtitle="Music videos, live performances, and more from Paul Cody." />

      <FadeInSection className="pb-12">
        <div className="container max-w-4xl">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-4">
            <video controls preload="metadata" className="w-full aspect-video bg-black">
              <source src={videos.oneManOneGuitar} type="video/mp4" />
            </video>
          </div>
          <p className="text-center text-white/50 text-sm uppercase tracking-wider font-[family-name:var(--font-display)]">
            Featured: One Man, One Guitar
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[videos.clip17, videos.clip15].map((src) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                <video controls preload="metadata" poster={images.heroPoster} className="w-full aspect-video bg-black">
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {youtubeIds.map((id) => (
              <div key={id} className="rounded-lg overflow-hidden shadow-xl border border-white/10">
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title="Paul Cody video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#b5482a] text-white text-lg uppercase tracking-wider rounded-lg hover:bg-[#8f3620] transition-all duration-200 font-bold font-[family-name:var(--font-display)]"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
