const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate a JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, "helloabcd", { expiresIn: '4h' });
};

// Register a new user
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Registering user with data:', { name, email, password });

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password directly in the controller
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user with the hashed password
        const user = await User.create({ name, email, password: hashedPassword });
        console.log('User created:', user);

        res.status(201).json({
            user: { id: user._id, name: user.name, email: user.email },
            token: generateToken(user),
        });

        console.log("User ka data:",res);
        
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login user
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            user: { id: user._id, name: user.name, email: user.email },
            token: generateToken(user),
        });
        console.log("User ka data:",res);

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
