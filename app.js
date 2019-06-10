const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const cookieParser = require("cookie-parser");
const fs = require("fs");
dotenv.config();

//
// ─── DB ─────────────────────────────────────────────────────────────────────────
//

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log("Db connected");
});

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

//
// ─── MIDDLEWARE ─────────────────────────────────────────────────────────────────
//

//morgan
app.use(morgan("dev"));
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cooke parser
app.use(cookieParser());
// express validator
app.use(expressValidator());

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

const auth = require("./nodeapi/routes/auth");
app.use("/", auth);

// express jwt (this is must be below route)
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      err: "Unauthorized!"
    });
  }
});

//
// ─── THIS IS SETUP FOR HEROKU DEPLOY ────────────────────────────────────────────
//

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//
// ─── SERVER CONNECT ─────────────────────────────────────────────────────────────
//

app.listen(port, () => {
  console.log(`Devxad start on port: ${port}`);
});
