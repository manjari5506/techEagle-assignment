const { UserModel } = require("../models/userModel");
const { setToken } = require("../utils/token");
const bcrypt = require('bcrypt')


const signupUser = async (req, res) => {
    try {
        const { email, phone, name, address, password, userType } = req.body;
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new UserModel({
            name,
            email,
            phone,
            address,
            userType,
            password: hashedPassword
        });
        await newUser.save();
        if (newUser) {
            const token = setToken(newUser._id, res)
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
                address: newUser.address,
                userType: newUser.userType,
                token: token
            })
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log("Error in signupUser: ", error.message)
    }
}

const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = setToken(user._id, res)
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            userType: user.userType,
            token: token
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in loginUser: ', error.message)
    }
}

const logoutUser = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 1 })
        res.status(200).json({ message: "User logged out successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in logoutUser: ', error.message)
    }
}


module.exports = {
    signupUser,
    loginUser,
    logoutUser
}