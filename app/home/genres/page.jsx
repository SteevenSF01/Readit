'use client'
import PickerUser from "@/app/components/pickerUser/PickerUser";
import { merriweather } from "@/app/fonts";
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookData } from "@/app/lib/features/data/data";


//Import components
import BestSellers from "@/app/components/bestSellers/BestSellers";

export default function GenrePage() {
  const { data, loading, error } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const router = useRouter();
  const theme  = useSelector((state) => state.theme.darkMode);
  const randomBestSellers = [];
  const fiction = []
  const fantasy = []
  const mythology = []
  const crime = []
  const classics = []
  const bdsm = []

  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);
  if (loading) {
    return <div>The books are loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  function random_item(randomArray, items) {
    while (randomArray.length < 10) {
      randomArray.push(items[Math.floor(Math.random() * items.length)]);
    }
  }

  function random_item_filter(randomArray, items, genre) {
    const filteredItems = items.filter((book) => book.genres.includes(genre));
  
    while (randomArray.length < 10 && filteredItems.length > 0) {
      randomArray.push(filteredItems.splice(Math.floor(Math.random() * filteredItems.length), 1)[0]);
    }
  }
  
  if (data) {
    random_item(randomBestSellers, data);
    random_item_filter(fiction, data , 'Fiction');
    random_item_filter(fantasy, data , 'Fantasy');
    random_item_filter(mythology, data , 'Mythology');
    random_item_filter(crime, data , 'Crime');
    random_item_filter(classics, data , 'Classics');
    random_item_filter(bdsm, data , 'Bdsm');
  }
  console.log(fiction);


  return (
    <>
      <section className={`${theme? 'bg-[#161616] text-white':'bg-white text-[#161616]'} relative`}>
        <h1 className={`px-3 pt-5 mb-10 ${merriweather.className}`}>Top Reader s pick</h1>
        <button className="absolute top-14 flex px-3 gap-x-3 items-center hover:underline" onClick={()=> router.push('/home')}><ArrowLeftIcon className="w-6 h-6"/> Back to home page</button>
        <div className="py-3">  
        <PickerUser />
        </div>

        <div className="px-5">
        <h1 className={`my-5 text-end text-2xl ${merriweather.className}`}>
          Best-Sellers
        </h1>
          <BestSellers books={randomBestSellers} />
        </div>

        <div className="px-5">
        <h1 className={`my-5 text-end text-2xl ${merriweather.className}`}>
          Fiction
        </h1>
          <BestSellers books={fiction} />
        </div>
        
        <div className="px-5">
        <h1 className={`my-5 text-end text-2xl ${merriweather.className}`}>
        Fantasy
        </h1>
          <BestSellers books={fantasy} />
        </div>
        
        <div className="px-5">
        <h1 className={`my-5 text-end text-2xl ${merriweather.className}`}>
        Mythology
        </h1>
          <BestSellers books={mythology} />
        </div>
        
        <div className="px-5">
        <h1 className={`my-5 text-end text-2xl ${merriweather.className}`}>
        Crime
        </h1>
          <BestSellers books={crime} />
        </div>

        <div className="px-5">
        <h1 className={`my-5 text-end text-2xl ${merriweather.className}`}>
        Classics
        </h1>
          <BestSellers books={classics} />
        </div>

        <div className="px-5">
        <h1 className={`my-5 text-end text-2xl ${merriweather.className}`}>
        Bdsm
        </h1>
          <BestSellers books={bdsm} />
        </div>

      </section>
    </>
  );
}


