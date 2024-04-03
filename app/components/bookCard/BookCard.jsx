import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookData } from "@/app/lib/features/data/data";
import { HeartIcon as CoeurVide } from "@heroicons/react/24/outline";
import { HeartIcon as CoeurPlein } from "@heroicons/react/24/solid";
import { toggleFavori } from "@/app/lib/features/favoris/favorisSlice";
import LoginModal from "../loginModal/LoginModal";
import { useState } from "react";
import { roboto } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import "./bookcard.css";
import { ajoutPanier } from "@/app/lib/features/cart/cartSlice";

export default function BookCard({ searchByInput, filters }) {
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.login.logged);
  const arrayFavoris = useSelector((state) => state.favoris.arrayFavoris);
  const { data, loading, error } = useSelector((state) => state.book);

  const [testComponents, setTestComponents] = useState(false);

  const filterBooks = (books, searchInput, selectedFilter) => {
    return books.filter((book) => {
      const titleMatch = book.title
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const genreMatch =
        !selectedFilter ||
        selectedFilter === "All" ||
        book.genre_list.includes(selectedFilter);
      return titleMatch && genreMatch;
    });
  };
  let filteredBooks = [];
  if (data) {
    filteredBooks = filterBooks(data, searchByInput, filters);
  }

  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

  if (loading) {
    return <div>The books are loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <section
        className={`${
          !theme ? "bg-white text-[#323232] " : " bg-[#323232] text-white "
        } rounded-xl pb-5`}
      >
        <h1 className="ps-5 pt-5 my-5">
          <strong>All books</strong>
        </h1>
        <div className="flex flex-wrap justify-center gap-5 h-[400px] overflow-y-scroll scrollBar-thumb relative ">
          {testComponents && !logged && (
            <div
              className={`w-full h-screen bg-black fixed top-0 right-0 bg-opacity-55 backdrop-blur-md flex justify-center items-center z-40`}
            >
              <LoginModal setTestComponents={setTestComponents} />
            </div>
          )}
          {data &&
            filteredBooks.map((book, i) => {
              const estFavoris = arrayFavoris.some(
                (item) => item.id === book.id
              );
              return (
                <div
                  className={`${
                    !theme
                      ? "bg-white text-[#323232] "
                      : " bg-black text-white "
                  } rounded-xl overflow-hidden w-[45%] h-[280px] `}
                  key={i}
                >
                  <div className=" relative w-full h-[50%] ">
                    <div className="flex justify-center items-center w-full h-full bg-gradient-to-b from-slate-900 from-10% via-black via-75% to-black absolute top-0 right-0 opacity-0 hover:opacity-90 transition-all duration-300">
                      <button className="bg-[#E00404] my-5 py-1 px-6 hover:bg-[#e00404ac] rounded-xl" onClick={()=> dispatch(ajoutPanier(book))}>Buy</button>
                    </div>
                    {estFavoris ? (
                      <CoeurPlein
                        className="w-10 h-10 absolute top-2 left-2 text-[#E00404]"
                        onClick={() => dispatch(toggleFavori(book))}
                      />
                    ) : (
                      <CoeurVide
                        className="w-10 h-10 absolute top-2  left-2  text-[#E00404] "
                        onClick={() =>
                          logged
                            ? dispatch(toggleFavori(book))
                            : setTestComponents(true)
                        }
                      />
                    )}
                    <Image
                      src={book.image_url}
                      width={320}
                      height={480}
                      alt={`The cover of ${book.title}`}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="py-3 px-2 relative flex flex-col items-center h-[50%]">
                    <h1
                      className={`text-center line-clamp-2 mb-1 text-[13px] ${roboto.className}`}
                    >
                      {book.title}
                    </h1>
                    <ul>
                      <li className="flex text-[13px]">
                        <p>Rating :</p>
                        <p className={`${roboto.className}`}>
                          &nbsp;{book.rating}
                        </p>
                      </li>
                    </ul>
                    <Link href={`/home/details/${book.id - 1}`}>
                      <button
                        className={`bg-[#E00404] text-white absolute bottom-5 right-4 px-4 py-1 rounded-xl ${roboto.className}`}
                      >
                        More details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
