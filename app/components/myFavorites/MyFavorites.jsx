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
      <section className={`${arrayFavoris.length == 0 ?'h-[100px]' : 'min-h-[250px]'} w-full bg-[#323232] flex overflow-scroll items-center gap-x-5`}>
        {arrayFavoris.length === 0 && (<p className="text-center w-full">Any book in favorites yet </p>)}
        {arrayFavoris.map((book, i) => {
          const estFavoris = arrayFavoris.some((item) => item.id === book.id);
          return (
            <div
              className={`${
                !theme ? "bg-white text-[#323232] " : " bg-black text-white "
              } rounded-xl h-[200px] w-[350px] `}
              key={i}
            >
              <div className=" relative">
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
                {/* <Image
                  src={book.image_url}
                  width={320}
                  height={480}
                  alt={`The cover of ${book.title}`}
                  className="h-[150px]"
                /> */}
              </div>
              <div className="py-3 relative flex flex-col items-center h-[150px] w-[300px]">
                <h1 className="text-center line-clamp-1">{book.title}</h1>
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
