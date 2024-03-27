import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-full justify-around items-center">
      <div className="flex flex-col items-center text-2xl font-semibold">
        <Image
          src="/images/imgacceuil.jpg"
          alt="Profile Picture"
          width={1000}
          height={720}
          className="w-80"
        />
        <h1>Readit</h1>
      </div>
      <Link href={"/login"}>
        <button className="bg-[#F01D19] text-white px-28 py-4 rounded-xl">
          Explore
        </button>
      </Link>
    </main>
  );
}
