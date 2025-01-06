const express = require('express');
const voteData = require('../controllers/voteController');
const router = express.Router();


router.post("/:id", voteData);

module.exports = voteData;