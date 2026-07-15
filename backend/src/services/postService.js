const AppError = require("../errors/AppError");
const Post = require("../models/Post");
const User = require("../models/User");

const getAllPosts = async (author) => {
    const query = author ? { author } : {};

    return await Post.find(query);
};

const getPostById = async (id) => {
    const post = await Post.findById(id);

    if (!post) {
        throw new AppError("Post not found", 404);
    }

    return post;
};

const createPost = async (postData) => {
    return await Post.create({
        title: postData.title,
        content: postData.content,
        author: postData.author,
        tags: postData.tags,
    });
};

const updatePost = async (id, postData, userId) => {
    const post = await Post.findById(id);

    if (!post) {
        throw new AppError("Post not found", 404);
    }

    if (post.author.toString() !== userId) {
        throw new AppError(
            "You are not authorized to update this post",
            403
        );
    }

    return await Post.findByIdAndUpdate(
        id,
        {
            ...postData,
            isEdited: true,
        },
        {
            new: true,
            runValidators: true,
        }
    );
};

const deletePost = async (id, userId) => {
    const post = await Post.findById(id);

    if (!post) {
        throw new AppError("Post not found", 404);
    }

    if (post.author.toString() !== userId) {
        throw new AppError(
            "You are not authorized to delete this post",
            403
        );
    }

    return await Post.findByIdAndDelete(id);
};

const likePost = async (postId, userId) => {
    const post = await Post.findById(postId);

    if (!post) {
        throw new AppError("Post not found", 404);
    }

    const user = await User.findById(userId);

    if (!user) {
        throw new AppError("User not found", 404);
    }

    if (post.likes.some((id) => id.equals(userId))) {
        throw new AppError("Post already liked", 409);
    }

    post.likes.push(userId);
    user.likedPosts.push(postId);

    await post.save();
    await user.save();

    return post;
};

const unlikePost = async (postId, userId) => {
    const post = await Post.findById(postId);

    if (!post) {
        throw new AppError("Post not found", 404);
    }

    const user = await User.findById(userId);

    if (!user) {
        throw new AppError("User not found", 404);
    }

    if (!post.likes.some((id) => id.equals(userId))) {
        throw new AppError("Post is not liked yet", 409);
    }

    post.likes.pull(userId);
    user.likedPosts.pull(postId);

    await post.save();
    await user.save();

    return post;
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    likePost,
    unlikePost,
};
