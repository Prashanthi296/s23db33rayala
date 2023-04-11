var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var cinemaRouter = require("./routes/cinema");
var boardRouter = require("./routes/board");
var selectorRouter = require("./routes/selector");
var resourceRouter = require('./routes/resource');
var app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const Cinema = require("./models/cinema");
// view engine setup
require("dotenv").config();
const connectionString = process.env.MONGO_CON;
mongoose = require("mongoose");
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
//Bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/cinema", cinemaRouter);
app.use("/users", usersRouter);
app.use("/board", boardRouter);
app.use("/selector", selectorRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


async function recreateDB() {
  // Delete everything
  await Cinema.deleteMany();
  let instance1 = new Cinema({
    cinema_Name: "ghost",
    cinema_genre: "horror",
    cinema_parts: 1,
  });
  instance1.save();
  instance1 = new Cinema({
    cinema_Name: "Cars",
    cinema_genre: "Cartoon",
    cinema_parts: 3,
  });
  instance1.save();
  instance1 = new Cinema({
    cinema_Name: "Spiderman",
    cinema_genre: "Action",
    cinema_parts: 4,
  });
  instance1.save();
  
}
let reseed = true;
if (reseed) {
  recreateDB();
}
module.exports = app;
