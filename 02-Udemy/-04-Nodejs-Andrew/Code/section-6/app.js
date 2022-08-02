const process = require("process");

const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast.js");

// 39
const address = process.argv[2];

if (!address) {
  console.log("Enter A Location...");
} else {
  geoCode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
