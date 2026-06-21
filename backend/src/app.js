const express = require("express");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(userRoutes);
app.use(postRoutes);
module.exports = app;
