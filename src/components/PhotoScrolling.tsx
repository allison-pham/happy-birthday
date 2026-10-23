"use client";

import Image from "next/image";

const PHOTOS = Array.from({ length: 16 }, (_, index) => ({
  src: `/images/dead_by_daylight${index + 1}.svg`,
  alt: `Dead by Daylight ${index + 1}`,
}));

// const PHOTOS = [
//   { src: "/assets/memories/dead_by_daylight1.svg", alt: "Dead by Daylight 1" },
//   { src: "/assets/memories/dead_by_daylight2.svg", alt: "Dead by Daylight 2" },
//   { src: "/assets/memories/dead_by_daylight3.svg", alt: "Dead by Daylight 3" },
// ];

function PhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[120px] w-[160px] shrink-0 overflow-hidden rounded-md border-2 border-[#8aa9ba]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="160px" />
    </div>
  );
}

function PhotoScrolling({ photos, speed = 30 }: { photos: typeof PHOTOS; speed?: number }) {
  // Repeat photos so the scrolling loops
  const repeatedPhotos = [...photos, ...photos, ...photos];

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-3"
        style={{
          animation: `photoScroll ${speed}s linear infinite`,
        }}
      >
        {repeatedPhotos.map((photo, index) => (
          <PhotoCard key={`${photo.src}-${index}`} {...photo} />
        ))}
      </div>
    </div>
  );
}

export default function PhotoScrollingSection() {
  return (
    <section className="w-full">
      <PhotoScrolling photos={PHOTOS} speed={30} />

      <style>{`
        @keyframes photoScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
