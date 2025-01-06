import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const VoteResults = () => {
  const [percentages, setPercentages] = useState([]);
  const location = useLocation();
  const pollDetails = location.state?.pollDetails; // Access pollDetails passed from VotePoll

  console.log("pollDetails in result comp: ", pollDetails);

  const calculateOptionPercentage = () => {
    const totalVotes = pollDetails?.votes.reduce(
      (sum, votes) => sum + votes,
      0
    );

    // Handle case where there are no votes
    if (totalVotes === 0) {
      setPercentages(pollDetails?.votes.map(() => 0)); // All percentages are 0
      return;
    }

    // Calculate percentages
    const optionPercentageArray = pollDetails?.votes.map(
      (votes) => (votes / totalVotes) * 100 // Convert to percentage and fix to 2 decimal places
    );
    setPercentages(optionPercentageArray); // Update state with the percentages
  };

  useEffect(() => {
    calculateOptionPercentage();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white max-w-screen-2xl mx-auto">
      <Navbar />

      <div className="w-full pt-24 flex justify-center items-center flex-col bg-gray-900 text-white">
        <div className="border-2 border-gray-700 bg-gray-800 md:w-2/5 p-6 rounded-md text-[#DBDBDB]">
          <h1 className="text-2xl font-semibold text-center mb-4">
            {pollDetails?.title.charAt(0).toUpperCase() +
              pollDetails?.title.slice(1)}
          </h1>

          {/* Iterate through options and display */}
          {pollDetails?.options.map((option, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-gray-400">
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </span>
                {/* Replace with actual percentage if available */}
                <span className="text-sm text-gray-400">
                  {percentages && percentages[index]
                    ? `${percentages[index].toFixed(2)}%`
                    : "0%"}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="h-4 bg-indigo-500 rounded-full"
                  style={{
                    width:
                      percentages && percentages[index]
                        ? `${percentages[index]}%`
                        : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoteResults;
