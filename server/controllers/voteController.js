const Vote = require("../models/vote");
const Poll = require("../models/poll"); // Assuming you have a Poll model for tracking polls and voter info

// This is the function that handles voting logic
const voteData = async (req, res) => {
  const { pollId, voterId, option } = req.body;
  console.log("req.body in voteData fn: ", req.body);

  try {
    // Check if the poll exists and retrieve it
    const poll = await Poll.findById(pollId);
    console.log("The poll is: ", poll);

    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }

    // // Check if voter has already voted in this poll
    // if (poll.voters.includes(voterId)) {
    //   return res
    //     .status(400)
    //     .json({ message: "You have already voted in this poll" });
    // }

    // Ensure the votes array exists and matches options length
    if (!poll.votes || poll.votes.length !== poll.options.length) {
      poll.votes = Array(poll.options.length).fill(0);
    }

    // Update the vote count for the selected option
    const optionIndex = poll?.options.indexOf(option);
    if (optionIndex !== -1) {
      poll.votes[optionIndex] += 1; // Increment vote count for the selected option
    }

    // Create a new vote document and save it to the database
    const newVote = new Vote({
      pollId,
      voterId,
      option,
    });
    const savedVote = await newVote.save();
    console.log("SavedVote: ", savedVote);

    // Add the voter to the poll's voters array to prevent duplicate voting
    poll.voters.push(voterId);
    await poll.save();

    res.status(201).json({
      message: "Vote created successfully",
      data: savedVote,
    });
  } catch (err) {
    console.log("Error in vote submit: ", err);
    res.status(500).json({
      message: "Error creating vote",
      error: err.message,
    });
  }
};

module.exports = voteData;
