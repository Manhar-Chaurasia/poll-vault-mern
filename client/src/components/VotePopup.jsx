import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";

const VotePopup = ({ onClose, onShowResults }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative border-2 border-gray-700 bg-gray-800 w-11/12 sm:w-2/3 md:w-1/3 rounded-lg shadow-lg p-6">
        <button onClick={onClose} className="absolute top-3 right-3">
          &#10005;
        </button>
        <div className="flex flex-col items-center">
          <span className="text-2xl mb-1 bg-green-100 text-green-600 rounded-full p-3">
            <IoCheckmark />
          </span>
          <h2 className="text-2xl font-semibold mb-1">Vote successful!</h2>
          <p className="text-sm text-gray-500">
            Thank you for participating in this poll. Your vote has been
            counted.
          </p>
        </div>
        <div className="flex justify-between mt-5 space-x-5">
          <button
            onClick={onShowResults}
            className="w-1/2 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 flex justify-center items-center space-x-2"
          >
            <IoIosStats />
            <span>Results</span>
          </button>
          <button className="w-1/2 py-2 rounded-md bg-gray-700 hover:bg-gray-600 flex justify-center items-center space-x-2">
            <CiShare2 />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotePopup;
