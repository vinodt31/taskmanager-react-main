const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const PORT = process.env.PORT || 5000;
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [process.env.ALLOW_URL],
  })
);

app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(PORT);
