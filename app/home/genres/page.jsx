'use client'
import PickerUser from "@/app/components/pickerUser/PickerUser";
import { useSelector } from "react-redux";
import { roboto } from "@/app/fonts";
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/navigation";

//Import components
import BestSellers from "@/app/components/bestSellers/BestSellers";

export default function GenrePage() {
  const router = useRouter();
  const theme  = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <section className={`${theme? 'bg-[#161616] text-white':'bg-white text-[#161616]'} relative`}>
        <h1 className={`px-3 pt-5 mb-10 ${roboto.className}`}>Top Reader s pick</h1>
        <button className="absolute top-14 flex px-3 gap-x-3 items-center hover:underline" onClick={()=> router.push('/home')}><ArrowLeftIcon className="w-6 h-6"/> Back to home page</button>
        <div className="py-3">  
        <PickerUser />
        </div>
        <div className="px-5">
          <BestSellers />
        </div>
      </section>
    </>
  );
}
