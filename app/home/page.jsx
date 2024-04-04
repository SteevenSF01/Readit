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
import AboutUs from "../components/aboutUs/AboutUs";


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
        <div className="">
          <AboutUs />
        </div>
        <div className="md:flex gap-5">
          <div className="my-5 md:hidden ">
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
          <div className="my-5 lg:my-10">
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
            } py-2 w-full md:w-[50%] lg:w-[40%] px-5  rounded-xl`}
          />

        </div>
        <div className="mt-16">
          <BookCard searchByInput={searchByInput} filters={filter} />
        </div>
        <div className="mb-5 mt-16">
          <Newsletter />
        </div>
        <Footer />
      </section>
    </>
  );
}
