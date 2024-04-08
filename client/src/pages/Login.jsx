import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import newRequest from "../utils/newRequest";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const res = await newRequest.post("auth/login", { email, password });
      dispatch(loginSuccess(res.data));
      console.log(res.data);
      toast.success("login suceessfully");

      console.log("login successfull");
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-gray-800 p-4 md:p-8 h-screen lg:p-12 flex justify-center">
        <div className="w-full max-w-md mx-auto mt-8 mb-8 p-6 md:p-10 bg-gray-900 text-white rounded-md shadow-md  ">
          <img
            className="pb-5 bg-inherit"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39DFDhRL6mSEjr86fJG4F0VdRgvulyY1aYw&usqp=CAU"
            height={30}
            width={200}
            alt="Logo"
          />
          <p className="font-semibold flex text-2xl">
            welcome to Connectify..!! 🖐
          </p>
          <p className="font-semibold flex text-zinc-400	pb-6">
            Please Login your account and start adventure
          </p>

          <h2 className="text-xl mb-5 text-white font-semibold flex">
            Login Account
          </h2>
          <form
            className="flex flex-col max-w-2xl mx-auto mb-5"
            onSubmit={handleSubmit}
          >
            <div className="bg-gray-100 flex flex-row justify-center items-center my-2 py-1.5 px-2 rounded">
              <EmailOutlinedIcon className="text-gray-400 text-xl" />
              <input
                className=" bg-gray-100 py-2 px-3 w-full outline-none text-black"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <div className="bg-gray-100 flex flex-row justify-center items-center my-2 py-1.5 px-2 rounded">
                <HttpsOutlinedIcon className="text-gray-400 text-xl" />
                <input
                  className=" bg-gray-100 py-2 px-3 w-full outline-none text-black"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="w-full bg-blue-700  hover:bg-blue-800 text-white font-medium rounded-lg text-sm py-2 mb-4"
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-lg text-gray-500  text-center">
            <Link to="/register">
              Don't have an account!
              <span className="text-gray-300 font-semibold"> Signup</span>
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
