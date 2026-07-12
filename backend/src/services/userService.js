const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = 10;
const registerUser = async (userData) => {
    const { username, email, password } = userData;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    return newUser;
};

async function loginUser(email, password) {
    
    const user = await User.findOne({ email });

    
    if (!user) {
        throw new Error("Invalid email or password");
    }


    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }
    const token = jwt.sign(
    {
        userId: user._id,
        email: user.email,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXPIRES_IN,
    }
);

    return {
    user,
    token,
    };
}

module.exports = {
    registerUser,
    loginUser
};
