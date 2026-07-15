const asyncHandler = require("../utils/asyncHandler");
const postService = require("../services/postService");

/**
 * GET /posts
 */
const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await postService.getAllPosts(req.query);

    res.status(200).json({
    success: true,
    message: "Posts fetched successfully",
    data: posts,
    });
});

/**
 * GET /posts/:id
 */
const getPostById = asyncHandler(async (req, res) => {
    const post = await postService.getPostById(req.params.id);

    res.status(200).json({
    success: true,
    message: "Post fetched successfully",
    data: post,
    });
});

/**
 * POST /posts
 */
const createPost = asyncHandler(async (req, res) => {
    const postData = {
        ...req.body,
        author: req.user.userId,
    };

    const newPost = await postService.createPost(postData);

    res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: newPost,
});
});

/**
 * PUT /posts/:id
 */
const updatePost = asyncHandler(async (req, res) => {
    const updatedPost = await postService.updatePost(
        req.params.id,
        req.body,
        req.user.userId
    );

    res.status(200).json({
    success: true,
    message: "Post updated successfully",
    data: updatedPost,
    });
});

/**
 * DELETE /posts/:id
 */
const deletePost = asyncHandler(async (req, res) => {
    const deletedPost = await postService.deletePost(
        req.params.id,
        req.user.userId
    );

    res.status(200).json({
    success: true,
    message: "Post deleted successfully",
    data: deletedPost,
    });
});

/**
 * POST /posts/:id/like
 */
const likePost = asyncHandler(async (req, res) => {
    const post = await postService.likePost(
        req.params.id,
        req.user.userId
    );

    res.status(200).json({
    success: true,
    message: "Post liked successfully",
    data: post,
    });
});

/**
 * DELETE /posts/:id/like
 */
const unlikePost = asyncHandler(async (req, res) => {
    const post = await postService.unlikePost(
        req.params.id,
        req.user.userId
    );

    res.status(200).json({
    success: true,
    message: "Post unliked successfully",
    data: post,
    });
});

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    likePost,
    unlikePost,
};
