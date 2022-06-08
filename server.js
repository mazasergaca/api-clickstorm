const express = require("express");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/api-users-router");

const app = express();

const db = `mongodb+srv://${process.env.NAME_USER}:${process.env.PASSWORD_USER}@cluster0.jysjo.mongodb.net/${process.env.NAME_BASE}?retryWrites=true&w=majority`;

mongoose
  .connect(db)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, (err) => {
  err ? console.error(err) : console.log(`listening port ${process.env.PORT}`);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
// app.use(cors());
// Add headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.use("/api/users/", usersRoutes);

app.use((err, _, res) => {
  res.status(500).json({ message: err.message });
});
