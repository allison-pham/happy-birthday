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
        h-[125px]
        w-[105px]
        items-center
        justify-center
        overflow-hidden
        rounded-md
        border-2
        border-[#91b5ca]
        bg-white
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Floral/cloud background */}
      <Image src="/assets/card_background.svg" alt="" fill className="object-cover" />

      {/* Main icon */}
      <Image
        src={image}
        alt={`${name} icon`}
        width={68}
        height={68}
        className="
          relative
          z-10
          object-contain
          transition-transform
          duration-200
          group-hover:scale-110
        "
      />

      {/* File label */}
      <span
        className="
          absolute
          bottom-1
          z-20
          whitespace-nowrap
          text-[9px]
          text-[#654b8a]
          underline
        "
      >
        File {number}: {name}
      </span>
    </Link>
  );
}
