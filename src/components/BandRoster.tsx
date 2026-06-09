import { players, type Member } from "@/data/members";

function MemberCard({ m }: { m: Member }) {
  return (
    <div className="flex flex-col h-full p-6 rounded-xl bg-[#1c1813] border border-white/10 hover:border-[#b5482a]/40 transition-colors">
      {m.photo && (
        <img
          src={m.photo}
          alt={m.name}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover object-top rounded-lg mb-4 border border-white/10"
        />
      )}
      <h3 className="text-xl font-bold text-white uppercase tracking-wide font-[family-name:var(--font-display)]">
        {m.name}
      </h3>
      <p className="text-[#e8a06a] text-sm uppercase tracking-[0.2em] mt-1 mb-3 font-[family-name:var(--font-display)]">
        {m.role}
      </p>
      <p className="text-white/75 leading-relaxed flex-1">{m.bio}</p>
      {m.links && m.links.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 pt-4 border-t border-white/10">
          {m.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[#b5482a] hover:text-[#e8a06a] transition-colors font-semibold"
            >
              {l.label}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BandRoster() {
  // Plain section, NOT FadeInSection: the 12-card roster is taller than the
  // viewport on mobile, so a whileInView fade on the whole section never
  // triggers and the band appeared invisible.
  return (
    <section className="py-16 md:py-24 bg-[#100d0a] border-t border-white/5">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b5482a] mb-3 font-[family-name:var(--font-display)]">
            The Lineup
          </p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-white tracking-tight font-[family-name:var(--font-display)]">
            The Erie Riders
          </h2>
          <p className="text-white/70 text-lg mt-4 max-w-3xl mx-auto">
            Some of the finest players in Northeast Ohio and beyond brought these story songs to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {players.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
