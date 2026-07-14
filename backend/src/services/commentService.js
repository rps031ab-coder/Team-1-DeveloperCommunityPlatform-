const Comment = require("../models/Comment");
const Post = require("../models/Post");

const createComment = async (postId, userId, content) => {

    // 1. Check whether post exists
    const post = await Post.findById(postId);

    if (!post) {
        throw new Error("Post not found");
    }

    // 2. Create the comment
    const comment = await Comment.create({
        post: postId,
        author: userId,
        content,
    });

    // 3. Update comments count
    post.commentsCount++;

    // 4. Save updated post
    await post.save();

    // 5. Return created comment
    return comment;
};
const getComments = async (postId) => {

    // 1. Check if post exists
    const post = await Post.findById(postId);

    if (!post) {
        throw new Error("Post not found");
    }

    // 2. Fetch all comments
    const comments = await Comment.find({
        post: postId,
    })
        .populate("author", "username profileImage")
        .sort({
            createdAt: -1,
        });

    // 3. Return comments
    return comments;
};

module.exports = {
    createComment,
    getComments
};

