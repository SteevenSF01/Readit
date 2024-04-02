import Image from "next/image";

export default function BestSellers({books}) {

  return (
    <>
      <section className="pt-5 pb-10">
        <div className="flex mx-auto overflow-x-scroll scrollBar-thumb">
          <div className="w-fit flex h-[350px] rounded-xl bg-[#323232] gap-x-5 items-center px-5 ">
            {books.map((book, i) => {
              return (
                <div className="bg-lime-200 w-72 h-80 " key={i}>
                  <Image
                    className="w-[400px] h-full object-fill"
                    src={book.image_url}
                    width={250}
                    height={300}
                    alt={book.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
