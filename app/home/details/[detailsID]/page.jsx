"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBookData } from "@/app/lib/features/data/data";
import Image from "next/image";
import { roboto, merriweather } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const DetailsPage = ({ params }) => {
  const  router = useRouter();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.darkMode);
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

  const bookGenre = (genres) => {
    const genreList = genres.split(",").map((genre) => genre.trim());
    return genreList.join(" | ");
  };
  return (
    <>
      {data && (
        <div
          className={`w-full min-h-screen ${
            theme ? "bg-[#161616] text-white" : "bg-white text-[#161616]"
          } relative lg:flex justify-center`}
        >
          <button className="absolute top-5 left-7" onClick={()=> router.push('/home')}><ArrowLeftIcon className="w-6 h-6" /></button>
          <div className="flex flex-col  items-center justify-center py-12 lg:flex-row lg:w-[90%] lg:justify-between ">
            <div className="w-56 md:w-80 h-72 lg:w-[45%] lg:h-[450px]">
              <Image
                src={data[params.detailsID].image_url}
                alt={data[params.detailsID].title}
                width={450}
                height={500}
                className=" h-full w-full object-fill rounded-xl"
              />
            </div>
            <div className="w-80 md:w-96 lg:w-[50%]">
              <h1 className={`text-5xl text-center font-medium mt-5 ${merriweather.className}`}>
                {data[params.detailsID].title}
              </h1>
              <p
                className={`text-xl font-semibold mt-5 ${merriweather.className}`}
              >
                Author : &nbsp;
                <span className={`font-normal ${roboto.className} text-[19px]`}>
                  {data[params.detailsID].authors}
                </span>
              </p>
              <p
                className={`text-xl mt-5 font-semibold ${merriweather.className}`}
              >
                Genre :&nbsp;
                <span className={`font-normal ${roboto.className} text-[16px]`}>
                  {bookGenre(data[params.detailsID].genre_list)}
                </span>
              </p>
              <p
                className={`text-xl mt-5 font-semibold ${merriweather.className}`}
              >
                Description :&nbsp;
                <span className={`font-normal ${roboto.className} text-[16px]`}>
                  {data[params.detailsID].description}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
