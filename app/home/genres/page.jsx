'use client'
import PickerUser from "@/app/components/pickerUser/PickerUser";
import { useSelector } from "react-redux";
import { roboto } from "@/app/fonts";

export default function GenrePage() {
    const theme  = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <section className={`${theme? 'bg-[#161616] text-white':'bg-white text-[#161616]'}`}>
        <h1 className={`px-3 pt-5 ${roboto.className}`}>Top Reader s pick</h1>
        <div className="py-3">
        <PickerUser />
        </div>
      </section>
    </>
  );
}
