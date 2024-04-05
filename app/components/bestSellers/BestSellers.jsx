import Image from "next/image";
import Link from "next/link";
import { roboto } from "@/app/fonts";

//components for different categories

export default function BestSellers({ books }) {
  return (
    <>
      <section className="pt-5 pb-10">
        <div className="flex mx-auto overflow-x-scroll scrollBar-thumb">
          <div className="w-fit flex h-[350px] rounded-xl bg-[#323232] gap-x-5 items-center px-5 ">
            {books.map((book, i) => {
              return (
                <div className="relative w-72 h-80 " key={i}>
                  <Image
                    className="w-[400px] h-full object-fill"
                    src={book.image_url}
                    width={250}
                    height={300}
                    alt={book.title}
                  />
                  <div className="w-full h-full bg-gradient-to-b from-slate-900 from-10% via-black via-75% to-black absolute top-0 right-0 opacity-0 hover:opacity-90 transition-all duration-300 flex flex-col justify-center items-center p-5 overflow-auto scrollBar-thumb">
                    <div className={`flex flex-col justify-center items-center w-[85%] h-full gap-y-5 ${roboto.className}`}>
                      <p className="text-white text-center ">Title : {book.title}</p>
                      <p className="text-white text-center "> Authors : {book.authors}</p>
                      <p className="text-white ">Rating : {book.rating}</p>
                      <p className="text-white ">{book.num_pages} Pages</p>
                    </div>
                    <Link
                      href={`/home/details/${book.id - 1}`}
                      className="flex justify-center"
                    >
                      <button className="bg-[#E00404] my-5 py-1 px-6 hover:bg-[#e00404ac] rounded-xl ">
                        More Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
