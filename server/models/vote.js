const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    pollId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Poll', // Reference to the Poll model for population
    },
    voterId: {
        type: String, // Reference to the User model
        required: true,
        ref: 'User', // Reference to the User model for population
    },
    option: {
        type: String, // The option selected by the voter
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Timestamp of when the vote was cast
    },
});
const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;