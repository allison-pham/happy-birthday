import Link from "next/link";

const links = [
  { name: "Quests", href: "/quests" },
  { name: "Trials", href: "/trials" },
  { name: "Memories", href: "/memories" },
  { name: "Museum", href: "/museum" },
  { name: "Letter", href: "/letter" },
];

export function Header() {
  return (
    <nav className="flex h-10 items-center rounded-lg border-2 border-black bg-[#9ebed2] px-3">
      <Link href="/" className="font-bold">
        ♡ Happy Birthday &lt;/3
      </Link>

      <div className="mx-auto flex gap-8">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>

      <button type="button" aria-label="Toggle music">
        ♫
      </button>
    </nav>
  );
}
