import React from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useState } from "react";
import axios from "axios";

function Other() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/email", { email });
      setMessage("User email subscribed successfully");
    } catch (error) {
      setMessage("Failed user email not subscribe..!!!");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex-[2] border-r-2 border-gray-500 ">
      <div className="flex justify-between items-center border-b border-gray-500 px-5 py-4 dark:text-white">
        <ManageAccountsIcon />
        <h6 className="font-semibold text-lg">Others</h6>
      </div>
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" dark:bg-gray-700 bg-white text-black rounded-lg p-8 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-black dark:text-white text-lg font-semibold">
                Ready to get started?
              </span>
              <span className=" text-black dark:text-white text-2xl font-bold my-2">
                Level-up with our Pro Plan.
              </span>
              <span className="text-gray-500 ">
                Our intuitive drag'n drop interface will have you designing and
                building interfaces quicker than ever before.
              </span>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#000000] dark:bg-black text-white">
              Get Started
            </button>
          </div>
          <div className="mt-8 dark:bg-gray-700 bg-white rounded-lg p-8">
            <div className="flex flex-col">
              <span className="dark:text-white  text-lg font-semibold mb-2">
                Stay in the loop
              </span>
              <span className="dark:text-gray-300 mb-4">
                Join our mailing list to stay in the know about new updates and
                features.
              </span>
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="flex text-gray-300 h-10 w-full dark:bg-transparent rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  placeholder="Email"
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-black  dark:bg-[#000000] text-white ml-2">
                  Subscribe
                </button>
              </form>
              {message && <p className="dark:text-red-500 pt-2 text-sm">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other;
