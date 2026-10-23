import Image from "next/image";

import { Header } from "@/components/Header";
import { FileCard } from "@/components/FileCard";
import { Footer } from "@/components/Footer";

const files = [
  {
    number: "001",
    name: "Quests",
    href: "/quests",
    image: "/assets/cat.svg",
  },
  {
    number: "002",
    name: "Trials",
    href: "/trials",
    image: "/assets/ghostface.svg",
  },
  {
    number: "003",
    name: "Memories",
    href: "/memories",
    image: "/assets/photo_cards.svg",
  },
  {
    number: "004",
    name: "Museum",
    href: "/museum",
    image: "/assets/charm.svg",
  },
  {
    number: "005",
    name: "Letter",
    href: "/letter",
    image: "/assets/letter.svg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#dceef8] text-black">
      <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col px-5 py-3">
        <Header />

        {/* Hero */}
        <section className="mx-auto mt-12 grid w-full max-w-[850px] grid-cols-[150px_1fr_180px] items-center gap-6">
          {/* Cake */}
          <button className="group relative">
            <Image
              src="/assets/cake.png"
              alt="Birthday cake"
              width={130}
              height={130}
              className="transition-transform group-hover:scale-105"
            />

            <span className="absolute right-[-15px] top-8 rounded-md bg-white px-2 py-1 text-[10px] shadow">
              Click to open
              <br />
              photobooth
            </span>
          </button>

          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold">Happy Birthday &lt;/3</h1>

            <p className="mt-1 text-lg">A special celebration for an amazing person!</p>

            <p className="text-lg italic">Happy birthday! A new trial has begun.</p>
          </div>

          {/* Crew */}
          <Image src="/assets/crew.png" alt="Birthday crew" width={180} height={150} className="object-contain" />
        </section>

        {/* Files */}
        <section className="mx-auto mt-7 flex max-w-[430px] flex-wrap justify-center gap-4">
          {files.map((file) => (
            <FileCard key={file.number} {...file} />
          ))}
        </section>

        <Footer />
      </div>
    </main>
  );
}
