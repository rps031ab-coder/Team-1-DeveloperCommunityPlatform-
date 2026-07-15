const asyncHandler = require("../utils/asyncHandler");
const postService = require("../services/postService");

/**
 * GET /posts
 */
const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await postService.getAllPosts(req.query);

    res.status(200).json(posts);
});

/**
 * GET /posts/:id
 */
const getPostById = asyncHandler(async (req, res) => {
    const post = await postService.getPostById(req.params.id);

    res.status(200).json(post);
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

    res.status(201).json(newPost);
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

    res.status(200).json(updatedPost);
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
        message: "Post deleted successfully",
        deletedPost,
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
        message: "Post liked successfully",
        post,
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
        message: "Post unliked successfully",
        post,
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
