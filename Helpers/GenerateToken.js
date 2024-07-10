const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const tokenSign = (user) => {
     return jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
            JWT_SECRET,
        {
            expiresIn: "2h",
        }
    )
}

const verifyToken = async (token) => {
    try{
        return jwt.verify(token, JWT_SECRET)
    }catch(e){
        return null
    }
}

module.exports = {tokenSign, verifyToken}