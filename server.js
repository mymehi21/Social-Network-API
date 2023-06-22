//importing required pkgs and files
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
//setting up the environment variables
const PORT = process.env.PORT || 8080;
const app = express();
//using middlewareto parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use of routes defined in routes.js
app.use(routes);
//connecting mongodb and starting the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});
