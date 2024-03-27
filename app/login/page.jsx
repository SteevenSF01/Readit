"use client";
import { toggledTheme } from "../lib/features/theme/theme";
import { useSelector, useDispatch } from "react-redux";
import { merriweather } from "../fonts";
import { checkLogged } from "../lib/features/login/loginSlice";
import Link from "next/link";

export default function LoginPage() {
  const logged = useSelector((state) => state.login.logged);
  return <>{logged ? <CreateLogin /> : <SigninLogin />}</>;
}

function SigninLogin() {
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  return (
    <>
      <section
        className={`${
          !theme ? "bg-white text-[#161616] " : "bg-[#161616] text-white"
        } flex flex-col px-10 h-full justify-center items-center relative ${
          merriweather.className
        }`}
      >
        <label className="swap swap-rotate absolute right-5 top-5 ">
          <input
            type="checkbox"
            className="theme-controller "
            value="synthwave"
            onClick={() => dispatch(toggledTheme())}
          />
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl lg:text-4xl font-semibold text-center">
            Welcome back to Readit
          </h1>
          <p className="text-center mt-2 lg:mt-5 ">
            Sign in to explore, buy and manage books
          </p>
          <form className="flex flex-col gap-4 my-5">
            <label htmlFor="text">
              Username :
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 lg:py-3 rounded-xl border-2"
              />
            </label>
            <label htmlFor="password">
              {" "}
              Password :
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 lg:py-3 rounded-xl border-2"
              />
            </label>
          </form>
          <button className="bg-[#F01D19] text-white px-28 py-4 rounded-xl">
            Sign in
          </button>
          <p className="mt-5 hover:underline hover:underline-offset-4 cursor-pointer ">
            Forgot your password?
          </p>
        </div>
        <div className="flex justify-between  absolute bottom-6  right-0 px-5 w-full lg:justify-around">
          <p className=" flex flex-col leading-4">
            Need an account?{" "}
            <span
              className="font-semibold hover:underline hover:underline-offset-4 cursor-pointer"
              onClick={() => dispatch(checkLogged())}
            >
              create account
            </span>
          </p>
          <p className="text-center">or</p>
          <p>
            Continue as{" "}
            <span className="font-semibold hover:underline hover:underline-offset-4 cursor-pointer">
              <Link href="/home">guest</Link>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

function CreateLogin() {
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  return (
    <>
      <section
        className={`${
          !theme ? "bg-white text-[#161616] " : "bg-[#161616] text-white"
        } flex flex-col px-10 h-full justify-center items-center relative ${
          merriweather.className
        }`}
      >
        <label className="swap swap-rotate absolute right-5 top-5 ">
          <input
            type="checkbox"
            className="theme-controller "
            value="synthwave"
            onClick={() => dispatch(toggledTheme())}
          />
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl lg:text-4xl font-semibold text-center">
            Welcome back to Readit
          </h1>
          <p className="text-center mt-2 lg:mt-5 ">
            Sign in to explore, buy and manage books
          </p>
          <form className="flex flex-col gap-2 my-5">
            <label htmlFor="text">
              Username :
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 lg:py-3 rounded-xl border-2"
              />
            </label>
            <label htmlFor="password">
              {" "}
              Password :
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 lg:py-3 rounded-xl border-2"
              />
            </label>
            <label htmlFor="password">
              Repeat Password :
              <input
                type="password"
                placeholder="Repeat Password"
                className="w-full px-4 py-2 lg:py-3 rounded-xl border-2"
              />
            </label>
          </form>
          <button className="bg-[#F01D19] text-white px-28 py-4 rounded-xl">
            Sign in
          </button>
          <p className="mt-5 hover:underline hover:underline-offset-4 cursor-pointer ">
            Forgot your password?
          </p>
        </div>
        <div className="flex justify-between  absolute bottom-6  right-0 px-5 w-full lg:justify-around">
          <p>
            Continue as{" "}
            <span className="font-semibold hover:underline hover:underline-offset-4 cursor-pointer">
              <Link href="/home">guest</Link>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
