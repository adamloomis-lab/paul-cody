// Media optimization pipeline — Paul Cody and The Erie Riders.
// Reads raw originals from assets-raw/ (gitignored) and writes web-optimized
// output to public/images and public/videos (committed).
//   Photos → resized WebP (logo stays transparent PNG).
//   Videos → 720p H.264 MP4 via ffmpeg.
// Run with: npm run optimize-media

import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const SRC = "assets-raw";
const IMG_OUT = "public/images";
const VID_OUT = "public/videos";

const fmtMB = (b) => `${(b / 1024 / 1024).toFixed(2)} MB`;
const fmtKB = (b) => `${(b / 1024).toFixed(0)} KB`;

// Named brand images (everything else matching gallery-*.jpg is processed in bulk).
const PHOTOS = [
  { src: "logo.png", out: "logo.png", format: "png", width: 600 },
  { src: "album-new-beginning.jpg", out: "album.webp", format: "webp", width: 1000 },
  { src: "hero-wanted.jpg", out: "hero-wanted.webp", format: "webp", width: 1920 },
  { src: "paul-cody-portrait.png", out: "portrait.webp", format: "webp", width: 900 },
];

const VIDEOS = [
  { src: "video-one-man-one-guitar.mp4", out: "one-man-one-guitar.mp4" },
  { src: "video-promo-19.mp4", out: "promo-1.mp4" },
  { src: "video-promo-20.mp4", out: "promo-2.mp4" },
  { src: "video-promo-42.mp4", out: "promo-3.mp4" },
];

async function processOne(srcName, outName, format, width) {
  const srcPath = join(SRC, srcName);
  if (!existsSync(srcPath)) {
    console.warn(`  SKIP (missing): ${srcName}`);
    return;
  }
  const pipeline = sharp(srcPath).resize({ width, withoutEnlargement: true });
  if (format === "webp") pipeline.webp({ quality: 80 });
  else if (format === "jpg") pipeline.jpeg({ quality: 85, mozjpeg: true });
  else if (format === "png") pipeline.png({ compressionLevel: 9 });
  await pipeline.toFile(join(IMG_OUT, outName));
  const before = statSync(srcPath).size;
  const after = statSync(join(IMG_OUT, outName)).size;
  console.log(`  ${outName.padEnd(28)} ${fmtKB(before).padStart(9)} → ${fmtKB(after).padStart(9)}`);
}

async function optimizePhotos() {
  await mkdir(IMG_OUT, { recursive: true });
  console.log("\nNamed photos →", IMG_OUT);
  for (const p of PHOTOS) await processOne(p.src, p.out, p.format, p.width);

  console.log("\nGallery photos →", IMG_OUT);
  const files = (await readdir(SRC)).filter((f) => /^gallery-.*\.jpe?g$/i.test(f)).sort();
  for (const f of files) {
    const out = f.replace(/\.jpe?g$/i, ".webp");
    await processOne(f, out, "webp", 1600);
  }
}

function optimizeVideos() {
  if (!existsSync(VID_OUT)) spawnSync("mkdir", ["-p", VID_OUT]);
  console.log("\nVideos →", VID_OUT);
  for (const v of VIDEOS) {
    const srcPath = join(SRC, v.src);
    if (!existsSync(srcPath)) {
      console.warn(`  SKIP (missing): ${v.src}`);
      continue;
    }
    const outPath = join(VID_OUT, v.out);
    const args = [
      "-y", "-i", srcPath,
      "-vf", "scale=-2:720",
      "-c:v", "libx264", "-crf", "26", "-preset", "slow",
      "-profile:v", "high", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
      "-c:a", "aac", "-b:a", "128k",
      outPath,
    ];
    const res = spawnSync("ffmpeg", args, { stdio: ["ignore", "ignore", "inherit"] });
    if (res.status !== 0) {
      console.error(`  FAILED: ${v.src}`);
      continue;
    }
    const before = statSync(srcPath).size;
    const after = statSync(outPath).size;
    console.log(`  ${v.out.padEnd(28)} ${fmtMB(before).padStart(10)} → ${fmtMB(after).padStart(10)}`);
  }
}

await optimizePhotos();
optimizeVideos();
console.log("\nDone.\n");
