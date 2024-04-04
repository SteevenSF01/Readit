"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { merriweather } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const UserSettingsPage = () => {
  const router = useRouter();
  const theme = useSelector((state) => state.theme.darkMode);
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
            } ${merriweather.className} h-screen p-10`}
          >
            <button className="bg-[#E00404] text-white mb-5 p-1 rounded-lg" onClick={()=> router.push('/home')}><ArrowLeftIcon className="w-6 h-6" /></button>
            <h1 className="text-3xl font-bold mb-8">User Settings</h1>
            <ul className="space-y-4  flex flex-col gap-4 items-start">
              <button
                className="bg-[#E00404] text-white w-[150px] py-2 rounded-xl cursor-pointer text-lg font-semibold"
                onClick={() => optionSettings("Notifications")}
              >
                Notifications
              </button>
              <button
                className="bg-[#E00404] text-white w-[150px] py-2 rounded-xl cursor-pointer text-lg font-semibold"
                onClick={() => optionSettings("Account")}
              >
                Account
              </button>
              <button
                className="bg-[#E00404] text-white w-[150px] py-2 rounded-xl cursor-pointer text-lg font-semibold"
                onClick={() => optionSettings("Security")}
              >
                Security
              </button>
              <button
                className="bg-[#E00404] text-white w-[150px] py-2 rounded-xl cursor-pointer text-lg font-semibold"
                onClick={() => optionSettings("Preferences")}
              >
                Preferences
              </button>
              <button
                className="bg-[#E00404] text-white w-[150px] py-2 rounded-xl cursor-pointer text-lg font-semibold"
                onClick={() => optionSettings("Favorites")}
              >
                Favorites
              </button>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <div className={`${theme ? 'bg-[#161616] text-white' : 'bg-white text-[#161616]'} ${merriweather.className} h-screen p-8`}>
          <h1 className="text-3xl font-bold mb-8">{selectedOption} Settings</h1>
          {renderOptionContent(selectedOption)}
          <button
            onClick={backToSettings}
            className="bg-[#E00404] text-white py-2 px-10 rounded-xl font-semibold mt-4"
          >
            Back
          </button>
        </div>
      );
    }
  };

  const renderOptionContent = (option) => {
    switch (option) {
      case "Notifications":
        return (
          <div>
            <p>Notification settings...</p>
          </div>
        );
      case "Account":
        return (
          <div>
            <p>Account settings...</p>
          </div>
        );
      case "Security":
        return (
          <div>
            <p>Security settings...</p>
          </div>
        );
      case "Preferences":
        return (
          <div>
            <p>Preferences settings...</p>
          </div>
        );
      case "Favorites":
        return (
          <div>
            <p>Favorites settings...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="container mx-auto ">{renderScreen()}</div>;
};

export default UserSettingsPage;
