const path = require("path");
const express = require("express");
const hbs = require("hbs");

//Files
const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast.js");

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
    name: "Mahmoud",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Enter Address",
    });
  }
  geoCode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        res.send({ error });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          res.send({
            error,
          });
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You Must Provide A Search Term",
    });
  }

  // console.log(req.query.search);

  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("page_404", {
    title: "404",
    name: "Mahmoud",
    MSG: "Can't Find",
    name: "Mahmoud",
  });
});

//Last
app.get("*", (req, res) => {
  res.render("page_404", {
    MSG: "Can't Find This Page",
    name: "Mahmoud",
  });
});
//Port
app.listen(3000, () => {
  console.log("Server Started");
});
