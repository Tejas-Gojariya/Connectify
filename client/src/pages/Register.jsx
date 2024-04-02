import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import newRequest from "../utils/newRequest";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";
import { toast, Toaster } from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const res = await newRequest.post("auth/register", {
        username,
        handle,
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      console.log(res.data);
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
      dispatch(loginFailure());
    }
  };

  return (
    <div>
      <div className="bg-gray-800 p-4 md:p-8 h-screen lg:p-12 flex justify-center">
        <div className="w-full max-w-md mx-auto mt-8 mb-8 p-6 md:p-10 bg-gray-900 text-white rounded-md shadow-md ">
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
            Please Signup your account and start adventure
          </p>
          <h2 className="text-start text-xl mb-5 text-white">
            Sign up your Account
          </h2>
          <form
            className="flex flex-col max-w-2xl mx-auto mb-5"
            onSubmit={handleSubmit}
          >
            <div className="bg-gray-100 flex flex-row justify-center items-center my-2 py-1.5 px-2 rounded">
              <PersonIcon className="text-gray-400 text-xl" />
              <input
                className=" bg-gray-100 py-2 px-3 w-full outline-none text-black"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="bg-gray-100 flex flex-row justify-center items-center my-2 py-1.5 px-2 rounded">
              <PersonIcon className="text-gray-400 text-xl" />
              <input
                className=" bg-gray-100 py-2 px-3 w-full outline-none text-black"
                type="text"
                placeholder="Handle"
                onChange={(e) => setHandle(e.target.value)}
                required
              />
            </div>

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

            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-med ium rounded-lg text-sm py-2 mb-4"
              >
                Register
              </button>
            </div>
          </form>

          <div className="text-lg text-gray-500 text-center">
            <Link to="/login">
              Already have an account!
              <span className="text-gray-300 font-bold"> Login</span>
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
