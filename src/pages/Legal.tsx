import type { ReactNode } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";

function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Layout>
      <PageHeader title={title} />
      <section className="pb-20 md:pb-28">
        <div className="container max-w-3xl">
          <div className="prose-invert space-y-5 text-white/80 leading-relaxed [&_h2]:text-white [&_h2]:font-[family-name:var(--font-display)] [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_a]:text-[#b5482a] [&_a]:underline">
            {children}
            <p className="text-white/40 text-sm pt-6">Last updated: June 2026.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function Privacy() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        This Privacy Policy explains how {site.fullName} ("we," "us") handles information collected through this
        website.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We only collect the information you choose to give us. When you submit the contact or booking form, we receive
        the name, email, phone number, and message you provide so we can respond to your inquiry.
      </p>
      <h2>How We Use It</h2>
      <p>
        We use your information solely to reply to you and to arrange bookings or answer questions. We do not sell or
        rent your personal information to anyone.
      </p>
      <h2>Cookies & Analytics</h2>
      <p>
        This site uses minimal cookies to remember your cookie-consent choice and may use privacy-friendly analytics to
        understand general traffic. You can disable cookies in your browser settings.
      </p>
      <h2>Third-Party Links</h2>
      <p>
        Our site links to platforms such as YouTube, Bandcamp, Amazon, and social media. Those services have their own
        privacy policies, which we encourage you to review.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}

export function Terms() {
  return (
    <LegalShell title="Terms of Use">
      <p>By using this website, you agree to the following terms.</p>
      <h2>Content</h2>
      <p>
        All music, photos, videos, artwork, and text on this site are the property of {site.fullName} or their
        respective owners and are protected by copyright. You may not reproduce or distribute them without permission.
      </p>
      <h2>Use of the Site</h2>
      <p>
        This site is provided for your personal, non-commercial use. You agree not to misuse the site or attempt to
        disrupt its operation.
      </p>
      <h2>No Warranty</h2>
      <p>
        The site is provided "as is." We make no guarantees that it will always be available, error-free, or that
        information (such as show dates) is complete or current.
      </p>
      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}

export function Accessibility() {
  return (
    <LegalShell title="Accessibility">
      <p>
        {site.fullName} is committed to making this website accessible to everyone, including people with disabilities.
      </p>
      <h2>Our Approach</h2>
      <p>
        We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. This includes meaningful image
        alt text, keyboard-navigable menus and controls, readable color contrast, and clear, descriptive links.
      </p>
      <h2>Ongoing Effort</h2>
      <p>
        Accessibility is an ongoing effort and we continue to improve. If you encounter any barrier or have a
        suggestion, we want to hear about it.
      </p>
      <h2>Contact</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> and we'll do our best to help.
      </p>
    </LegalShell>
  );
}
