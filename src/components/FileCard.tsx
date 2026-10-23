import Image from "next/image";
import Link from "next/link";

type FileCardProps = {
  number: string;
  name: string;
  href: string;
  image: string;
};

export function FileCard({ number, name, href, image }: FileCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        flex
        w-45
        aspect-180/220
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-[10px]
        border-2
        border-[#91b5ca]
        bg-white
        transition-all
        duration-200
        ease-out
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Card background */}
      <Image
        src="/assets/home/card_background.svg"
        alt=""
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-300
          group-hover:scale-105
        "
      />

      {/* Main card asset */}
      <Image
        src={image}
        alt={`${name} icon`}
        width={125}
        height={125}
        className="
          relative
          z-10
          h-31.25
          w-31.25
          object-contain
          transition-transform
          duration-200
          ease-out
          group-hover:scale-110
        "
      />

      {/* File name */}
      <span
        className="
          absolute
          bottom-1.75
          left-1/2
          z-20
          -translate-x-1/2
          whitespace-nowrap
          text-center
          text-[18px]
          font-normal
          leading-none
          text-[#533D81]
        "
        style={{
          WebkitTextStroke: "1.5px #C6A9FE",
          paintOrder: "stroke fill",
        }}
      >
        File {number}: {name}
      </span>
    </Link>
  );
}
