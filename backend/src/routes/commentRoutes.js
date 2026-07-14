const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const {
    deleteComment,
    updateComment
} = require("../controllers/commentController");

const router = express.Router();

router.delete("/:commentId", authMiddleware, deleteComment);
router.put("/:commentId", authMiddleware, updateComment);

module.exports = router;
