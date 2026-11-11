"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const regionalImages = [
  {
    title: "African Elephant",
    image: "https://images.unsplash.com/photo-1751813226389-1db1ae817b97?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Lion of the Savanna",
    image: "https://images.unsplash.com/photo-1511216113906-8f57bb83e776?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "African Leopard",
    image: "https://images.unsplash.com/photo-1624958723474-05d32b99005f?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Rhinoceros",
    image: "https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "African Buffalo",
    image: "https://images.unsplash.com/photo-1671215737234-3ab8061db31d?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Maasai Heritage",
    image: "https://images.unsplash.com/photo-1682681610546-9ebea64e200e?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Maasai Manyatta",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Manyatta_House_for_Maasai_people.jpg/1280px-Manyatta_House_for_Maasai_people.jpg",
  },
];

export default function RegionalImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % regionalImages.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: -1 | 1) => {
    setCurrentIndex((index) =>
      (index + direction + regionalImages.length) % regionalImages.length,
    );
  };

  const activeImage = regionalImages[currentIndex];

  return (
    <section aria-label="East African wildlife and culture" className="relative isolate h-[300px] min-w-0 overflow-hidden rounded-2xl border border-[#D4A72C]/50 bg-[#111] shadow-[0_16px_48px_rgba(0,0,0,0.4)] md:h-[360px]">
      <div
        key={activeImage.image}
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${activeImage.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
        {regionalImages.map((image, index) => (
          <button
            key={image.image}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show ${image.title}`}
            aria-current={index === currentIndex}
            className={`h-1.5 rounded-full transition-all ${index === currentIndex ? "w-7 bg-[#D4A72C]" : "w-1.5 bg-white/60"}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="Previous East African image"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 p-2 text-white hover:border-[#D4A72C] hover:text-[#E8C36A]"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label="Next East African image"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 p-2 text-white hover:border-[#D4A72C] hover:text-[#E8C36A]"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
