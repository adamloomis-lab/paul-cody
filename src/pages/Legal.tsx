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
    <LegalShell title="Accessibility Statement">
      <h2>Our commitment</h2>
      <p>
        This site is built to WCAG 2.1 AA, the standard referenced by the ADA for web accessibility. We review and
        update our accessibility practices on an ongoing basis.
      </p>
      <h2>What we have done</h2>
      <p>We have taken the following steps to make this site accessible:</p>
      <ul>
        <li>
          Skip links allow keyboard and screen reader users to bypass navigation and get straight to the main content
          without tabbing through every menu item.
        </li>
        <li>
          A visible outline appears on every interactive element when navigated by keyboard, so you always know where
          focus is on the page.
        </li>
        <li>
          Text colors meet the 4.5:1 minimum contrast ratio for readability by people with low vision.
        </li>
        <li>
          All form fields, buttons, and interactive elements have descriptive labels so screen readers can convey their
          purpose accurately.
        </li>
        <li>
          Animations automatically reduce for users who have the Reduce Motion preference enabled on their device.
        </li>
      </ul>
      <h2>Report an issue</h2>
      <p>
        If you encounter any accessibility barrier on this site, please reach out and we will address it promptly.
        Email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
