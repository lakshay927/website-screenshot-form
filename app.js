require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const users = require("./routes/form");

const app = express();
const port = 3002;
// middleware
app.use(express.static("./"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/node", (_req, _res) => _res.send("Hello"));
app.use("/api/users", users);

(() => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL)
    .then((db) => {
      console.log("connected to mongoDB...");
      app.listen(port, () =>
        console.log(`Express App listening on port ${port}!`)
      );
    })
    .catch((error) => {
      console.log(`[error], ${error}`);
      process.exit(1);
    });
})();
