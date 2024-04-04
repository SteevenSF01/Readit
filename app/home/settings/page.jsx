"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { merriweather } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import FavorisHome from "@/app/components/myFavorites/MyFavorites";

const UserSettingsPage = () => {
  const router = useRouter();
  const theme = useSelector((state) => state.theme.darkMode);
  const arrayFavoris = useSelector((state) => state.favoris.arrayFavoris);
  const [selectedOption, setSelectedOption] = useState(null);

  const optionSettings = (option) => {
    setSelectedOption(option);
  };

  const backToSettings = () => {
    setSelectedOption(null);
  };

  const renderScreen = () => {
    if (selectedOption === null) {
      return (
        <>
          <div
            className={`${
              theme ? "bg-[#161616] text-white" : "bg-white text-[#161616] "
            } ${merriweather.className} h-screen p-10 w-full`}
          >
            <button
              className="bg-[#E00404] text-white mb-5 p-1 rounded-lg"
              onClick={() => router.push("/home")}
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-3xl font-bold mb-8 lg:ps-32">
                User Settings
              </h1>
              <div className="flex w-full justify-between">
                <div className="w-[50%] lg:flex lg:justify-end ">
                  <ul className="flex flex-wrap gap-5 md:flex-col items-start w-full md:w-[80%] ">
                    <button
                      className="bg-[#E00404] text-white w-[45%] md:w-full  py-2 rounded-xl cursor-pointer text-lg font-semibold"
                      onClick={() => optionSettings("Notifications")}
                    >
                      Notifications
                    </button>
                    <button
                      className="bg-[#E00404] text-white w-[45%] md:w-full  py-2 rounded-xl cursor-pointer text-lg font-semibold"
                      onClick={() => optionSettings("Account")}
                    >
                      Account
                    </button>
                    <button
                      className="bg-[#E00404] text-white w-[45%] md:w-full  py-2 rounded-xl cursor-pointer text-lg font-semibold"
                      onClick={() => optionSettings("Security")}
                    >
                      Security
                    </button>
                    <button
                      className="bg-[#E00404] text-white w-[45%] md:w-full  py-2 rounded-xl cursor-pointer text-lg font-semibold"
                      onClick={() => optionSettings("Preferences")}
                    >
                      Preferences
                    </button>
                    <button
                      className="bg-[#E00404] text-white w-[45%] md:w-full  py-2 rounded-xl cursor-pointer text-lg font-semibold"
                      onClick={() => optionSettings("Favorites")}
                    >
                      Favorites
                    </button>
                  </ul>
                </div>
                <div className="w-[60%] flex justify-center items-center">
                  <div className="avatar online ">
                    <div className="w-72 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div
          className={`${
            theme ? "bg-[#161616] text-white" : "bg-white text-[#161616]"
          } ${merriweather.className} h-fit px-5 py-10 w-full`}
        >
          <h1 className="text-3xl font-bold mb-8">{selectedOption} Settings</h1>
          <div className="w-full">
            <button
              onClick={backToSettings}
              className="bg-[#E00404] text-white py-2 px-10 rounded-xl font-semibold mt-4 my-5"
            >
              Back
            </button>
            {renderOptionContent(selectedOption)}
          </div>
        </div>
      );
    }
  };

  const renderOptionContent = (option) => {
    switch (option) {
      case "Notifications":
        return (
          <div className="h-[800px] ">
            <p>Notification settings...</p>
          </div>
        );
      case "Account":
        return (
          <div className="h-[800px] ">
            <p>Account settings...</p>
          </div>
        );
      case "Security":
        return (
          <div className="h-[800px] ">
            <p>Security settings...</p>
          </div>
        );
      case "Preferences":
        return (
          <div className="h-[800px] ">
            <p>Preferences settings...</p>
          </div>
        );
      case "Favorites":
        return (
          <div
            className={`${
              arrayFavoris.length <= 4 ? "h-screen" : "h-fit"
            } flex flex-wrap gap-6`}
          >
            <FavorisHome />
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="container mx-auto ">{renderScreen()}</div>;
};

export default UserSettingsPage;
