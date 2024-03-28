"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookData } from "@/app/lib/features/data/data";
import './Filtre.css'

export default function FiltreCategories() {
  const theme = useSelector((state) => state.theme.darkMode);
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

  let uniqueGenres = [];
  if (data) {
    data.forEach((book) => {
      const genres = book.genre_list.split(",");
      genres.forEach((genre) => {
        uniqueGenres.push(genre.trim());
      });
    });
    uniqueGenres = Array.from(new Set(uniqueGenres));
  }

  console.log(uniqueGenres);
  return (
    <>
      <section className="flex justify-center">
        <div className="scrollBar-thumb h-[200px] flex flex-wrap justify-center gap-5  overflow-y-scroll w-[70%] pb-10`">
          {uniqueGenres &&
            uniqueGenres.map((genre, i) => {
              return (
                <button
                  className={`${
                    theme
                      ? "bg-[#323232] text-white"
                      : "bg-white text-[#323232] border-2 border-[#323232] shadow-[0_3px_10px_rgb(0,0,0,0.5)] "
                  } px-5 py-2 rounded-xl w-full md:w-[80%] h-[35%] `}
                  key={i}
                >
                  {genre}
                </button>
              );
            })}
        </div>
      </section>
    </>
  );
}
