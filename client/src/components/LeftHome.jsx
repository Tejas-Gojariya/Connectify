import React, { useState, useEffect } from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import PersonIcon from "@mui/icons-material/Person";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LeftHome = () => {
  const [theme, setTheme] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const currTheme = localStorage.theme;

  useEffect(() => {
    if (currTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currTheme]);

  const setThemeInStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setThemeInStorage(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex-1 sticky justify-center border-r-2 border-gray-500 min-h-screen dark:bg-[#05192c] dark:text-white bg-[#e4e4e5]">
      <div className="flex flex-col m-10 border-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md p-10 gap-10 sticky top-0">
        {/* Top logo section  */}
        <Link to="/">
          <div className="flex gap-5 text-3xl items-center justify-center">
            <AllInclusiveIcon fontSize="large" className="text-blue-600" />
            <h1 className="font-bold">Connectify</h1>
          </div>
        </Link>

        {/* main area  */}
        <div className="flex flex-col justify-start gap-6 items-start mx-auto">
          <Link to="/">
            <div className="flex gap-5 items-center">
              <HomeIcon />
              <h5 className="font-semibold text-xl">Home</h5>
            </div>
          </Link>

          <Link to="/explore">
            <div className="flex gap-5 items-center">
              <TagIcon />
              <h5 className="font-semibold text-xl">Explore</h5>
            </div>
          </Link>

          <Link to="/notification">
            <div className="flex gap-5 items-center">
              <NotificationsIcon />
              <h5 className="font-semibold text-xl">Notifications</h5>
            </div>
          </Link>

          <Link to="/other">
            <div className="flex gap-5 items-center">
              <ManageAccountsIcon />
              <h5 className="font-semibold text-xl">Others</h5>
            </div>
          </Link>

          <div
            className="flex gap-5 items-center cursor-pointer"
            onClick={handleThemeChange}
          >
            {currTheme === "dark" ? <DarkModeIcon /> : <WbSunnyIcon />}
            <h5 className="font-semibold text-xl">
              {currTheme === "dark" ? "Dark" : "Light"} Mode
            </h5>
          </div>

          <Link to="/profile">
            <div className="flex gap-5 items-center">
              <PersonIcon />
              <h5 className="font-semibold text-xl">Profile</h5>
            </div>
          </Link>
        </div>

        {/* logout area  */}
        <div className="flex gap-5 mx-auto">
          <div className="flex gap-2 dark:bg-gray-600 pl-5 px-16 flex-start py-2 rounded-md items-center">
            <div className="border-2 border-black dark:border-white rounded-full w-11 h-11">
              <img
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-0">
              <span className="text-sm">{currentUser?.username}</span>
              <span className="text-sm">{currentUser?.handle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
