const User = require("../models/user");
const validator = require("email-validator");
const passwordValidator = require('password-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            })
        }
        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({
                success: false,
                message: "Please login."
            })
        }

        //validate email
        if (!validator.validate(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email."
            })
        }
        //password validator
        const schema = new passwordValidator();

        schema
            .is().min(8)                                    // Minimum length 8
            .is().max(100)                                  // Maximum length 100
            .has().uppercase()                              // Must have uppercase letters
            .has().lowercase()                              // Must have lowercase letters
            .has().symbols()
            .has().not().spaces()

        if (!schema.validate(password)) {
            return res.status(400).json({
                success: false,
                message: "Please choose strong password."
            })
        }



        //hash password

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(201).json({
            success: true,
            message: "Account Created."
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            })
        }
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            })
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) {
            return res.status(400).json({
                success: false,
                message: "Wrong email or password."
            })
        }

        const secretKey = process.env.JWT_SECRET;

    
        const payload = {
            _id: user._id,
            email:user.email,
            isAdmin:user.isAdmin
           
        };

        
        const options = {
            expiresIn: '1h'
        };

        const token = jwt.sign(payload,secretKey,options)

        res.cookie('token', token, {
            maxAge: 1 * 60 * 60 * 1000,
            httpOnly: true, 
            secure: true, 
            sameSite: 'none' 
        });

    

        res.status(200).json({
            success:true,
            message:"Login Successfull.",
            user:payload
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getUser = async (req, res) => {
    try {
        
        const user = await User.findById(req.user._id).select("-password");

        if(!user){
            return res.status(401).json({
                success:false,
                message:"Unauthorized."
            })
        }

        res.status(200).json({
            success:true,
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const logout = async (req, res) => {
    try {

        res.cookie('token','',{
            maxAge:0
        })
        res.status(200).json({
            success:true,
            message:"Logout successfull."
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    register,
    login,
    getUser,
    logout
}