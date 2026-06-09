// Single source of truth for business identity, contact, and links.
// Every contact signal on the site is driven from here (clickable-contact standard).

export const site = {
  name: "Paul Cody",
  fullName: "Paul Cody and The Erie Riders",
  tagline: "Country. Folk. Southern Rock.",
  // Northeast Ohio (Strongsville / Cleveland area). No public street address.
  locality: "Strongsville",
  region: "OH",
  regionName: "Ohio",
  areaServed: "Northeast Ohio & the Midwest",
  url: "https://www.paulcodymusic.com",

  email: "paulcodymusic@gmail.com",

  social: {
    facebook: "https://www.facebook.com/paulcodymusic/",
    instagram: "https://www.instagram.com/paulcodymusic/",
    youtube: "https://www.youtube.com/@paulcodymusic",
    tiktok: "https://www.tiktok.com/@paulcodymusic1",
  },

  album: {
    title: "New Beginning",
    descriptor: "17-song double album",
    bandcamp: "https://paulcodymusic.bandcamp.com",
    amazon: "https://www.amazon.com/dp/B0G6CYZX7B/",
    // iTunes has no stable deep link — users search the store.
    itunesSearch: 'Search "Paul Cody New Beginning" on iTunes / Apple Music',
    signedCdPrice: "$13",
  },
} as const;

export const NAV_LINKS = [
  { label: "Band", href: "/band" },
  { label: "Live", href: "/live" },
  { label: "Music", href: "/music" },
  { label: "Gallery", href: "/gallery" },
  { label: "Video", href: "/video" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/contact" },
] as const;
