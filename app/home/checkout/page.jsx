"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBookData } from "@/app/lib/features/data/data";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  ajoutQuantite,
  suppQuantite,
  removeQuantite,
} from "@/app/lib/features/cart/cartSlice";

const CheckoutPage = () => {
    const books = useSelector((state) => state.cart.produits);
  const dispatch = useDispatch();
  const theme = useSelector((state)=> state.theme.darkMode)


  return (
    <>
    <section className={`${theme ? 'bg-[#161616] text-white' : 'bg-white text-[#161616] '} pt-5`}>

      <h1 className="text-center text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-wrap justify-center h-[500px] md:h-[480px] overflow-auto scrollBar-thumb my-10 md:justify-around py-5">
        {books &&
          books.map((book, id) => {
            return (
              <>
                <div
                  className={`flex items-center justify-start rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 ps-20 w-[90%] md:w-[45%] mb-5 ${theme? 'bg-[#323232] text-white' : 'bg-white text-[#161616] '}`}
                  key={id}
                >
                  <img
                    className="hidden md:block w-32 h-auto mr-8"
                    src={book.image_url}
                    alt={book.title}
                    />
                  <div>
                    <h2 className="text-xl font-semibold mb-4">{book.title}</h2>
                    <p className="mb-2">Price by unit: ${book.prix}</p>
                    <label className="flex items-center mb-2">
                      Quantity:
                      <PlusIcon
                        className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-6 h-6 mx-3 py-1 px-1 rounded-xl bg-[#E00404] text-white"
                        onClick={() => dispatch(ajoutQuantite(book))}
                        />
                      <span>{book.total} </span>
                      <MinusIcon
                        className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-6 h-6 mx-3 py-1 px-1 rounded-xl bg-[#E00404] text-white"
                        onClick={() => dispatch(suppQuantite(book))}
                        />
                      <TrashIcon
                        className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-6 h-6 mx-3 py-1 px-1 rounded-xl bg-[#E00404] text-white"
                        onClick={() => dispatch(removeQuantite(book.id))}
                        />
                    </label>
                    <p className="mb-2">Total price: ${book.prixActuel}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
          </section>
    </>
  );
};

export default CheckoutPage;
