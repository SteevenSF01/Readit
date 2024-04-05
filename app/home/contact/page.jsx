"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import Newsletter from "@/app/components/newsletter/Newsletter";
import Footer from "@/app/components/footer/Footer";

const ContactPage = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [uniqueEmails, setUniqueEmails] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (uniqueEmails.includes(email)) {
      setError("Este correo electrónico ya ha sido registrado.");
      return;
    }
    setUniqueEmails([...uniqueEmails, email]);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className={`${theme ? "bg-[#161616]" : "bg-white"} pt-10 flex flex-col items-center`}>
        <div
          className={`${
            theme ? "bg-[#323232] text-white" : " bg-[#efeeee] text-[#161616]"
          } flex flex-col items-center justify-center h-fit mx-5 mb-5  px-5 py-7 rounded-lg md:w-[70%]`}
        >
          <h1 className="text-3xl font-bold mb-8 pt-5">Contact Us</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#E00404] text-white font-semibold rounded-md hover:bg-[#e00404ac] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d663266.0547668335!2d-90.11167470546883!3d-0.6437748284809952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbe!4v1712258763056!5m2!1ses-419!2sbe"
          width={600}
          height={450}
          className="w-full h-80 my-10 "
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="">
            <Newsletter />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ContactPage;
