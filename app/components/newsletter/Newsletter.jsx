import { useSelector } from "react-redux";
import { merriweather, roboto } from "@/app/fonts";

export default function Newsletter() {
  const theme = useSelector((state) => state.theme.darkMode);
  return (
    <section
      className={`${
        theme ? "bg-[#161616] text-white" : "bg-white text-[#161616] "
      }`}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl md:w-[100%] lg:py-16 lg:px-6 bg-[#323232] bg-opacity-45 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="mx-auto max-w-screen-md sm:text-center md:w-[50%] text-white ">
          <h2
            className={`mb-4 text-3xl tracking-tight font-extrabold  sm:text-4xl ${merriweather.className}`}
          >
            Sign up for our newsletter
          </h2>
          <p
            className={`mx-auto mb-8 w-2xl font-light text-start md:mb-12 text-[16px] ${roboto.className}`}
          >
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className=" mx-auto mb-3 space-y-4 max-w-screen-sm md:flex justify-center items-center sm:space-y-0">
              <div className="relative w-full flex items-center ">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium  "
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="text-gray-500 w-5 h-5  "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  typeof="email"
                  id="email"
                  required=""
                  className="block p-3 pl-10 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-[#E00404] border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div
              className={`mx-auto max-w-screen-sm md:w-[75%] text-sm text-left  newsletter-form-footer ${roboto.className}`}
            >
              We care about the protection of your data. <br />
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
