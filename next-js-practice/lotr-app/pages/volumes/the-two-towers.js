import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function theFellowshipOfTheRing() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <Link href="/volumes">All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            <strong>{book.ordinal}</strong>: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        alt="The Two Towers"
      />
      <div></div>
      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <div></div>
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </div>
  );
}
