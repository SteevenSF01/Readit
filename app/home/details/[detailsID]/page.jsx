"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBookData } from "@/app/lib/features/data/data";
import Image from "next/image";
import { roboto, merriweather } from "@/app/fonts";

const DetailsPage = ({ params }) => {
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
            theme ? "bg-[#323232] text-white" : "bg-white text-[#161616]"
          } `}
        >
          <div className="flex flex-col items-center justify-center py-12 ">
            <div className="w-56 h-72">
              <Image
                src={data[params.detailsID].image_url}
                alt={data[params.detailsID].title}
                width={450}
                height={500}
                className=" h-full w-full object-fill rounded-xl"
              />
            </div>
            <div className="w-80">
              <h1 className={`text-5xl text-center font-medium mt-5`}>
                {data[params.detailsID].title}
              </h1>
              <p
                className={`text-xl font-semibold mt-5 ${merriweather.className}`}
              >
                Author : &nbsp;
                <span className={`font-normal ${roboto.className}`}>
                  {data[params.detailsID].authors}
                </span>
              </p>
              <p
                className={`text-xl mt-5 font-semibold ${merriweather.className}`}
              >
                Genre :&nbsp;
                <span className={`font-normal ${roboto.className}`}>
                  {bookGenre(data[params.detailsID].genre_list)}
                </span>
              </p>
              <p
                className={`text-xl mt-5 font-semibold ${merriweather.className}`}
              >
                Description :&nbsp;
                <span className={`font-normal ${roboto.className}`}>
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
