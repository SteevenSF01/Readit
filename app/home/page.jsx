"use client";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";

export default function HomePage() {
  const theme = useSelector((state) => state.theme.darkMode)
  return (
    <>
      <section className={`${theme? 'bg-[#161616]' : 'bg-white'} h-full`}>

      <Navbar />
      <div><input type="text" placeholder="Search a book..." /></div>
      </section>
    </>
  );
}
