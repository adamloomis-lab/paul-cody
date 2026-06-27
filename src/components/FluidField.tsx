import type { ChangeEvent } from "react";
import type { LucideIcon } from "lucide-react";

// Shared "fluid" form controls for Paul Cody and The Erie Riders, tuned for the
// warm-dark form surface (#1c1813 card on #100d0a ink): floating-label fields
// with a center-out rust underline + focus glow, single-select icon cards, and
// the animated drawn-checkmark for the personalized thank-you state.

interface FloatFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  idPrefix?: string;
}

export function FloatField({
  name, label, value, onChange, type = "text", required, textarea, rows = 5, idPrefix = "f",
}: FloatFieldProps) {
  const id = `${idPrefix}-${name}`;
  const input =
    "peer w-full bg-transparent px-4 pt-6 pb-2 font-[family-name:var(--font-body)] text-white text-lg placeholder-transparent outline-none";
  const labelCls =
    "pointer-events-none absolute left-4 top-4 origin-left font-[family-name:var(--font-body)] text-lg text-white/55 transition-all duration-200 " +
    "peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.16em] peer-focus:text-[#d4774f] " +
    "peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.16em] peer-[:not(:placeholder-shown)]:text-white/60";
  return (
    <div className="group relative rounded-lg border border-white/15 bg-[#100d0a] transition-all duration-300 focus-within:border-[#b5482a]/70 focus-within:shadow-[0_10px_30px_-14px_rgba(181,72,42,0.7)]">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder=" "
          value={value}
          onChange={onChange}
          className={`${input} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          placeholder=" "
          value={value}
          onChange={onChange}
          className={input}
        />
      )}
      <label htmlFor={id} className={labelCls}>
        {label}
        {required && <span className="ml-1 text-[#d4774f]">*</span>}
      </label>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-[calc(100%-2rem)] -translate-x-1/2 scale-x-0 bg-[#b5482a] transition-transform duration-300 peer-focus:scale-x-100"
      />
    </div>
  );
}

export interface IconCardOption {
  value: string;
  label: string;
  Icon: LucideIcon;
}

interface IconCardSelectProps {
  legend: string;
  options: IconCardOption[];
  value: string;
  onChange: (value: string) => void;
}

// Single-select icon cards. Replaces a subject/inquiry-type dropdown with
// tappable cards (literal icon + label). The active card fills rust; the chosen
// value rides along in a hidden input so the Netlify payload is unchanged.
export function IconCardSelect({ legend, options, value, onChange }: IconCardSelectProps) {
  return (
    <fieldset>
      <legend className="block text-white/80 text-sm font-semibold mb-2 font-[family-name:var(--font-body)] uppercase tracking-wider">
        {legend}
      </legend>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {options.map(({ value: v, label, Icon }) => {
          const active = value === v;
          return (
            <button
              key={v}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(v)}
              className={`group flex flex-col items-center justify-center gap-2 rounded-lg border px-3 py-4 text-center transition-all duration-200 active:scale-95 ${
                active
                  ? "border-[#b5482a] bg-[#b5482a] text-white shadow-[0_10px_26px_-12px_rgba(181,72,42,0.85)]"
                  : "border-white/15 bg-[#100d0a] text-white/75 hover:border-[#b5482a]/60 hover:text-white"
              }`}
            >
              <Icon
                size={22}
                strokeWidth={1.8}
                className={active ? "text-white" : "text-[#d4774f]"}
              />
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-wide font-semibold leading-tight">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

// Animated drawn checkmark for the personalized thank-you state.
export function SuccessCheck() {
  return (
    <svg viewBox="0 0 52 52" className="h-16 w-16" aria-hidden="true">
      <circle
        cx="26" cy="26" r="24" fill="none" stroke="#b5482a" strokeWidth="3"
        strokeDasharray="151" strokeDashoffset="151"
        style={{ animation: "draw-check 0.6s ease forwards" }}
      />
      <path
        d="M15 27 l7 7 l15 -16" fill="none" stroke="#b5482a" strokeWidth="4"
        strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="40" strokeDashoffset="40"
        style={{ animation: "draw-check 0.4s 0.5s ease forwards" }}
      />
    </svg>
  );
}
