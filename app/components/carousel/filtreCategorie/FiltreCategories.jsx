"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { roboto } from "@/app/fonts";
//css pour la scrollbar
import "./Filtre.css";
//Data de l'api
import { fetchBookData } from "@/app/lib/features/data/data";

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

  //Fonction  pour filtrer les livres par catégorie, eliminant les doubles

  let uniqueGenres = [];
  if (data) {
    data.forEach((book) => {
      //split la phrase apres chaques virgules, creation d'un array
      const genres = book.genre_list.split(",");
      //un foreach pour  ajouter chaque genre dans le tableau uniqueGenres si il n'y est pas déja en supprimant les possibles espaces vide
      genres.forEach((genre) => {
        uniqueGenres.push(genre.trim());
      });
    });
    //avec new Set (), on elimine les doublons et on recupere un simple tableau
    uniqueGenres = Array.from(new Set(uniqueGenres));
  }

  //Filtrer les genres par ordre alphabetique
  uniqueGenres.sort(function (a, b) {
    //si a  est avant b dans l'alphabet, il sortira avant
    if (a < b) {
      return -1;
    }
    //si  a est après b dans l'alphabet, il sortira après
    if (a > b) {
      return 1;
    }
    //si  a et b sont identiques, il gardera sa position
    return 0;
  });

  return (
    <>
      <section className="flex justify-center">
        <div className="scrollBar-thumb h-[200px] flex flex-wrap justify-center gap-5  overflow-y-scroll w-[100%] pb-10`">
          {uniqueGenres &&
            uniqueGenres.map((genre, i) => {
              return (
                <button
                  className={`${
                    theme
                      ? "bg-[#323232] text-white"
                      : "bg-white text-[#323232] border-2 border-[#323232] shadow-[0_3px_10px_rgb(0,0,0,0.5)] "
                  } px-5 py-2 rounded-xl text-[15px] w-[40%] md:w-[80%] h-[35%] ${roboto.className} `}
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
