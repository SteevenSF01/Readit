"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { merriweather } from "../fonts";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Aos from "aos";
import './../../node_modules/aos/dist/aos.css';
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

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in"
    });
  }, []);
  

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
          theme ? "bg-[#161616] text-white" : "bg-[#efeeee] text-[#161616]"
        } h-full ${merriweather.className}`}
        style={{ padding: "20px" }}
      >
        <div className="md:mt-10" data-aos="fade-up" data-aos-duration="2000">
          <Carousel />
        </div>
        <div className="">
          <AboutUs />
        </div>
        <div className="md:flex gap-5">
          <div className="my-5 md:hidden ">
            <h1
              className={`${merriweather.className} ${
                theme ? "text-white" : "text-[#161616]"
              } my-4`}
            >
              My Favorites
            </h1>
            <div
              className={`${
                arrayFavoris.length == 0 ? "h-[100px] border-[#E00404] " : "min-h-[250px]"
              } ${
                !theme
                  ? "bg-[#efeeee] border-2  text-[#323232] "
                  : " bg-[#323232] text-white "
              } w-full flex overflow-x-scroll items-center gap-x-5 px-5 rounded-xl scrollBar-thumb`}
            >
              <FavorisHome />
            </div>
          </div>
          <div>
            <h1
              className={`${merriweather.className} ${
                theme ? "text-white" : "text-[#161616]"
              } my-4`}
            >
              Genders
            </h1>
            <div
              className={`my-5 lg:my-2 py-5 ${
                theme ? "bg-[#161616]" : "bg-[#efeeee] shadow-[inset_0px_2px_5px_5px_#00000024] "
              } rounded-lg `} 
            >
              <FiltreCategories onFilterChange={handleFilterChange} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-x-2 py-5 md:py-14 relative rounded-lg">
          <input
            type="text"
            placeholder="Search a book..."
            value={inputValue}
            onChange={handleInputChange}
            className={`${
              theme ? "bg-[#323232]" : "bg-white border-2 border-[#161616]"
            } py-2 lg:py-4 w-full md:w-[50%] lg:w-[40%] px-5  rounded-xl`}
          />
        </div>
        <div className="mt-12" data-aos="fade-in">
          <BookCard searchByInput={searchByInput} filters={filter} />
        </div>
        <div className="mb-5 mt-16" data-aos= "fade-out">
          <Newsletter />
        </div>
        <Footer />
      </section>
    </>
  );
}
