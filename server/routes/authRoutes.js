// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Example of a protected route
// router.get('/profile', protect, (req, res) => {
//     res.status(200).json({ user: req.user });
// });

module.exports = router;
