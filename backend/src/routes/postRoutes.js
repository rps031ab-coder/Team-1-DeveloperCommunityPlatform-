const express = require("express");
const router = express.Router();
const {

    getAllPosts,

    getPostById

} = require("../controllers/postController");
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);
module.exports = router;
