import { useState } from "react";
import PageBanner from "../components/PageBanner.jsx";

const images = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/gallery${i + 1}/600/400`,
}));

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <PageBanner title="Gallery" subtitle="A glimpse of our work" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelected(img)}
              className="cursor-pointer overflow-hidden rounded-xl shadow"
            >
              <img
                src={img.src}
                alt={`Gallery ${img.id}`}
                className="h-60 w-full object-cover transition duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <img
            src={selected.src}
            alt="Selected"
            className="max-h-[85vh] rounded-lg"
          />
          <button className="absolute right-5 top-5 text-3xl text-white">
            ✕
          </button>
        </div>
      )}
    </>
  );
}
