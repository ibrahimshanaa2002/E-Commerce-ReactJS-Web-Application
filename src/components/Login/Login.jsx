import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/facebook";

const Login = () => {
  return (
    <div className="relative">
      <div className="flex justify-around items-center min-h-screen bg-gray-100 ">
        <div className="logo-name border-r border-gray-400 w-[20%] hidden sm:block">
          {/* Hidden border on smaller screens than tablets */}
          <h1 className="lg:text-6xl md:text-3xl text-lg font-extrabold ">
            SHOP.CO
          </h1>
        </div>
        <div className="login-card w-[50%] h-auto ">
          <h1 className="flex justify-center font-bold text-4xl pb-20">
            Login
          </h1>
          <div className="place-holders">
            <label className="block pb-6">
              <span className="text-gray-700">Username</span>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser />
                </div>
                <input
                  type="text"
                  placeholder="Type your username"
                  className="outline-none rounded-none block w-full py-1.5 pl-10 pr-3 leading-tight text-gray-700 border-b border-gray-200 bg-transparent peer"
                />
              </div>
            </label>
            <label className="block">
              <span className="text-gray-700">Password</span>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock />
                </div>
                <input
                  type="password"
                  placeholder="Type your password"
                  className=" outline-none rounded-none block w-full py-1.5 pl-10 pr-3 leading-tight text-gray-700 border-b border-gray-200 bg-transparent peer"
                />
              </div>
            </label>
          </div>
          <span className="flex justify-end pt-3 pb-20 ">
            <a className="cursor-pointer hover:underline transition ">
              Forgot Password?
            </a>
          </span>
          <span className="login-button flex justify-center bg-black text-white p-5 rounded-3xl cursor-pointer">
            Login
          </span>
          <h3 className="flex justify-center pt-7">Or Sign Up Using</h3>
          <div className="social-icons flex justify-center gap-7 pt-5">
            <SocialIcon url="https://www.facebook.com/" />
            <SocialIcon url="https://twitter.com/" />
            <SocialIcon url="https://www.google.com/" />
          </div>
          <div className="signup">
            <h3 className="flex justify-center pt-9">Or Sign Up Using</h3>
            <span className="flex justify-center pt-3 cursor-pointer  font-semibold duration-75 hover:font-extrabold">
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
