import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidColor } from "react-icons/bi";
import axios from "axios";

const Dashboard = () => {
  const [polls, setPolls] = useState([]);
  const navigate = useNavigate();

  const fetchPolls = async () => {
    try {
      const id = localStorage.getItem("userId");
      console.log("userrrrr id: ", id);
      
      const res = await axios.get(
        `https://poll-vault-mern-backend.onrender.com/api/a/get-polls/${id}`
      );
      console.log("The poll log is : ", res?.data);

      setPolls(res?.data);
    } catch (error) {
      console.error("Error fetching poll details:", error);
    }
  };

  useEffect(() => {
    fetchPolls();
    alert("calling fetchpolls()");
  }, []);

  const getDay = (dateString) => {
    const date = new Date(dateString);

    // Extract day and month
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });

    // Return formatted date as "12 Nov"
    return `${day} ${month}`;
  };

  const goToVote = (id) => {
    console.log("id in goToVote fn: ", id);

    navigate(`/vote-poll/${id}`);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gray-900 text-white">
        <Navbar />

        <div className="w-full px-6 xl:px-40 max-w-screen-2xl mx-auto">
          <h1 className="text-2xl font-semibold my-5">Dashboard</h1>
          <Link to="/create-poll">
            <button className="px-4 py-2 rounded-md button is-primary bg-indigo-500 flex items-center justify-between">
              <span className="mr-1 text-lg">
                <AiOutlinePlus />
              </span>
              Create poll
            </button>
          </Link>

          <div className="mt-5 mb-3 flex justify-between">
            <span>Polls</span>
            <div className="flex space-x-16">
              <span>Deadline</span>
              <span>Participants</span>
              <span></span>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            {polls &&
              polls.map((poll, idx) => (
                <div key={idx}>
                  <div
                    className="cursor-pointer w-full bg-gray-800 border-2 border-gray-700 text-[#DBDBDB] rounded-md"
                    onClick={() => goToVote(poll._id)}
                  >
                    <div className="flex justify-between space-x-16 items-center">
                      <div className="flex items-center p-4 space-x-3">
                        <span className="text-4xl text-green-400">
                          <BiSolidColor />
                        </span>
                        <div className="flex flex-col">
                          <span className=" font-semibold">{poll.title}</span>
                          <span>{getDay(poll.createdAt)}</span>
                        </div>
                      </div>

                      <div className="flex space-x-24">
                        <span>{poll.expiration}</span>
                        <span className="pr-3">1</span>
                        <span></span>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
