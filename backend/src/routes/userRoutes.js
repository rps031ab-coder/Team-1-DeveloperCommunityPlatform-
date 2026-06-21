const express = require("express");

const router = express.Router();

function getAllUsers(req, res) {
    res.send("All Developers");
}

router.get("/users", getAllUsers);

module.exports = router;
