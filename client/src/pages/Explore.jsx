import React from "react";
import TagIcon from "@mui/icons-material/Tag";

const Explore = () => {
  return (
    <div className="flex-[2] border-r-2 border-gray-500 ">
      <div className="flex justify-between items-center border-b border-gray-500 px-5 py-4 dark:text-white">
        <TagIcon />
        <h6 className="font-semibold text-lg">EXPLORE</h6>
      </div>

      <section className="dark:bg-gray-800 dark:text-white">
        <div className="w-full px-5 py-6  mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="flex flex-col dark:bg-gray-700 p-5 rounded-md items-center sm:px-5 md:flex-row">
            <div className="w-full md:w-1/2">
              <a href="#_" className="block">
                <img
                  className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96"
                  src="https://images.unsplash.com/photo-1711963307913-af439816c855?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <div className="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                  <svg
                    className="w-3.5 h-3.5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Featured</span>
                </div>
                <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  <a href="#_">Lorem ipsum dolor sit.</a>
                </h1>
                <p className="pt-2 text-sm font-medium">
                  by
                  <a href="#_" className="mr-1 underline">
                    John Doe
                  </a>
                  <span className="mx-1">April 23rd, 2021</span>
                  <span className="mx-1 text-gray-400">5 min. read</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
              <a href="#_" className="block">
                <img
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                  src="https://images.unsplash.com/photo-1712246404769-132b7d49d235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
              <div className="bg-pink-500  items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>Health</span>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, laboriosam.
              </p>
              <p className="pt-2 text-xs font-medium">
                <a href="#_" className="mr-1 underline">
                  Fred Jones
                </a>
                <span className="mx-1">April 1, 2024</span>
                <span className="mx-1 text-gray-600">3 min. read</span>
              </p>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6">
              <a href="#_" className="block">
                <img
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                  src="https://images.unsplash.com/photo-1712237730123-a7820b2739d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D"
                />
              </a>
              <div className="bg-orange-500  items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>FOOD</span>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, laboriosam.
              </p>
              <p className="pt-2 text-xs font-medium">
                <a href="#_" className="mr-1 underline">
                  Fred Jones
                </a>
                <span className="mx-1">March 24, 2024</span>
                <span className="mx-1 text-gray-600">10 min. read</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
