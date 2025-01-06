const express = require("express");
const router = express.Router();
const {
  createPoll,
  getPollDetails,
  getAllPolls,
  pollById,
} = require("../controllers/pollController");
// const authenticateUser = require("../middleware/authMiddleware");

router.post("/create-poll",  createPoll);
router.get("/poll-details/:id", getPollDetails);
router.get("/get-polls/:id", getAllPolls);
router.get("/polls/:id", pollById);

module.exports = router;
