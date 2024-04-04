'use client'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { merriweather } from "../fonts";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import Carousel from "../components/carousel/Carousel";
import FiltreCategories from "../components/filtreCategorie/FiltreCategories";
import FavorisHome from "../components/myFavorites/MyFavorites";
import BookCard from "../components/bookCard/BookCard";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import { searchBook } from "../lib/features/filter/filterSlice";


export default function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const theme = useSelector((state) => state.theme.darkMode);
  const searchByInput = useSelector((state) => state.filter.searchBook);
  const dispatch = useDispatch();
  const arrayFavoris = useSelector((state) => state.favoris.arrayFavoris);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch(searchBook(e.target.value));
  };

  const [filter, setFilter] = useState("");

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <>
      <section
        className={`${
          theme ? "bg-[#161616] text-white" : "bg-[#f0f4f8] text-[#161616]"
        } h-full ${merriweather.className}`}
        style={{ padding: "20px" }}
      >

        <div>
          <Carousel />
        </div>
        <div className="md:grid grid-cols-2 gap-5">
          <div className="my-5">
            <h1 className={`${merriweather.className} ${theme ? "text-white" : "text-[#161616]"} my-4`}>My Favorites</h1>
            <div         className={`${
          arrayFavoris.length == 0 ? "h-[100px]" : "min-h-[250px]"
        } ${
          !theme ? "bg-white text-[#323232] " : " bg-[#323232] text-white "
        } w-full flex overflow-x-scroll items-center gap-x-5 px-5 rounded-xl scrollBar-thumb`}
>

            <FavorisHome />
            </div>
          </div>
          <div className="my-5">
            <h1 className={`${merriweather.className} ${theme ? "text-white" : "text-[#161616]"} my-4`}>Genders</h1>
            <FiltreCategories onFilterChange={handleFilterChange} />
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-x-2 pt-5 relative">
          <input
            type="text"
            placeholder="Search a book..."
            value={inputValue}
            onChange={handleInputChange}
            className={`${
              theme ? "bg-[#323232]" : "bg-white border-2 border-[#161616]"
            } w-80 py-2 px-5 rounded-xl`}
            style={{ width: "100%" }} 
          />
          <MagnifyingGlassIcon
            className={`w-6 h-6 absolute top-17 right-7 ${
              theme ? "text-white" : "text-[#161616]"
            }`}
          />
        </div>
        <div className="mt-10">
          <BookCard searchByInput={searchByInput} filters={filter} />
        </div>
        <div>
          <Newsletter />
        </div>
        <Footer />
      </section>
    </>
  );
}
