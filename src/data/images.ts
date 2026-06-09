// Asset path map. Files live in /public/images and /public/videos, produced by
// scripts/optimize-media.mjs from the raw originals in assets-raw/.

export const images = {
  logo: "/images/logo.png",
  album: "/images/album.webp",
  heroWanted: "/images/hero-wanted.webp",
  portrait: "/images/portrait.webp",
} as const;

export const videos = {
  oneManOneGuitar: "/videos/one-man-one-guitar.mp4",
  promo1: "/videos/promo-1.mp4",
  promo2: "/videos/promo-2.mp4",
  promo3: "/videos/promo-3.mp4",
} as const;

// Masonry gallery, in display order. Generic alt text — these are live/promo
// shots of Paul Cody and The Erie Riders with no per-photo captions in the source.
export const gallery: { src: string; alt: string }[] = [
  { src: "/images/gallery-p6130026.webp", alt: "Paul Cody performing live" },
  { src: "/images/gallery-p6130012.webp", alt: "Paul Cody on stage with guitar" },
  { src: "/images/gallery-img-5418.webp", alt: "Paul Cody and The Erie Riders live" },
  { src: "/images/gallery-p6130022.webp", alt: "Paul Cody singing on stage" },
  { src: "/images/gallery-img-5022.webp", alt: "The Erie Riders performing" },
  { src: "/images/gallery-p6130012-bw.webp", alt: "Paul Cody, black and white" },
  { src: "/images/gallery-img-5476.webp", alt: "Live show with the band" },
  { src: "/images/gallery-p6130033.webp", alt: "Paul Cody with guitar" },
  { src: "/images/gallery-img-4242.webp", alt: "Paul Cody live performance" },
  { src: "/images/gallery-p6130015.webp", alt: "Paul Cody on stage" },
  { src: "/images/gallery-img-4246.webp", alt: "The Erie Riders on stage" },
  { src: "/images/gallery-p6130009.webp", alt: "Paul Cody performing" },
  { src: "/images/gallery-img-4996.webp", alt: "Live concert shot" },
  { src: "/images/gallery-p1111297.webp", alt: "Paul Cody and band" },
  { src: "/images/gallery-img-4997.webp", alt: "On stage with the Erie Riders" },
  { src: "/images/gallery-p1111264.webp", alt: "Live performance" },
  { src: "/images/gallery-img-4258.webp", alt: "Paul Cody live" },
  { src: "/images/gallery-p1111243.webp", alt: "Paul Cody on stage" },
  { src: "/images/gallery-img-4263.webp", alt: "The band performing live" },
  { src: "/images/gallery-p1111272.webp", alt: "Paul Cody singing" },
  { src: "/images/gallery-img-4450.webp", alt: "Live music performance" },
  { src: "/images/gallery-p1111307.webp", alt: "Paul Cody with the Erie Riders" },
  { src: "/images/gallery-p1111244.webp", alt: "On stage performance" },
  { src: "/images/gallery-p1111309.webp", alt: "Paul Cody live show" },
  { src: "/images/gallery-p1111250.webp", alt: "The Erie Riders live" },
  { src: "/images/gallery-p1111263.webp", alt: "Paul Cody performing live" },
  { src: "/images/gallery-p1111266.webp", alt: "Live concert" },
  { src: "/images/gallery-img-e5451.webp", alt: "Paul Cody portrait" },
  { src: "/images/gallery-img-e5453.webp", alt: "Paul Cody close up" },
];
