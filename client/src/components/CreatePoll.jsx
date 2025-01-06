import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast } from "react-toastify";

const CreatePoll = ({ data }) => {
  const [descriptionState, setDescriptionState] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    options: ["", ""], // Initial state with two empty options
    expiration: "day1",
  });

  // Function to handle adding a new option
  const addOption = () => {
    setFormData({
      ...formData,
      options: [...formData.options, ""], // Add a new empty option
    });
  };

  // Function to handle input changes for options and title
  const handleChange = (value, index = null, name = null) => {
    // Handle options
    if (name === "options") {
      const newOptions = [...formData.options];
      newOptions[index] = value;
      setFormData({
        ...formData,
        options: newOptions,
      });

      let namesOfData = data?.filter((item) => item.name.includes(value));
      if (namesOfData.length > 0 && value !== "") {
        setSuggestions(namesOfData);
        setActiveSuggestionIndex(index);
      } else {
        setSuggestions([]);
      }
    }
    // Handle other fields (title, expiration)
    else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Function to remove an option
  const removeOption = (index) => {
    const newOptions = formData.options.filter((_, i) => i !== index); // Remove the option at the given index
    setFormData({
      ...formData,
      options: newOptions,
    });
  };

  const handleSuggestionClick = (suggestion) => {
    const newOptions = [...formData.options];
    newOptions[activeSuggestionIndex] = suggestion.name;
    setFormData({
      ...formData,
      options: newOptions,
    });

    setSuggestions([]);
    setActiveSuggestionIndex(null);
  };

  const handleCreatePoll = async (e) => {
    e.preventDefault();
    console.log(
      "Poll data from frontend, before sending to server: ",
      formData
    );
    const token = localStorage.getItem("authToken");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/a/create-poll",
        formData,
        // {
        //   headers: { Authorization: `Bearer ${token}` },
        // }
      );
      console.log("create poll res: ", res);

      setFormData({
        title: "",
        description: "",
        options: ["", ""],
        expiration: "day1",
      });

      const nonLoggedUserId = res?.data?.data?._id;
      // localStorage.setItem("userId", nonLoggedUserId);
      console.log("nonLoggedUserId: ", nonLoggedUserId);
      toast.success("Poll created successfully", {
        position: "top-right",
      });

      navigate(`/vote-poll/${nonLoggedUserId}`);
    } catch (err) {
      console.error("create poll error: ", err);
    }
  };

  const descriptionOpen = () => {
    setDescriptionState(!descriptionState);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gray-900 text-white max-w-screen-2xl mx-auto">
        <Navbar />
        <div className="h-full flex pt-24 lg:pt-0 lg:mt-5 items-center flex-col bg-gray-900 text-white px-7 md:px-0">
          <div className="pb-9">
            <h1 className="text-center text-3xl font-bold mb-2">
              Create a Poll
            </h1>
            <p className="text-sm text-gray-500 font-semibold">
              Complete the below fields to create your poll.
            </p>
          </div>
          <div className="poll-main border-2 border-gray-700 bg-gray-800 w-full md:w-2/4 p-6 rounded-md text-[#DBDBDB]">
            <div className="poll-sub">
              <div>
                <p className="text-sm mb-1">Title</p>
                <input
                  type="text"
                  placeholder="Type your question here"
                  name="title"
                  value={formData.title}
                  onChange={(e) => handleChange(e.target.value, null, "title")}
                  className="focus:border-indigo-500 focus:ring-0 placeholder-gray-400 focus:outline-none border-2 p-2 w-full rounded-md bg-gray-800 border-gray-700"
                />
              </div>

              <div className="mt-3">
                {!descriptionState ? (
                  <button className="text-sm" onClick={descriptionOpen}>
                    + Add description
                  </button>
                ) : (
                  ""
                )}

                {descriptionState ? (
                  <div className="relative">
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={(e) =>
                        handleChange(e.target.value, null, "description")
                      }
                      rows="4"
                      cols="10"
                      className="focus:border-indigo-500 placeholder-gray-400 focus:ring-0 focus:outline-none w-full p-2 border-2 bg-gray-800 border-gray-700 rounded-md"
                    ></textarea>
                    <button
                      className="absolute -bottom-4 right-0 text-sm"
                      onClick={descriptionOpen}
                    >
                      Hide description
                    </button>
                  </div>
                ) : (
                  ""
                )}

                <div className="options mt-6">
                  <p className="text-sm">Answer Options</p>
                  {formData?.options?.map((option, index) => (
                    <div key={index} className="flex relative">
                      <input
                        type="text"
                        name="options"
                        placeholder={`Option ${index + 1}`}
                        className="border-2 placeholder-gray-400 p-2 w-full my-2 rounded-md bg-gray-800 border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none"
                        value={option}
                        onChange={(e) =>
                          handleChange(e.target.value, index, "options")
                        }
                      />
                      <button
                        className="absolute top-5 right-4 text-gray-400"
                        onClick={() => removeOption(index)}
                      >
                        <RxCross1 />
                      </button>
                    </div>
                  ))}

                  {suggestions.length > 0 && activeSuggestionIndex !== null && (
                    <div className="w-64 h-36 overflow-auto relative -top-16 left-0 py-3 px-2 bg-indigo-400 rounded-md">
                      <ul>
                        {suggestions?.map((suggestion, suggestionIndex) => (
                          <li
                            key={suggestionIndex}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="cursor-pointer"
                          >
                            {suggestion.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <button
                      className="flex items-center justify-center button is-transparent bg-indigo-500 p-2 rounded-md text-sm"
                      onClick={addOption}
                    >
                      <IoAdd /> Add Options
                    </button>
                  </div>

                  <div className="mt-6">
                    <span>Expiration of poll </span>
                    <select
                      className="w-20 ml-1 button is-transparent bg-indigo-500 p-2 rounded-md text-sm cursor-pointer"
                      name="expiration"
                      value={formData.expiration}
                      onChange={(e) =>
                        handleChange(e.target.value, null, "expiration")
                      }
                    >
                      <option value="day1">1 Day</option>
                      <option value="day2">2 Days</option>
                      <option value="day3">3 Days</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="mt-6 button is-transparent bg-indigo-500 p-2 rounded-md text-sm w-full"
                      onClick={(e) => handleCreatePoll(e)}
                    >
                      Create poll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreatePoll;
