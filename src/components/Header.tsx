import Link from "next/link";

const links = [
  // { name: "Quests", href: "/quests" },
  // { name: "Trials", href: "/trials" },
  { name: "Memories", href: "/memories" },
  // { name: "Museum", href: "/museum" },
  { name: "Letter", href: "/letter" },
];

export function Header() {
  return (
    <nav className="relative mx-auto mt-4 flex h-10 w-full max-w-[1000px] items-center rounded-lg border-2 border-black bg-[#9ebed2] px-3">
      <Link href="/" className="font-bold">
        ♡ Happy Birthday &lt;/3
      </Link>

      <div className="absolute left-1/2 flex -translate-x-1/2 gap-8">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>

      <button type="button" aria-label="Toggle music" className="ml-auto">
        ♫
      </button>
    </nav>
  );
}
