const jwt = require("jsonwebtoken")
require("dotenv").config()
const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.secretKey, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
    })
    return token
}

module.exports = {
    generateTokenAndSetCookie
}