const { v4: uuidv4 } = require("uuid");
const Poll = require("../models/poll");

const createPoll = async (req, res) => {
  const { title, options, expiration, createdBy, createdAt, voters } = req.body;
  const temporaryId = req.user ? req.user.id : uuidv4(); // Use user ID if logged in

  console.log("req.user in createPoll fn: ", req.user);
  console.log("generated uuid: ", uuidv4());
  console.log("temporaryId: ", temporaryId);

  try {
    const newPoll = new Poll({
      title,
      options,
      votes: [],
      expiration,
      createdBy: temporaryId,
      voters: [],
    });

    console.log("poll data before saving to server: ", newPoll);

    // Save the poll to the database
    const savedPoll = await newPoll.save();
    res.status(201).json({
      message: "Poll created successfully",
      data: savedPoll,
    });
  } catch (err) {
    console.error("Error creating poll: ", err);
    res.status(500).json({
      message: "Error creating poll",
      error: err.message,
    });
  }
};

const getPollDetails = async (req, res) => {
  try {
    const { id } = req.params;
    // const poll = await Poll.findOne({ createdBy: id }).sort({ _id: -1 }); // Find poll by UUID

    const poll = await Poll.findOne({ _id: id }); // Find poll by UUID

    console.log("poll: ", poll);

    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }
    console.log("after poll: ", poll);

    res.json(poll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPolls = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("userrrrr id in backend: ", id);

    const poll = await Poll.find({ createdBy: id });
    console.log("poll in getAllPolls: ", poll);

    if (!poll) {
      return res.status(400).json({ message: "No poll found" });
    }
    res.json(poll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const pollById = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.pollId);
    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }
    res.status(200).json(poll);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { createPoll, getPollDetails, getAllPolls, pollById };
