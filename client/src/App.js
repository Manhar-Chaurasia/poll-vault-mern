import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import CreatePoll from "./components/CreatePoll";
import VotePoll from "./components/VotePoll";
import Demo from "./components/Demo";
import AboutUs from "./components/AboutUs";
import ProtectedRoute from "./utils/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import VoteResults from "./components/Result";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        const result = await response.json();
        setData(result);
        // console.log("Fetched Data: ", response.data); // Log response data
        // console.log("games data fetched from backend: ", data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          toastStyle={{
            backgroundColor: "#6366F1",
            color: "#ffffff",
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-poll" element={<CreatePoll data={data} />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/vote-poll/:id" element={<VotePoll />} />
          <Route path="/results" element={<VoteResults />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

          
        
    </div>
  );
}

export default App;
