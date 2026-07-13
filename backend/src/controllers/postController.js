const postService = require("../services/postService");

/**
 * GET /posts
 */
const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts(req.query.author);

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch posts",
            error: error.message
        });
    }
};

/**
 * GET /posts/:id
 */
const getPostById = async (req, res) => {
    try {
        const post = await postService.getPostById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching post",
            error: error.message
        });
    }
};

/**
 * POST /posts
 */
const createPost = async (req, res) => {
    try {
        const postData = {
                 ...req.body,
                 author: req.user.userId,
        };

        const newPost = await postService.createPost(postData);
        return res.status(201).json(newPost);
        } 
        catch (error) {
        return res.status(500).json({
            message: "Error creating post",
            error: error.message
        });
    }
};

/**
 * PUT /posts/:id
 */
const updatePost = async (req, res) => {
    try {
        const updatedPost = await postService.updatePost(
            req.params.id,
            req.body,
            req.user.userId
        );

        if (!updatedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        return res.status(200).json(updatedPost);
        }
        catch (error) {
        return res.status(500).json({
            message: "Error updating post",
            error: error.message
        });
    }
};

/**
 * DELETE /posts/:id
 */
const deletePost = async (req,res) => {
    try {
        const deletedPost = await postService.deletePost(
            req.params.id,
            req.user.userId
        );

        if (!deletedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        return res.status(200).json({
            message: "Post deleted successfully",
            deletedPost
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error deleting post",
            error: error.message
        });
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
