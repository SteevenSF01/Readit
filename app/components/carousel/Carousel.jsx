'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookData } from '@/app/lib/features/data/data';

const Carousel = () => {
  const dispatch = useDispatch();
  const { selectedBooks, loading, error } = useSelector((state) => state.book);
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImages(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <div>The books are loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mt-10 mb-5 flex flex-col items-center'>
      {/* Carousel container */}
      <div className='w-[100%] h-60 flex bg-[#323232] rounded-md overflow-hidden relative justify-center items-center'>
        {!showImages && <div>Loading...</div>}
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className='w-full h-full object-fill absolute flex transition-all duration-300 '>
          {showImages &&
            selectedBooks.map((book, i) => (
              <div key={i} className='relative shrink-0 w-full h-full'>
                <Image
                  className='object-fill w-full h-full pointer-events-none'
                  alt={`carousel-image-${i}`}
                  width={540}
                  height={420}
                  src={book.image_url}
                />
              </div>
            ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className='flex justify-between w-full mt-6'>
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`px-12 py-2 font-bold bg-[#E00404] rounded-lg ${currentImg === 0 && 'opacity-50'}`}>
          {'<'}
        </button>
        <button
          disabled={selectedBooks ? currentImg === selectedBooks.length - 1 : ''}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`px-12 py-2 font-bold bg-[#E00404] rounded-lg ${
            selectedBooks ? (currentImg === selectedBooks.length - 1 ? 'opacity-50' : '') : ''
          }`}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;

