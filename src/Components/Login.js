import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <form className="max-w-sm mx-auto relative z-10 bg-black/[.70] mt-10 p-6 md:p-12 w-11/12 md:w-full">
        <h1
          data-uia="login-page-title"
          class="text-white text-4xl font-bold mb-4"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="mb-5">
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Email or phone number"
          />
        </div>
        <div className="mb-5">
          {!isSignInForm && (
            <div className="mb-5">
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Name"
              />
            </div>
          )}

          <input
            type="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-red hover:bg-red-h focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
          placeholder="Password"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <Link to="/forggot" className="text-white text-center block mt-3">
          Forgot password?
        </Link>
        <p className="text-white text-center block mt-3">
          {" "}
          New to Netflix?{" "}
          <span onClick={toggleSignInForm} className="cursor-pointer">
            {" "}
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
