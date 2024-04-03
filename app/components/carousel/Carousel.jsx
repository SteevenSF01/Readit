"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBookData } from '@/app/lib/features/data/data'

const Carousel = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.book);
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)

    // useEffect to get the initial carousel size
    useEffect(() => {
        let elem = carouselRef.current 
        let { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

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
        <div className='mt-10 mb-5 flex flex-col items-center'>
            {/* Carousel container */}
            <div className='w-[100%] h-60 flex bg-red-500  rounded-md overflow-hidden relative'> {/*changer la taille pour le responsive desktop */}
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width
                    }}
                    className='w-full h-full object-fill absolute flex transition-all duration-300 '>
                    {/* Map through data to render images */}
                    {data && data.map((book, i) => (
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
            <div className='flex justify-center mt-6'>
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
                >
                    {"<"}
                </button>
                <button
                    disabled={data ? currentImg === data.length - 1 : ''}
                    onClick={() => setCurrentImg(prev => prev + 1)}
                    className={`border px-4 py-2 font-bold ${data? currentImg === data.length - 1 : '' && 'opacity-50'}`}
                >
                    {">"}
                </button>
            </div>
        </div>
    )
}

export default Carousel