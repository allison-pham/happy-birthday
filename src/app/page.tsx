import Image from "next/image";
import Link from "next/link";
import { FileCard } from "@/components/FileCard";
import { FlippableFileCard } from "@/components/FlippableCard";

type FileItem =
  | {
      number: string;
      name: string;
      image: string;
      flippable: true;
      backTitle: string;
      backDescription: string;
      href?: string;
    }
  | {
      number: string;
      name: string;
      image: string;
      flippable: false;
      href: string;
      backTitle?: never;
      backDescription?: never;
    };

const files: FileItem[] = [
  {
    number: "001",
    name: "Quests",
    image: "/assets/home/cat.svg",
    flippable: true,
    backTitle: "Quests",
    backDescription: "Currently in development!",
  },
  {
    number: "002",
    name: "Trials",
    image: "/assets/home/ghostface.svg",
    flippable: true,
    backTitle: "Trials",
    backDescription: "Currently in development!",
  },
  {
    number: "003",
    name: "Memories",
    href: "/memories",
    image: "/assets/home/photo_cards.svg",
    flippable: false,
  },
  {
    number: "004",
    name: "Museum",
    image: "/assets/home/charm.svg",
    flippable: true,
    backTitle: "Museum",
    backDescription: "Currently in development!",
  },
  {
    number: "005",
    name: "Letter",
    href: "/letter",
    image: "/assets/home/letter.svg",
    flippable: false,
  },
];

export default function Home() {
  return (
    <main className="bg-[#dceef8] text-black">
      <div className="mx-auto flex max-w-300 flex-col px-5 py-3">
        {/* Hero */}
        <section className="mx-auto mt-12 grid w-full max-w-212.5 grid-cols-[150px_1fr_180px] items-center gap-6">
          {/* Cake */}
          <Link
            href="https://bdaycake.com/happy-birthday-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block cursor-pointer"
          >
            {/* Cake image */}
            <Image
              src="/assets/home/birthday_cake.svg"
              alt="Birthday cake"
              width={130}
              height={130}
              className="transition-transform duration-200 group-hover:scale-105"
            />

            {/* Bubble */}
            <div className="absolute -right-8.75 top-6.25 h-18.75 w-22.5 transition-transform duration-200 group-hover:scale-105">
              <Image src="/assets/home/bubble_comic.svg" alt="" fill className="object-contain" />

              <span className="absolute inset-0 z-10 flex items-center justify-center text-center text-[10px] leading-tight">
                Click to open
                <br />
                full view.
              </span>
            </div>
          </Link>

          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold">Happy Birthday &lt;/3</h1>

            <p className="mt-1 text-lg">A special celebration for an amazing person!</p>

            <p className="text-lg italic">Happy birthday! A new trial has begun.</p>
          </div>

          {/* Crew */}
          <Image
            src="/assets/home/among_us.svg"
            alt="Birthday crew"
            width={180}
            height={150}
            className="object-contain"
          />
        </section>

        {/* Files */}
        <section className="mx-auto mt-7 flex w-full max-w-155 flex-wrap justify-center gap-4">
          {files.map((file) =>
            file.flippable ? (
              <FlippableFileCard
                key={file.number}
                number={file.number}
                name={file.name}
                href={file.href}
                image={file.image}
                backTitle={file.backTitle}
                backDescription={file.backDescription}
              />
            ) : (
              <FileCard key={file.number} number={file.number} name={file.name} href={file.href} image={file.image} />
            ),
          )}
        </section>
      </div>
    </main>
  );
}
