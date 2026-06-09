import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";
import { FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon } from "@/components/icons";

const INQUIRY_TYPES = [
  { value: "", label: "What's this about?" },
  { value: "booking", label: "Booking — venue / event" },
  { value: "festival", label: "Festival / Fair" },
  { value: "private-party", label: "Private Party" },
  { value: "press", label: "Press / Media" },
  { value: "general", label: "General / Fan Message" },
];

const inputClass =
  "w-full px-4 py-3 bg-[#100d0a] border border-white/15 rounded text-white placeholder-white/40 focus:border-[#b5482a] focus:outline-none transition-colors";
const labelClass = "block text-white/80 text-sm font-semibold mb-2";

const socials = [
  { url: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { url: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { url: site.social.youtube, label: "YouTube", Icon: YouTubeIcon },
  { url: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", inquiryType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        "bot-field": "",
        name: form.name,
        email: form.email,
        phone: form.phone,
        inquiryType: form.inquiryType,
        message: form.message,
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Seo
        title="Contact & Booking | Paul Cody and The Erie Riders"
        description="Book Paul Cody and The Erie Riders for your venue, festival, or private event, or send the band a message."
        path="/contact"
      />
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact & Booking"
        subtitle="Booking inquiries, press, or just want to say hello? Reach out below."
      />

      <section className="pb-20 md:pb-28">
        <div className="container max-w-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 bg-[#1c1813] rounded-lg border border-[#b5482a]/20"
            >
              <svg className="w-16 h-16 text-[#b5482a] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-2 font-[family-name:var(--font-display)]">
                Thank You
              </h2>
              <p className="text-white/70">Thanks for reaching out. We'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5 bg-[#1c1813] p-6 md:p-8 rounded-lg border border-white/10"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name</label>
                    <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={update("name")} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input id="email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={update("email")} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone <span className="text-white/40 font-normal">(optional)</span></label>
                    <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" value={form.phone} onChange={update("phone")} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className={labelClass}>Inquiry Type</label>
                    <select id="inquiryType" name="inquiryType" value={form.inquiryType} onChange={update("inquiryType")} className={inputClass}>
                      {INQUIRY_TYPES.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#100d0a]">{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell us about your event — date, venue, expected attendance — or just say hi." value={form.message} onChange={update("message")} className={`${inputClass} resize-none`} />
                </div>
                {error && (
                  <p className="text-[#e8a06a] text-sm text-center">
                    Something went wrong. Please try again, or email us directly at{" "}
                    <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-4 bg-[#b5482a] text-white uppercase tracking-wider rounded hover:bg-[#8f3620] transition-colors duration-200 font-bold shadow-lg font-[family-name:var(--font-display)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              <div className="text-center mt-8 space-y-4">
                <p className="text-white/50 text-sm">
                  Or email directly at{" "}
                  <a href={`mailto:${site.email}`} className="text-[#b5482a] hover:underline">{site.email}</a>
                </p>
                <div className="flex justify-center gap-5">
                  {socials.map(({ url, label, Icon }) => (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/70 hover:text-[#b5482a] transition-colors">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
