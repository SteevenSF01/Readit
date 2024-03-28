"use client";

//Components
import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";
import FiltreCategories from "../components/carousel/filtreCategorie/FiltreCategories";
import FavorisHome from "../components/favorisHome/FavorisHome";
import BookCard from "../components/bookCard/BookCard";

//imports
import { useSelector } from "react-redux";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { merriweather } from "../fonts";

export default function HomePage() {
  const theme = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <section
        className={`${
          theme ? "bg-[#161616] text-white" : "bg-white text-[#161616]"
        } h-full ${merriweather.className}`}
      >
        <Navbar />
        <div className="w-full flex justify-center items-center gap-x-2 mt-2 relative">
          <input
            type="text"
            placeholder="Search a book..."
            className={`${
              theme ? "bg-[#323232]" : "bg-white border-2 border-[#161616]"
            } w-80 py-2 px-5 rounded-xl`}
          />
          <MagnifyingGlassIcon
            className={`w-6 h-6 absolute top-2 right-14 ${
              theme ? "text-white" : "text-[#161616]"
            }`}
          />
        </div>
        <div>
          <Carousel />
        </div>
        <h1 className="flex justify-end px-5 my-4 w-full">My Favorites</h1>
        <div>
          <FavorisHome />
        </div>
          <h1 className="px-4 my-5">Genders</h1>
        <div className="mb-10">
            <FiltreCategories />
        </div>
        <div className="mb-5 pt-5">
          <BookCard />
        </div>
      </section>
    </>
  );
}
