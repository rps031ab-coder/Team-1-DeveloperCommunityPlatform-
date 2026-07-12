const User = require("../models/User");
const bcrypt = require("bcrypt");
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

module.exports = {
    registerUser,
};
