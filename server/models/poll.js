const mongoose = require("mongoose");

//Stores information about each poll and details about the poll creator
const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  votes: {
    type: [Number],
    default: [],
  },
  expiration: {
    type: String,
    required: true,
  },
  createdBy: {
    //If the user is logged in, store their user ID otherwise generate uuid and store in local storage
    type: String,
    required: true,
  },
  createdAt: {
    //Timestamp of when the poll was created
    type: Date,
    default: Date.now,
  },
  voters: {
    //An array to track IDs of users (or temporary session IDs) who have voted to prevent multiple voting
    type: [String],
    default: [],
  },
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
