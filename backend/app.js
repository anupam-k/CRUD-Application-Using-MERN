require("dotenv").config();
const connectToDB = require("./config/db");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to Database
connectToDB();

app.use("/", userRoutes);

module.exports = app;
