import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Share() {
  return (
    <div className="flex rounded-md ">
      <div className="flex items-center">
        <div className="flex ml-5 justify-start bg-gray-600 rounded-full">
          <a
            href="https://linkedin.com/"
            title="LinkedIn"
            className="mx-2 my-2"
          >
            <div className="box-border rounded-full border-2 border-solid w-8 h-8 bg-blue-600 text-white border-blue-600 flex justify-center items-center hover:bg-white hover:text-blue-600">
              <LinkedInIcon className=" text-xl" />
            </div>
          </a>
          <a
            href="https://instagram.com/"
            title="Instagram"
            className="mx-2 my-2"
          >
            <div className="box-border rounded-full border-2 border-solid w-8 h-8 bg-orange-700 text-white border-blue-600 flex justify-center items-center hover:bg-white hover:text-orange-700">
              <InstagramIcon className=" text-xl" />
            </div>
          </a>
          <a href="https://X.com/" title="X" className="mx-2 my-2">
            <div className="box-border rounded-full border-2 border-solid w-8 h-8 bg-black text-white border-blue-600 flex justify-center items-center hover:bg-white hover:text-black">
              <TwitterIcon className="text-xl" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Share;
