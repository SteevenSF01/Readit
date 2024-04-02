import { roboto } from "@/app/fonts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookData } from "@/app/lib/features/data/data";
import Image from "next/image";

export default function BestSellers() {
  const { data, loading, error } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

  if (loading) {
    return <div>The books are loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const randomBestSellers = [];

  function random_item(randomArray, items) {
    while (randomArray.length < 10) {
      randomArray.push(items[Math.floor(Math.random() * items.length)]);
    }
  }

  if (data) {
    random_item(randomBestSellers, data);
  }

  return (
    <>
      <section className="pt-5 pb-10">
        <h1 className={`my-5 text-end text-xl ${roboto.className}`}>
          Best-Sellers
        </h1>
        <div className="flex mx-auto overflow-scroll">
          <div className="w-fit flex h-[350px] rounded-xl bg-[#323232] gap-x-5 items-center px-5 ">
            {randomBestSellers.map((book, i) => {
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
