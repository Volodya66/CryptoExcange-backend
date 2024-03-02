// 4gMnWNU5cPGlQHo8
// mongodb+srv://CryptoMan:4gMnWNU5cPGlQHo8@cluster0.nyhpglx.mongodb.net/users_reader

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

// const authRouter = require("");
// const usersRouter = require("");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// app.use("/api/auth", authRouter);
// app.use("/api/crypto", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
