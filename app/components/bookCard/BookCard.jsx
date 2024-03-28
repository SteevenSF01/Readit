import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookData } from "@/app/lib/features/data/data";
import Image from "next/image";
import "./bookcard.css";

export default function BookCard() {
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
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
  return (
    <>
      <section
        className={`${
          !theme ? "bg-white text-[#323232] " : " bg-[#323232] text-white "
        }`}
      >
        <h1 className="ps-5 pt-5 my-5">
          <strong>All books</strong>
        </h1>
        <div className="flex flex-wrap justify-center gap-5 h-[500px] overflow-y-scroll scrollBar-thumb">
          {data &&
            data.map((book, i) => {
              return (
                <div className="bg-black rounded-xl overflow-hidden w-[45%] ">
                  <div className=" ">
                    <Image
                      src={book.image_url}
                      width={320}
                      height={480}
                      alt={`The cover of ${book.title}`}
                      className="h-[150px]"
                    />
                  </div>
                  <div className="py-3 px-4">
                    <h1 className="text-center">{book.title}</h1>
                    <ul>
                      <li className="line-clamp-2">
                        <strong>Description: </strong>
                        {book.description}
                      </li>
                      <li>
                        <strong>Rating: </strong>
                        {book.rating}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
