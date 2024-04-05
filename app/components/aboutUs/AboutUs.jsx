import { roboto } from "@/app/fonts"
import { merriweather } from "@/app/fonts"

export default function AboutUs() {
  return (
    <section className="md:flex flex-col items-center">
        <h1 className={`text-center my-5 ${merriweather.className} text-2xl md:text-3xl lg:text-4xl`}>
        Welcome to <span className={`text-[#E00404] ${merriweather.className}`}>Readit</span>
        </h1>
        <p className={`${roboto.className} font-normal md:text-center md:w-[80%] lg:w-[50%]`}>
        Your ultimate destination for all things related to books and reading! At Readit, we re passionate about literature and are dedicated to providing book lovers with a platform to discover, explore, and indulge in their love for reading.
        </p>
        <h1 className="text-center my-5">Have fun!</h1>
    </section>
  )
}
