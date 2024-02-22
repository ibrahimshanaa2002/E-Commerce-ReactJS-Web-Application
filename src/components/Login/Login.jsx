import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import "./Login.css";

const Login = () => {
  const [formType, setFormType] = useState("login");

  const toggleFormType = () => {
    setFormType(formType === "login" ? "signup" : "login");
  };

  return (
    <div className="relative h-screen">
      <div className="flex justify-around items-center min-h-screen bg-gray-100 ">
        <div className="logo-name hidden sm:block mb-10">
          <h1 className="lg:text-6xl md:text-3xl text-lg font-extrabold pointer-events-none">
            SHOP.CO
          </h1>
        </div>
        <div className="login-card w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]">
          <div className="sm:hidden mb-10 text-center">
            <h1 className="lg:text-6xl md:text-3xl text-lg font-extrabold pointer-events-none">
              SHOP.CO
            </h1>
          </div>
          <h1 className="flex justify-center font-bold text-4xl pb-15 pointer-events-none">
            {formType === "login" ? "Login" : "Sign Up"}
          </h1>
          <div className="place-holders">
            <label className="block pb-6">
              <span className="text-gray-700">
                {formType === "login" ? "Username" : "Email"}
              </span>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser />
                </div>
                <input
                  type="text"
                  placeholder={`Type your ${
                    formType === "login" ? "username" : "email"
                  }`}
                  className="outline-none rounded-none block w-full py-1.5 pl-10 pr-3 leading-tight text-gray-700 border-b border-gray-200 bg-transparent peer"
                />
              </div>
            </label>
            <label className="block pb-6">
              <span className="text-gray-700">Password</span>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock />
                </div>
                <input
                  type="password"
                  placeholder="Type your password"
                  className="outline-none rounded-none block w-full py-1.5 pl-10 pr-3 leading-tight text-gray-700 border-b border-gray-200 bg-transparent peer"
                />
              </div>
            </label>
            {formType === "signup" && (
              <label className="block pb-6">
                <span className="text-gray-700">Confirm Password</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock />
                  </div>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="outline-none rounded-none block w-full py-1.5 pl-10 pr-3 leading-tight text-gray-700 border-b border-gray-200 bg-transparent peer"
                  />
                </div>
              </label>
            )}
          </div>

          {formType === "login" && (
            <span className="flex justify-end pb-5 ">
              <a className="cursor-pointer duration-10 hover:font-semibold hover:underline">
                Forgot Password?
              </a>
            </span>
          )}

          <span className="login-button flex justify-center bg-black text-white p-5 rounded-3xl cursor-pointer">
            {formType === "login" ? "Login" : "Sign Up"}
          </span>

          {formType === "login" && (
            <h3 className="flex justify-center pt-5 pointer-events-none">
              Or Sign Up Using
            </h3>
          )}

          {formType === "login" && (
            <div className="social-icons flex justify-center gap-7 pt-5">
              <SocialIcon url="https://www.facebook.com/" />
              <SocialIcon url="https://twitter.com/" />
              <SocialIcon url="https://www.google.com/" />
            </div>
          )}

          {formType === "signup" && (
            <div className="flex justify-center items-center gap-4 pt-5">
              <hr className="w-1/3 border-gray-400" />
              <span className="text-gray-500 font-semibold pointer-events-none">
                Or
              </span>
              <hr className="w-1/3 border-gray-400" />
            </div>
          )}

          {formType === "signup" && (
            <div className="social-icons flex justify-center gap-7 pt-5">
              <SocialIcon url="https://www.facebook.com/" />
              <SocialIcon url="https://www.google.com/" />
            </div>
          )}

          <div className="signup">
            <h3 className="flex justify-center pt-9 pointer-events-none">
              {formType === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </h3>
            <span
              className="flex justify-center pt-3 cursor-pointer  hover:font-semibold duration-75 "
              onClick={toggleFormType}
            >
              {formType === "login" ? "Sign Up" : "Login"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
