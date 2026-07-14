const commentService = require("../services/commentService");

const createComment = async (req, res) => {
    try {

        const postId = req.params.id;
        const userId = req.user.userId;
        const { content } = req.body;

        const comment = await commentService.createComment(
            postId,
            userId,
            content
        );

        return res.status(201).json({
            message: "Comment added successfully",
            comment,
        });

    } catch (error) {

        return res.status(400).json({
            message: error.message,
        });

    }
};

const getComments = async (req, res) => {
    try {

        const postId = req.params.id;

        const comments = await commentService.getComments(postId);

        return res.status(200).json({
            comments,
        });

    } catch (error) {

        return res.status(400).json({
            message: error.message,
        });

    }
};

const deleteComment = async (req, res) => {
    try {
        const commentId = req.params.commentId;
        const userId = req.user.userId;

        const comment = await commentService.deleteComment(
            commentId,
            userId
        );

        return res.status(200).json({
            message: "Comment deleted successfully",
            comment,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

const updateComment = async (req, res) => {
    try {
        const commentId = req.params.commentId;
        const userId = req.user.userId;
        const { content } = req.body;

        const comment = await commentService.updateComment(
            commentId,
            userId,
            content
        );

        return res.status(200).json({
            message: "Comment updated successfully",
            comment,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
module.exports = {
    createComment,
    getComments,
    deleteComment,
    updateComment
};
