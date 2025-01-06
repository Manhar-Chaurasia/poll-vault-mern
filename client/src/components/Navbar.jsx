import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import pollVaultLogo from "../assets/poll-vault-logo.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    window.location.reload();
    toast.success("Successfully Logged Out!", {
      position: "top-right",
    });
  };

  return (
    <>
      <div className="nav md:h-16 shadow-md mx-auto lg:block hidden">
        <div className="wrapper md:flex justify-between items-center h-full px-40 max-w-screen-2xl mx-auto">
          <div className="flex justify-start items-center space-x-10 text-gray-200">
            <Link to="/">
              <img src={pollVaultLogo} className="w-52" alt="" />
            </Link>
            <div className="flex space-x-8">
              <Link to="/create-poll">Create Poll</Link>
              <Link to="/demo">Demo</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </div>
          {!token ? (
            <div className="md:flex items-center space-x-5 ">
              <Link to="/register">
                <button className="px-3 py-1 rounded-md button is-transparent bg-indigo-500">
                  Sign Up
                </button>
              </Link>

              <Link to="/login">
                <button className="px-3 py-1 rounded-md button is-primary bg-indigo-500">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md button is-primary bg-indigo-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="absolute mt-5 flex justify-between items-center px-6 w-full">
        <img src={pollVaultLogo} className="w-40 block lg:hidden" alt="" />

        <button
          className="md:hidden block p-3 rounded-md bg-gray-800 z-50 text-gray-400"
          onClick={handleHamburger}
        >
          {hamburger ? (
            <span>
              <RxCross2 />
            </span>
          ) : (
            <span>
              <RxHamburgerMenu />
            </span>
          )}
        </button>
      </div>

      {hamburger && (
        <div className="nav md:h-16 h-auto shadow-md mx-auto bg-gray-900">
          <div className="wrapper md:flex justify-between items-center h-full md:px-40 p-6 md:py-0 max-w-screen-2xl mx-auto md:space-y-0 space-y-5">
            <div className="md:flex justify-start items-center md:space-x-10 text-gray-200">
              <div className="flex justify-between items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/000/605/214/small/5057-01.jpg"
                  className="w-12 lg:block hidden"
                  alt=""
                />
              </div>

              <div className="flex md:flex-row flex-col justify-start md:items-center items-start md:space-x-10 md:space-y-0 space-y-3 md:mt-0 mt-16 font-semibold">
                <Link to="/create-poll">Create Poll</Link>
                <Link to="/demo">Demo</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/dashboard">Dashboard</Link>
              </div>
            </div>

            {!token ? (
              <div>
                <div className="flex md:flex-row flex-col md:items-center items-start md:space-x-5 md:border-0 border-t-2 border-gray-600 md:pt-0 pt-5">
                  <Link to="/register" className="w-full md:w-auto">
                    <button className="w-full md:w-auto px-3 py-1 rounded-md button is-transparent bg-indigo-500">
                      Sign Up
                    </button>
                  </Link>

                  <Link to="/login" className="md:block hidden">
                    <button className="px-3 py-1 rounded-md button is-primary bg-indigo-500">
                      Login
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center items-center md:hidden mt-3">
                  <span className="text-gray-400">
                    Already have and account?
                  </span>
                  <Link to="/login" className="md:block">
                    <button className="px-2 py-0 rounded-md button text-indigo-500">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full px-3 py-1 rounded-md button is-primary bg-indigo-500"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
