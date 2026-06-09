import { useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import FadeInSection from "@/components/FadeInSection";
import { images, videos } from "@/data/images";
import { site } from "@/data/site";
import { press } from "@/data/press";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const fgY = useTransform(scrollYProgress, [0, 0.6], [0, -50]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center md:items-end justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Hero photo. Owner-requested shot: Paul with the green guitar against
            the barn planks (assets-raw/hero-guitar.jpg → images.heroGuitar). */}
        <img
          src={images.heroGuitar}
          alt="Paul Cody"
          className="absolute inset-0 w-full h-[120%] object-cover object-[center_30%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-[#14110d]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#14110d] to-transparent" />

      <motion.div style={{ opacity: fgOpacity, y: fgY }} className="relative z-10 text-center px-4 pb-0 md:pb-14">
        <div className="mb-8">
          <p className="text-sm md:text-base uppercase tracking-[0.35em] text-[#e8a06a] mb-4 font-[family-name:var(--font-display)]">
            {site.tagline}
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold uppercase text-white tracking-tight font-[family-name:var(--font-display)] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            Paul Cody
          </h1>
          <p className="text-xl md:text-2xl text-white/85 mt-2 uppercase tracking-widest font-[family-name:var(--font-display)]">
            &amp; The Erie Riders
          </p>
        </div>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/music"
            className="inline-block px-8 py-3 bg-[#b5482a] text-white font-[family-name:var(--font-display)] text-lg uppercase tracking-wider rounded hover:bg-[#8f3620] transition-colors duration-200 font-bold shadow-[0_4px_20px_rgba(181,72,42,0.4)]"
          >
            Hear the New Album
          </Link>
          <Link
            href="/live"
            className="inline-block px-8 py-3 bg-white/10 border border-white/30 text-white font-[family-name:var(--font-display)] text-lg uppercase tracking-wider rounded hover:bg-white/20 transition-colors duration-200 font-bold"
          >
            See Live Dates
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AlbumFeature() {
  return (
    <FadeInSection className="py-16 md:py-24 bg-[#100d0a]">
      <div className="container">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#b5482a]/15 blur-2xl rounded-2xl" />
            <img
              src={images.album}
              alt={`${site.album.title} album cover`}
              className="relative w-full rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#b5482a] mb-3 font-[family-name:var(--font-display)]">
              Out Now
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-white tracking-tight mb-4 font-[family-name:var(--font-display)]">
              {site.album.title}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Paul Cody's highly anticipated {site.album.descriptor}, <em>{site.album.title}</em>, is here. Old-school
              storytelling, '70s southern rock, and today's modern country, all on one record.
            </p>
            <Link
              href="/music"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#b5482a] text-white text-lg uppercase tracking-wider rounded-lg hover:bg-[#8f3620] transition-all duration-200 font-bold shadow-[0_4px_20px_rgba(181,72,42,0.3)] font-[family-name:var(--font-display)]"
            >
              <span>Get It / Stream It</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

function AboutTeaser() {
  return (
    <FadeInSection className="py-16 md:py-24 bg-[#14110d]">
      <div className="container max-w-4xl text-center">
        <h2 className="section-heading">The Sound</h2>
        <p className="text-white/85 text-lg md:text-xl leading-relaxed">
          With a sound that blends old-school storytelling with '70s southern rock and today's modern country, Paul's
          music grabs you and doesn't let go. His style and voice have been compared to country icons like John Denver,
          Garth Brooks, and Clint Black, and his band, The Erie Riders, is made up of some of the industry's finest.
        </p>
        <Link
          href="/band"
          className="inline-flex items-center gap-2 mt-8 text-[#b5482a] hover:text-[#e8a06a] text-lg uppercase tracking-wider font-bold font-[family-name:var(--font-display)] transition-colors"
        >
          Read the Full Story
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </FadeInSection>
  );
}

function FeaturedVideo() {
  return (
    <FadeInSection className="py-16 md:py-24 bg-[#100d0a]">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Watch</h2>
        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <video controls preload="metadata" poster={images.heroWanted} className="w-full aspect-video bg-black">
            <source src={videos.oneManOneGuitar} type="video/mp4" />
          </video>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/video"
            className="inline-flex items-center gap-2 text-[#b5482a] hover:text-[#e8a06a] text-lg uppercase tracking-wider font-bold font-[family-name:var(--font-display)] transition-colors"
          >
            More Videos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </FadeInSection>
  );
}

function PressStrip() {
  return (
    <FadeInSection className="py-16 md:py-20 bg-[#14110d]">
      <div className="container max-w-4xl text-center">
        <h2 className="section-heading">In the Press</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          {press.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#1c1813] border border-white/10 rounded-lg text-white/80 hover:text-white hover:border-[#b5482a]/50 transition-all text-sm font-[family-name:var(--font-display)] uppercase tracking-wider"
            >
              {p.outlet}
            </a>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}

function CornfieldOutro() {
  // The cornfield-at-sunset title video ("Paul Cody & The Erie Riders" animates
  // in over the field). Sits just above the footer per the owner's request.
  // Rendered at its native 16:9 so the baked-in title never crops.
  return (
    <FadeInSection className="pt-4 pb-0 bg-[#14110d]">
      <video
        className="w-full aspect-video object-cover"
        src={videos.hero}
        poster={images.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Paul Cody and The Erie Riders title video over a cornfield at sunset"
      />
    </FadeInSection>
  );
}

export default function Home() {
  return (
    <Layout bare>
      <Seo
        title="Paul Cody and The Erie Riders | Country, Folk & Southern Rock"
        description="Paul Cody and The Erie Riders blend old-school storytelling, '70s southern rock, and modern country. Hear the new double album New Beginning, watch videos, and book Paul for your next event."
        path="/"
      />
      <Hero />
      <AlbumFeature />
      <AboutTeaser />
      <FeaturedVideo />
      <PressStrip />
      <CornfieldOutro />
    </Layout>
  );
}
