import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LuDot } from "react-icons/lu";
import Navbar from "./Navbar";
import VotePopup from "./VotePopup";

const VotePoll = ({ demoPollDetails }) => {
  const [selectedVoteOption, setSelectedVoteOption] = useState("");
  const [pollDetails, setPollDetails] = useState(demoPollDetails || {}); // Initialize with demo data if available
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id in votePoll: ", id);

  //fetches created poll's data
  const fetchPollDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/a/poll-details/${id}` // return the last created poll
      );
      console.log("The res log is : ", res);

      setPollDetails(res?.data);
    } catch (error) {
      console.error("Error fetching poll details:", error);
    }
  };

  useEffect(() => {
    // Only fetch if no demo data is passed in
    if (!demoPollDetails) {
      fetchPollDetails();
    }
  }, [demoPollDetails]);

  const { title, createdAt, options } = pollDetails;
  console.log("pollDetails: ", pollDetails);

  useEffect(() => {
    // Retrieve selected option from localStorage on component mount
    const savedOption = localStorage.getItem("selectedVoteOption");
    if (savedOption) {
      setSelectedVoteOption(savedOption);
    }
  }, []);

  const handleVoteOptionChange = (e) => {
    const chosenOption = e.target.value;
    setSelectedVoteOption(chosenOption);
    // Save selected option to localStorage
    localStorage.setItem("selectedVoteOption", chosenOption);
  };

  console.log("pollDetails in votePoll comp: ", pollDetails);

  const handleVotePollSubmit = async () => {
    const voteData = {
      pollId: pollDetails?._id,
      voterId: pollDetails?.createdBy,
      option: selectedVoteOption,
    };
    console.log("sending vote data to backend: ", voteData);

    if (!demoPollDetails) {
      console.log("sending vote data to backend: ", voteData);
      try {
        const res = await axios.post(
          `http://localhost:5000/api/vote/${id}`,
          voteData
        );
        console.log("res of handleVotePollSubmit fn in frontend: ", res);

        // Re-fetch poll details to get the updated vote counts
        await fetchPollDetails();

        // Open the modal on successful vote
        setIsModalOpen(true);
        // You can now handle the response accordingly
      } catch (error) {
        console.error("Error sending vote details:", error);
      }
    }
  };

  const handleShowResults = async () => {
    // fetchPollDetails(); //problem is here
    console.log("updated poll details to send to result comp: ", pollDetails);
    navigate("/results", { state: { pollDetails } });
  };

  const convertTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
    } else {
      const diffInHours = Math.floor(diffInMinutes / 60);
      return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white max-w-screen-2xl mx-auto">
      <Navbar />

      <div className="w-full pt-24 flex justify-center items-center flex-col bg-gray-900 text-white ">
        <div className="poll-main border-2 border-gray-700 bg-gray-800 md:w-2/4 p-6 rounded-md text-[#DBDBDB]">
          <div className="title">
            <h1 className="text-2xl font-semibold">
              {title?.charAt(0).toUpperCase() + title?.slice(1)}m
            </h1>
            <div className="flex items-center space-x-1 mt-1">
              <span>By a guest</span>
              <span>
                <LuDot />
              </span>
              <span>{convertTime(createdAt)}</span>
            </div>

            <div className="mt-7">
              <span>Make a choice:</span>
              <div className="text-md mt-2">
                <form className="flex flex-col space-y-3">
                  {options &&
                    options.map((option, idx) => (
                      <div key={idx}>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              value={option}
                              onChange={handleVoteOptionChange}
                              className="mr-2 "
                              checked={selectedVoteOption === option}
                            />
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </label>
                        </div>
                      </div>
                    ))}
                </form>

                <div className="flex space-x-6 mt-7">
                  <button
                    onClick={handleVotePollSubmit}
                    className="px-4 py-2 rounded-md button is-transparent bg-indigo-500"
                  >
                    Vote
                  </button>
                  {isModalOpen && (
                    <VotePopup
                      onClose={() => setIsModalOpen(false)}
                      onShowResults={handleShowResults}
                    />
                  )}
                  <button
                    onClick={handleShowResults}
                    className="bg-[#FFFFFF0D] px-4 py-2 rounded-md border-2 border-[#374153]"
                  >
                    Show results
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotePoll;
