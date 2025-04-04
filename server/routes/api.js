const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/dataController');

// Route to fetch data
router.get('/data', getData);

module.exports = router;
