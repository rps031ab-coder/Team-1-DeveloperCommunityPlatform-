const express = require("express");
const cors = require("cors");

const app = express();

const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const timeMiddleware = require("./middlewares/timeMiddleware");

app.use(cors());         
app.use(loggerMiddleware);
app.use(timeMiddleware);
app.use(express.json());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);
module.exports = app;
