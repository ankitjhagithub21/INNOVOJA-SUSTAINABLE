const User = require("../models/user");
const validator = require("email-validator");
const passwordValidator = require('password-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email is already registered. Please login."
            });
        }

        if (username.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Username should be greater than 3 characters."
            });
        }

        // Validate email
        if (!validator.validate(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email."
            });
        }

        // Validate password
        const schema = new passwordValidator();
        schema
            .is().min(8)
            .is().max(100)
            .has().uppercase()
            .has().lowercase()
            .has().symbols()
            .has().not().spaces();

        if (!schema.validate(password)) {
            return res.status(400).json({
                success: false,
                message: "Please choose a stronger password."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "Account created successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Wrong email or password."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Wrong email or password."
            });
        }

        const secretKey = process.env.JWT_SECRET;

        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };

        const options = {
            expiresIn: '1h'
        };

        const token = jwt.sign(payload, secretKey, options);

        res.cookie('token', token, {
            maxAge: 3600000,
            httpOnly: true,
            secure: true,
            sameSite:"none"
        });

        res.status(200).json({
            success: true,
            message: "Login successful.",
            user: payload
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized."
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const logout = async (req, res) => {
    try {
        res.cookie('token', '', {
            maxAge: 0
        });
        res.status(200).json({
            success: true,
            message: "Logout successful."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    register,
    login,
    getUser,
    logout
};
