"use client";

import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { XMarkIcon, Bars3Icon, BookOpenIcon, MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { toggledTheme } from "@/app/lib/features/theme/theme";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ajoutQuantite, removeQuantite, suppQuantite } from "@/app/lib/features/cart/cartSlice";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.darkMode);
  const produits = useSelector((state) => state.cart.produits);
  const [toggle, setToggle] = useState(true);
  const [burgerMenu, setBurgerMenu] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const links = [
    { name: "home", href: "/home" },
    { name: "genres", href: "/home/genres" },
    { name: "contact", href: "/home/contact" },
    { name: "checkout", href: "/home/checkout" },
  ];

  return (
    <nav
      className={`${
        theme ? "bg-[#161616] text-white" : "bg-white text-[#161616] "
      } py-3 px-5 flex justify-end relative items-center`}
    >
      <div className="flex gap-x-4 w-full ">
        <h1
          className="flex items-center me-auto"
          onClick={() => router.push("/home")}
        >
          <BookOpenIcon className="w-6 h-6" />
          &nbsp;Readit
        </h1>

        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller "
            value="synthwave"
            onClick={() => dispatch(toggledTheme())}
          />
          <svg
            className="pt-2 swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="pt-2 swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        <ul className="gap-x-5 items-center hidden md:flex ">
          {links.map((link) => {
            return (
              <Link
                className="cursor-pointer hover:underline"
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
        <div className={`relative block md:hidden `}>
          <div
            className={`flex items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2 px-4 rounded-lg`}
            onClick={() => setBurgerMenu(!burgerMenu)}
          >
            <Bars3Icon className="w-6 h-6" />
          </div>
          {!burgerMenu ? (
            <ul
              className={`${
                theme ? "bg-white text-[#161616]" : "bg-gray-200 text-black"
              } rounded-lg py-2 px-4 top-12 -left-3 absolute flex flex-col z-40`}
            >
              {links.map((link) => {
                return (
                  <Link
                    onClick={() => setBurgerMenu(!burgerMenu)}
                    className="my-1 hover:underline cursor-pointer"
                    key={link.name}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
        <button
          className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-2 rounded-lg cursor-pointer relative  "
          onClick={toggleMenu}
        >
          <div className="size-6 bg-[#E00404] absolute -bottom-3 -right-1 rounded-xl flex justify-center items-center"><p className="text-white">{produits.length}</p></div>
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
      </div>
      <div
        className={`h-screen transition-all duration-500 z-50 absolute top-0 right-0 overflow-hidden p-0  ${
          toggle ? "w-0" : "w-[320px] h-screen px-6 border-s-2 border-black"
        } ${theme ? "bg-[#323232] text-white" : "bg-white text-[#161616]"}`}
      >
        <XMarkIcon
          className={`absolute top-3 right-3 w-6 h-6 cursor-pointer text-[#161616]`}
          onClick={toggleMenu}
        />
        <div className="my-20 flex flex-col">
          {produits.length === 0 && <p>Your basket are empty</p>}
          {produits.map((produit, i) => {
            return (
              <div key={i} className="flex justify-between items-center mb-3">
                <p>{produit.title}</p>
                <div className="flex items-center gap-x-2 my-2">
                  <button
                    className="p-1 rounded-full bg-gray-200 text-gray-600"
                    onClick={() => dispatch(suppQuantite(produit))}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span>{produit.total}</span>
                  <button
                    className="p-1 rounded-full bg-gray-200 text-gray-600"
                    onClick={() => dispatch(ajoutQuantite(produit))}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                  <button
                    className="p-1 rounded-full bg-gray-200 text-gray-600"
                    onClick={() => dispatch(removeQuantite(produit.id))}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
          <button className="bg-[#E00404] text-white py-1 px-5 my-5 rounded-xl uppercase font-semibold border-0 hover:bg-[#e00404ac]" onClick={()=> router.push('/home/checkout')}>checkout</button>
        </div>
        <p className=""></p>
      </div>
    </nav>
  );
}
