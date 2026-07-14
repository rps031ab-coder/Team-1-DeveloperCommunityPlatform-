const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const {
    deleteComment,
} = require("../controllers/commentController");

const router = express.Router();

router.delete("/:commentId", authMiddleware, deleteComment);

module.exports = router;
