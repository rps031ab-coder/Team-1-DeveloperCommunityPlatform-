const asyncHandler = require("../utils/asyncHandler");
const { registerUser, loginUser } = require("../services/userService");

/**
 * POST /users/register
 */
const register = asyncHandler(async (req, res) => {
    const user = await registerUser(req.body);

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage,
        },
    });
});

/**
 * POST /users/login
 */
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const { user, token } = await loginUser(email, password);

    res.status(200).json({
        message: "Login successful",
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage,
        },
    });
});

module.exports = {
    register,
    login,
};
