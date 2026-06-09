import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import { upcomingShows, type Show } from "@/data/shows";

function ShowRow({ show, index }: { show: Show; index: number }) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(show.address)}`;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col md:flex-row md:items-center gap-3 md:gap-6 py-5 px-5 md:px-7 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#b5482a]/40 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#b5482a]/40 group-hover:bg-[#b5482a] transition-colors duration-300" />
      <div className="md:w-44 shrink-0">
        <span className="block text-xl font-bold text-[#b5482a] uppercase tracking-wide font-[family-name:var(--font-display)]">
          {show.date}
        </span>
        {show.time && <span className="block text-sm text-white/55 uppercase tracking-wide">{show.time}</span>}
      </div>
      <div className="flex-1">
        <span className="block text-xl font-bold text-white uppercase tracking-wide font-[family-name:var(--font-display)]">
          {show.venue}
        </span>
        <span className="block text-base text-white/60 uppercase tracking-wide font-[family-name:var(--font-display)]">
          {show.city}
        </span>
      </div>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#b5482a] text-white text-sm uppercase tracking-wider rounded hover:bg-[#8f3620] transition-colors duration-200 font-bold shrink-0 font-[family-name:var(--font-display)]"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        Directions
      </a>
    </motion.div>
  );
}

export default function Live() {
  return (
    <Layout>
      <Seo
        title="Live Shows | Paul Cody and The Erie Riders"
        description="Upcoming live shows from Paul Cody and The Erie Riders across Northeast Ohio, plus booking information for festivals, clubs, fairs, and private events."
        path="/live"
      />
      <PageHeader eyebrow="On Stage" title="Live Shows" subtitle="Catch Paul Cody and The Erie Riders live across Northeast Ohio." />

      <section className="pb-20 md:pb-28">
        <div className="container max-w-3xl">
          {upcomingShows.length > 0 ? (
            <div className="space-y-3">
              {upcomingShows.map((show, i) => (
                <ShowRow key={`${show.date}-${show.venue}`} show={show} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-center text-white/70 text-lg py-10">
              No dates on the calendar right now. Check back soon, or follow along on social for new show announcements.
            </p>
          )}

          <div className="text-center mt-14 p-8 rounded-xl bg-[#1c1813] border border-white/10">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-3 font-[family-name:var(--font-display)]">
              Want Paul at Your Venue or Event?
            </h2>
            <p className="text-white/70 mb-6">Booking for festivals, clubs, fairs, and private events.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#b5482a] text-white text-lg uppercase tracking-wider rounded-lg hover:bg-[#8f3620] transition-all duration-200 font-bold font-[family-name:var(--font-display)]"
            >
              Booking Information
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* "WANTED — You at My Shows — LIVE!" poster, per the owner. */}
          <div className="mt-14 max-w-xl mx-auto">
            <img
              src="/images/wanted-live-poster.webp"
              alt="WANTED: you at my shows — Paul Cody LIVE"
              loading="lazy"
              className="w-full rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
