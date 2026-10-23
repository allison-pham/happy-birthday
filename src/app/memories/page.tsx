import Image from "next/image";
import PhotoScrollingSection from "@/components/PhotoScrolling";

const memories = [
  "#cute-outfit-points",
  '"this is already my favorite pony"',
  '"why are there so many ponies"',
  "bunny ears",
  "playing games together (dbd & among us)",
  "SCUBAAA",
  "wiggle wiggle wiggle (wiggling like a caterpillar fr)",
];

export default function Memories() {
  return (
    <main className="min-h-screen bg-[#e1f2fc]">
      <h1 className="pt-12 text-center text-4xl font-bold">Memories</h1>

      {/* Chalkboard */}
      <div className="relative mx-auto mt-6 w-175 max-w-[90vw]">
        <Image
          src="/assets/memories/chalk_board.svg"
          alt=""
          width={700}
          height={450}
          className="h-auto w-full"
          priority
        />

        <div
          className="
            absolute
            left-[30%]
            top-[17%]
            space-y-3
            text-[15px]
            text-white
          "
        >
          {memories.map((memory) => (
            <p key={memory}>❀ {memory}</p>
          ))}
        </div>
      </div>

      {/* Scrolling photos */}
      <div className="mt-4">
        <PhotoScrollingSection />
      </div>
    </main>
  );
}
