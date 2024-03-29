import { useSelector, useDispatch } from "react-redux";
import { HeartIcon as CoeurVide } from "@heroicons/react/24/outline";
import { HeartIcon as CoeurPlein } from "@heroicons/react/24/solid";
import { toggleFavori } from "@/app/lib/features/favoris/favorisSlice";

export default function FavorisHome() {
  const theme = useSelector((state) => state.theme.darkMode);
  const arrayFavoris = useSelector((state) => state.favoris.arrayFavoris);
  const dispatch = useDispatch()

  return (
    <>
      <section className={`${arrayFavoris.length == 0 ?'h-[100px]' : 'min-h-[250px]'} ${
                !theme ? "bg-white text-[#323232] " : " bg-[#323232] text-white "
              } w-full flex overflow-y-scroll items-center gap-x-5 px-5`}>
        {arrayFavoris.length === 0 && (<p className="text-center w-full">Any book in favorites yet </p>)}
        {arrayFavoris.map((book, i) => {
          const estFavoris = arrayFavoris.some((item) => item.id === book.id);
          return (
            <div
              className={`${
                !theme ? "bg-white text-[#323232] " : " bg-black text-white "
              } rounded-xl  h-[200px] w-fit flex `}
              key={i}
            >
              <div className=" relative w-[170px] h-full p-1">
                {estFavoris ? (
                  <CoeurPlein
                    className="w-10 h-10 absolute top-2 left-2 text-[#E00404]"
                    onClick={() => dispatch(toggleFavori(book))}
                  />
                ) : (
                  <CoeurVide
                    className="w-10 h-10 absolute top-2  left-2  text-[#E00404] "
                    onClick={() => dispatch(toggleFavori(book))}
                  />
                )}
                <img
                  src={book.image_url}
                  width={420}
                  height={380}
                  alt={`The cover of ${book.title}`}
                  className="rounded-lg h-full"
                />
              </div>
              <div className="py-4 px-2 relative flex flex-col items-center h-full w-[180px] ">
                <h1 className="text-center ">{book.title}</h1>
                <ul>
                  <li>
                    <strong>Rating: </strong>
                    {book.rating}
                  </li>
                </ul>
                <button className="bg-[#E00404] text-white absolute bottom-5 right-5 px-4 py-1 rounded-xl">
                  More details
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
