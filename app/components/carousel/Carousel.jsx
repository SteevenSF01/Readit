"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookData } from "@/app/lib/features/data/data";

const Carousel = () => {
  const dispatch = useDispatch();
  const { selectedBooks, loading, error } = useSelector((state) => state.book);
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);
  const theme = useSelector((state)=> state.theme.darkMode)
  const [showImages, setShowImages] = useState(false);

  // useEffect pour le data
  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

  //useEffect pour le carousel
  useEffect(() => {
    let elem = carouselRef.current;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  // useEffect pour le timeout et afficher les images dans le carousel
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImages(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  // useEffect pour le carousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % selectedBooks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedBooks.length]);

  if (loading) {
    return <div>The books are loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`mb-5 flex flex-col items-center justify-center ${theme ? 'bg-[#323232]' :'bg-[#efeeee]'} bg-opacity-20`}>
      {/* Carousel container */}
      <div className="w-full md:w-[50%] lg:w-[30%] h-60 md:h-96 lg:h-[500px] flex bg-[#323232] rounded-md overflow-hidden relative justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {!showImages && <p className="text-white">Loading...</p>}
        {/* Image container */}
        <div
          className="w-[100%] h-full object-fill absolute flex transition-all duration-300 "
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
        >
          {showImages &&
            selectedBooks.map((book, i) => (
              <div key={i} className="relative shrink-0 w-full h-full">
                <Image
                  className="object-fill w-full h-full pointer-events-none"
                  alt={`carousel-image-${i}`}
                  width={540}
                  height={420}
                  src={book.image_url}
                />
                <div className="flex flex-col p-5 items-center w-full h-full bg-gradient-to-b from-slate-900 from-10% via-black via-75% to-black absolute top-0 right-0 opacity-0 hover:opacity-90 transition-all duration-300 gap-5 overflow-auto">
                  <h1 className="my-3 text-white md:text-4xl">Quotes</h1>
                  <p className="text-[13px] text-center text-white md:text-xl">{book.Quote1}</p>
                  <p className="text-[13px] text-center text-white md:text-xl">{book.Quote2}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
