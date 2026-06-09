import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { gallery } from "@/data/images";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Layout>
      <PageHeader eyebrow="Gallery" title="On the Road" subtitle="Live shots of Paul Cody and The Erie Riders." />

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 max-w-7xl mx-auto">
            {gallery.map((photo) => (
              <motion.button
                type="button"
                key={photo.src}
                className="mb-3 block w-full break-inside-avoid cursor-pointer overflow-hidden rounded-lg group"
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightbox(photo.src)}
                aria-label={`View photo: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl leading-none"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={lightbox}
              alt=""
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
