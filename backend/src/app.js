const express = require("express");

const app = express();

const postRoutes = require("./routes/postRoutes");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const timeMiddleware = require("./middlewares/timeMiddleware");
app.use(loggerMiddleware);
app.use(timeMiddleware);
app.use(express.json());

app.use("/posts", postRoutes);

module.exports = app;
