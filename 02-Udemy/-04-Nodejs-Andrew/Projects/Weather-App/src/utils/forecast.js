const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=cd78191ee20058c24f128d8f18294596&query=" +
    latitude +
    "," + 
    longitude +
    "&units=m";

  request(
    {
      url,
      json: true,
    },
    (error, {body}) => {
      if (error) {
        callback("Unable to connect to weather service!", undefined);
      } else if (body.error) {
        callback("Unable to find loaction", undefined);
      } else {
        callback(
          undefined,
          "In " +
            body.location.name +
            " " +
            body.current.weather_descriptions[0] +
            " It is currently " +
            body.current.temperature +
            " degrees out."
        );
      }
    }
  );
};

module.exports = forecast;
