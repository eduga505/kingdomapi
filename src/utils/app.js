import express from "express";
import users from "../routes/api.routes.js";
// var bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", users);

app.use((req, res, next) => {
  res.status(400).json({ message: "Not found" });
});

export default app;