const validatePostMiddleware = require("../middlewares/validatePostMiddleware");
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/postController");

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.post("/", authMiddleware, validatePostMiddleware, createPost);
router.put("/:id",  GNU nano 7.2                                      postRoutes.js *
const validatePostMiddleware = require("../middlewares/validatePostMiddleware");
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/postController");

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.post("/", authMiddleware, validatePostMiddleware, createPost);
router.put("/:id", authMiddleware, validatePostMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);
module.exports = router;
