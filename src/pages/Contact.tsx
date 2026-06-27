import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Newspaper, Heart, Mail, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";
import { FloatField, IconCardSelect, SuccessCheck, type IconCardOption } from "@/components/FluidField";
import { FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon } from "@/components/icons";

// Single-select icon cards replacing the old inquiry-type dropdown. Values are
// preserved so the Netlify "contact" submission payload reads the same.
const INQUIRY_OPTIONS: IconCardOption[] = [
  { value: "booking", label: "Booking", Icon: CalendarDays },
  { value: "press", label: "Press / Media", Icon: Newspaper },
  { value: "general", label: "Fan Message", Icon: Heart },
  { value: "private-party", label: "Private Party", Icon: Mail },
  { value: "other", label: "Something Else", Icon: MessageCircle },
];

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
  // Capture the first name before the form state resets so the thank-you can
  // greet the visitor by name.
  const [firstName, setFirstName] = useState("");

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    const captured = form.name.trim().split(/\s+/)[0] || "";
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
      if (res.ok) {
        setFirstName(captured);
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", inquiryType: "", message: "" });
      } else setError(true);
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
              className="text-center py-12 px-6 bg-[#1c1813] rounded-lg border border-[#b5482a]/25"
            >
              <div className="mx-auto mb-5 flex justify-center">
                <SuccessCheck />
              </div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-3 font-[family-name:var(--font-display)]">
                Thank You{firstName ? `, ${firstName}` : ""}!
              </h2>
              <p className="text-white/70 max-w-md mx-auto">
                Your message is in. Paul and the Erie Riders will be in touch soon. If your event has
                a date, the sooner we hear from you the better.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded px-6 py-3 bg-[#b5482a] text-white uppercase tracking-wider font-bold font-[family-name:var(--font-display)] shadow-lg transition-colors hover:bg-[#8f3620]"
                >
                  <Mail size={18} /> Email the band
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded px-6 py-3 border-2 border-white/40 text-white uppercase tracking-wider font-semibold font-[family-name:var(--font-display)] transition-colors hover:border-white hover:bg-white hover:text-[#100d0a]"
                >
                  <FacebookIcon className="h-[18px] w-[18px]" /> Follow on Facebook
                </a>
              </div>
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
                {/* Hidden input carries the icon-card selection into the Netlify payload. */}
                <input type="hidden" name="inquiryType" value={form.inquiryType} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FloatField name="name" label="Your name" required value={form.name} onChange={update("name")} />
                  <FloatField name="email" label="Email" type="email" required value={form.email} onChange={update("email")} />
                </div>
                <FloatField name="phone" label="Phone (optional)" type="tel" value={form.phone} onChange={update("phone")} />

                <IconCardSelect
                  legend="What's this about?"
                  options={INQUIRY_OPTIONS}
                  value={form.inquiryType}
                  onChange={(v) => setForm((f) => ({ ...f, inquiryType: v }))}
                />

                <FloatField
                  name="message"
                  label="Tell us about your event or just say hi"
                  required
                  textarea
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                />

                {error && (
                  <p className="text-[#e8a06a] text-sm text-center">
                    Something went wrong. Please try again, or email us directly at{" "}
                    <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="sheen w-full px-8 py-4 bg-[#b5482a] text-white uppercase tracking-wider rounded hover:bg-[#8f3620] transition-colors duration-200 font-bold shadow-lg font-[family-name:var(--font-display)] disabled:opacity-60 disabled:cursor-not-allowed"
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
