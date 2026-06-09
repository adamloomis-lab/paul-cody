import { useEffect } from "react";
import { site } from "@/data/site";

type Props = {
  title: string;
  description: string;
  /** Route path, e.g. "/band". Used for canonical + og:url. */
  path: string;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Per-route SEO meta for the SPA. index.html ships the homepage defaults in
// static HTML (what most crawlers index); this keeps title/description/
// canonical/OG in sync as the user (or a JS-rendering crawler) navigates.
export default function Seo({ title, description, path }: Props) {
  useEffect(() => {
    const url = `${site.url}${path === "/" ? "/" : path}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path]);

  return null;
}
