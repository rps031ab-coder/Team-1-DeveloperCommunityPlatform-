const validatePostMiddleware = require("../middlewares/validatePostMiddleware");
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
} = require("../controllers/postController");

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.post("/", authMiddleware, validatePostMiddleware, createPost);

router.put("/:id", authMiddleware, validatePostMiddleware, updatePost);

router.delete("/:id", authMiddleware, deletePost);

// Likes Routes
router.post("/:id/like", authMiddleware, likePost);

router.delete("/:id/like", authMiddleware, unlikePost);

module.exports = router;
