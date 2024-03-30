"use client";

//Components
import Carousel from "../components/carousel/Carousel";
import FiltreCategories from "../components/filtreCategorie/FiltreCategories";
import FavorisHome from "../components/myFavorites/MyFavorites";
import BookCard from "../components/bookCard/BookCard";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";

//imports
import { useSelector, useDispatch } from "react-redux";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { merriweather } from "../fonts";
import { useState } from "react";
import { searchBook } from "../lib/features/filter/filterSlice";


export default function HomePage() {
  const [inputValue, setInputValue] = useState('')
  const theme = useSelector((state) => state.theme.darkMode);
  const searchByInput = useSelector((state) => state.filter.searchBook)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch(searchBook(e.target.value))
  }
  return (
    <>
      <section
        className={`${
          theme ? "bg-[#161616] text-white" : "bg-white text-[#161616]"
        } h-full ${merriweather.className}`}
      >
        <div className="w-full flex justify-center items-center gap-x-2 pt-5 relative">
          <input
            type="text"
            placeholder="Search a book..."
            value={inputValue}
            onChange={handleInputChange}
            className={`${
              theme ? "bg-[#323232]" : "bg-white border-2 border-[#161616]"
            } w-80 py-2 px-5 rounded-xl`}
          />
          <MagnifyingGlassIcon
            className={`w-6 h-6 absolute top-17 right-14 ${
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
        <div className="mb-5">
          <FiltreCategories />
        </div>
        <div className=" pt-5 ">
          <BookCard searchByInput={searchByInput} />
        </div>
        <div>
          <Newsletter />
        </div>
        <Footer />
      </section>
    </>
  );
}
