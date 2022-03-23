if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// server configurations....
app.listen(process.env.PORT || 3000, () => {
  console.log(`listening in ${app.settings.env} mode`);
});
