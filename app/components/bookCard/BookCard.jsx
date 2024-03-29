import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookData } from "@/app/lib/features/data/data";
import { HeartIcon as CoeurVide } from "@heroicons/react/24/outline";
import { HeartIcon as CoeurPlein } from "@heroicons/react/24/solid";
import { toggleFavori } from "@/app/lib/features/favoris/FavorisSlice";
import Image from "next/image";
import "./bookcard.css";

export default function BookCard() {
  const theme = useSelector((state) => state.theme.darkMode);
  const favoris = useSelector((state) => state.favoris);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <section
        className={`${
          !theme ? "bg-white text-[#323232] " : " bg-[#323232] text-white "
        }`}
      >
        <h1 className="ps-5 pt-5 my-5">
          <strong>All books</strong>
        </h1>
        <div className="flex flex-wrap justify-center gap-5 h-[500px] overflow-y-scroll scrollBar-thumb">
          {data &&
            data.map((book, i) => {
              return (
                <div
                  className={`${
                    !theme
                      ? "bg-white text-[#323232] "
                      : " bg-black text-white "
                  } rounded-xl overflow-hidden w-[45%] `}
                  key={i}
                >
                  <div className=" relative">
                    {!favoris[book.id] ? (
                      <CoeurVide
                        className="w-10 h-10 absolute top-2  left-2  text-[#E00404] "
                        onClick={() => dispatch(toggleFavori({ id: book.id }))}
                      />
                    ) : (
                      <CoeurPlein
                        className="w-10 h-10 absolute top-2 left-2 text-[#E00404]"
                        onClick={() => dispatch(toggleFavori({ id: book.id }))}
                      />
                    )}
                    <Image
                      src={book.image_url}
                      width={320}
                      height={480}
                      alt={`The cover of ${book.title}`}
                      className="h-[150px]"
                    />
                  </div>
                  <div className="py-3 relative flex flex-col items-center h-[150px]">
                    <h1 className="text-center line-clamp-1">{book.title}</h1>
                    <ul>
                      <li>
                        <strong>Rating: </strong>
                        {book.rating}
                      </li>
                    </ul>
                    <button className="bg-[#E00404] text-white absolute bottom-5 right-5 px-4 py-1 rounded-xl">
                      More details
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
