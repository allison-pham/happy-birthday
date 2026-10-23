"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type FlippableFileCardProps = {
  number: string;
  name: string;
  href?: string;
  image: string;
  backTitle: string;
  backDescription: string;
};

export function FlippableFileCard({ number, name, href, image, backTitle, backDescription }: FlippableFileCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative w-[180px] aspect-[180/220] shrink-0" style={{ perspective: "1000px" }}>
      <div
        className="relative h-full w-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          className="
            group
            absolute
            inset-0
            overflow-hidden
            rounded-[10px]
            border-2
            border-[#91b5ca]
            bg-white
            cursor-pointer
          "
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            pointerEvents: flipped ? "none" : "auto",
          }}
        >
          <Image
            src="/assets/home/card_background.svg"
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <Image
            src={image}
            alt={`${name} icon`}
            width={125}
            height={125}
            className="
              absolute
              left-1/2
              top-1/2
              z-10
              h-[125px]
              w-[125px]
              -translate-x-1/2
              -translate-y-1/2
              object-contain
              transition-transform
              duration-200
              group-hover:scale-110
            "
          />

          <span
            className="
              absolute
              bottom-[7px]
              left-1/2
              z-20
              -translate-x-1/2
              whitespace-nowrap
              text-[18px]
              text-[#533D81]
            "
            style={{
              WebkitTextStroke: "1.5px #C6A9FE",
              paintOrder: "stroke fill",
            }}
          >
            File {number}: {name}
          </span>
        </button>
        Replace everything from {/* BACK */} onward with:
        {/* BACK */}
        <div
          onClick={() => setFlipped(false)}
          className="
    absolute
    inset-0
    flex
    flex-col
    items-center
    justify-center
    overflow-hidden
    rounded-[10px]
    border-2
    border-[#91b5ca]
    bg-white
    px-4
    text-center
    cursor-pointer
  "
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            pointerEvents: flipped ? "auto" : "none",
          }}
        >
          <Image src="/assets/home/card_background.svg" alt="" fill className="object-cover" />

          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-widest text-[#533D81]">File {number}</p>

            <h3 className="mt-1 text-lg font-semibold text-[#533D81]">{backTitle}</h3>

            <p className="mt-2 text-xs leading-relaxed text-slate-700">{backDescription}</p>

            {href && (
              <Link
                href={href}
                onClick={(e) => e.stopPropagation()}
                className="
      mt-4
      inline-block
      rounded-full
      bg-[#dceef8]
      px-4
      py-2
      text-xs
      font-semibold
      text-[#533D81]
      transition-transform
      hover:scale-105
    "
              >
                Open File →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
