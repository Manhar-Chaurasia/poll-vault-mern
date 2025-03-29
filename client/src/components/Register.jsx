import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await axios.post(
        "https://poll-vault-mern-backend.onrender.com/api/auth/register",
        formData
      );
      console.log("res in handleSubmit fn: ", res); // You will get the user data and token
      // localStorage.setItem("authToken", res?.data?.token);
      console.log("res ki id in handleSubmit fn: ", res?.data?.user?.id);
      localStorage.setItem("userId", res?.data?.user?.id);

      if (res?.data?.token) {
        //show toast as- successfully registered
        toast.success("Successfully Registered!", {
          position: "top-right",
        });

        navigate("/login");
      }
    } catch (err) {
      // console.error(err);
      console.error(
        "Registration error:",
        err.response ? err.response.data : err.message
      );
      alert(err.response ? err.response.data.message : "Registration failed");
      toast.error(
        err.response ? err.response.data.message : "Registration failed",
        {
          position: "top-right",
        }
      );
    }
  };
  return (
    <>
      <div className="min-h-screen w-full bg-gray-900 text-white">
        <Navbar />
        <div className="h-screen flex justify-center items-center px-7 md:px-0">
          <div className="w-96 border-gray-700 text-[#DBDBDB] border-2 p-8 rounded-lg shadow-lg bg-gray-800">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  className="focus:border-indigo-500 focus:ring-0 placeholder-gray-400 focus:outline-none border-2 p-2 w-full rounded-md bg-gray-800 border-gray-700"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  className="focus:border-indigo-500 focus:ring-0 placeholder-gray-400 focus:outline-none border-2 p-2 w-full rounded-md bg-gray-800 border-gray-700"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                  className="focus:border-indigo-500 focus:ring-0 placeholder-gray-400 focus:outline-none border-2 p-2 w-full rounded-md bg-gray-800 border-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md focus:outline-none"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
