import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const RightHome = () => {
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const users = [
    {
      _id: 1,
      name: "tejas",
      handle: "@tejas",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png",
    },
    {
      _id: 2,
      name: "User1",
      handle: "@user1",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png",
    },
    {
      _id: 3,
      name: "user2",
      handle: "@user2",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png",
    },
    {
      _id: 4,
      name: "user3",
      handle: "@user3",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png",
    },
  ];

  const news = [
    {
      _id: 1,
      title: "A man died due to rain",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque, ratione dolores ipsum alias, hic perspiciatis id distinctio delectus nesciunt nisi doloribus deleniti tenetur totam sit molestias fugit optio esse veritatis quia ipsa autem. Nam atque accusantium itaque ad odit.",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      _id: 2,
      title: "Toffies fell from sky instead of rain",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque, ratione dolores ipsum alias, hic perspiciatis id distinctio delectus nesciunt nisi doloribus deleniti tenetur totam sit molestias fugit optio esse veritatis quia ipsa autem. Nam atque accusantium itaque ad odit.",
      img: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
    },
    {
      _id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque, ratione dolores ipsum alias, hic perspiciatis id distinctio delectus nesciunt nisi doloribus deleniti tenetur totam sit molestias fugit optio esse veritatis quia ipsa autem. Nam atque accusantium itaque ad odit.",
      img: "https://images.unsplash.com/photo-1617635277889-df22350f81a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="flex-1 min-h-screen dark:bg-[#061728] dark:text-white bg-[#e4e4e5]">
      <div className="flex flex-col m-6 dark:bg-gray-800 rounded-lg gap-2 sticky top-0">
        <div className="flex gap-2 border rounded-full items-center border-gray-500 mx-8 my-4">
          <SearchOutlinedIcon className="ml-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts"
            className="border-none outline-none w-full px-2 py-1.5 rounded-full dark:bg-[#06172800] bg-[#e4e4e5]"
          />
        </div>

        <div className="flex flex-col gap-3 px-4 border-b border-gray-500 pb-3">
          {users.map((user) => (
            <div
              className="flex justify-between bg-zinc-100 dark:bg-gray-700 p-2 rounded-md items-center"
              key={user?._id}
            >
              <div className="flex gap-2 items-center">
                <div className="border-2 border-black dark:border-white rounded-full w-11 h-11">
                  <img
                    src={user?.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-0">
                  <span className="text-sm">{user?.name}</span>
                  <span className="text-sm">{user?.handle}</span>
                </div>
              </div>

              <div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-1.5 rounded-full font-medium">
                  Follow
                </button>
              </div>
            </div>
          ))}
          <button onClick={() => setOpenEditProfile(true)}>Load More...</button>
        </div>
        <div
          className={`relative z-10 ${openEditProfile ? "inline" : "hidden"} `}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-60 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg my-10">
                <div className="dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full dark:bg-red-800 sm:mx-0 sm:h-10 sm:w-10">
                      <GroupIcon />
                    </div>
                    <div className="mt-3 text-center  sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg font-medium leading-6 dark:text-gray-400"
                        id="modal-title"
                      >
                        More Request
                      </h3>
                      <p className="text-sm dark:text-gray-500">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <div className="mt-2">
                        <form className="flex flex-col">
                          <div className="dark:bg-gray-800 pt-5 flex flex-row justify-start mb-5 items-center my-1 text-sm rounded">
                            <div className="flex gap-2 pl-5 pr-16 py-1 dark:bg-gray-600 rounded-md items-center">
                              <div className="border-2 border-black dark:border-white rounded-full w-9 h-9">
                                <img
                                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png"
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <div className="flex flex-col gap-0">
                                <span className="text-sm">test</span>
                                <span className="text-sm">@test_user</span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setOpenEditProfile(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 dark:bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="text-xl font-medium pt-5 pl-5">What's happening!</h6>
        <div className="flex flex-col gap-3 bg-gray-100 dark:bg-[#30353b00] mx-4 px-4 my-2 py-2 rounded-md">
          <div className="flex flex-col gap-2">
            {news?.map((n) => (
              <div key={n?._id} className="flex rounded-md items-center pb-2">
                <div className="flex-[2]">
                  <h6 className="font-semibold">{n?.title.slice(0, 22)}...</h6>
                  <p className="text-xs">{n?.desc.slice(0, 72)}...</p>
                </div>

                <div className="flex-1 w-12 h-full">
                  <img
                    src={n?.img}
                    alt=""
                    className="rounded-md w-[80%] ml-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHome;
