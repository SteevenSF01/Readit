"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBookData } from "@/app/lib/features/data/data";
import Image from "next/image";

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
          <div className="flex flex-col items-center justify-center py-12">
            <img className="w-60 h-72 object-cover" />
            <div className="w-80">
              <h1 className="text-4xl font-bold mt-5">
                {data[params.detailsID].title}
              </h1>
              <p className="text-xl font-bold mt-5">
                Author : &nbsp;
                <span>{data[params.detailsID].authors}</span>
              </p>
              <p className="text-xl font-bold mt-5">
                Genre :&nbsp;
                <span>{bookGenre(data[params.detailsID].genre_list)}</span>
              </p>
              <p className="text-xl mt-5">
                Description :&nbsp;
                <span>{data[params.detailsID].description}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
