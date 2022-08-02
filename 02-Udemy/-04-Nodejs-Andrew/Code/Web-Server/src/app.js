const path = require("path");
const express = require("express");
const hbs = require("hbs");

//39
const app = express();

//Define Path For Express confg
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// // Setup handlebars engine and views
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

//Domain Name
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Mahmoud",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Mahmoud Mohamed",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    helpText: "This Page Will Help You",
  });
});

//Port
app.listen(3000, () => {
  console.log("Server Started");
});
