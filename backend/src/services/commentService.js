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

const deleteComment = async (commentId, userId) => {

    // 1. Find the comment
    const comment = await Comment.findById(commentId);

    if (!comment) {
        throw new Error("Comment not found");
    }

    // 2. Check ownership
    if (comment.author.toString() !== userId) {
        throw new Error("You are not authorized to delete this comment");
    }

    // 3. Delete the comment
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    // 4. Find the parent post
    const post = await Post.findById(deletedComment.post);

    // 5. Decrement comments count
    post.commentsCount--;

    // 6. Save the updated post
    await post.save();

    // 7. Return deleted comment
    return deletedComment;
};
module.exports = {
    createComment,
    getComments,
    deleteComment
};

