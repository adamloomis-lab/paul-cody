import { motion } from "framer-motion";

// Interior-page title block. Consistent header for Band/Live/Music/etc.
export default function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="container text-center pt-6 pb-10 md:pt-10 md:pb-14">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-[#b5482a] mb-3 font-[family-name:var(--font-display)]"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="text-4xl md:text-6xl font-bold uppercase text-white tracking-tight font-[family-name:var(--font-display)]"
      >
        {title}
      </motion.h1>
      {subtitle && <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mt-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20" />
        <span className="w-2 h-2 rounded-full bg-[#b5482a]" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20" />
      </div>
    </div>
  );
}
