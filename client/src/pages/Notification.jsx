import React from "react";
import { useSelector } from "react-redux";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

function Notification() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex-[2] border-r-2 border-gray-500 ">
      <div className="flex justify-between items-center border-b border-gray-500 px-5 py-4 dark:text-white">
        <NotificationsActiveIcon />
        <h6 className="font-semibold text-lg">Notifications</h6>
      </div>

      {/* login success notification */}
      <div className="bg-gray-800 items-center m-5 px-2 rounded-md text-white p-5 flex justify-center">
        <HowToRegIcon className="" />
        <h1 className="text-lg pl-5 pr-1 text-blue-600 font-semibold">
          {currentUser?.username} &nbsp;
          {/* {currentUser?.handle} */}
        </h1>
        <p className="text-lg font-semibold">Your account login Successfully</p>
      </div>

      {/* like post notification */}
      <div className="bg-gray-800 items-center m-5 px-2 rounded-md text-white p-5 flex justify-center">
        <MarkChatUnreadIcon className="" />
        <h1 className="text-lg pl-5 pr-1 font-semibold">
          {currentUser?.handle}
        </h1>
        <p className="text-lg font-semibold">Comment on your post</p>
      </div>
    </div>
  );
}

export default Notification;
